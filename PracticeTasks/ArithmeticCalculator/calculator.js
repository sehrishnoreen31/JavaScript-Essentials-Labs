// functions
function add(){
    // variables
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const output = document.getElementById('output');
    let sum =  num1 + num2;
    output.innerText = sum;
}
function subtract(){
    // variables
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const output = document.getElementById('output');
    let sub =  num1 - num2;
    output.innerText = sub;
}
function divide(){
    // variables
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const output = document.getElementById('output');
    let div =  num1 / num2;
    
    if (num2===0){
        output.innerText = 'Invalid Input';
    } else{
        output.innerText = div;
    }
}
function multiply(){
    // variables
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('output');
    let mul =  num1 * num2;
    output.innerText = mul;
}
function clearInputsOutputs(){
    // variables
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('output').innerText = '';
}
////////////////////////////////////////////////////////////

// event listeners
// addition
const addButton = document.getElementById('add');
addButton.onclick = add;
// subtraction
const subButton = document.getElementById('subtract');
subButton.onclick = subtract;
// division
const divButton = document.getElementById('divide');
divButton.onclick = divide;
// multiplication
const multiplyButton = document.getElementById('multiply');
multiplyButton.onclick = multiply;
// clear inputs and output
const clearButton = document.getElementById('clear');
clearButton.onclick =  clearInputsOutputs;

