// List of current usernames
let currentUsers: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// List of new usernames to check
let newUsers: string[] = ['Frank', 'alice', 'George', 'Charlie', 'Hank'];

// Convert all current usernames to lowercase for case-insensitive comparison
let currentUsersLower = currentUsers.map(user => user.toLowerCase());

// Loop through new users to check if they are available
for (let newUser of newUsers) {
    // Convert the new username to lowercase for comparison
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`The username ${newUser} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${newUser} is available.`);
    }
}





