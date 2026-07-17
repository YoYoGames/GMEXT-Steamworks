show_debug_message("[EligiblePromo] Fetching eligible promo item defs");

var defs = steam_inventory_get_eligible_promo_item_definition_ids(128);

if (!is_undefined(defs)) {
	show_debug_message($"[EligiblePromo] Found {array_length(defs)} eligible promos: {defs}");
} else {
	show_debug_message("[EligiblePromo] No eligible promos returned");
}
