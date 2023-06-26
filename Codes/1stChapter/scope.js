/**Scope is a important part of JavaScript. Its define where we can access and from where.
 * There are two type of scope :
        * Local Scope.
        * Global Scope.

* Uses of Scope:
    * Area of access a variabel and a function.
    * Every function create an new scope.
    * Laxical Scoping parent-child relation.
    * Once function can't use other function's variable.
 */

//Local Scope: A variable inside can be used inside that function only where decleared.

function localScope() {
    var loaclVariable = ("I'm a function inside function");
    console.log(loaclVariable);
}
localScope();
//console.log(loaclVariable);//it will show error

var globalVar = "I'm a global variable";

function globalFunc() {
    console.log("Inside a Function : "+globalVar);
}

globalFunc();