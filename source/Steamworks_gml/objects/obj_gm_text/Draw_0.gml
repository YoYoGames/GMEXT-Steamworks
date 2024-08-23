
// Apply basic text properties
draw_set_font(font)
draw_set_color(color)
draw_set_halign(halign)
draw_set_valign(valign)

// Draw base sprite (background)
if(sprite_exists(sprite_index)) {
	draw_self();
}

// Draw the text (forground)
draw_text(x, y, text)

