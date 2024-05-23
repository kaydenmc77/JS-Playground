// 23.5.24 1:16PM

// Create a function that counts the number of digits
function countDigitsES5(Int) {
    strungInt = Int.toString()
    console.log(strungInt)
    result = strungInt.length
    return result
}

// Maths.abs forces integers into just their number, excluding the - symbol. toString converts the number into a string which we can find the length of (without the -) to find the digit count
const countDigitsES6 = (Int) => {return (Math.abs(Int).toString()).length};

console.log(countDigitsES6(-567))

// Create a function that takes an array of int as an argument and return the same array in ascending order, using sort() method
// You have to sort the array creating ES5 self made functions, not built in methods
function ascentOrder(arr) {
    for(let j = 0; j<arr.length; j++) {
        for(let i = 0; i<arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                number1 = arr[i]
                number2 = arr[i+1]
                arr[i] = number2
                arr[i+1] = number1
            }
        }
    }
    return arr
};

console.log(ascentOrder([13, 6, -9, 2, 76, 4, -19, -56, 3, 100]))

// Create a function

