window.addEventListener('DOMContentLoaded', () => {
    startGame();
    chooseComputer();
    console.log(computerChoice);
})

const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')

// rockBtn.addEventListener('click', () => {
        
// })

let choices = ['R', 'P', 'S']
let combos = [
    ['R', 'P'],
    ['R', 'S'],
    ['R', 'R'],

    ['P', 'R'],
    ['P', 'S'],
    ['P', 'P'],

    ['S', 'R'],
    ['S', 'P'],
    ['S', 'S']
]

let gameRound;
let computerChoice;
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



// function gameOver(params) {
    
// }
