extends Area2D
func _on_body_enter( body ):
	var item= get_node("coin")
	item.queue_free()


