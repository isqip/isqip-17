extends AnimatedSprite
const SPEED = 700
const JUMP_SPEED = 200
const MAX_JUMP_SPEED = 200
const MAX_JUMP_HEIGHT=200

var jump_position =0
var ground_position=0
var is_jumping=false
var is_falling=false
var is_running= false
# Whether idle
var is_idle = true


# Current animation name
var current_animation = "ball"

# Used to track if player is idle
var prev_pos

func _ready():
	set_fixed_process(true)
	ground_position = get_pos().y
	prev_pos = get_pos()
	
func _fixed_process(delta):
	# Check for idle
	if (prev_pos == get_pos()):
		is_idle = true
		is_jumping = false
		is_falling = false
		is_running = false
	else:
		is_idle = false
	# Save previous position for next process
	prev_pos = get_pos()
	# Check key input
	if (Input.is_key_pressed(KEY_RIGHT)):
		set_flip_h(false)
		set_pos(get_pos() + Vector2(delta * SPEED, 0))
		is_running = true
	if (Input.is_key_pressed(KEY_LEFT)):
		set_flip_h(true)
		set_pos(get_pos() - Vector2(delta * SPEED, 0))
		is_running = true
	if (Input.is_key_pressed(KEY_UP)):
		if (!is_jumping): # Initiate a jump cycle
			is_jumping = true
			
	if (is_jumping): # Jump logic here
		# Make sure jump height stays within limits
		jump_position = clamp(jump_position, 0, MAX_JUMP_HEIGHT)
		# Set jump position
		set_pos(Vector2(get_pos().x, ground_position - jump_position))
		# Trigger downward motion when we reach max height
		if (jump_position == MAX_JUMP_HEIGHT):
			is_falling = true
		# Cancel jump when we reach ground
		elif (jump_position == 0):
			is_jumping = false
			is_falling = false
		# Calculate height
		if (!is_falling): # Upward motion till we reach top
			jump_position  += (JUMP_SPEED * delta)
		else: # downward motion
			jump_position -= (JUMP_SPEED * delta)
	
	# Check and decide which animation to play
	# Play run if running and not jumping
	if (is_running && !is_jumping && current_animation != "ball"):
		get_node("anim").play("ball")
		current_animation = "ball"
	# Play jump if jumping
	if (is_jumping && current_animation != "ball"):
		get_node("anim").play("ball")
		current_animation = "ball"
	# Play idle if not running or jumping
	if (is_idle && current_animation != "idle"):
		get_node("anim").play("idle")
		current_animation = "idle"
	