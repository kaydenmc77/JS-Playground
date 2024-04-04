//TODO - Create a function that takes an array of stringified numbers as parameter and return an array of numbers
// Example: ["1", "2", "3.5"} -> [1, 2, 3.5]

// My ES5
function convertToInt(arr) {
    let intArray = []
    for(let i = 0; i < arr.length; i++) {
        intArray.push(parseFloat(arr[i]))
    }
    return intArray
}

let convertableArray = ["1", "2", "3.5"]
// console.log(convertToInt(convertableArray))

//TODO - Create a function that returns (true) if al parameters are truth and false otherwise.
// Example: checkParam(true, true, false) -> false
// checkParam(5, 1, 3, 0) -> false
// False values are: false, 0 and ""

function checkParam(arr) {
    let value = false
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0 && arr[i] !== "" && arr[i] !== false) {
            value = true
        }
    }
    return value
}

let checkableParam = [5, 1, 3, ""]
let checkableParam2 = [5, 1, 3, 7]
console.log(checkParam(checkableParam))
console.log(checkParam(checkableParam2))

//ES6
const checkParam2 = (...args) => args.every(Boolean)

// Create a function to check if an array contains a particular number

function checkForInt(arr) {
    let value = false
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 5) {
            value = true
        }
    }
    return value
}