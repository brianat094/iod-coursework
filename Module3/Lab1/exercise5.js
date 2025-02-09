/*5. Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.*/

function getGreeting(name) { 
return 'Hello ' + name + '!';
}

const getGreeting = function(name) {
    console.log('Hello ' + name + '!');
}

   
const getGreeting = (name) => {
    console.log('Hello ' + name + '!');
}
