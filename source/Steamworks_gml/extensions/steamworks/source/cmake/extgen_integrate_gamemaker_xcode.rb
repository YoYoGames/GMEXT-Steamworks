#!/usr/bin/env ruby
# frozen_string_literal: true

require "optparse"
require "pathname"
require "rbconfig"
require "xcodeproj"

puts "Ruby version: #{RUBY_VERSION}"
puts "Ruby executable: #{RbConfig.ruby}"
puts "xcodeproj gem version: #{Gem.loaded_specs["xcodeproj"]&.version}"
puts "xcodeproj gem path: #{Gem.loaded_specs["xcodeproj"]&.full_gem_path}"

def abort_msg(msg)
  $stderr.puts(msg)
  exit(2)
end

def clean_arg(s)
  return "" if s.nil?
  s = s.to_s.strip
  if (s.start_with?('"') && s.end_with?('"')) || (s.start_with?("'") && s.end_with?("'"))
    s = s[1..-2]
  end
  s.strip
end

def find_target_by_name(project, name)
  return nil if name.nil? || name.strip.empty?
  project.targets.find { |t| t.name == name }
end

def find_default_app_target(project)
  project.targets.find { |t| (t.product_type || "").include?("application") } || project.targets.first
end

def expand_against_gm_dir(gm_path, maybe_relative)
  File.expand_path(maybe_relative.to_s, File.dirname(gm_path))
end

# ---- args ----
args = {}
OptionParser.new do |o|
  o.banner = "Usage: integrate_subproject.rb --gm GM.xcodeproj --ext EXT.xcodeproj --ext-target NAME [--gm-target NAME]"
  o.on("--gm PATH", "Path to the GameMaker .xcodeproj") { |v| args[:gm] = v }
  o.on("--gm-target NAME", "GM target name (optional)") { |v| args[:gm_target] = v }
  o.on("--ext-project PATH", "Path to the extension .xcodeproj") { |v| args[:ext] = v }
  o.on("--ext-target NAME", "Extension target name (required)") { |v| args[:ext_target] = v }
end.parse!

gm_path  = File.expand_path(clean_arg(args[:gm]))
ext_path = File.expand_path(clean_arg(args[:ext]))
gm_target_name  = clean_arg(args[:gm_target])
ext_target_name = clean_arg(args[:ext_target])

abort_msg("Missing --gm")         if gm_path.empty?
abort_msg("Missing --ext-project") if ext_path.empty?
abort_msg("Missing --ext-target") if ext_target_name.empty?
abort_msg("GM .xcodeproj not found: #{gm_path}") unless File.exist?(gm_path)
abort_msg("Extension .xcodeproj not found: #{ext_path}") unless File.exist?(ext_path)

# Read ext project once to get target + product name + uuid
ext_proj = Xcodeproj::Project.open(ext_path)
ext_target = find_target_by_name(ext_proj, ext_target_name)
abort_msg("Extension target not found: #{ext_target_name}") unless ext_target
product_ref = ext_target.product_reference
abort_msg("Extension target has no product reference") unless product_ref
lib_name = product_ref.path.to_s

# -------------------------------------------------------------------
# PHASE 1: Add subproject reference + projectReferences (then save)
# -------------------------------------------------------------------
puts "\n=== PHASE 1: Add subproject + projectReferences ==="

edited = false
gm_proj = Xcodeproj::Project.open(gm_path)
root = gm_proj.root_object
main = root.main_group

# 1) Subproject PBXFileReference at root
subproj_ref = gm_proj.files.find do |f|
  f.isa == "PBXFileReference" &&
    f.last_known_file_type == "wrapper.pb-project" &&
    f.path &&
    expand_against_gm_dir(gm_path, f.path) == ext_path
end

unless subproj_ref
  subproj_ref = gm_proj.new(Xcodeproj::Project::Object::PBXFileReference)
  subproj_ref.name = File.basename(ext_path)
  subproj_ref.path = ext_path
  subproj_ref.source_tree = "<absolute>"
  subproj_ref.last_known_file_type = "wrapper.pb-project"
  main.children << subproj_ref
  puts "Added subproject PBXFileReference: #{ext_path}"
  edited = true
else
  puts "Subproject PBXFileReference already present"
end

if edited
  puts "PHASE 1 saved.\n"
  gm_proj.save

  pbxproj_path = File.join(gm_path, "project.pbxproj")

  puts "Waiting for Xcode to finish modifying project..."

  initial_mtime = File.mtime(pbxproj_path)

  loop do
    sleep 0.5
    current_mtime = File.mtime(pbxproj_path)

    break if current_mtime > initial_mtime
  end

  # Now wait until it stabilizes (no more changes for 1 second)
  stable_count = 0
  last_mtime = File.mtime(pbxproj_path)

  while stable_count < 3
    sleep 0.5
    current = File.mtime(pbxproj_path)

    if current == last_mtime
      stable_count += 1
    else
      stable_count = 0
      last_mtime = current
    end
  end

  puts "Xcode modifications finished."
else
  puts "PHASE 1 finished.\n"
end

# -------------------------------------------------------------------
# PHASE 2: Reopen GM project, create proxies, link lib, save
# -------------------------------------------------------------------
puts "\n=== PHASE 2: Create proxies + link #{lib_name} ==="

gm_proj = Xcodeproj::Project.open(gm_path)
root = gm_proj.root_object

gm_target =
  find_target_by_name(gm_proj, gm_target_name) ||
  find_default_app_target(gm_proj)
abort_msg("Could not find a GM target to patch") unless gm_target

# Re-find subproject_ref (reloaded objects)
subproj_ref = gm_proj.files.find do |f|
  f.isa == "PBXFileReference" &&
    f.last_known_file_type == "wrapper.pb-project" &&
    f.path &&
    expand_against_gm_dir(gm_path, f.path) == ext_path
end
abort_msg("Phase 2: subproject PBXFileReference missing") unless subproj_ref

# Re-find Products group from projectReferences
refs = root.project_references
entry = refs.find { |h| (h[:project_ref] || h["project_ref"]).uuid == subproj_ref.uuid }
abort_msg("Phase 2: projectReferences entry missing") unless entry

products_group = (entry[:product_group] || entry["product_group"])
abort_msg("Phase 2: Products group object missing") unless products_group

# 3) PBXContainerItemProxy (container_portal MUST be the PBXFileReference object)
container_proxy = gm_proj.objects.find do |obj|
  obj.isa == "PBXContainerItemProxy" &&
    obj.container_portal == subproj_ref.uuid &&
    obj.proxy_type == "2"
end

unless container_proxy
  container_proxy = gm_proj.new(Xcodeproj::Project::Object::PBXContainerItemProxy)
  container_proxy.container_portal = subproj_ref.uuid
  container_proxy.proxy_type = "2"
  container_proxy.remote_global_id_string = ext_target.uuid
  container_proxy.remote_info = ext_target.name
  puts "Created PBXContainerItemProxy"
else
  puts "PBXContainerItemProxy already present"
end

# 4) PBXReferenceProxy for the library
ref_proxy = gm_proj.objects.find do |obj|
  obj.isa == "PBXReferenceProxy" &&
    obj.path.to_s == lib_name &&
    obj.remote_ref == container_proxy
end

unless ref_proxy
  ref_proxy = gm_proj.new(Xcodeproj::Project::Object::PBXReferenceProxy)
  ref_proxy.file_type = "archive.ar"
  ref_proxy.path = lib_name
  ref_proxy.remote_ref = container_proxy
  ref_proxy.source_tree = "BUILT_PRODUCTS_DIR"
  puts "Created PBXReferenceProxy for #{lib_name}"
else
  puts "PBXReferenceProxy already present"
end

unless products_group.children.include?(ref_proxy)
  products_group.children << ref_proxy
  puts "Added #{lib_name} proxy to subproject Products group"
end

# 5) Link into Frameworks phase
frameworks_phase = gm_target.frameworks_build_phase
abort_msg("GM target '#{gm_target.name}' has no Frameworks build phase") unless frameworks_phase

already_linked = frameworks_phase.files.any? { |bf| bf.file_ref == ref_proxy }
unless already_linked
  frameworks_phase.add_file_reference(ref_proxy, true)
  puts "Linked #{lib_name} into #{gm_target.name} → Frameworks"
else
  puts "#{lib_name} already linked in Frameworks"
end

gm_proj.save
puts "PHASE 2 saved."
puts "OK: Integrated #{lib_name} via subproject #{File.basename(ext_path)} into target #{gm_target.name}"
