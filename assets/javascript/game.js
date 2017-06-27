  var userScore= 0; 
  var wins= 0;
  var losses = 0;

$(document).ready(function() {
  var Random=Math.floor(Math.random() * (120-19))+19;
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $("#randomNumber").text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var redGem= Math.floor(Math.random()*11+1);
  var greenGem= Math.floor(Math.random()*11+1);
  var blueGem= Math.floor(Math.random()*11+1);
  var yellowGem= Math.floor(Math.random()*11+1);
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 

  //  Declaring variables 
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
//resets the game
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
//adds the wins to the userScore
function winner(){
alert("You won!");
  wins++; 
  $("#numberWins").text(wins);
  reset();
}
//add the losses to the userScore
function loser(){
alert ("You lose!");
  losses++;
  $("#numberLosses").text(losses);
  reset()
}
//sets up click for gems
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

