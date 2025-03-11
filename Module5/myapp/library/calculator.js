const { v4: uuidv4 } = require('uuid');

class Calculator {
    constructor() {
        this.id = uuidv4();
    }

    #log(value) {
        console.log(`[Calculator :${this.id}]: ${value}`);
    }

    add(num1, num2) {
        const value = num1 + num2;
        this.#log(value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        this.#log(value);
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2;
        this.#log(value);
        return value;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error('Division by zero is not allowed');
        }
        const value = num1 / num2;
        this.#log(value);
        return value;
    }
}

module.exports = Calculator;