let magicians: string[] = ["david","mike","eric"];

function show_magicians(magicians: string[]){
   magicians.forEach(magician =>{

console.log(magicians)});
}

show_magicians (magicians);

function make_great(magicians: string[]) {
    for (let i= 0; i < magicians.length; i++){
        magicians[i]= magicians[i] + "the great";
    }
}

console.log(make_great(magicians)); // modifies original array
show_magicians (magicians);