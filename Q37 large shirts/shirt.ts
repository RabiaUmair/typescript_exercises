function make_shirt(size: string = "large", message:string = "i love typescript")  {
    console.log(`making a ${size} t shirt with the message "${message}" printed on it. `);
}

make_shirt(); //default large and message
make_shirt("medium"); //default message  and medium size
make_shirt("small", "good life"); //custom message and small size
