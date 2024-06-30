let guest: string[] = ["ali", "sana", "zoya"];





console.log("we have arranged a big table so we will invite 3 more guest");

guest.unshift("hufsa");
guest.splice(2,0,"umair");
guest.push("joe");

for (let i = 0; i < guest.length; i++) {
    console.log("Dear",  guest[i], "I invite you to dinner at my place.");}

    



console.log("sorry we couldn't get a table so only two guests are invited.");


while(guest.length > 2){
let removedGuest= guest.pop()


console.log("Dear", removedGuest, "sorry you are not invited to dinner");
}

for (let i = 0; i < guest.length; i++) {
    console.log("Dear",  guest[i], "you are still invited for dinner.");
}

    guest.splice(0,2);
    console.log(guest);


