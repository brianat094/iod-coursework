/*10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a) Print the total number of minutes that have passed so far today
const minutesPassedToday = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassedToday + ' minutes have passed so far today')

//b) Print the total number of seconds that have passed so far today
const secondsPassedToday = minutesPassedToday * 60 + today.getSeconds();
console.log(secondsPassedToday + ' seconds have passed so far today')

//c) Calculate and print your age as: 'I am x years, y months and z days old'
const birthDate = new Date('YYYY-MM-DD'); // Replace with your birth date
console.log(`I am ${years} years, ${months} months and ${days} days old`);

//d) Write a function daysInBetween(date1, date2) which calculates and returns the
//amount of days in between the two given dates.
function daysInBetween(date1, date2) {
    const oneDayMs = 24 * 60 * 60 * 1000;
    const diffMs = Math.abs(date2 - date1);
    return Math.round(diffMs / oneDayMs);
}
