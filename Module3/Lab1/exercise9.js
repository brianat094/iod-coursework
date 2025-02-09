/* 9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent */

const teamSports = ['soccer', 'basketball', 'baseball', 'track'];
const dog1 = {name: 'Lexie', breed: 'Frenchie', age: 1};
const cat1 = {name: 'Sprinkles', breed: 'Siamese', age: 2};

// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
const moreSports = teamSports;
moreSports.push('fooball');
moreSports.unshift('track');
console.log(moreSports);

// b) Create a new dog2 variable equal to dog1 and give it a new value
const dog2 = dog1;
dog2.name = 'Ollie';
console.log(dog2);

// c) Create a new cat2 variable equal to cat1 and change its name property
const cat2 = cat1;
cat2.name = 'Sox';
console.log(cat2);

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
console.log(teamSports);
console.log(dog1);
console.log(cat1);
// Yes, they have changed because the new variables are references to the original variables, not copies of them.

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
const moreSports2 = [...teamSports];
moreSports2.push('gymanstics');
moreSports2.unshift('swimming');
console.log(moreSports2);

const cat2 = {...cat1};
cat2.name = 'Sox';
console.log(cat2);

// The original variables remain unchanged because the new variables are copies of the original variables, not references to them.
console.log(teamSports);
console.log(dog1);
console.log(cat1);

// Output:
// ['soccer', 'basketball', 'baseball', 'track',  ]
// { name: 'Lexie', breed: 'Frenchie', age: 1 }
// { name: 'Sprinkles', breed: 'Siamese', age: 2 }
// ['soccer', 'basketball', 'baseball', 'track',  ]
// { name: 'Ollie', breed: 'Frenchie', age: 1 }
// { name: 'Sox', breed: 'Siamese', age: 2 }
