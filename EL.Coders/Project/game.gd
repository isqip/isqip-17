# script: game

extends Node

const GROUP_TAP  = "tap"
const GROUP_GROUNDS = "grounds"
const GROUP_DROP = "drop"

var score_best    = 0 setget _set_score_best
var score_current = 0 setget _set_score_current

signal score_best_changed
signal score_current_changed

func _ready():
	stage_manager.connect("stage_changed", self, "_on_stage_changed")
	pass

func _on_stage_changed():
	score_current = 0
	pass

func _set_score_best(new_value):
	if new_value > score_best:
		score_best = new_value
		emit_signal("score_best_changed")
	pass

func _set_score_current(new_value):
	score_current = new_value
	emit_signal("score_current_changed")
	pass

