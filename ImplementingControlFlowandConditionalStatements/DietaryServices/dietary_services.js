// variables 
let role = 'subscriber';
let accessLevel;

// authorize user based on their roles
if (role === 'employee'){
    accessLevel = 'Dietary Services!';
} else if (role === 'enrolled member'){
    accessLevel = 'Dietary Services and Interaction with Dietician!';
} else if (role === 'subscriber'){
    accessLevel = 'Partial Access to Dietary Services!';
} else {
    accessLevel = 'Please enroll or at least subscribe first to avail this facility! Thanks'
}

// printing authorization status
console.log('Access Level: ', accessLevel)