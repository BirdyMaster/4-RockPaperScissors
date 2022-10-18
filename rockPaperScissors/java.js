

window.addEventListener('DOMContentLoaded', () => {
    startGame();
    chooseComputer();
})

const choiceBtns = document.querySelectorAll('.chooseBtn')
const userScoreText = document.querySelector('.userScoreText')
const computerScoreText = document.querySelector('.computerScoreText')
const alertText = document.querySelector('.alertText')
const endScreen = document.querySelector('.endScreen')
const restartBtn = document.querySelector('.restartBtn')

const userWindow = document.querySelector('.score.user')
const compWindow = document.querySelector('.score.comp')
const endText = document.querySelector('.endText')

let choices = ['R', 'P', 'S']
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

let computerChoice;
let playerChoice;

let computerScore;
let playerScore;



function startGame() {
    computerScore = 0
    playerScore = 0
    chooseComputer()
    endScreen.classList.remove ('show')

    userScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function chooseComputer() {
    let choice = choices[Math.floor(Math.random() * 3)]
    computerChoice = choice;
    
}

choiceBtns.forEach(btn => btn.addEventListener('click', (e) => {
    const clickedBtn = e.target
    const userChoice = clickedBtn.classList[1]
    compareChoices(userChoice, computerChoice)

    //reset compChoice for next click
    checkForWin()
    chooseComputer()
}))

function compareChoices(userChoice, computerChoice) {

    let userWin = winningCombos.some(combo => 
        combo[0] == userChoice && combo[1] == computerChoice)
    let draw = drawCombos.some(combo => 
        combo[0] == userChoice && combo[1] == computerChoice)

    //either user wins, draws, or loses
    if (userWin) {
        playerScore++;
        userScoreText.textContent = playerScore;

        userWindow.classList.add('green')
        setTimeout(() => {
            userWindow.classList.remove('green')
        }, 1000);

   } else if (draw) {
        alertText.textContent = "It's a draw"
        alertText.classList.add ('show')
        setTimeout(() => {
            alertText.classList.remove ('show')
        }, 1000);

        userWindow.classList.add('yellow')
        compWindow.classList.add('yellow')
        setTimeout(() => {
            userWindow.classList.remove('yellow')
            compWindow.classList.remove('yellow')
        }, 1000);

   }  else {
        computerScore++;
        computerScoreText.textContent = computerScore;

        compWindow.classList.add('red')
        setTimeout(() => {
            compWindow.classList.remove('red')
        }, 1000);
   }

}

function checkForWin() {
    if (computerScore == 3 || playerScore == 3) {
        gameOver()
    }
}

function gameOver() {
    endScreen.classList.add ('show')

    if (playerScore == 3) {
        endText.textContent = 'Sweet victory baby!'
    } else if (computerScore == 3) {
        endText.textContent = 'The computers are taking over!'
    }
}

restartBtn.addEventListener('click', startGame)



