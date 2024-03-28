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

//TODO - Create a function that takes a number as an argument and returns an array of numbers counting down from the given number to zero
function inputCountdown(int) {
    let countdown = []
    let i = int
    while(i !== -1) {
        countdown.push(i)
        i--
    }
    return countdown
}

console.log(inputCountdown(7))

//TODO - Create a function that takes two numbers and an operator and makes an equation
function equationMaker(number1 = Int, String, number2 = Int) {
    let result = 0
    if(String == "*") {
        result = (number1 * number2)
    } else if(String == "/") {
        result = (number1 / number2)
    } else if(String == "+") {
        result = (number1 + number2)
    } else if(String == "-") {
        result = (number1 - number2)
    } else {
        result = "Not a valid equation"
    }
    return result
}

function equationMakerSwitch(number1 = Int, operator, number2 = Int) {
    let result = 0
    switch(operator) {
        case "+":
            result = number1+number2;
            break;
        case "-":
            result = number1-number2;
            break;
        case "*":
            result = number1*number2;
            break;
        case "/":
            result = number1/number2;
            break;
        default:
            break;
    }
    return result
}

console.log(equationMaker(5, "-", 9))

// Use Switch

// ES6
const calNum2 = (num1, operator, num2) => operator+num2 === "/0" ? "Can not divide by 0!" : eval(num1+operator+num2)

//TODO - Create an array that rotates the values clockwise by one
// The last value is going to be the first value

function rotateArray(arr) {
    let lastValue = arr.pop()
    arr.unshift(lastValue)
    return arr
}

testArrayRT = [1, 2, 3, 4, 5]
console.log(rotateArray(testArrayRT))

//ES6
const rotateArray2 = arr => (arr.unshift(arr.pop()), arr)

// //TODO -  Create a function that takes a given date ("3/26/2024") return the day of the week as a string
// function getDayName(day) {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     let date = new Date(day)
//     return days[date.getDay()]
// }

// console.log(getDayName("3/26/2024"))

// // ES6
// const getDayName2 = day => new Date(day).toLocaleDateString('en-us', {weekday: ''})
// console.log(getDayName2("2024-03-26"))

//TODO - Create a function that can take a flat array (1D) and change it to a nest array to represent an incremental depth level
// Example nestArray([1,2,6,3]) -> [1, [2, [6, [3]]]

function nestArray(arr) {
    if(arr.length == 1) return arr
    let temp = []
    for(let i = 0; 1 < arr.length; i++) temp.push(arr[i])
    return [arr[0], nestArray(temp)]
}

console.log(nestArray([1,2,6,3]))