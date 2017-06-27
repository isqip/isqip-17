extends Node

# class member variables go here, for example:
# var a = 2
# var b = "textvar"

func _ready():
	# Called every time the node is added to the scene.
	# Initialization here
	pass




func _on_win_body_enter( body ):
	print("Entered area")
	get_tree().change_scene("res://win.tscn")

func _on_coin_body_enter( body ):
	get_node("coins").hide()


func _on_coin1_body_enter( body ):
	get_node("coin1").hide()


func _on_coin2_body_enter( body ):
	get_node("coin2").hide()


func _on_coin3_body_enter( body ):
	get_node("coin3").hide()


func _on_coin4_body_enter( body ):
	get_node("coin4").hide()


func _on_coin5_body_enter( body ):
	get_node("coin5").hide()
# replace with function body


func _on_coin6_body_enter( body ):
	get_node("coin6").hide()
# replace with function body


func _on_coin7_body_enter( body ):
	get_node("coin7").hide()
# replace with function body


func _on_coin8_body_enter( body ):
	get_node("coin8").hide()


func _on_coin9_body_enter( body ):
	get_node("coin9").hide()



func _on_coin10_body_enter( body ):
	get_node("coin10").hide()



func _on_coin11_body_enter( body ):
	get_node("coin11").hide()



func _on_coin12_body_enter( body ):
	get_node("coin12").hide()

func _on_coin13_body_enter( body ):
	get_node("coin13").hide()


func _on_coin14_body_enter( body ):
	get_node("coin14").hide()


func _on_coin16_body_enter( body ):
	get_node("coin16").hide()


func _on_coin17_body_enter( body ):
	get_node("coin17").hide()


func _on_coin18_body_enter( body ):
	get_node("coin18").hide()



func _on_coin15_body_enter( body ):
	get_node("coin15").hide()

func _on_coin19_body_enter( body ):
	get_node("coin19").hide()


func _on_coin20_body_enter( body ):
	get_node("coin20").hide()

func _on_coin22_body_enter( body ):
	get_node("coin22").hide()


func _on_coin23_body_enter( body ):
	get_node("coin23").hide()


func _on_coin25_body_enter( body ):
	get_node("coin23").hide()


func _on_coin26_body_enter( body ):
	get_node("coin26").hide()


func _on_coin27_body_enter( body ):
	get_node("coin27").hide()


func _on_coin28_body_enter( body ):
	get_node("coin28").hide()


func _on_coin29_body_enter( body ):
	get_node("coin29").hide()


func _on_coin30_body_enter( body ):
	get_node("coin30").hide()


func _on_coin31_body_enter( body ):
	get_node("coin31").hide()


func _on_coin32_body_enter( body ):
	get_node("coin32").hide()


func _on_coin33_body_enter( body ):
	get_node("coin33").hide()


func _on_coin34_body_enter( body ):
	get_node("coin34").hide()


func _on_coin35_body_enter( body ):
	get_node("coin35").hide()



func _on_coin36_body_enter( body ):
	get_node("coin36").hide()


func _on_coin37_body_enter( body ):
	get_node("coin37").hide()


func _on_coin38_body_enter( body ):
	get_node("coin38").hide()


func _on_coin39_body_enter( body ):
	get_node("coin39").hide()


func _on_coin40_body_enter( body ):
	get_node("coin40").hide()


func _on_coin41_body_enter( body ):
	get_node("coin41").hide()


func _on_coin42_body_enter( body ):
	get_node("coin42").hide()


func _on_coin43_body_enter( body ):
	get_node("coin43").hide()


func _on_coin44_body_enter( body ):
	get_node("coin44").hide()


func _on_coin45_body_enter( body ):
	get_node("coin45").hide()


func _on_coin46_body_enter( body ):
	get_node("coin46").hide()


func _on_coin24_body_enter( body ):
	get_node("coin24").hide()

func _on_death_body_enter( body ):
	print("Entered area")
	get_tree().change_scene("res://death.tscn")
