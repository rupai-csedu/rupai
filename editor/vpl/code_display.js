Blockly.Python['show_text'] = function(block) {
  var input = Blockly.Python.valueToCode(block, 'show_text_input', Blockly.Python.ORDER_ATOMIC);
  var column = Blockly.Python.valueToCode(block, 'show_text_column', Blockly.Python.ORDER_ATOMIC);
  var row = Blockly.Python.valueToCode(block, 'show_text_row', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'text('+input+','+row+','+column+')\n';
  
  return code;
};

Blockly.Python['display_clear'] = function(block) {
  
  var code = 'clear()\n';
  return code;
};


Blockly.Python['display_line'] = function(block) {
  var value_line_x0 = Blockly.Python.valueToCode(block, 'line_x0', Blockly.Python.ORDER_ATOMIC);
  var value_line_y0 = Blockly.Python.valueToCode(block, 'line_y0', Blockly.Python.ORDER_ATOMIC);
  var value_line_x1 = Blockly.Python.valueToCode(block, 'line_x1', Blockly.Python.ORDER_ATOMIC);
  var value_line_y2 = Blockly.Python.valueToCode(block, 'line_y1', Blockly.Python.ORDER_ATOMIC);

  var code = 'line('+value_line_x0+','+value_line_y0+','+value_line_x1+','+value_line_y2+')\n';

  return code;
};


Blockly.Python['display_rectangle'] = function(block) {
  var value_x0 = Blockly.Python.valueToCode(block, 'rect_x0', Blockly.Python.ORDER_ATOMIC);
  var value_y0 = Blockly.Python.valueToCode(block, 'rect_y0', Blockly.Python.ORDER_ATOMIC);
  var value_x1 = Blockly.Python.valueToCode(block, 'rect_x1', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'rect_y1', Blockly.Python.ORDER_ATOMIC);
  var value_fill = Blockly.Python.valueToCode(block, 'rect_fill', Blockly.Python.ORDER_ATOMIC);

  var code = 'rectangle('+value_x0+','+value_y0+','+value_x1+','+value_y2+','+value_fill+')\n';

  return code;
};


Blockly.Python['display_ellipse'] = function(block) {
  var value_x0 = Blockly.Python.valueToCode(block, 'ep_x0', Blockly.Python.ORDER_ATOMIC);
  var value_y0 = Blockly.Python.valueToCode(block, 'ep_y0', Blockly.Python.ORDER_ATOMIC);
  var value_x1 = Blockly.Python.valueToCode(block, 'ep_x1', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'ep_y1', Blockly.Python.ORDER_ATOMIC);
  var value_fill = Blockly.Python.valueToCode(block, 'ep_fill', Blockly.Python.ORDER_ATOMIC);

  var code = 'ellipse('+value_x0+','+value_y0+','+value_x1+','+value_y2+','+value_fill+')\n';

  return code;
};


Blockly.Python['display_point'] = function(block) {
  var value_point_x = Blockly.Python.valueToCode(block, 'point_x', Blockly.Python.ORDER_ATOMIC);
  var value_point_y = Blockly.Python.valueToCode(block, 'point_y', Blockly.Python.ORDER_ATOMIC);

  var code = 'point('+value_point_x+','+value_point_y+')\n';
  return code;
};
