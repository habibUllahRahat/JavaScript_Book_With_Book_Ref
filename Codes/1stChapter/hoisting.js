/**
 * Hoisting is a default behaviour of JavaScript . Because of Hoisting we can use a function before the line where function defination.
 */

afunc();
function afunc() {
    var  a = 10;
    var  b = 20;
    var sum = a + b;
    console.log("sum is : "+sum);
}

//But it wont work on variable cause in JavaScript when a function is decleared it create execution context but not  variable declear case; 
//Example

/*namme()//it will show error
 var namme = function () {
    console.log("variable function");
 } 
*/

console.log('Value : '+ an);// it will show 'an' undefiend

 var an = 30;

 //console.log('Value : '+ xy) //it will show error