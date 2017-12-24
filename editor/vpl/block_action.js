Blockly.Blocks['action_test'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("Motor Test");
    this.appendValueInput("speed_left")
        .setCheck("Number")
        .appendField("speed_left");
	this.appendValueInput("speed_right")
        .setCheck("Number")
        .appendField("speed_right");
	this.appendValueInput("rot_left")
        .setCheck("Number")
        .appendField("rot_left");
	this.appendValueInput("rot_right")
        .setCheck("Number")
        .appendField("rot_right");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Action);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['action_go'] = {
  init: function() {
	this.appendDummyInput()
	.appendField(new Blockly.FieldDropdown([[MSG.block.goForwards,"forward"], [MSG.block.goBackwards,"backward"]]), "go_dropdown");
    this.appendValueInput("go_steps")
        .setCheck("Number")
        .appendField(MSG.block.goSteps);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Action);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['action_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.stop);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Action);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['action_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[MSG.block.turnLeft,"turn_left"], [MSG.block.turnRight,"turn_right"]]), "turn_dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Action);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['action_go_simple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[MSG.block.goForwards,"forward"], [MSG.block.goBackwards,"backward"]]), "go_simple_dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Action);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['action_say'] = {
  init: function() {
    this.appendValueInput("say_text")
        .setCheck("String")
        .appendField("say");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Action);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};




