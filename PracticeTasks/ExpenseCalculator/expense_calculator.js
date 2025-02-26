// Global Variables to get each category total
let groceryTotal = 0
let clothesTotal = 0
let ShoesTotal = 0
let BillsTotal = 0
let StationaryTotal = 0
let othersTotal = 0

// function to calculate total grocery expenses
function calculateGroceryExpenses(){
    // variables to get input values, if input in not available assum 0
    let Item1 = parseFloat(document.getElementById('g1').value || 0);
    let Item2 = parseFloat(document.getElementById('g2').value || 0);
    let Item3 = parseFloat(document.getElementById('g3').value || 0);

    // calculate total grocery expenses
    let total = Item1 + Item2 + Item3;

    // show output
    document.getElementById('total-grocery').innerText = `Total Grocery Expense = ${total}`;
    groceryTotal = total;
    summary();
    calculateGrandTotal();
}


// function to calculate total Clothes expenses
function calculateClothesExpenses(){
    // variables to get input values, if input in not available assum 0
    let Item1 = parseFloat(document.getElementById('c1').value || 0);
    let Item2 = parseFloat(document.getElementById('c2').value || 0);
    let Item3 = parseFloat(document.getElementById('c3').value || 0);

    // calculate total clothes expenses
    let total = Item1 + Item2 + Item3;

    // show output
    document.getElementById('total-clothes').innerText = `Total Clothes Expense = ${total}`;
    clothesTotal = total;
    summary();
    calculateGrandTotal();
}

// function to calculate total Shoes expenses
function calculateShoesExpenses(){
    // variables to get input values, if input in not available assum 0
    let Item1 = parseFloat(document.getElementById('s1').value || 0);
    let Item2 = parseFloat(document.getElementById('s2').value || 0);
    let Item3 = parseFloat(document.getElementById('s3').value || 0);

    // calculate total shoes expenses
    let total = Item1 + Item2 + Item3;

    // show output
    document.getElementById('total-shoes').innerText = `Total Shoes Expense = ${total}`;
    ShoesTotal = total;
    summary();
    calculateGrandTotal();
}

// function to calculate total Bills
function calculateBills(){
    // variables to get input values, if input in not available assum 0
    let Item1 = parseFloat(document.getElementById('b1').value || 0);
    let Item2 = parseFloat(document.getElementById('b2').value || 0);
    let Item3 = parseFloat(document.getElementById('b3').value || 0);

    // calculate total bills
    let total = Item1 + Item2 + Item3;

    // show output
    document.getElementById('total-bills').innerText = `Total Bills = ${total}`;
    BillsTotal = total;
    summary();
    calculateGrandTotal();
}


// function to calculate total Stationary Expenses
function calculateStationaryExpenses(){
    // variables to get input values, if input in not available assum 0
    let Item1 = parseFloat(document.getElementById('st1').value || 0);
    let Item2 = parseFloat(document.getElementById('st2').value || 0);
    let Item3 = parseFloat(document.getElementById('st3').value || 0);

    // calculate total stationary expenses
    let total = Item1 + Item2 + Item3;

    // show output
    document.getElementById('total-stationary').innerText = `Total Stationary Expenses = ${total}`;
    StationaryTotal = total;
    summary();
    calculateGrandTotal();
}

// function to calculate Other Expenses
function calculateOtherExpenses(){
    // variables to get input values, if input in not available assum 0
    let Item1 = parseFloat(document.getElementById('o1').value || 0);
    let Item2 = parseFloat(document.getElementById('o2').value || 0);
    let Item3 = parseFloat(document.getElementById('o3').value || 0);

    // calculate total other expenses
    let total = Item1 + Item2 + Item3;

    // show output
    document.getElementById('total-others').innerText = `Total Other Expenses = ${total}`;
    othersTotal = total;
    summary();
    calculateGrandTotal();
}

// Function For Summary of Calculations
function summary(){
    document.getElementById('summary').innerHTML =`<b>Grocery:</b> ${groceryTotal}<br><br><b>Clothes:</b> ${clothesTotal}<br><br><b>Shoes:</b> ${ShoesTotal}<br><br><b>Bills:</b> ${BillsTotal}<br><br><b>Stationary:</b> ${StationaryTotal}<br><br><b>Others:</b> ${othersTotal}`;
}
// Function to calculate Grand Total of all categories
function calculateGrandTotal(){
    // variables to get input values, if input in not available assum 0

    // calculate grand total
    let grandTotal = groceryTotal + clothesTotal + ShoesTotal + BillsTotal + StationaryTotal + othersTotal;

    // show grand total output
    document.getElementById('g-total').innerText = `Grand Total = ${grandTotal}`;
}

// Grocery = ${groceryTotal}\t\tClothes = ${clothesTotal}\t\tShoes = ${ShoesTotal}\t\tBills = ${BillsTotal}\t\tStationary = ${StationaryTotal}\t\tOthers = ${othersTotal}

