extends Sprite

# script: drop
signal state_changed
func _ready():

	set_process_input(true)
	set_process_unhandled_input(true)
	set_fixed_process(true)
	
	add_to_group(Node2D.GROUP_DROP)
	connect("body_enter", self, "_on_body_enter")
	pass

func _fixed_process(delta):
	state.update(delta)
	pass

func _input(event):
	state.input(event)
	pass

func _unhandled_input(event):
	if state.has_method("unhandled_input"):
		state.unhandled_input(event)
	pass

func _on_body_enter(other_body):
	if state.has_method("on_body_enter"):
		state.on_body_enter(other_body)
		
func update(delta):
		pass
	
func input(event):
		pass
func exit():
		pass
 



func _on_tap__hide():
	pass # replace with function body
