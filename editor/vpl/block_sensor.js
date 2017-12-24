Blockly.Blocks['sensor_get_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.sensorDistance);
    this.setOutput(true, "Number");
    this.setColour(colorsInt.Sensors);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_is_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.sensorObstacle);
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensors);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_on_track'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.sensorTrack);
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensors);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_left_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.sensorLeft);
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensors);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_right_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.sensorRight);
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensors);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_centre_white'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(MSG.block.sensorCentre);
    this.setOutput(true, "Boolean");
    this.setColour(colorsInt.Sensors);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
