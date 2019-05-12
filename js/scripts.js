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
//USER-INTERFACE LOGIC
$(document).ready(function() {
    $("#rolled1").click(function() {
      $("#rolled1value").text(genRandom())
    });
    $("#rolled2").click(function() {
      $("#rolled2value").text(genRandom())
 });
});
