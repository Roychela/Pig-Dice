# Pig-Dice Game
#### Pig-Dice game is a die game that enables users to have fun in an interactive way.
#### By **Roy Chela**
## Description
Pig-Dice allows users the capability to roll dice, hold their current score and reset scores once a winner has been declared.Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.
## Live demo
https://roychela.github.io/Pig-Dice/
## How to contribute
* Clone repo
  -git clone https://github.com/Roychela/Pig-Dice.git
* git clone repo link to a favourable location in your computer.
* Navigate to the folder.
  -cd/path to/repo location on computer
* Open via text editor.
## BDD
| Behaviour       | Input          | Output |
| ------------- |:-------------:| -----:|
| click on roll     | roll button | dice roll score, turn score|
| click on hold    | hold button      |  total score|
| total score>=100 | hold button     |    alert winner|
* When you click ROLL button expected DICE ROLL output is any random number between 1 and 6 and a TURN SCORE output of a sum of the rolled dice number. I.e Dice Roll Input: 5  Turn Score output: 5
Dice Roll Input: 2  Turn score Output: 7 etc
* When you click on HOLD expected output is your cumulative score is held i.e Turn score output: 7 total score output: 7
* When total score output: >=100 expected output: alert of the game winner.
g## Known Bugs
None
## Technologies Used
* HTML.
* CSS.
* JavaScript.
* Jquery .
## Support and contact details
If you run into any issues or have questions, ideas or concerns contact roychela@gmail.com
### License
*MIT*
https://github.com/Roychela/Pig-Dice/blob/master/LICENSE
Copyright (c) 2019 **Roy Chela**
