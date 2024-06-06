// 4.6.2024 1:45PM

// $ npm install @inquirer/prompts

/* Create a function that takes 3 collections of arguments and returns the sum of the product of numbers
Add the result of the first number in each collection multiplied together
to the result of the second number in each collection.

Example: 
product([1,2], [1,1], [2,3])
-> 1*1*2 + 2*1*3 = 8
*/

// Mine - ES5
function product(array1, array2, array3) {
    let result = 0;
    for(let i = 0; i<2; i++) {
        result = result + (array1[i] * array2[i] * array3[i]);
    }
    return result
}

console.log(product([2,2], [3,2], [1,3]));

// Mine - ES6
const productES6 = (array1, array2, array3) => {
    return ((array1[0]*array2[0]*array3[0])+(array1[1]*array2[1]*array3[1]))
}

console.log(productES6([2,2], [3,2], [1,3]));

// Ali
const productAli = (num1,num2) => (num3,num4) => (num5,num6) => (num1*num3*num5) + (num2*num4*num6)

console.log(productAli((2,2), (3,2), (1,3)));

// Create a function that takes an array of strings and return an array, sorted from shortest to longest strings
// Example: stringsSort(["Ali", "Kahwaji", "NMIT"])
// Output: ["Ali", "NMIT", "Kahwaji"]

// function stringsSort(arr) {

// }

// function ascentOrder(arr) {
//     for(let j = 0; j<arr.length; j++) {
//         for(let i = 0; i<arr.length; i++) {
//             if((arr[i]).length > (arr[i+1]).length) {
//                 let string1 = arr[i]
//                 let string2 = arr[i+1]
//                 arr[i] = string2
//                 arr[i+1] = string1
//             }
//         }
//     }
//     return arr
// };

// // console.log(stringsSort(["Ali", "Kahwaji", "NMIT"]));
// console.log(ascentOrder(["Ali", "Kahwaji", "NMIT"]));

