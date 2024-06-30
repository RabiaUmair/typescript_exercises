function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("making a ".concat(size, " t shirt with the message \"").concat(message, "\" printed on it. "));
}
make_shirt(); //default large and message
make_shirt("medium"); //default message  and medium size
make_shirt("small", "good life"); //custom message and small size
