var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['Harry', 'David', 'mike'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = magicians.map(function (magician) { return magician + ' the Great'; });
    return great_magicians;
}
// Exercise 39
//show_magicians(magicians);
// Exercise 40
//const great_magicians = make_great(magicians);
//show_magicians(great_magicians);
// Exercise 41
var original_magicians = __spreadArray([], magicians, true);
var great_magicians = make_great(original_magicians);
show_magicians(original_magicians);
show_magicians(great_magicians);
