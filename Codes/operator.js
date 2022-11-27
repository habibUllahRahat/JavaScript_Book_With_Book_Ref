/*
All result is shown on console -> open browser -> ctrl+shift+j

Operator is some kind of special symbol or combination of special symbols that help to do some operation with operand;

for example
2 + 4 = 6

here 2 & 4 operand and "+" is operator and 6 is output;

There are 6 types of operator can be found in JavaScript

1.Arithmetic operator.
2.Comparison operator.
3.Logical / Relational operator.
4.Assignment operator.
5.Conditional / Ternary operator.
6.Binary / Special / Bitwise operator.


*/

/*
There are some Arithmetic Operators in js
those are
_____________________________________________________________________________________________
|  Operator | Oparation(name) |                    Example(var a, var b)                    |
=============================================================================================
|    "+"     |   Addition     |                    a=2,b=3; a+b = 5                         |
=============================================================================================
|    "-"     |   Subtract     |                    a=5,b=3; a-b = 2                         |
=============================================================================================
|    "/"     |   Divide       |                    a=10,b=2; a/b = 5                        |
=============================================================================================
|    "*"     | Multiplication |                    a=2,b=3; a*b = 6                         |
=============================================================================================
|    "%"     |   Modulus      |                    a=10,b=3; a%b = 1                        |
=============================================================================================
|    "++"    |   Increment    |  a=2, a++  in this line will be 2 but in next line(a===3)   |
=============================================================================================
|    "++"    |   Increment    |         a=2, ++a  in this line will be 3                    |
=============================================================================================
|    "--"    |   Decrement    |      a=5, a-- === 5, --a = 4 same as increment              |
=============================================================================================
|    "**"    | Exponentation  |                a=5,b=2 a**b = 25 same as a^b                |
=============================================================================================
*/

var a, b, c;

//Addition
a = 2;
b = 3;
c = a + b;
console.log('Addition (a + b)= ' + c);


//Subtract
a = 5;
b = 3;
c = a - b;
console.log('Subtract (a - b)= ' + c);

//Divide
a = 10;
b = 2;
c = a / b;
console.log('Divide (a / b)= ' + c);

//Multiplication
a = 2;
b = 3;
c = a * b;
console.log('Multiplication (a * b)= ' + c);

//Modulus
a = 10;
b = 3;
c = a % b;
console.log('Modulus (a % b) = ' + c);

//Increment
a = 2;
console.log('Increment (a++) operator added at this line = ' + a++);
console.log('Increment (a++) in after one line = ' + a);


a = 2;
console.log('Increment (++a) = ' + ++a);


//Decrement
a = 2;
console.log('Increment (a--) operator added at this line = ' + a--);
console.log('Increment (a--) in after one line = ' + a);

a = 2;
console.log('Increment (a--) = ' + --a);

//Exponentation
a = 5;
b = 2;
c = a ** b;
console.log('Exponentation (a ** b) = ' + c);


/*
There are some Comparison Operators in js
those are
____________________________________________________________________________________________________________________________________
|  Operator |          Oparation(name)           |                              Example(var a, var b)                              |
====================================================================================================================================
|    ">"    |  Greater than                      | a=2,b=3,c=3; a>b = false / b>a = true / b>c=false                               |
====================================================================================================================================
|    "<"    |  Less than                         | a=3,b=5,c=5; b<a = false / a<b = true / c<a = false                             |
====================================================================================================================================
|    ">="   |  Greater than or equal to          | a=4,b=10,c=10; a>=b = false / b>=a = true/ b>=c=true                            |
====================================================================================================================================
|    "<="   |  Less than or equal to             | a=4,b=10,c=10; b<=a = false / a<=b = true/ b<=c=true                            |
====================================================================================================================================
|    "=="   |  Equal to (value only)             | a=10,b="10",c=10,d=23,e=3; a==e =false/ a==d =false/a==b =true/ a==c =true      |
====================================================================================================================================
|    "==="  |  Equal value and equal type        | a=10,b="10",c=10,d=23,e=3; a===e =false/ a===d =false/a===b =false/a===c =true  |
====================================================================================================================================
|    "!="   |  Not equal to (value only)         | a=10,b="10",c=10,d=23,e=3; a!=b =false/ a!=c =false/a!=d =true/ a!=e =true      |
====================================================================================================================================
|    "!=="  | Not equal value and not equal type | a=10,b="10",c=10,d='A',e=12; a!==e =true/ a!==d =true/a!==b =false/a!==c =true  |
====================================================================================================================================
*/
//Greater than operator
a = 2;
b = 3;
c = 3;
if (a > b) {
    console.log('(a > b) is true');
} else if (b > a) {
    console.log('(b > a) is true');
} else if (b > c) {
    console.log('(b > c) is true');
} else {
    console.warn('none is true');
}

//Less than operator
a = 3;
b = 5;
c = 5;
if (b < a) {
    console.log('(b < a) is true');
} else if (a < b) {
    console.log('(a < b) is true');
} else if (b < c) {
    console.log('(b < c) is true');
} else {
    console.warn('none is true');
}

//Greater than or equal to operator
a = 5;
b = 10;
c = 10;
if (b >= a) {
    console.log('(b >= a) is true');
} else if (a >= b) {
    console.log('(a >= b) is true');
} else {
    console.warn('none is true');
}

if (c >= b) {
    console.log('(c >= b) is true');
} else if (b >= c) {
    console.log('(b >= c) is true');
} else {
    console.warn('none is true');
}

//Less than or equal to operator
a = 5;
b = 10;
c = 10;
if (b <= a) {
    console.log('(b <= a) is true');
} else if (a <= b) {
    console.log('(a <= b) is true');
} else {
    console.warn('none is true');
}

if (c <= b) {
    console.log('(c <= b) is true');
} else if (b <= c) {
    console.log('(b <= c) is true');
} else {
    console.warn('none is true');
}

//Equal to operator
a = 10;
b = "10";
c = 10;
d = 23;
e = 3;

if (a == b) {
    console.log('(a == b) is true');
} else {
    console.warn('(a == b) is False..!!');
}

if (a == c) {
    console.log('(a == c) is true');
} else {
    console.warn('(a == c) is False..!!');
}

if (a == d) {
    console.log('(a == d) is true');
} else {
    console.warn('(a == d) is False..!!');
}

if (a == e) {
    console.log('(a == e) is true');
} else {
    console.warn('(a == e) is False..!!');
}

//Equal value and equal type operator
a = 10;
b = "10";
c = 10;
d = 23;
e = 3;

if (a === b) {
    console.log('(a === b) is true');
} else {
    console.warn('(a === b) is False..!!');
}

if (a == c) {
    console.log('(a === c) is true');
} else {
    console.warn('(a === c) is False..!!');
}

if (a == d) {
    console.log('(a === d) is true');
} else {
    console.warn('(a === d) is False..!!');
}

if (a == e) {
    console.log('(a === e) is true');
} else {
    console.warn('(a === e) is False..!!');
}


//Not equal to operator
a = 10;
b = "10";
c = 10;
d = 23;
e = 3;

if (a != b) {
    console.log('(a != b) is true');
} else {
    console.warn('(a != b) is False..!!');
}

if (a != c) {
    console.log('(a != c) is true');
} else {
    console.warn('(a != c) is False..!!');
}

if (a != d) {
    console.log('(a != d) is true');
} else {
    console.warn('(a != d) is False..!!');
}

if (a != e) {
    console.log('(a != e) is true');
} else {
    console.warn('(a != e) is False..!!');
}

//Not equal value and not equal type operator
a = 10;
b = "10";
c = 10;
d = 'A';
e = 12;

if (a !== b) {
    console.log('(a !== b) is true');
} else {
    console.warn('(a !== b) is False..!!');
}

if (a !== c) {
    console.log('(a !== c) is true');
} else {
    console.warn('(a !== c) is False..!!');
}

if (a !== d) {
    console.log('(a !== d) is true');
} else {
    console.warn('(a !== d) is False..!!');
}

if (a !== e) {
    console.log('(a !== e) is true');
} else {
    console.warn('(a !== e) is False..!!');
}
/*
There are three Logical operators in JavaScript
_____________________________________________________________________________
|Syntax|Operation|       Example        |             Details               |
=============================================================================
| "||" |    Or   |a=4,b=5; if(a<b||b<a) | If one or both statement is true  |
|      |         |                      | then this condition will true.    |
=============================================================================
| "&&" |   And   |a=4,b=5; if(a<b&&b<=a)| If only both statement is true    |
|      |         |                      | then this condition will true.    |
=============================================================================
|      |         |                      | If condition true then it'll      |
|  "!" |   Not   |  a=4,b=5; if!(a<b)   | return false if condition is      |
|      |         |                      | false it will return true         |
=============================================================================
*/
//Logical Or ("||")
var a = 4;
var b = 5;

if (a < b || b < a) {
    console.log("Between a<b or b<a one is correct");
}

//Logical And ("&&")

var a = 5;
var b = 6;
var c = 11;

if (a < b && (b + a) === c) {
    console.log("Between a<b and (b+a)===c boths are correct");
}

//Logical Not ("!")

var a = true;

if (!(a) == false) {
    console.log((!(a) == false));
}
/*
There are some Assingment Operators Operators in js
those are
___________________________________________________________
|  Operator   | Example(var a, var b)|     Same as       | 
===========================================================
|    "="      |   a=2,b=3; a = b     |      a = b        |
===========================================================
|    "+="     |   a=2,b=3; a += b    |   a = a + b       |
===========================================================
|    "-="     |   a=5,b=3; a -= b    |   a = a - b       |
===========================================================
|    "*="     |   a=5,b=3; a *= b    |   a = a * b       |
===========================================================
|    "/="     |   a=10,b=2; a /= b   |   a = a / b       |
===========================================================
|    "%="     |   a=10,b=3; a %= b   |   a = a % b       |
===========================================================
|    "**="    |   a=5,b=2; a **= b   |   a = a ** b      |
===========================================================
*/

var a, b, c;

a = 2;
b = 3;
a += b;
console.log('a += b <br> a = ' + a);

a = 5;
b = 3;
a -= b;
console.log('a -= b <br> a = ' + a);

a = 5;
b = 3;
a *= b;
console.log('a *= b <br> a = ' + a);

a = 10;
b = 2;
a /= b;
console.log('a /= b <br> a = ' + a);

a = 10;
b = 3;
a %= b;
console.log('a %= b <br> a = ' + a);

a = 5;
b = 2;
a **= b;
console.log('a **= b <br> a = ' + a);
/*
Ternary Operator:
===============================================================================================================================================
|  variable(optional) = condition ? result1(will return or execute if condition is true):result2 (will return or execute if condition is true)|   |Bitwise inversion/one' compliment and also work as NOt    |
===============================================================================================================================================

*/

var a = 100;
var b = 20;
var x = 10;
var y = 20;

a > b ? console.log('A is greater than B'): console.log('B is greater than A');
var c = x > y ? 200 : 3.1415;

console.log(c);

/*
There are few kind of Bitwise Operator in JavaScript to work with bit
_________________________________________________
|Operator|               Operation              |
=================================================
|  "<<"  |Shifts the bits to left               |
=================================================
|  ">>"  |Shifts the bits to right              |
=====================================================================
|   "~"  |Bitwise inversion/one' compliment and also work as NOt    |
=====================================================================
|   "&"  |Bitwise logical AND                   |
=================================================
|   "|"  |Bitwise logical OR                    |
=================================================
|   "^"  |Bitwise exclusive or (logical XOR)    |
=================================================
*/

/*Shift left
if shift a bit to the left 
                   _______________________________________
                   |128| 64 | 32 | 16 |  8 |  4  | 2 | 1 |
                   =======================================
var a = 128 =>     | 1 |  0 | 0  |  0 |  0 |  0  | 0 | 0 |
                   =======================================
var b = a >> 2 =>  | 0 |  0 | 1  |  0 |  0 |  0  | 0 | 0 |=32
                   =======================================
*/
var a = 128;
var b = a >> 2; //it will shift 2 points left every bit 
console.log(b);

/*Shift right
                   _______________________________________
                   |128| 64 | 32 | 16 |  8 |  4  | 2 | 1 |
                   =======================================
var a = 128 =>     | 0 |  0 | 0  |  1 |  0 |  0  | 0 | 0 |
                   =======================================
var b = a << 3 =>  | 0 |  0 | 0  |  0 |  0 |  0  | 0 | 0 |
                   =======================================
*/
var a = 16;
var b = a << 3; //it will shift 3 points right every bit 
console.log(b);

/*Bitwise inversion('~')/ ones conversion
truth table
              ____________________________________________
              |sign|128| 64 | 32 | 16 |  8 |  4  | 2 | 1 |
              ============================================
var a = 37 => |(0)+| 0 |  0 | 1  |  0 |  0 |  1  | 0 | 1 |
              ============================================
var b = ~a => |(1)-| 0 |  0 | 1  |  0 |  0 |  1  | 1 | 0 |
              ============================================
*/
var a = 37;
var b = ~a;
console.log(b);
convertToBinary(b);
/*Bitwise logical AND('&')
truth table
__________________
| Input | Output |
==================
| 1 | 1 |   1    |
==================
| 0 | 1 |   0    |
==================
| 1 | 0 |   0    |
==================
| 0 | 0 |   0    |
==================
                   _______________________________________
                   |128| 64 | 32 | 16 |  8 |  4  | 2 | 1 |
                   =======================================
var a = 37 =>      | 0 |  0 | 1  |  0 |  0 |  1  | 0 | 1 |
                   =======================================
var b = 120 =>     | 0 |  1 | 1  |  1 |  1 |  0  | 0 | 0 |
                   =======================================
var c = a & b =>   | 0 |  0 | 1  |  0 |  0 |  0  | 0 | 0 | = 32
                   =======================================
*/
var a = 37;
var b = 120;
var c = a & b;
console.log(c);
convertToBinary(c);
/*Bitwise logical OR('|')
truth table
__________________
| Input | Output |
==================
| 1 | 1 |   1    |
==================
| 0 | 1 |   1    |
==================
| 1 | 0 |   1    |
==================
| 0 | 0 |   0    |
==================
                   _______________________________________
                   |128| 64 | 32 | 16 |  8 |  4  | 2 | 1 |
                   =======================================
var a = 37 =>      | 0 |  0 | 1  |  0 |  0 |  1  | 0 | 1 |
                   =======================================
var b = 120 =>     | 0 |  1 | 1  |  1 |  1 |  0  | 0 | 0 |
                   =======================================
var c = a | b =>   | 0 |  1 | 1  |  1 |  1 |  1  | 0 | 1 | = 125
                   =======================================
*/

var a = 37;
var b = 120;
var c = a | b;
console.log(c);
convertToBinary(c);

/*Bitwise Exclusive or XOR ('~')
truth table
__________________
| Input | Output |
==================
| 1 | 1 |   0    |
==================
| 0 | 1 |   1    |
==================
| 1 | 0 |   1    |
==================
| 0 | 0 |   0    |
==================
                   _______________________________________
                   |128| 64 | 32 | 16 |  8 |  4  | 2 | 1 |
                   =======================================
var a = 37 =>      | 0 |  0 | 1  |  0 |  0 |  1  | 0 | 1 |
                   =======================================
var b = 120 =>     | 0 |  1 | 1  |  1 |  1 |  0  | 0 | 0 |
                   =======================================
var c = a ^ b =>   | 0 |  1 | 0  |  1 |  1 |  1  | 0 | 1 | = 93
                   =======================================
*/
var a = 37;
var b = 120;
var c = a ^ b;
console.log(c);
convertToBinary(c);




//a fuction for convert decimal into binary
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1,
        step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}
/**
 * typeof is special oprator that return type data
 */
var a = 10;
console.log(typeof(a));
var b = undefined;
console.log(typeof(b));
var c = 'ant love cat';
console.log(typeof(c));
var d = new Array(ant='bug');//show as object->null,object
console.log(typeof(d));
var e = true;
console.log(typeof(e));
var f = function name(params) {
    
};
console.log(typeof(f));