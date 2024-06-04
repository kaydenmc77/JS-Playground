//30.5.24 1:11PM

//Create a function to rotate an array (shift values over either left or right)
function rotateArray(arr, num) {
    let result = arr
    for(let i = 0; i<num; i++) {
        let lastNumber = arr.pop() 
        arr.unshift(lastNumber)
        result = arr
    }
    return result
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 4))

//Create a function that takes an array of values, removes all duplicates

//Mine - Doesn't work
function declutterArray(array) {
    let result = array
    for(let i = 0; i<array.length; i++) {
        let counter = 0;
        for(let j = 0; j<array.length; j++) {
            if(array[j] == array[i]) {
                counter++
                if(counter >= 2) {
                    let theArray = array.slice(j, j)

                    console.log(array)
                }
            }
        }
    }
    return result
}

console.log(declutterArray([1, 2, 3, 3, 6, 6, 8]))

//Isaac
function cleanArray(arr) {
    let repeats = []
        arr.forEach(value => {
            if(!repeats.includes(value)) {
                repeats.push(value)
            }
        });
        return repeats
    }

console.log(cleanArray([1,1,4,3,5,'dog','cat','dog']))

//Create a function that 
