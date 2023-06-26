/** "this" is a special keyword in JavaScript. "this" keyword's value depends on is it used inside or outside of the function. There is no specific rules for rules but there are four rules is given below  
 * 1. The Global Context Rule.
 * 2. The Object Rule.
 * 3. The Clear Rule.
 * 4. The 'new' Keyword Rule.
 */

/**The Global Context rule:
 * 1. Outside of Global execution context's 'this' will always refer to the global object (in vanila js global object is called 'window' and in node.js it is known as 'global')
 
 * 2. It's will be same (rule 1) in "strict" and "non-strict" mode 
*/
console.log(this);// it will point the present global object(in vanila js global object is called 'window' and in node.js it is known as 'global')
 
console.log(this===window);// it will return true if both are same if not it will return false;

/** Object Rule:
 * 1. If we define some coustom object and if we use inside this object method if we use "this" it will pont to the object; 
 * 2. If it used in nested object then it will point to the parent object also
*/
function nameOnGlobalObj() {
    this.unname = "My Name is Rahat"
}

nameOnGlobalObj();

console.log(unname);//It show the value of "this" also can found in global object; this wont work on strict mode;

//Clear Rule
var nameA = "xyz";
var firstObj = {
    nameA : 'Habib Ullah Rahat',
    job :'Student',
    msg : function () {
        console.log('Hello my name is '+ this.nameA);
    }
}

firstObj.msg();

var nameB = "xyz";
var secondObj = {
    nameB : 'Rahat',
    job :'Student',
    nestedObj:{
        nameB:"Habib Ullah",
        msg : function () {
            console.log('Hello my name is '+ this.nameB);
        }
    }
}

secondObj.nestedObj.msg();

//clear  also applicable with call , apply(), bind()

