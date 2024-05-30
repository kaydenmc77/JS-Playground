//30.5.24 1:11PM

//Create a function to rotate an array (shift values over either left or right)
function rotateArray(arr, num) {
    let result = arr
    for(let i = 0; i<num; i++) {
        let firstNumber = arr.pop() 
        arr.unshift(firstNumber)
        result = arr
    }
    return result
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 4))
