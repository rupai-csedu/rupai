
//while
Blockly.Blocks['control_while'] = {
  init: function() {
    this.appendValueInput("while")
        .setCheck("Boolean")
        .appendField("while");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("    do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('while loop');
    this.setHelpUrl('');
  }
};

//while true

Blockly.Blocks['control_while_do_true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("while (TRUE)");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("     do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('while_do');
    this.setHelpUrl('');
  }
};


//wait

Blockly.Blocks['control_wait'] = {
  init: function() {
    this.appendValueInput("wait")
        .setCheck(null)
        .appendField("wait");
    this.appendDummyInput()
        .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//wait until

Blockly.Blocks['control_wait_until'] = {
  init: function() {
    this.appendValueInput("wait_condition")
        .setCheck("Boolean")
        .appendField("wait until");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('wait until (logic)');
    this.setHelpUrl('');
  }
};



