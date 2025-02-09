//Create an array with 5 elements
let stores = ["ChildrensPlace", "Target", "Walmart", "Gap", "Carters"];

//Display in console
console.log(stores); 
console.log(stores[0]);
console.log(stores[1]);
console.log(stores[2]);
console.log(stores[3]);
console.log(stores[4]);

//Replace element pos 1
stores[1] = "JCPenny"
console.log(stores); 

//Replace element pos 4
stores[4] =  "Shein"
console.log(stores);

//New element added to array
stores.unshift(R="Retail");
console.log(stores);

//Remove element at end of array
let laststore=stores.pop();
console.log(laststore);
console.log(stores); 

