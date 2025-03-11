const express = require('express');
const router = express.Router();
const calculatorController = require('./calculatorController');

// Route for adding two numbers
router.get('/add', calculatorController.addNumbers);

// Route for subtracting two numbers
router.get('/subtract', calculatorController.subtractNumbers);

// Route for multiplying two numbers
router.get('/multiply', calculatorController.multiplyNumbers);

// Route for dividing two numbers
router.get('/divide', calculatorController.divideNumbers);

module.exports = router;