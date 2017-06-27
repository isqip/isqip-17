extends Node

# class member variables go here, for example:
# var a = 2
# var b = "textvar"

func _ready():
	# Called every time the node is added to the scene.
	# Initialization here
	pass


func _on_death_body_enter( body ):
	print("Entered area")
	get_tree().change_scene("res://death.tscn")

func _on_win_body_enter( body ):
	print("Entered area")
	get_tree().change_scene("res://win.tscn")

func _on_coin1_body_enter( body ):
	get_node("coin1").hide()
