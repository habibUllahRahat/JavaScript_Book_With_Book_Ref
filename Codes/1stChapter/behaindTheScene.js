/**
____________________
                   |                   
|                  |       |\       /--------\           /----------\          /-----------\             
|     CODE         |-------!  \     | PARSER | ========> | CONVERT  | ======>  | CODE RUNS |             
|                  |-------|   /    \--------/ ABSTRACT   \---------/ MACHINE  \-----------/
|                  |       |/                  SYNTAX                   CODE
-------------------                             TREE
*PARSER = >  Here system look for sytanx error and if the code has no syntax error it will create an Abstract Syntax Tree.
*CONVERT = > In this phase code convert into Machine Language and ready to execute.
*/

/**Then JavaScript engine start read the code
 * It create a Global Execution Context.
 * Whenever a function execute happens or function call happens then it create another execution  context.
 * In every execution context get there own "this" keyword. 
 */

/**JavaSript Engine create Global Execution Context when it execute code.
 * And in JavaScript default Global Execution Context is "window" object.
 */
var a =10;
console.log("value of a is : "+a);
console.log("value of window.a is : "+window.a);

/**New execution context : Whenever a function call or creation happen a new execution context is and this context has two phase:
 * Creation Phase.
 * Execution Phase.
 */