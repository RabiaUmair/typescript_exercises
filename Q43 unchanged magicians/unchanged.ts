const magicians: string[] = ['Harry', 'David', 'mike'];
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]) {
    const great_magicians = magicians.map(magician => magician + ' the Great');
    return great_magicians;
}

// Exercise 39

//show_magicians(magicians);

// Exercise 40

//const great_magicians = make_great(magicians);
//show_magicians(great_magicians);

// Exercise 41

const original_magicians = [...magicians];
const great_magicians = make_great(original_magicians);
show_magicians(original_magicians);
show_magicians(great_magicians);
