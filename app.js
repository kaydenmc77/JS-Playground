// Create a function that converts hours into seconds

function convertHoursToSeconds(hour = Int) {
    let seconds = hour*3600
    return seconds
}

console.log(convertHoursToSeconds(4))

const hourConversion = (int) => int*3600
console.log(hourConversion(3))

// Create a function that calculates the area of a rectangle, if the arguments are invalid, your function must return -1
function findPerimeter(length = Int, width = Int) {
    let area = 0
    let lengths = 0
    let widths = 0
    if(length >= 1) {
        lengths = length*2
        if(width >= 1) {
            widths = width*2
        }
        else {
            area = -1
        }
    }
    else {
        area = -1
    }
    area = lengths+widths
    return area
}

console.log(findPerimeter(12, 16))

// const findNewArea = (length = Int, width = Int) => length ? width : null , area=((length*2)+(width*2));
// console.log(findNewArea(3, 4))

const areaTwo = (height = Int, width = Int) => {
    let result = width * height
    return Number.isInteger(result) ? result : -1
}
console.log(areaTwo(3, 4))

const areaThree = (h2, w2) => Number.isInteger(h2, w2) ? h2*w2 : -1;

// Create a function that takes a number as an argument, then increments it by one and return result
function incrementNumberES5(number = Int) {
    let incrementedNumber = number+1
    return incrementedNumber
}

const incrementNumberES6 = (number = Int) => number+1 
console.log(incrementNumberES6(3))

// Create a function to concatenate two integer arrays
function concatenateArrays(Array1 = arr, Array2 = array) {
    for(let i = 0; i < Array2.length; i++) {
        if(Number.isInteger(Array2[i])) {
            Array1.push(Array2[i])
        }
    }
    return Array1
}

console.log(concatenateArrays([1, 2, 3], [4, 5, 6, 7]))

const concatenateArraysES6 = (arr1 = arr, arr2 = arr) => arr1.concat(arr2);

const concatenateArraysES6v2 = (arr1, arr2) => [...arr1, ...arr2];

// Create a function that takes an object as an argument to find the volume of a box, (w, l ,h)
// Return the volume of the box
// Ex. box({w: 3, l: 6, h: 2})

let box = ({
    width: 3,
    length: 6,
    height: 2
})

function findVolume(box = Object) {
    let boxArr = Object.values(box) 
    let volume = boxArr[0] * boxArr[1] * boxArr[2]
    return volume
}

console.log(findVolume(box))

const volumeOfBox = (obj) => obj.h * obj.w * obj.l

console.log(volumeOfBox(box))