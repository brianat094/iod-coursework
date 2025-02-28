//Fibonaci - famous pattern where the next number in the
//sequence is the sum of the previous 2.


// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

function printFibonacci() {
    let a = 0, b = 1;
    setInterval(() => {
        console.log(a);
        [a, b] = [b, a + b];
    }, 1000);
}

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

function printFibonacciTimeouts() {
    let a = 0, b = 1;
    function printNext() {
        console.log(a);
        [a, b] = [b, a + b];
        setTimeout(printNext, 1000);
    }
    printNext();
}

// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.
function printFibonacciWithLimit(limit) {
    let a = 0, b = 1, count = 0;
    const intervalId = setInterval(() => {
        if (count >= limit) {
            clearInterval(intervalId);
            return;
        }
        console.log(a);
        [a, b] = [b, a + b];
        count++;
    }, 1000);
}

// Example usage:
printFibonacci();