/*1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.*/

function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

/*a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1*/

let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

// Testing independence
counter1(); // 3
counter2(); // 3

/*b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0) */

let counter3 = makeCounter(10);
counter3(); // 11
counter3(); // 12

/* c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/

let counter4 = makeCounter(0, 5);
counter4(); // 5
counter4(); // 10


