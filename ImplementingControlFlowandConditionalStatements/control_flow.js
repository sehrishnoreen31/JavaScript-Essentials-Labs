// variables
let userRole = 'manager';
let accessLevel;
let isLogggedIn = true;
let userMesssage;
let userType = 'subscriber';
let userCategory;
let isAuthenticated = true;

// check if user role is admin or not using if-else-if
if(userRole === 'admin'){
    accessLevel = 'Full Access';
} else if (userRole === 'manager'){
    accessLevel = 'Limited Access'
} else {
    accessLevel = 'No Access';
}

// printing access level
console.log('Access Level: ', accessLevel);
///////////////////////////////////////////////////

// Check if user is loggin or not using nested if-else
if (isLogggedIn) {
    if (userRole === 'admin'){
        userMesssage = 'Welcome Admin!';
    } else {
        userMesssage = 'Welcome User!';
    }
} else {
    userMesssage = 'Please log in, to access the system!'
}

// print message
console.log('User Message: ', userMesssage);
///////////////////////////////////////////////////

// Check user type using switch statements
switch (userType){
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}
// print user category
console.log('User Category: ', userCategory)
///////////////////////////////////////////////////

// Check user authentication status using ternary operator
let authenticationStatus = isAuthenticated? 'Authenticated': 'Not Authenticated';

// printing authentication status
console.log('Authentication Status: ', authenticationStatus);