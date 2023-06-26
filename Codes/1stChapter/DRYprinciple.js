/**
 * DRY = Don't Repeat Yourself
 * DRY princeple means don't repeat same statement or expression insted use some methods or function that can reduce line of code and make easy debug.
 */

//examples :

console.log('This is a message from Habib');
console.log('This is a message from Rahat');
console.log('This is a message from Md');

//Instead of this we can use declear a function and use 

function printAMsg(name) {
    console.log('This is a message from ' + name);
}

printAMsg("Habib");
printAMsg("Md");
printAMsg("Rahat");

//Second example :

var sum;
sum = 20 + 10;
console.log("Sum of  two number 20 and 10 is : " + sum);

sum = 43 + 30;
console.log("Sum of  two number 43 and 30 is : " + sum);

sum = 55 + 13;
console.log("Sum of  two number 55 and 13 is : "+ sum);

//Instead of if we can use DRY method

function addTwoNum(x,y) {
    var sum =x+y;
    console.log("(using function) Sum of  two number "+x+" and "+ y +" is : "+sum+"\n");
}

addTwoNum(54,35);
addTwoNum(31,53);
addTwoNum(20,78);