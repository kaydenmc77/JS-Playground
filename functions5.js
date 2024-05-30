//28.05.24 2:09PM

//Create a function that takes a string and returns the first character that repeats. If there are no repeats, return -1

// Mine
function repeatCharacter(String) {
    let explodedString = String.split("");
    for(let i = 0; i<explodedString.length; i++) {
        letterToCheck = explodedString[i];
        let characterCounter = 0;
        for(let j = 0; j<explodedString.length; j++) {
            if(letterToCheck == explodedString[j]) {
                characterCounter++
            }
        }
        if(characterCounter > 1) {
            return letterToCheck
        }
    }
    return -1
}

console.log(repeatCharacter("allegory"))

// Ali
function repeatChar(chars) {
    for(let i = 0; i<chars.length; i++) {
        if(chars.slice(0,i).includes(chars[i])) {
            return chars[i]
        }
    }
    return '-1'
}

//Ali but ES6 UNFINISHED
const repeatCharES6 = (chars) => {
    for(let i = 0; i<chars.length; i++) {
        chars.slice(0,i).includes(char[i])
    }
    return '-1'
}

//Create a function that reverses letters in a string but keeps the numbers in their current order
function reverseChars(String) {
    explodedString = String.split("")
    for(let i = 0; i<explodedString; i++) {
        
    }
}

console.log(reverseChars("he14je02"))
//Expected output: ej14eh02