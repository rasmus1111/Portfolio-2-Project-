
const fruits = ["BANANA", "AVOCADO", "ORANGE","APPLE", "PEACH", "PEAR","CHERRIE","LEMON","MANGO","PLUM"] ;
const vegetables = ["CARROT", "POTATO", "TOMATO", "BROCCOLI","CUCUMBERS", "PUMPKIN","GREEN BEANS","CAULIFLOWER","CABBAGE","SWEET POTATO"] ;


let displayedItem;
let rightScore = 0;
let wrongScore = 0;


function startGame(){
if(Math.random() > 0.5)
displayFruit();
else
displayVegetable();
}


function displayFruit(){
displayedItem = 'fruit'; 
var index = Math.floor(Math.random()*10); 
document.getElementById("quiz-question").innerHTML = fruits[index]; 
}


function displayVegetable(){
displayedItem = 'vegie'; 
var index = Math.floor(Math.random()*10); 
document.getElementById("quiz-question").innerHTML = vegetables[index]; 
}

function checkVictory(){
   if (rightScore === 10) {
  document.getElementById('victory-message').innerHTML = 'YOU WON!';
  console.log('i am showing because i won')
  resetScore()
  }
}

 function checkLoss(){
  if(wrongScore === 10){
  document.getElementById('loss-message').innerHTML = 'YOU LOST!';
  console.log('losser!')
  resetScore()
 }
}
 function resetScore(){
      document.getElementById("right-answer-score").innerHTML = 0;
      rightScore = 0;
      document.getElementById("wrong-answer-score").innerHTML = 0;
      wrongScore =0;
}
function resetMessage(){
  if (wrongScore === 0 && rightScore === 0) {
    document.getElementById('loss-message').innerHTML = '';
    document.getElementById('victory-message').innerHTML = '';
  
  }
 }

function checkAnswer(item){
if(displayedItem === item){
   rightScore = rightScore + 1; 
document.getElementById("right-answer-score").innerHTML = rightScore;
}else{
    wrongScore = wrongScore + 1;
  document.getElementById("wrong-answer-score").innerHTML = wrongScore; 
}

startGame(); 
}
 
 
window.onload = startGame;



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