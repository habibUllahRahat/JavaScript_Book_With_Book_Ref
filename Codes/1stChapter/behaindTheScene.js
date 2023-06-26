/**
_________________                        
|                                  |                   
|                                  |          |\       /------------\                         /----------------\                     /------------------\             
|         CODE               -------!   \    | PARSER | ========> | CONVERT  | ======>  | CODE RUNS |             
|                                  |-------|   /     \------------/ ABSTRACT   \----------------/ MACHINE \------------------/
|                                  |          |/                             SYNTAX                                  CODE
----------------------------                                            TREE
*PARSER = >  Here system look for sytanx error and if the code has no syntax error it will create an Abstract Syntax Tree.
*CONVERT = > In this phase code convert into Machine Language and ready to execute.
*/

/**Then JavaScript engine start read the code
 * It create a Global Execution Context.
 * Whenever a function execute happens or function call happens then it create another execution  context.
 * In every execution context get there own "this" keyword. 
 */