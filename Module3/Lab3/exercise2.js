/*2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed. */
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//a) What order will the four tests below print in? Why?
/*#4: Not delayed at all - This message is printed immediately because it is not delayed.
#3: Delayed by 0ms - This message is printed next because it has a delay of 0ms, which means it will be executed as soon as the current call stack is clear.
#2: Delayed by 20ms - This message is printed after a delay of 20ms.
#1: Delayed by 100ms - This message is printed after a delay of 100ms.*/

//b) Rewrite delayMsg as an arrow function
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
const timeoutId = setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms');

//d) Use clearTimeout to prevent the fifth test from printing at all.
clearTimeout(timeoutId);