/**function in JS is a set of statements that performs a task or calculates a value.
 * There are two types of function in  JavaScript
     * Built in function: This function pre defiend in JavaScrpt documetion thats why its user can use this functions directly.
            console.log()
            prompt()
            ObjectName.call()
     * User defined function: This type of function can be defiend by user by using 
            "function(){
                #satement
                #expression
                 }"
*  Here we will discuss about User Defiend function.
 */

//Function Structure
/**
 * function funcName( ){
                #satement ;
                #expression ;
            }

*var funcName = function(){
            #Staement ;
            #Expression ;
        }

* function funcName(  parameters){
                #satement ;
                #expression ;
            }
We can use this type function by calling
* funcName();
* funcName(  parameters);
 */
function funcName( ){
   var m = 20;
   var n  = 10;
   var multiplied = m*n; //Expression
   console.log("Inside function Multiplied number : "+multiplied);//Statemetnt
}

funcName();

var funcName1 = function(){
    console.log("This is a message from inside of  function 1");
}
var  a = 20;
var  b = 33;

funcName1();

function funcName2( x , y /**Parameters */){
    var sum = x+y ; //Expression
    console.log("The 'a' & 'b' passed inside this function 2\n In this it will sum a & b \n sum is :  "+ sum+"\n");//Statemetnt
}

funcName2(a,b);

// We can return value or data from a function;

function funcName3( ){
    var m = 20;
    var n  = 10;
    var devided = m/n; //Expression
    return devided;
}

 var returnedValue = funcName3();

 console.log("This is a value returned from inside of  function 3 = "+returnedValue);

 //Argument passing inside a function

 //If we send premetive then,

 console.log("===================================================");
function changeValue(variable0) {
    console.log("Inside function before changing variable0 : " +variable0);
    variable0 = 20;
    console.log("Inside function after changing variable0 : " +variable0);
}
console.log("===================================================");
var variable0 = 10;
console.log("Outside function before changing variable0 : " +variable0);
changeValue(variable0);
console.log("Outside function after changing variable0 : " +variable0);
//we can see there the main copy of variable0 hasn't change cause in premetive when send an argument it send a copy of it not the refernce. So, the value of premetive data never got changed. 

//But if we pass Non-premetive value like Object and it wil send the reference and the main variable will changed lets see an example

function changeValue(anObj ) {
    console.log("Inside function before changing variable0 : " +anObj.variable1);
   anObj .variable1= 20;
    console.log("Inside function after changing variable0 : " +anObj.variable1);
}

var anObj ={
    variable1 : 33
}

changeValue(anObj.variable1);
console.log("===================================================");
console.log("Outside function before changing anObj.variable1 : " +anObj.variable1);
changeValue(anObj);
console.log("Outside function after changing anObj.variable1 : " +anObj.variable1);
