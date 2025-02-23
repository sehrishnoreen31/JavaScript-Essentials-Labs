function calculateTotalPrice(){
    // get input prices
    let p1 = parseFloat(document.getElementById('g1').value);
    let p2 = parseFloat(document.getElementById('g2').value);
    let p3 = parseFloat(document.getElementById('g3').value);

    console.log(p1, p2, p3);
    // calculate total price
    let total = p1 + p2 + p3;

    // Show total price
    document.getElementById('total').innerText = `Total Price = ${total}`;
}