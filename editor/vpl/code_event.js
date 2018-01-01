Blockly.Python['event_voice'] = function(block) {
  var dropdown = block.getFieldValue('voice_command');
  var branch = Blockly.Python.statementToCode(block, 'voice_statements');

  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

  var listener= 'add_event(\"'+dropdown+'\")'+'\n';
  var code = 'def '+dropdown+'('+'):'+'\n'+branch+'\n'+listener;
  return code;
};


Blockly.Python['event_light_left'] = function(block) {
  var dropdown = block.getFieldValue('light_left_dropdown');
  var branch = Blockly.Python.statementToCode(block, 'light_left_statements');

  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  
  var listener= 'add_event(\"'+dropdown+'\")'+'\n';
  var code = 'def '+dropdown+'('+'):'+'\n'+branch+'\n'+listener;
  return code;
};


Blockly.Python['event_light_right'] = function(block) {
  var dropdown = block.getFieldValue('light_right_dropdown');
  var branch = Blockly.Python.statementToCode(block, 'light_right_statements');

  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

  var listener= 'add_event(\"'+dropdown+'\")'+'\n';
  var code = 'def '+dropdown+'('+'):'+'\n'+branch+'\n'+listener;
  return code;
};

Blockly.Python['event_light_centre'] = function(block) {
  var dropdown = block.getFieldValue('light_centre_dropdown');
  var branch = Blockly.Python.statementToCode(block, 'light_centre_statements');

  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

  var listener= 'add_event(\"'+dropdown+'\")'+'\n';
  var code = 'def '+dropdown+'('+'):'+'\n'+branch+'\n'+listener;
  return code;
};


Blockly.Python['event_obstacle'] = function(block) {

  var branch = Blockly.Python.statementToCode(block, 'obstacle_statements');

  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

  var listener= 'add_event(\"'+'event_obstacle'+'\")'+'\n';
  var code = 'def '+'event_obstacle'+'('+'):'+'\n'+branch+'\n'+listener;
  return code;
};
