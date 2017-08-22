// JS expects a mixin with all of the required methods
/*Blockly.Extensions.registerMutator('thread',
  MY_MUTATOR_MIXIN, null,
  // This last argument configures the editor UI on web
  ['thread_dummy']);
*/



Blockly.Blocks['execute_parallel'] = {
  
  init: function() {
    this.setHelpUrl('');
    this.setColour(colorsInt.Control);
    this.appendDummyInput()
        .appendField("execute in parallel");
    this.appendStatementInput('Thread1')
        .appendField("Task 1");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['thread_dummy'
                                         ]));

    this.setTooltip('');
    this.threadCount_ = 1;
  },


  mutationToDom: function() {
    if (this.threadCount_==1) {
      return null;
    }

    var container = document.createElement('mutation');
    if (this.threadCount_>0) {
      container.setAttribute('thread', this.threadCount_);
    }

    return container;
  },


   domToMutation: function(xmlElement) {
    this.threadCount_ = parseInt(xmlElement.getAttribute('thread'), 10) || 1;
    this.updateShape_();
  },


  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('thread_dummy');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;

    for (var i = 1; i < this.threadCount_; i++) {
      var threadBlock = workspace.newBlock('thread_dummy');
      threadBlock.initSvg();
      connection.connect(threadBlock.previousConnection);
      connection = threadBlock.nextConnection;
    }

    return containerBlock;
  },

  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.threadCount_ = 1;

    var valueConnections = [null];
    var statementConnections = [null];
    var threadStatementConnection = null;
    while (clauseBlock) {


        this.threadCount_++;
        threadStatementConnection = clauseBlock.statementConnection_;

        clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.threadCount_; i++) {
      Blockly.Mutator.reconnect(statementConnections[i], this, 'Thread' + i);
    }

  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'thread':

          var inputDo = this.getInput('Thread' + i);
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;

        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    // Delete everything.
    //if (this.getInput('ELSE')) {
     // this.removeInput('ELSE');
    //}threadCount_
    var i = 1;
    while (this.getInput('Thread' + i)) {
      this.removeInput('Thread' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.threadCount_; i++) {

      this.appendStatementInput('Thread'+i)
        .appendField("Task "+i);
    }
  }
};

Blockly.Blocks['thread_dummy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("task");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colorsInt.Control);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
