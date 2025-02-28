/* Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */ 
console.log(ucFirstLetters("los angeles") ) //Los Angeles
console.log(ucFirstLetters("new york") ) //New York
console.log(ucFirstLetters("san francisco") ) //San Francisco
function ucFirstLetters(str) {
    let words = str.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result.push(word[0].toUpperCase() + word.slice(1));    }
    return result.join(' ');
}
// Create a function that takes a string as a parameter and returns the string with the first
// character of each sentence changed into a capital letter, as in the example below. Test it with
// different strings.
console.log(ucFirstSentences("los angeles is a city. it is in california.") ) //Los angeles is a city. It is in california.
console.log(ucFirstSentences("new york is a city. it is in new york state.") ) //New york is a city. It is in new york state.
