
alarm[0] = 3

event_inherited()

text = "host"

net_buffer       = buffer_create(1024, buffer_grow, 1);
net_connections  = array_create(0);
net_listen       = -1;

NET_P2P_PORT = 7

poll_group = steam_networking_sockets_create_poll_group()

steam_networking_sockets_set_callback_connection_status_changed(function(data){
		show_debug_message(data)
		//{ conn : 649931901, old_state : 0, info : { addr_remote : "[::]:0", steam_id_remote : 76561198355986831, end_reason : 0, user_data : -1, flags : 2, end_debug : "", state : 1, connection_description : "#649931901 P2P steamid:76561198355986831 vport 7" }, _inst : { addr_remote : "[::]:0", steam_id_remote : 76561198355986831, end_reason : 0, user_data : -1, flags : 2, end_debug : "", state : 1, connection_description : "#649931901 P2P steamid:76561198355986831 vport 7" } }
		
		var conn = data.conn
		var old_state = data.old_state
		var state = data.info.state
		//data.__inst
		
		if(state == SteamNetworkingConnectionState.Connecting)
		{
			steam_networking_sockets_accept_connection(conn)
		}
		else
		if (state == SteamNetworkingConnectionState.Connected)
		{
		    array_push(net_connections, {conn: conn});
			steam_networking_sockets_set_connection_poll_group(conn, poll_group)
		    show_debug_message($"SteamNet: CONNECTED on conn {conn}");
		}
		else if (state == SteamNetworkingConnectionState.ClosedByPeer || state == SteamNetworkingConnectionState.ProblemDetectedLocally)
		{
		    show_debug_message($"SteamNet: connection closed / problem on {conn}");
		    for(var i = 0; i < array_length(net_connections); i++)
		    {
		        if(net_connections[i].conn == conn)
		        {
		            array_delete(net_connections, i, 1);
		            break;
		        }
		    }
		}
	})

net_listen = steam_networking_sockets_create_listen_socket_p2p(NET_P2P_PORT);
show_debug_message($"Host: listen socket = {net_listen}");
