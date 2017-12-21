Blockly.Blocks['event_voice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When voice input is")
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
        .appendField("When left is")
        .appendField(new Blockly.FieldDropdown([["white","light_left_white"], ["black","light_left_black"]]), "light_left_dropdown");
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
        .appendField("When right is")
        .appendField(new Blockly.FieldDropdown([["white","light_right_white"], ["black","light_right_black"]]), "light_right_dropdown");
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
        .appendField("When centre is")
        .appendField(new Blockly.FieldDropdown([["white","light_centre_white"], ["black","light_centre_black"]]), "light_centre_dropdown");
    this.appendStatementInput("light_centre_statements")
        .setCheck(null);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setColour(colorsInt.Events);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
