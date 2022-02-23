// LEXICAL SCOPE: Outside => outside the function definition not function call.


console.log("line no. 4", varName);
var varName = 10 ;
console.log("line no. 6", varName);

function b()
{
    console.log("varName", varName);
}

function fn()
{
    console.log("varName", varName);
    var varName = 29 ;
    b() ;
    console.log(varName);
}
fn() ;

// This going outside in case the variable is not found is called SCOPE CHAIN.