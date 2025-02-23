// function to calculate area
function calculateArea(){
    // parseFloat() converts the string value retrieved from the input field to a floating-point number
    let length = parseFloat(document.getElementById('length').value); 
    let width = parseFloat(document.getElementById('width').value);

    // calculate area
    let area = length * width;
    document.getElementById('result').innerText = `Area of rectangle = ${area}`;
    
}