let guest: string[] = ["ali", "sana", "zoya"];


let absentGuest = "sana";
let newGuest = "jiya";

guest[1] = newGuest;

for (let i = 0; i < guest.length; i++) {
    console.log("Dear",  guest[i], "I invite you to dinner at my place.");
    
}

console.log(absentGuest, "is not coming to the dinner.");

