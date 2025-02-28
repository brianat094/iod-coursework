/*Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator.*/

co
function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + '...' : str;
}
console.log(truncate("When I graduate I want to be a software engineer:", 50)); //What I'd like to be...

function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + '...';
    } else {
        return str;
    }
}
console.log(truncate("When I graduate I want to be a software engineer:", 100)); //What I'd like to be...
