// Function call creates an EXECUTION CONTEXT in the Stack
// First  of all EC is created, then only the code execution starts.

console.log("line no. 4", varName);
var varName = 10 ;
console.log("line no. 6", varName);

function fn()
{
    console.log("varName", varName);
    var varName = 29 ;
    console.log(varName);
}
fn() ;

// SCOPE : Area where a function or a variable can be found.