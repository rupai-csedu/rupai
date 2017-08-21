/*start block */

Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
  }
};


Blockly.JavaScript['start'] = function(block) {
  
  var code = '';
  return code;
};


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
    this.setColour(colorsInt.Color);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//GS
Blockly.Python['color'] = function(block) {
  
  var code = Blockly.Python.quote_(block.getFieldValue('color_value')) || 'RED';
  return [code, Blockly.Python.ORDER_ATOMIC];
  
};
