var guest = ["ali", "sana", "zoya"];
var absentGuest = "sana";
var newGuest = "jiya";
guest[1] = newGuest;
console.log("we have arranged a big table so we will invite 3 more guest");
guest.unshift("hufsa");
guest.splice(2, 0, "umair");
guest.push("joe");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear", guest[i], "I invite you to dinner at my place.");
}
