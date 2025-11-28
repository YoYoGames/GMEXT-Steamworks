
var buff = buffer_create(128,buffer_fixed,1)
buffer_write(buff,buffer_string,"Hello World")
show_debug_message(steam_net_messages_send(76561198355986831,0,buff))
buffer_delete(buff)

