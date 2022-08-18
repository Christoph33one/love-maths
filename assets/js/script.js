// wait for the DOM to stop loading before running the game
// get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName ("button");

    for ( let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute ("data-type") === "submit") {
                alert("You clicked submit");
            } else {
                    let gameType = this.getAttribute("data-type");
                    runGame(gameType);
            }
            
        })
    }
    runGame("addition");
})

/**
 * The main game "loop" called when the script is first loaded
 * and after the users anwser has been processed 
 */
function runGame (gameType) {
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestions(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`)
        throw`unknow game type: ${gameType}. Aborting!`;
    }
}


function checkAnswer () {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestions(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
   
}

function displaySubtractQuestion() {

}
 
function displayMultiplyQuestion() {

}
