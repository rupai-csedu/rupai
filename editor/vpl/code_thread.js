
Blockly.Python['execute_parallel'] = function(block) {

  var n = 1;
  var code = '', branchCode, conditionCode;

  do {

    /*
    try:
    x = thread.start_new_thread(event_check_loop, ())
except:
    print("Error: unable to start thread")

     */

    branchCode = Blockly.Python.statementToCode(block, 'Thread' + n) ||
        Blockly.Python.PASS;

    var branch= Blockly.Python.addLoopTrap(branchCode, block.id) || Blockly.Python.PASS;
    var thread_start_code= "try:\n"+"    thread.start_new_thread(thread_func"+n+", ())"+"\n";

    var xx="    print(\"Error: unable to start thread\")\n";
    thread_start_code+= "except:\n"+xx+"\n";


    code += "def thread_func"+n+"():\n"+branch+"\n"+thread_start_code;

    ++n;
  } while (block.getInput('Thread' + n));

  return code;
};
