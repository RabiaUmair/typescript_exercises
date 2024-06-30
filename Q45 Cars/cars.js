function createCar(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var key in kwargs) {
        car[key] = kwargs[key];
    }
    return car;
}
var myCar = createCar('Toyota', 'Corolla', 'color', 'red', 'feature', 'sunroof');
console.log(myCar);
