//9. Given the below salaries object, perform the following tasks.

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

//a) Write a function sumSalaries(salaries) that calculates and returns the total of all the salaries in the object.
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}
//b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
function topEarner(salaries) {
    let maxSalary = 0;
    let maxEarner = '';
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxEarner = name;
        }
    }
    return maxEarner;
}





