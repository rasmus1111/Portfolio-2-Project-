// Declare fruits and vegetables.
const fruits = ["BANANA", "AVOCADO", "ORANGE","APPLE", "PEACH", "PEAR","CHERRIE","LEMON","MANGO","PLUM"] ;
const vegetables = ["CARROT", "POTATO", "TOMATO", "BROCCOLI","CUCUMBERS", "PUMPKIN","GREEN BEANS","CAULIFLOWER","CABBAGE","SWEET POTATO"] ;

// Declare variables to keep track of the score.
//let displayedItem;
let rightScore = 0;
let wrongScore = 0;

// Function start the game and randomly display fruit or vegetable.
function startGame(){
if(Math.random() > 0.5)
displayFruit();
else
displayVegetable();
}

// Function to display a random fruit.
function displayFruit(){
displayedItem = 'fruit'; 
var index = Math.floor(Math.random()*10); 
document.getElementById("quiz-question").innerHTML = fruits[index]; 
}

// Function to display a random vegetable.
function displayVegetable(){
displayedItem = 'vegie'; 
var index = Math.floor(Math.random()*10); 
document.getElementById("quiz-question").innerHTML = vegetables[index]; 
}

// Function to check the answer if correct update the score
function checkAnswer(item){
if(displayedItem === item){
rightScore = rightScore + 1; 
document.getElementById("right-answer-score").innerHTML = rightScore;
}else{
document.getElementById("wrong-answer-score").innerHTML = ++wrongScore; 
}
// Start the next round
startGame(); 
}
 // Start the game when the page loads.
window.onload = startGame;

// add event listeners to the buttons.
document.getElementById("fruit-button").addEventListener("click", function(){
checkAnswer("fruit");
});
document.getElementById("vegie-button").addEventListener("click", function(){
checkAnswer("vegie");
});