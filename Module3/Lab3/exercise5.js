let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
car.description(); // works
setTimeout(() => car.description(), 200); // works

// b) Change the year for the car by creating a clone of the original and overriding it
let newCar = { ...car, year: 2025 };
newCar.description(); // This car is a Porsche 911 from 2025

// c) Does the delayed description() call use the original values or the new values from b)? Why?
// The delayed description() call uses the original values because the function is called with the context of the original car object.
setTimeout(() => car.description(), 400); // This car is a Porsche 911 from 1964

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 600); // This car is a Porsche 911 from 1964

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
let anotherCar = { ...car, model: 'Cayenne' };
anotherCar.description(); // This car is a Porsche Cayenne from 1964
setTimeout(boundDescription, 800); // This car is a Porsche 911 from 1964