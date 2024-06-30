function createCar(manufacturer: string, model: string, ...kwargs: { [key: string]: string }) {
    const car = { manufacturer, model };
    for (const key in kwargs) {
        car[key] = kwargs[key];
    }
    return car;
}

const myCar = createCar('Toyota', 'Corolla', 'color', 'red', 'feature', 'sunroof');
console.log(myCar);


    