/* 10. The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }
    const person1 = new Person('Bri', 28);
    const person2 = new Person('Edward', 29);
    console.log(person1);
    console.log(person2);
    class PersonClass { 
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.human = true;
        }
        canDrive() {
            return this.age >= 16;
        }
    } 
    const person3 = new PersonClass('Morgan', 27);
    console.log(person3);
    console.log(person3.canDrive());
    console.log(person2.canDrive());
    console.log(person1.canDrive());
// Output:
// Person { name: 'Bri', age: 28, human: true }
// Person { name: 'Edward', age: 29, human: true }
// PersonClass { name: 'Morgan', age: 27, human: true }
// true
// true
// true
// The canDrive method returns true if the person is 16 years old or older.
// The person1, person2, and person3 objects are instances of the Person and PersonClass constructors.
