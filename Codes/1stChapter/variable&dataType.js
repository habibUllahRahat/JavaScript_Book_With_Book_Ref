//try these on REPL(browser console)
//==================================

// ##########################
// #       VARIABLES        #
// ##########################

/*
var variableName;--->decleartion
variableName = "data";---> assign(data assign)
var variableName = ;-----> Initialization(Declear + Assign)
 */

// var is keyword which used for declear variable (there are few more)

//valid variables
//======================

var a = "Habib Ullah Rahat";
var some_thing = "Anything";
var _canI = "Yes";

//not valid variables parctice those to line (17-26)
//==================================================
// var !name = "value";
// var @name = "value";
// var #name = "value";

// var %name = "value";
// var ^name = "value";
// var &name = "value";
// var *name = "value";
// var *name = "value";
// var (name = "value";

// valid with symbol
//__________________

var $text="Valid value";

//could not use any white space " " in variable name
//__________________________________________________
//var my name = "Name"

//could use underscroe "_" insted or camel case(convetional format) of white space  " " in variable name
//_______________________________________________________________________________________________________
var my_name = "Name";
var myName = "Name is";

// valid but example of some good and bad practice of variable name declear is:
// ===========================================================================
var  scount = "value or string"; // Description = bad -> Cause = count about what dosen't clear
var  studentCount = "value or string"; // Description = good -> Cause = Clear what will be or used for 
var  totalScore = "value or string"; // Description = good -> Cause = clear the motive of variable what it will store 
var  data ="value or string"; // Description = bad -> Cause = it's clear about what data it will store
var  var1, var2 = "value or string"; // Description = bad -> Cause = what kind of data it will store dosent clear
var  numberOfPeople = "value or string"; // Description = good -> Cause = Easy understand what ity will store
var  isValidate = "value or string"; // Description = good -> Cause = clear what its for
var  x, y = "value or string"; // Description = bad -> Cause = Mostly used, even though its okay to use in code pactice but not good to use in development 

// ##########################
// #       DATA-TYPES       #
// ##########################

/*
There are two types of data can be found on JavaScript those are :

1. Primitive Data Type:
    i. Number(integer and float).$text
    ii. String.
    iii. Boolean.
    iv. Undefiend.
    v. Null.

2. Non-Primitive/Reference Data Type:(we will discuss about those data type later)
    i. Array.
    ii. Object.
    iii. Function.*/

/*
i.Number
 It can be any type of number integer or float
===============================================
 */
 var aIntegerNumber = 10;
console.log(aIntegerNumber);//console.log is a function to see any type of log info ofa na module or variable in JavaScript
var aFloatNumber = 3.1415;
console.log(aFloatNumber);

/*
ii. String.
Its data type which can represent text & number which is closed with ["" or '']
===============================================================================
*/
var aCharacter = 'A';
console.log(aCharacter);
var aString = 'I am a String';
console.log(aString);
var aStringWithNumber = "I have 34 pen";
console.log(aStringWithNumber);
var stringNumber ='10';
console.log(stringNumber);

/*
iii. Boolean.
This type of variable only contain two or boolean type of value 'true' and 'false'
==================================================================================
*/
var isTrueValid = true;
console.log(isTrueValid);

//This two will show an error on console
//______________________________________
// var isTrueNotValid = True;
// console.log(isTrueNotValid);
// var isTrueNotValid1 = TRUE;
// console.log(isTrueNotValid1);

/*iv. Undefiend.
When a variable is decleaed but not any value isn't assiged to it will show as "Undefiend"
use case:
When you need to assign some special value in future but not now you dont use the memory
==========================================================================================
*/
var thisIsNotAssigend;
console.log(thisIsNotAssigend);

/*
v. Null.
Null means nothing that exist. It doesn't any memory for allocate data.
use case
when you don't want to use undefiend data type.
*/

var thisANullDataTypeVariable = null;
// var thisNotAValidNullDataTypeVariable = Null;
console.log(thisANullDataTypeVariable);
/*
#####################################
# Some variable and data operation: #
#####################################
*/
/*
1.Concation:
We can concat data with '+' in JavaScript. we can also store it on a single variable
============
 */
var aMsgForConcat = "How are" + "you...??"
var fullMsg = "Hello,";
console.log(fullMsg);
console.log(aMsgForConcat);
var fullMsg = "Hello,"+ aMsgForConcat;
console.log(fullMsg);

var aNumberForConcat = 10;
var aNumber = 10 + aNumberForConcat;
console.log(aNumber);
console.log(aNumber+30);//we can concat a number in a a function too


/*
2.Change or Update data of a variable:
======================================
 */
var aData = "value";
console.log(aData);
console.log(typeof(aData));

aData = 20;//data updateing

console.log(aData);
console.log(typeof(aData)); //updating data also relevant to new data type