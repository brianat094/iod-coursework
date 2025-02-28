/*5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following:*/

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

/*We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:*/

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

/*a) Explain why the above code returns the wrong answer*/

// The above code returns the wrong answer because the toFixed() method returns a string representation of the number not a number. 
// When you add two strings together JavaScript concatenates them instead of adding them.

/*b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.*/

function currencyAddition(float1, float2) {
    return parseFloat((float1 + float2).toFixed(2));
}
// Test the function
console.log(currencyAddition(0.20, 0.10)); // 0.3
console.log(currencyAddition(0.1, 0.2)); // 0.3

/*c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation(either +, -, / or *) on the two numbers and returns the correct float result.*/

function currencyOperation(float1, float2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = float1 + float2;
            break;
        case '-':
            result = float1 - float2;
            break;
        case '*':
            result = float1 * float2;
            break;
        case '/':
            result = float1 / float2;
            break;
        default:
            result = 'Invalid operation';
    }
    return parseFloat(result.toFixed(2));
}
// Test the function
console.log(currencyOperation(0.20, 0.10, '+')); // 0.3
console.log(currencyOperation(0.20, 0.10, '-')); // 0.1

