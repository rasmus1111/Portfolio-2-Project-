// Declare fruits and vegetables.
const fruits = ["BANANA", "AVOCADO", "ORANGE","APPLE", "PEACH", "PEAR","CHERRIE","LEMON","MANGO","PLUM"] ;
const vegetables = ["CARROT", "POTATO", "TOMATO", "BROCCOLI","CUCUMBERS", "PUMPKIN","GREEN BEANS","CAULIFLOWER","CABBAGE","SWEET POTATO"] ;

// Declare variables to keep track of the score.
let displayedItem;
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

function checkVictory(){
   //if rightscore equels to 10 then victory pop up 
   if (rightScore === 3) {
  document.getElementById('victory-message').innerHTML = 'YOU WON!';
  console.log('i am showing because i won')
  //console.log( 'you won', rightScore);
  resetScore()
  
   }
  
   console.log('rightScose is', rightScore);
   
    //rightScore === 10
   
}

 function checkLoss(){
  if(wrongScore === 3){
  document.getElementById('loss-message').innerHTML = 'YOU LOST';
  console.log('losser!')
  resetScore()
 }
}


 function resetScore(){
      document.getElementById("right-answer-score").innerHTML = 0;
      rightScore = 0;
      document.getElementById("wrong-answer-score").innerHTML = 0;
      wrongScore =0;
      

      console.log('reset')

      console.log('rightScore',rightScore)
      console.log('wrongScore',wrongScore)
      
   
 }

 function resetMessage(){
  if (wrongScore === 0 && rightScore === 0) {
    document.getElementById('loss-message').innerHTML = '';
    document.getElementById('victory-message').innerHTML = '';
  
  }
 }
// Function to check the answer if correct update the score
function checkAnswer(item){
if(displayedItem === item){
   rightScore = rightScore + 1; 
document.getElementById("right-answer-score").innerHTML = rightScore;
}else{
    wrongScore = wrongScore + 1;
  document.getElementById("wrong-answer-score").innerHTML = wrongScore; 
}
// Start the next round
startGame(); 
}
 // Start the game when the page loads.
 // looked up on google. 
window.onload = startGame;

// add event listeners to the buttons.
// Looked up on google
document.getElementById("fruit-button").addEventListener("click", function(){
resetMessage()
checkAnswer("fruit"); 
checkVictory()
checkLoss() 


});
document.getElementById("vegie-button").addEventListener("click", function(){
resetMessage()
checkAnswer("vegie");
checkVictory()
checkLoss() 

});