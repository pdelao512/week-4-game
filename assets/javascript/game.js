  //Declare score variables
  var userScore= 0; 
  var wins= 0;
  var losses = 0;

//Set Game start number to random number between 19 and 120
$(document).ready(function() {
  var Random=Math.floor(Math.random() * (120-19))+19;
  
  
  $("#randomNumber").text(Random);
  
  // Set  gem variables to random numbers between 1 and 12  
  var redGem= Math.floor(Math.random()*11+1);
  var greenGem= Math.floor(Math.random()*11+1);
  var blueGem= Math.floor(Math.random()*11+1);
  var yellowGem= Math.floor(Math.random()*11+1);
  
  
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
//resets the game 
// reset game number 
//reset gem values
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $("#randomNumber").text(Random);
      redGem= Math.floor(Math.random()*11+1);
      greenGem= Math.floor(Math.random()*11+1);
      blueGem= Math.floor(Math.random()*11+1);
      yellowGem= Math.floor(Math.random()*11+1);
      userScore= 0;
      $("#finalScore").text(userScore);
      } 
      
//adds  wins to the userScore
function winner(){
alert("You won!");
  wins++; 
  $("#numberWins").text(wins);
  reset();
}
//add losses to the userScore
function loser(){
alert ("You lose!");
  losses++;
  $("#numberLosses").text(losses);
  reset()
}
//set up click functions for gems
  $("#red").on("click", function(){
    userScore = userScore + redGem;
    console.log("New userScore= " + userScore);
    $("#finalScore").text(userScore); 
          //sets win/lose conditions
        if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        }   
  })  
  $("#green").on("click", function(){
    userScore = userScore + greenGem;
    console.log("New userTotal= " + userScore);
    $("#finalScore").text(userScore); 
        if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        } 
  })  
  $("#blue").on("click", function(){
    userScore = userScore + blueGem;
    console.log("New userScore= " + userScore);
    $("#finalScore").text(userScore);

//sets win/lose conditions
          if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        } 
  })  
  $("#yellow").on("click", function(){
    userScore = userScore + yellowGem;
    console.log("New userScore= " + userScore);
    $("#finalScore").text(userScore); 
      
          if (userScore == Random){
          winner();
        }
        else if ( userScore > Random){
          loser();
        }
  });   
});

