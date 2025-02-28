function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);


//a) Create a debounce(func) decorator
//b) Extend the debounce decorator function to take a second argument ms
//c) Extend debounce to allow the original debounced function printMe to take an argument
//msg which is included in the console.log statement

function debounce(func, ms = 1000) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), ms);
    };
}
printMe = debounce(printMe, 1000); // create this debounce function for a)

// Fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(() => printMe('#1'), 100);
setTimeout(() => printMe('#2'), 200);
setTimeout(() => printMe('#3'), 300);

