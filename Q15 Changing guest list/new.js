var guest = ["ali", "sana", "zoya"];
var absentGuest = "sana";
var newGuest = "jiya";
guest[1] = newGuest;
for (var i = 0; i < guest.length; i++) {
    console.log("Dear", guest[i], "I invite you to dinner at my place.");
}
console.log(absentGuest, "is not coming to the dinner.");
