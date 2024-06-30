// List of current usernames
var currentUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// List of new usernames to check
var newUsers = ['Frank', 'alice', 'George', 'Charlie', 'Hank'];
// Convert all current usernames to lowercase for case-insensitive comparison
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
// Loop through new users to check if they are available
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    // Convert the new username to lowercase for comparison
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log("The username ".concat(newUser, " is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(newUser, " is available."));
    }
}
