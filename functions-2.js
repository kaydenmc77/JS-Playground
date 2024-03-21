//TODO - Create a function that takes an array and return types of the elements (data types) in a new array
function convertToDateType(arr) {
    let dataArray = []
    for(i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string') {
            dataArray.push("String")
        }
        else if(!isNaN(arr[i])) {
            dataArray.push("Int")
        }
    }
    return console.log(dataArray)
}

let testArray = ["Array", 1, 6, "Jeff"]
convertToDateType(testArray)

//ES6 - Same function, one line
/* 
Difference between ES5 and ES6
ES5 supports primitive data types that are string, 
number, boolean, null, and undefined. In ES6, there 
are some additions to JavaScript data types. It introduced 
a new primitive data type 'symbol' for supporting unique values.
*/
const arrTypesNew = arr => arr.map(x => typeof x)

//TODO - Create a function that takes 2D arrays and returns the sum on min values in each row
/*
Ex: sumMinArrays(
    [1,2,3,4,5]
    [6,7,8,9,10]
    [11,12,13,14,15]
)
Output -> 1+6+11 = 18
*/

function sumMinArrays(arr) {
    let sumTotal = 0;

    for(let i = 0; i < arr.length; i++) {
        let y = arr[i][0]
        for(let x = 0; x < arr[i].length; x++) {
            if(y > arr[i][x]) {
                y = arr[i][x]
            }
    }
    sumTotal += y 
    }
    return sumTotal
}

let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]
let array3 = [11,12,13,14,15]

let largeArray = [array1, array2, array3]

console.log(sumMinArrays(largeArray))

//ES6 
const sumMinArraysNew = arr => arr.reduce((a,b) => a + Math.min(...b),0) 

console.log(sumMinArraysNew(largeArray))

//TODO - Create a function that takes an array, return duplicate numbers in new array

//ES6
const arraysDuplicateNumbers = arr => (
    arr= [...new Set([...arr.filter(num =>
        arr.indexOf(num) !== arr.lastIndexOf(num)
        )])].sort((a,b) => a-b),
        arr.length ? arr: null
)

//TODO - Create a function that takes an array of numbers or letters and return a string.

function arrayToString(arr) {
    let result = ""
    for(let i = 0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result
}

let forConversionArray = [1, 2, 3, "Four", "5", 6]
console.log(arrayToString(forConversionArray))

//TODO - Create a function that takes an array with numbers, transform that array into a mirror

function mirrorArray(arr) {
    for(let i = arr.length-2; i >= 0; i--) {
        arr.push(arr[i])
    }
    return arr
}

let arrayToMirror = [1, 2, 3, 4, 5]
let arrayToMirror2 = [6, 7, 8, 9, 10]
console.log(mirrorArray(arrayToMirror))

//ES6
const toMirror = arr => [...arr, ...arr.reverse().slice(1)]
console.log(toMirror(arrayToMirror))

//TODO - Create a function that returns the total number of arrays inside a given main array
function totalOfArrays(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            count++
        }
    }
    return count
}

let arrayOfArrays = [arrayToMirror, arrayToMirror2, 3]
console.log(totalOfArrays(arrayOfArrays))