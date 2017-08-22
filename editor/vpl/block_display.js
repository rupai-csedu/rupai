Blockly.Blocks['show_text'] = {
  init: function() {
    this.appendValueInput("show_text_input")
        .setCheck("String")
        .appendField("show text");
    this.appendValueInput("show_text_row")
        .setCheck("Number")
        .appendField("in row");
    this.appendValueInput("show_text_column")
        .setCheck("Number")
        .appendField("in column");
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
        .appendField("clear display");
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
        .appendField("draw a line");
    this.appendValueInput("line_x0")
        .setCheck("Number")
        .appendField("from")
        .appendField("           x");
    this.appendValueInput("line_y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("line_x1")
        .setCheck("Number")
        .appendField("to")
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
        .appendField("draw rectangle");
    this.appendValueInput("rect_x0")
        .setCheck("Number")
        .appendField("from")
        .appendField("              x");
    this.appendValueInput("rect_y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("rect_x1")
        .setCheck("Number")
        .appendField("to")
        .appendField("                  x");
    this.appendValueInput("rect_y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("rect_fill")
        .setCheck("Boolean")
        .appendField("fill the rectangle");
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
        .appendField("draw ellipse");
    this.appendValueInput("ep_x0")
        .setCheck("Number")
        .appendField("from")
        .appendField("              x");
    this.appendValueInput("ep_y0")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("ep_x1")
        .setCheck("Number")
        .appendField("to")
        .appendField("                  x");
    this.appendValueInput("ep_y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("ep_fill")
        .setCheck("Boolean")
        .appendField("fill the ellipse");
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
        .appendField("draw point");
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
