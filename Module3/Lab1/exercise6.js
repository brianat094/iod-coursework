/* a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */
const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
    return 'Nice to meet you.';
    }
    }
    inigo.greeting(westley)



const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting: function() {
        console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName);
    }
};

inigo.greeting();

function getCatchPhrase(person) {
    if (person === 'Inigo Montoya') {
        console.log('You killed my father. Prepare to die.');
    } else {
        console.log('Hello, my name is ' + person);
    }
}

getCatchPhrase('Inigo Montoya'); = () => {
    console.log(person === 'Inigo Montoya' ? 'You killed my father. Prepare to die.' : 'Hello, my name is ' + person); 
} 
