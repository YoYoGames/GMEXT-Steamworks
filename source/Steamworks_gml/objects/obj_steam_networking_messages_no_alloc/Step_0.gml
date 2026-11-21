if (keyboard_check_pressed(ord("B"))) batch_mode = !batch_mode;
if (keyboard_check_pressed(ord("S"))) burst_send();
if (keyboard_check_pressed(ord("L"))) large_send();

if (batch_mode)
{
	receive_in_batches();
}
else
{
	receive_one_at_a_time();
}
