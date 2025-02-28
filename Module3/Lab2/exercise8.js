/* The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map([['Dj', '0412312343'], ['Eddie', '0433221117'], ['Faith', '0455221182']]);
console.log(phoneBookDEF);

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEF = new Map([['Dj', '0412312343'], ['Eddie', '0433221117'], ['Faith', '0455221182']]);
console.log(phoneBookDEF);

// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0455221183');
console.log(phoneBookABC);

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
function printPhoneBook(contacts) {
    for (let [name, number] of contacts) {
        console.log(`${name}: ${number}`);
    }
}
printPhoneBook(phoneBookABC);

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);

// f) Print out the full list of names in the combined phone book
console.log(phoneBook.keys());


// Output
// Map(3) { 'Dj' => '0412312343', 'Eddie' => '0433221117', 'Faith' => '0455221182' }
// Map(3) { 'Annabelle' => '0412312343', 'Barry' => '0433221117', 'Caroline' => '0455221183' }
// Annabelle: 0412312343