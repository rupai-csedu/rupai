/* color */
//BD
Blockly.Blocks['color'] = {
  
  init: function() {
    this.appendDummyInput()
        .appendField("Color   \"")
        .appendField(new Blockly.FieldTextInput("RED"), "color_value")
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//GS
Blockly.Python['color'] = function(block) {
  
  var code = Blockly.Python.quote_(block.getFieldValue('color_value')) || 'RED';
  return [code, Blockly.Python.ORDER_ATOMIC];
  
};
