Blockly.Python['control_while'] = function(block) {
  var value_while = Blockly.Python.valueToCode(block, 'while', Blockly.Python.ORDER_ATOMIC);
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['control_while_do_true'] = function(block) {
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['control_wait'] = function(block) {
  var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC) || '500';
  
  var code = 'wait('+value_wait+');\n';
  return code;
};

Blockly.Python['control_wait_until'] = function(block) {
  
  var value_wait='50';
  
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.Python.valueToCode(block, 'wait_condition', Blockly.Python.ORDER_LOGICAL_NOT) || 'False';
  
  var branch = 'wait('+value_wait+');';
  
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  if (until) {
    argument0 = 'not ' + argument0;
  }
  return 'while ' + argument0 + ':\n' + branch;
  
};
