/*3. Which of the following console.log messages will print? Why?*/

if (0) console.log('#1 zero is true') //will not print because 0 is false
if ("0") console.log('#2 zero is true') //will print because string is not empty
if (null) console.log('null is true') //will not print null is false
if (-1) console.log('negative is true') //will print because -1 is not 0
if (1) console.log('positive is true') //will print because 1 is not 0