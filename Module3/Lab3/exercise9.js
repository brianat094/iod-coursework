//function randomDelay() {
    // your code
   // }
    //randomDelay().then(() => console.log('There appears to have been a delay.'));
    
    /*..delay execution of a function using setTimeout, where we need to provide both
    the callback function and the delay after which it should execute.*/

/*a) Create a promise-based alternative randomDelay() that delays execution for a
    random amount of time (between 1 and 20 seconds) and returns a promise we can use
    via .then(), as in the starter code below 
b) If the random delay is even, consider this a successful delay and resolve the promise,
    and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value*/

function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

randomDelay()
    .then((delay) => console.log(`There appears to have been a delay of ${delay} milliseconds.`))
    .catch((delay) => console.log(`The delay of ${delay} milliseconds was unsuccessful.`));