//TODO - Create a function which takes 2 strings (p1 and p2) as arguments and returns a string 
// Stating the winner (rock,paper, scissors)

// NOTE - Game condition
// If p1 wins return the string "The winner is p1"
// If p2 wins return the string "The winner is p2"
// If they are the same then return "It's a draw"

function rps(p1 = String, p2 = String) {
    if(p1 === p2) {
        return console.log("It's a draw")
    }
    else if (p1 === 'R' && p2 === 'S') {
        return console.log("The winner is p1")
    }
    else if (p1 === 'P' && p2 === 'R') {
        return console.log("The winner is p1")
    }
    else if (p1 === 'S' && p2 === 'P') {
        return console.log("The winner is p1")
    }
    else {
        return console.log("The winner is p2")
    }
}

// rps('p'.toUpperCase(), 's'.toUpperCase())

//ANCHOR - JavaScript built in functions
function rpsTwo(p1, p2) {
    let obj = {
        Rock: 'Scissors',
        Scissors: 'Paper',
        Paper: 'Rock'

    }
}
