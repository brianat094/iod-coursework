const Calculator = require('./library/calculator');
const calculator = new Calculator();

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calculator.add(number1, number2);
    res.status(200).json({ result: sum });
};

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = calculator.subtract(number1, number2);
    res.status(200).json({ result: difference });
};

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = calculator.multiply(number1, number2);
    res.status(200).json({ result: product });
};

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    try {
        let quotient = calculator.divide(number1, number2);
        res.status(200).json({ result: quotient });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
};