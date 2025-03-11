const request = require('supertest');
const app = require('./index'); // Assuming your Express app is exported from index.js

describe('Calculator Routes', () => {
    // Generate some random numbers to test the calculator
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);

    describe('GET /calculator/add', () => {
        it('should add two numbers', async () => {
            const res = await request(app).get(`/calculator/add?num1=${number1}&num2=${number2}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', number1 + number2);
        });
    });

    describe('GET /calculator/subtract', () => {
        it('should subtract two numbers', async () => {
            const res = await request(app).get(`/calculator/subtract?num1=${number1}&num2=${number2}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', number1 - number2);
        });
    });

    describe('GET /calculator/multiply', () => {
        it('should multiply two numbers', async () => {
            const res = await request(app).get(`/calculator/multiply?num1=${number1}&num2=${number2}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', number1 * number2);
        });
    });

    describe('GET /calculator/divide', () => {
        it('should divide two numbers', async () => {
            const res = await request(app).get(`/calculator/divide?num1=${number1}&num2=${number2}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', number1 / number2);
        });

        it('should return an error when dividing by zero', async () => {
            const res = await request(app).get('/calculator/divide?num1=6&num2=0');
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('error', 'Division by zero is not allowed');
        });
    });
});