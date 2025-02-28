/*Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator. */
// a) Using a for loop and the conditional operator
function camelCase(cssProp) {
    let camelCased = '';
    for (let i = 0; i < cssProp.length; i++) {
        if (cssProp[i] === '-') {
            camelCased += cssProp[i + 1].toUpperCase();
            i++;
        } else {
            camelCased += cssProp[i];
        }
    }
    return camelCased;
}
console.log(camelCase('margin-left')) // marginLeft

// b) Create variants of the camelCase function without for loops
function camelCase(cssProp) {
    let camelCased = '';
    let i = 0;
    while (i < cssProp.length) {
        if (cssProp[i] === '-') {
            camelCased += cssProp[i + 1].toUpperCase();
            i++;
        } else {
            camelCased += cssProp[i];
        }
        i++;
    }
    return camelCased;
}





console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display