Blockly.Python['sensor_get_distance'] = function(block) {
  
  var code = 'getDistanceFromSensor()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_is_obstacle'] = function(block) {
  
  var code = 'obstacleDetected()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_on_track'] = function(block) {
  
  var code = 'onTrack()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_left_white'] = function(block) {
  
  var code = 'leftIsWhite()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_right_white'] = function(block) {
  
  var code = 'rightIsWhite()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_centre_white'] = function(block) {
  
  var code = 'centreIsWhite()';
  
  return [code, Blockly.Python.ORDER_NONE];
};
