Blockly.Blocks['show_text'] = {
  init: function() {
    this.appendValueInput("show_text_input")
        .setCheck("String")
        .appendField(MSG.block.displayText);
    this.appendValueInput("show_text_row")
        .setCheck("Number")
        .appendField(MSG.block.row);
    this.appendValueInput("show_text_column")
        .setCheck("Number")
        .appendField(MSG.block.col);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Display);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['display_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.displayClear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Display);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['display_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.displayLine);
    this.appendValueInput("line_x0")
        .setCheck("Number")
        .appendField(MSG.block.from)
        .appendField("           x");
    this.appendValueInput("line_y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("line_x1")
        .setCheck("Number")
        .appendField(MSG.block.to)
        .appendField("               x");
    this.appendValueInput("line_y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Display);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['display_rectangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.displayRectangle);
    this.appendValueInput("rect_x0")
        .setCheck("Number")
        .appendField(MSG.block.from)
        .appendField("              x");
    this.appendValueInput("rect_y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("rect_x1")
        .setCheck("Number")
        .appendField(MSG.block.to)
        .appendField("                  x");
    this.appendValueInput("rect_y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("rect_fill")
        .setCheck("Boolean")
        .appendField(MSG.block.displayRectangleFill);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Display);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



Blockly.Blocks['display_ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.displayEllipse);
    this.appendValueInput("ep_x0")
        .setCheck("Number")
        .appendField(MSG.block.from)
        .appendField("              x");
    this.appendValueInput("ep_y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("ep_x1")
        .setCheck("Number")
        .appendField(MSG.block.to)
        .appendField("                  x");
    this.appendValueInput("ep_y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("ep_fill")
        .setCheck("Boolean")
        .appendField(MSG.block.displayEllipseFill);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Display);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['display_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.displayPoint);
    this.appendValueInput("point_x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("point_y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Display);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
