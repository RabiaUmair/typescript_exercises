var magicians = ["david", "mike", "eric"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magicians);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
console.log(make_great(magicians)); // modifies original array
show_magicians(magicians);
