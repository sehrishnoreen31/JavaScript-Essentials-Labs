// variables
let count = 0;

// funtions
// function to increase count
function increaseCount(){
    count++; //increases follower count count by 1
    displayCount(); //display updated  count
    milestone(); // check if there is some milestone reached
}

// function to display updated count
function displayCount(){
    document.getElementById('followers').innerHTML = count;
}

// function for Milestones alerts 
function milestone(){
    if(count === 5){
        alert('You gained 5 Followers, keep going!');
    } else if(count === 10){
        alert('Wow, You have gained 10 Followers!')
    }
}

// function to reset count
function resetCount(){
    count=0;
    displayCount(); //display updated  count
    alert('Followers count has been reset to 0!');
}