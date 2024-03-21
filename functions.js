function greeting() {
    return console.log('Hello World')
}

// greeting()

//TODO - Write a function that adds any two numbers and return the result

function addition(x = Int, y = Int) {
    let result = x + y
    return console.log(result)
}

let num1 = 3
let num2 = 7

// addition(num1, num2)

//TODO - Write a function that takes an array, checks whether the sum of its elements is even or odd, the value should return "even" or "odd"

function arraySumCheck(providedArray = arr) {
    let sum = 0
    for(i = 0; i<providedArray; i++) {
        sum += providedArray[i]
    }
    if(sum % 2 == 0) {
        console.log("The sum of the array is even")
    } else {
        console.log("The sum of the array is odd")
    }
    return
}

array = [3, 7, 8, 2]

arraySumCheck(array)

//TODO - Write a function that takes an array of various items and only returns integers from it

integerCheckArray = [3, 'Mike', 95, 'Food', 7]

// My function
function integerCheck(arrayToCheck = arr) {
    let newArray = []
    for(i = 0; i<arrayToCheck.length; i++) {
        if(isNaN(arrayToCheck[i]) == false) {
            newArray.push(arrayToCheck[i])
        }
    }
    return console.log(newArray)
}

// Ali's function
function newIntegerCheck(arrayToCheck = arr) {
    let secondNewArray = []
    for(i = 0; i<arrayToCheck.length; i++) {
        if(Number.isInteger(arrayToCheck[i])) {
            secondNewArray.push(arrayToCheck[i])
        }
    }
    return console.log(secondNewArray)
}

integerCheck(integerCheckArray)
newIntegerCheck(integerCheckArray)

//TODO - Write a function that takes an array with numbers and return an arrau with the elements mutliplied by 2
//arrayByTwo [2,5,4] > [4,10,8]

function arrayMultiplication(arrayToMultiply = arr) {
    let multipliedArray = []
    for( i = 0; i<arrayToMultiply.length; i++) {
        multipliedArray.push(arrayToMultiply[i]*2)
    }
    return console.log("Old array = " + arrayToMultiply + ", New array = " + multipliedArray)
}

arrayMultiplication(array)
