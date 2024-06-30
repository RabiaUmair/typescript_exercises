function orderSandwich(...items: string[]) {
    console.log(`You have ordered a sandwich with the following items:`);
    for (const item of items) {
        console.log(` ${item}`);
    }
}

// Call the function three times with a different number of arguments each time
orderSandwich('chicken', 'cheese', 'lettuce', 'tomato');
orderSandwich('mayo', 'cheese', 'pickles');
orderSandwich('veggie', 'hummus');


