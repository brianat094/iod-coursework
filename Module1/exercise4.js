// this is the structure of a function
//function ThisIsTheName(Signature)
// Lab Exercise 4 
function sum(a, b) {
    console.log(a + b)
    sum(2, 1)
}
function sum(a, b) {
    return a + b
    console.log(sum(2,1))

}

function subtract(a, b) {
    console.log(a-b)
    subtract(2, 1)
}
function subtract( a, b) {
    return a - b
    console.log(subtract(2-1))
}
function multiply(a, b) {
    console.log(a * b)
    multiply(2, 1)
}
function multiply( a, b) {
    return a * b
    console.log(multiply(2*1))
}
function divide(a, b) {
    console.log(a / b)
    divide(2, 1)
}
function divide( a, b) {
    return a / b
    console.log(divide(2/1))
}
// Concatenate two strings
let message = "Hello"; 
message += " Briana"; 
console.log(message); //Output: "Hello, Briana"