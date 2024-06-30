var usernames = ['admin', 'jiya', 'zoya', 'ali'];
//1st method
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("hello admin, would you like to see a special report");
    }
    else {
        console.log("hello ".concat(usernames[i], ",thank you for logging in"));
    }
}
//2nd method
usernames.forEach(function (usernames) {
    if (usernames === 'admin') {
        console.log("hello admin, would you like to see a special report");
    }
    else {
        console.log("hello", usernames, "thank you for logging in");
    }
});
