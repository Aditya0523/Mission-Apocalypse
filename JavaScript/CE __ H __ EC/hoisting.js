// variables are assigned memory and set to undefined during the CREATION PHASE

console.log("a: ", a) ;
var a ; // works only with var not let. 
console.log("a: ", a);
a = 5 ;
console.log("a: ", a);

// functions are completely assigned memory during the CREATION PHASE.

fn() ;
function fn()
{
    console.log("I can run before even before declaration");
}

// functions are assigned memory in the HEAP and its reference 
// exist in the STACK. So same reference can be changed to point to functions declared in differet locations in HEAP

function real()
{
    console.log("1");
}

function real()
{
    console.log("2");
}

real() ;

function real()
{
    console.log("3");
}

function real()
{
    console.log("4");
}


// practice 

console.log("-------------------------------");

console.log("varName", varName);
var varName ;

console.log("varName", varName);
varName = "Iron Man" ;

console.log("varName", varName) ;

fn() ;
function fn()
{
    console.log("I am fn function");
}
fn() ;

fnContainer() ;
var fnContainer = function ()
{
    console.log("I am fnContainer function");
}
fnContainer() ;