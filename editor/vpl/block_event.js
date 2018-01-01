Blockly.Blocks['event_voice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.eventVoice)
        .appendField(new Blockly.FieldDropdown([["go","voice_go"], ["left","voice_left"], ["right","voice_right"],["stop","voice_stop"]]), "voice_command");
    this.appendStatementInput("voice_statements")
        .setCheck(null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(colorsInt.Events);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['event_light_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.eventLeft)
        .appendField(new Blockly.FieldDropdown([[MSG.block.white,"light_left_white"], [MSG.block.black,"light_left_black"]]), "light_left_dropdown");
    this.appendStatementInput("light_left_statements")
        .setCheck(null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(colorsInt.Events);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['event_light_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.eventRight)
        .appendField(new Blockly.FieldDropdown([[MSG.block.white,"light_right_white"], [MSG.block.black,"light_right_black"]]), "light_right_dropdown");
    this.appendStatementInput("light_right_statements")
        .setCheck(null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(colorsInt.Events);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['event_light_centre'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.eventCentre)
        .appendField(new Blockly.FieldDropdown([[MSG.block.white,"light_centre_white"], [MSG.block.black,"light_centre_black"]]), "light_centre_dropdown");
    this.appendStatementInput("light_centre_statements")
        .setCheck(null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(colorsInt.Events);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['event_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.eventObstacle);
      this.appendStatementInput("obstacle_statements")
        .setCheck(null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(colorsInt.Events);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
