
<=== Rock Paper Scissors ===>

<---Launch----------------------->

- When page loads, gameRound is set to 0
- computerScore = 0
- playerScore = 0
- All 9 possible combos are defined
- Computer automatically generates a choice from list "choices"
- User can click on 3 buttons (r/p/s)
- Define function gameOver()

=> window start --> function startGame() {gameRound = 0; computerChoice}
=> let gameRound = 0
=> let computerScore = 0
=> let playerScore = 0
=> let combos = [9 combos]
=> function computerChoice() {random(list)}
=> 3Buttons = AddEventListener
=> function gameOver()

<---onClick----------------------->

- Compare computer-/userChoice, to the 9 combos
- winner score = ++
- gameRound++
- Restart computerChoice
- userChoice = undefined
- function checkForWin() {
    if game round > 5, function gameOver();
    if difference between pointt > 2, gameOver()
}

=> function compareChoices() {
    user-/computerChoice ++}

=> computerChoice()
=> userChoice = undefined;

=> function gameOver() {
    endScreen.classList.add ('show')
}

=> function checkForWin() {
    if (gameRound > 5) {
        function gameOver()
    } else if (
        (compChoice - userChoice) > 2 || (userChoice - compChoice) > 2)
    ) {gameOver()}

=> gameRound++

<---restartBtn----------------------->

=> startGame()
