
var buff = buffer_create(128,buffer_fixed,1)
buffer_write(buff,buffer_string,"Hello World")
steam_net_messages_send(321321321,0,buff)
buffer_delete(buff)

