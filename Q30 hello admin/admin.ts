let usernames: string[] = ['admin', 'jiya', 'zoya','ali'];


//1st method
for (let i= 0; i < usernames.length; i++){
    if(usernames[i] === 'admin') {
        console.log("hello admin, would you like to see a special report");

    }
    else{
        console.log(`hello ${usernames[i]},thank you for logging in`);
    }
}

//2nd method
usernames.forEach(usernames => {
    if(usernames === 'admin') {
        console.log("hello admin, would you like to see a special report");

    }
    else{
        console.log("hello",usernames,"thank you for logging in");
    }
}

)