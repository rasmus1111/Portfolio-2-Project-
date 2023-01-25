// Declare fruits and vegetables.
const fruits = ["BANANA", "AVOCADO", "ORANGE", "APPLE", "PEACH", "PEAR", "CHERRIE", "LEMON", "MANGO", "PLUM"];
const vegetables = ["CARROT", "POTATO", "TOMATO", "BROCCOLI", "CUCUMBERS", "PUMPKIN", "GREEN BEANS", "CAULIFLOWER", "CABBAGE", "SWEET POTATO"];

const gameArea = document.getElementById("game-area");
const buttonArea = document.getElementById("button-area");

// Declare variables to keep track of the score.
let STATE = {
  status: 'IDLE',
  wrongScore: 0,
  rightScore: 0,
  displayedItem: "fruit",
}


function displayQuestionUI(type) {
   console.log(type)

  let questionArray = type === "fruit" ? fruits : vegetables;

   var index = Math.floor(Math.random() * questionArray.length);
   document.getElementById("quiz-question").innerHTML = questionArray[index];
}

// Function to check the answer if correct update the score
function checkAnswer(currentState, type) {

  if (currentState.displayedItem === type) {
    currentState.rightScore = currentState.rightScore + 1;
  } else {
    currentState.wrongScore = currentState.wrongScore + 1;
  }

  // update next quiz question
  currentState.displayedItem = (Math.random() > 0.5) ? "fruit" : "vegie"

  if (currentState.rightScore === 3) {
    currentState.status = "VICTORY"
  }
  if (currentState.wrongScore === 3) {
    currentState.status = "LOSS"
  }

  return {...currentState}
}

// add event listeners to the buttons.
// Looked up on google
document.getElementById("fruit-button").addEventListener("click", function () {
  handleQuizClick("fruit")
});

document.getElementById("vegie-button").addEventListener("click", function () {
  handleQuizClick("vegie")
});

document.getElementById('get-started-button').addEventListener('click', function () {
  console.log("hello click")

  buttonArea.style.display= "none";
  gameArea.style.display= "block";

  const newState = {...STATE, rightScore: 0, wrongScore: 0, status: "IDLE"}

  console.log({newState})
  STATE = newState

  updateUI(newState)
})

function handleQuizClick(type) {
  let state = checkAnswer(STATE, type); 
  console.log(state)
  updateUI(state)
}

function updateUI(currentState) {
  displayQuestionUI(currentState.displayedItem)

  document.getElementById("right-answer-score").innerHTML = currentState.rightScore;
  document.getElementById("wrong-answer-score").innerHTML = currentState.wrongScore;

  if (currentState.status === "VICTORY") {
    document.getElementById('victory-message').innerHTML = 'YOU WON!';
    gameArea.style.display = 'none' 
    buttonArea.style.display = 'block' }
  if (currentState.status === "LOSS") {
    document.getElementById('victory-message').innerHTML = 'YOU LOST!'; 
    gameArea.style.display = 'none'
    buttonArea.style.display = 'block'
  };

}