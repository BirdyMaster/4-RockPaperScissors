

window.addEventListener('DOMContentLoaded', () => {
    startGame();
    chooseComputer();
})

const choiceBtns = document.querySelectorAll('button')
let choices = ['R', 'P', 'S']
// let combos = [
//     ['R', 'P'],
//     ['R', 'S'],
//     ['R', 'R'],

//     ['P', 'R'],
//     ['P', 'S'],
//     ['P', 'P'],

//     ['S', 'R'],
//     ['S', 'P'],
//     ['S', 'S']
// ]
let winningCombos = [
    ['R', 'S'],
    ['P', 'R'],
    ['S', 'P'],


]
let drawCombos = [
    ['R', 'R'],
    ['P', 'P'],
    ['S', 'S']
]

let gameRound;
let computerChoice;
let playerChoice;
let computerScore;
let playerScore;



function startGame() {
    gameRound = 0
    computerScore = 0
    playerScore = 0
    chooseComputer()
}

function chooseComputer() {
    let choice = choices[Math.floor(Math.random() * 3)]
    computerChoice = choice;
    
}

choiceBtns.forEach(btn => btn.addEventListener('click', (e) => {
    const clickedBtn = e.target
    const userChoice = clickedBtn.classList[0]
    compareChoices(userChoice, computerChoice)

    //reset compChoice for next click
    chooseComputer()
}))




function compareChoices(userChoice, computerChoice) {
    console.log('User ==> ' + userChoice);
    console.log('Comp ==> ' + computerChoice);

    let userWin = winningCombos.some(combo => 
        combo[0] == userChoice && combo[1] == computerChoice)

    let draw = drawCombos.some(combo => 
        combo[0] == userChoice && combo[1] == computerChoice)


    if (userWin) {
    console.log('User wins')
   } else if (draw) {
     console.log('Draw')
   }  else {
      console.log('Comp wins');
   }
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
}


// function gameOver(params) {
    
// }

