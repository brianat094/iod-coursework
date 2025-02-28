/*Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.*/

function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error

/*a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not*/

function validateStringArg(fn) {
    return function(...args) {
        for (let arg of args) {
            if (typeof arg !== 'string') {
                throw new Error('Argument must be a string');
            }
        }
        return fn(...args);
    };
}

/*b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string*/
//orderItems function done above

/*c) Extend the decorator function to validate as strings all arguments passed to fn*/

const validatedOrderItems = validateStringArg(orderItems);

/*d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments*/

try {
    console.log(validatedOrderItems("Apple Watch", "iPhone")); // should run the function
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validatedOrderItems("Apple Watch", 123)); // should throw an error
} catch (error) {
    console.error(error.message);
}
