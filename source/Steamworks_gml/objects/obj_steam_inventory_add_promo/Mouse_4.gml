
var h = steam_inventory_add_promo_item(501, function(data)
{
    show_debug_message("AddPromoItem callback");
    show_debug_message(data);

    var status = steam_inventory_get_result_status(data.result_handle);
    show_debug_message("status=" + string(status));

    var items = steam_inventory_get_result_items(data.result_handle);
    show_debug_message(items);

    steam_inventory_destroy_result(data.result_handle);
});

show_debug_message("AddPromoItem handle=" + string(h));