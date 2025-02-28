/*3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. 
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
*/
const animals = ['Tiger', 'Giraffe']
console.log(animals);
// a) Add 2 new values to the end
animals.push('Elephant', 'Eagle');
console.log(animals);
// b) Add 2 new values to the beginning
animals.unshift('Lion', 'Zebra');
console.log(animals);
// c) Sort the values alphabetically
animals.sort();
console.log(animals);
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals.splice(middleIndex, 1, newValue);
}
replaceMiddleAnimal('Dog');
console.log(animals);
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
console.log(findMatchingAnimals('e')); // ['Elephant', 'Eagle']
console.log(findMatchingAnimals('l')); // ['Lion']
console.log(findMatchingAnimals('z')); // ['Zebra']
console.log(findMatchingAnimals('t')); // ['Tiger']
console.log(findMatchingAnimals('g')); // ['Giraffe']
console.log(findMatchingAnimals('d')); // ['Dog']
