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
     =>Here variable object created.
     =>And in the "this" value is determined.
 * Execution Phase. 
     =>Code executed here line by line by maintaining excution context. And thats why function before it define.
 */ 
hellNo();
function hellNo() {
    console.log("Hell No");
}

/** Execution stack 
 * stack is a Data Stucture which is follow first in last serve method to serve data; and by maintaining this JavaScript execute Execution contexts.
# whenever a fuction is call a new execution context is created too; 
=> so if there is 3 function decleared then 4 execution context will be created.
=> it call each other from last cause its use Stack sturcture;
   like 
   1=Global Execution Context > Func1 > Func2 > Func3
* */

//Example

var namee = " Tipu Sultan";//global variable so all function can use

function first() {
    var welcome = 'Hello'
    second();
    console.log(welcome + namee);
}
function second() {
    var welcome2 = 'Hi !'
    third();
    console.log(welcome2 + namee);
}
function third() {
    var welcome3 = 'Hey !'
    console.log(welcome3 + namee);
}

first();

/**
 * After calling it call "second()" which inside "first()" without executing full function;
 * After calling it call "third()" which inside "second()" without executing full function;
 * then it will excute "third()" fully then it will return to "second()" fully then it will return to"first()" and execute fully;
 */