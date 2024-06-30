let pizzas:string[] = ["pepproni","bbq","italian"];


//1st method: for of loop
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza`);

}
console.log("i really love pizza");

//2nd method: for loop

for(let i = 0; i<pizzas.length; i++){
    console.log(`i like ${pizzas[i]} pizza`);

}
console.log("i really love pizza");