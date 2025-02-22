// global scope variables
let myLetGlobal = "let variable - Global";
var myVarGlobal = "var variable -Global";
const myConstGlobal = "const Variable - Global";

// block level scope
{
    let myLetBlock = "let variable - block";
    var myVarBlock = "var variable - block";
    const myConstBlock = "const variable - block";
}

// printing 
// global
console.log(myLetGlobal);
console.log(myVarGlobal);
console.log(myConstGlobal);

// block
console.log(myVarBlock); //only this one prints, as it can be accessed outside {}
console.log(myLetBlock);
console.log(myConstBlock);

// function level scope

function myfunction(){
    let myLetFunc = "let variable - function";
    var myVarFunc = "var variable - function";
    const myConstFunc = "const variable - function";
}

myfunction();
// printing
console.log(myLetFunc);
console.log(myVarFunc);
console.log(myConstFunc);
