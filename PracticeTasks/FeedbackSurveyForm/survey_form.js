
// Event Listners
const submitButton = document.getElementById('submit-btn');
submitButton.onclick = sumbitFeedback; //calls submitFeedback function on click


// functions
// function to take form input
function sumbitFeedback(){
    // variables
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job =  document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedback').value;
    const experience = document.getElementById('experience').value;

    // check if all rquired fields have input values
    if(!name || !age || !email || !job || !designation || !productType || !feedback || !experience){
        alert('Please fill all necessary input fields!')
    }
    else{
        // format output
        document.getElementById('user-name').innerHTML = name;
        document.getElementById('user-age').innerHTML = age;
        document.getElementById('user-email').innerHTML = email;
        document.getElementById('user-job').innerHTML = job;
        document.getElementById('user-designation').innerHTML = designation;
        document.getElementById('product-choice').innerHTML = productType;
        document.getElementById('user-feedback').innerHTML = feedback;
        document.getElementById('user-experience').innerHTML = experience;

        // show output
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'none';
        alert('Thanku for you feedback!');
    }
}

// 