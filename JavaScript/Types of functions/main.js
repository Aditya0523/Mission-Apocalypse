// functions can be returned from any function.

function outer()
{
    console.log("I am outer function");
    return function inner()
    {
        console.log("I am inner function");
    }
}

let rval = outer() ;
console.log("rval", rval);
rval() ;