//SECTION - JavaScript Arrays

//NOTE - Arrays are a special type of objects that can be accessed through numbers from zero up to N-1
var arr = []

arr = ['Ali', 1, 'Food', 100]
// console.log(arr[2])

//SECTION - push() adding a new item to the end of an array
arr.push('Joe')
// console.log(arr)

//SECTION - pop() removes an item from the end of an array
let lastItem = arr.pop()
// console.log(lastItem)

//ANCHOR - JavaScript for loop, the best way to iterate any array mathematically through a for loop.
for(let i = 0; i<arr.length; i++){
// console.log(i, arr[i])
}

//SECTION - Add an item to the beginning of an array
arr.unshift('apples')
// console.log(arr)

//NOTE - Remove an item from the beginning of an array.
let firstItem = arr.shift()
// console.log(firstItem)
// console.log(arr)

//ANCHOR - JavaScript iterators
let a = [-5, -4, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method which is used to join two or more arrays (concatanation)
let result = a.concat(b, c)
// console.log(result)

let numbers = [2,4,7,8,9]

let isEven = (num) => {
    if(num % 2 == 0) {
        // console.log(num + ' is even')
        return
    } else {
        // console.log(num + ' is odd')
        return false
    }
}
// console.log(isEven(numbers))

numbers.every(isEven)

console.log(numbers.some(isEven))

for(let j = 0; j < numbers.length; j++) {
    let temp = numbers[j]
    if( temp % 2 == 0 ) {
        console.log(temp + ' is an even number')
    } else {
        console.log(temp + ' is an odd number')
    }
}