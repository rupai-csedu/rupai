Blockly.Blocks['event_voice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When voice input is")
        .appendField(new Blockly.FieldDropdown([["stop","voice_stop"], ["go left","voice_left"], ["go right","voice_right"]]), "voice_command");
    this.appendStatementInput("voice_statements")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Event);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['event_light_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When left is")
        .appendField(new Blockly.FieldDropdown([["white","left_white"], ["black","left_black"]]), "light_left_dropdown");
    this.appendStatementInput("light_left_statements")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Event);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['event_light_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When right is")
        .appendField(new Blockly.FieldDropdown([["white","right_white"], ["black","right_black"]]), "light_right_dropdown");
    this.appendStatementInput("light_right_statements")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Event);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['event_light_centre'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When centre is")
        .appendField(new Blockly.FieldDropdown([["white","centre_white"], ["black","centre_black"]]), "light_centre_dropdown");
    this.appendStatementInput("light_centre_statements")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Event);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
