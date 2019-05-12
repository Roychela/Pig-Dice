//BUSINESS LOGIC
function Player() {
  this.totalScore = 0;
  this.turnScore = 0;
}
var playerOne = new Player()
var playerTwo = new Player()

function genRandom() {
   randomNumber=Math.floor(Math.random()*6) +1;
  return randomNumber;
 }
 Player.prototype.rolledPlay = function() {
  var rollDice = genRandom();
  if(rollDice === 1){
    this.turnScore = 0;
    alert("Oops you rolled a 1!! Your turn is over. Its your opponents turn to play.")
  } else {
    this.turnScore +=rollDice;
}
  return rollDice;
}
Player.prototype.holdPlay = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  return this.totalScore;
}
Player.prototype.gameWinner = function() {
  if (playerOne.totalScore >= 100) {
       alert("Player one has won the game!!!");
     }else if (playerTwo.totalScore >= 100) {
       alert("Player two has won the game!!!!")
     }
   }
Player.prototype.reset = function() {
    this.totalScore = 0;
    this.turnScore = 0;
      };
//USER-INTERFACE LOGIC
$(document).ready(function() {
  $("#rolled1").click(function() {
    $("#rolled1value").text(playerOne.rolledPlay())
    $("#turnScore1").text(playerOne.turnScore)
  });
  $("#rolled2").click(function() {
    $("#rolled2value").text(playerTwo.rolledPlay())
    $("#turnScore2").text(playerTwo.turnScore)
  });
  $("#hold1").click(function() {
    $("#totalscore1").text(playerOne.holdPlay())
    playerOne.gameWinner();
  });
  $("#hold2").click(function() {
    $("#totalscore2").text(playerTwo.holdPlay())
    playerTwo.gameWinner();
  });
  $("#reset").click(function() {
        playerOne.reset();
        playerTwo.reset();
  });      
});
