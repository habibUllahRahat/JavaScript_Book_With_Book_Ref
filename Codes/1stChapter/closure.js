function clouserDemo(){
    var x = 10;
    function anotherFunction(){
        var y = 20;
        console.log('sum'+(x+y));
    }
    return anotherFunction;
}
var returnedFunction = clouserDemo();

returnedFunction(32);

function parentFunction(a){
    return function (b){
        console.log('Sum : '+(a+b));
         return function (c){
            console.log('Sum : '+(a+b+c));
         }
    }
}

parentFunction(20)(80)(30);

var parentVariable = parentFunction(6);
var nested1stVariable = parentVariable(3);
var total = nested1stVariable(1);