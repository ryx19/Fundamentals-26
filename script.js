/*
How many hours did you spend on this assignment?:
8-9
What part of the assignment did you spend the most time on?:
If else logic

How comfortable did you feel with this assignment? (1-5):
3

Is there anything in this code that you feel pleased about?:
What's one aspect of your code you would like specific, elaborate feedback on?:
That the code functionality is working. 
*/

// HELPER function
// Function that randomly chooses scissors, paper or stone
var randomNum = function (options) {
  var optionsIndex = Math.floor(Math.random() * options.length);
  return options[optionsIndex];
};

//GLOBAL STATES
// Add a state that keeps track a win, loss, computer win, user win rate
var winNum = 0;
var loseNum = 0;
var drawNum = 0;
var totalNum = 0;
var winRate = 0;
// Add a feature to collect user name
var userName = "";

// game mode reverse or normal
var currentGameMode = "";

// Main function
var main = function (input) {
  // Variables
  var myOutputValue = "";
  var options = ["scissors", "paper", "stone"];
  var randomChoice = randomNum(options);
  var input = input.toLowerCase(); // convert input to lowercase

  var normalWinningCondition =
    (input == "scissors" && randomChoice == "paper") ||
    (input == "stone" && randomChoice == "scissors") ||
    (input == "paper" && randomChoice == "stone");
  var normalLosingCondition =
    (input == "scissors" && randomChoice == "stone") ||
    (input == "stone" && randomChoice == "paper") ||
    (input == "paper" && randomChoice == "scissors");
  var drawCondition = input == randomChoice;

  // checks for user name
  if (userName === "") {
    userName = input;
    myOutputValue = `Welcome ${userName}, please input "normal" or "reverse" to select the game mode.`;
  }
  // if game mode empty
  else if (currentGameMode == "") {
    // within the game mode empty esle if block, if input is normal or reverese, assign it to game mode
    if (input == "normal" || input == "reverse") {
      currentGameMode = input;
      myOutputValue = `Started with the game mode set to: ${currentGameMode}. <br> Enter either scissors, paper, stone.`;
    } // else keep asking for normal or reverse
    else {
      myOutputValue = `Please input "normal" or "reverse".`;
    }
    // exits the game mode empty block as game mdoe is not empty. now checks the input is valid or not.
    // now at this point it will not run the userName check and currentGameMode check as both already has existing values.
  } else if (input !== "scissors" && input !== "paper" && input !== "stone") {
    myOutputValue =
      "You have entered an incorrect value! Please enter either scissors, paper, stone.";
  }

  // Messages
  // if game mode is set to reverse, ues losing condition as new winning condition, same as the other
  if (currentGameMode == "normal") {
    if (drawCondition) {
      drawNum += 1;
      myOutputValue = `DRAW! You selected ${input}, the computer selected ${randomChoice}. <br> Number of wins: ${winNum} <br> Number of loses: ${loseNum} <br> Number of draws: ${drawNum} <br> Number of guesses: ${totalNum} <br> ${userName}'s Win percentage: ${winRate}%`;
    } else if (normalWinningCondition) {
      winNum += 1;
      myOutputValue = `WIN! You selected ${input}, the computer selected ${randomChoice}. <br> Number of wins: ${winNum} <br> Number of loses: ${loseNum} <br> Number of draws: ${drawNum} <br> Number of guesses: ${totalNum} <br> ${userName}'s Win percentage: ${winRate}%`;
    } else if (normalLosingCondition) {
      loseNum += 1;
      myOutputValue = `LOSE! You selected ${input}, the computer selected ${randomChoice}. <br> Number of wins: ${winNum} <br> Number of loses: ${loseNum} <br> Number of draws: ${drawNum} <br> Number of guesses: ${totalNum} <br> ${userName}'s Win percentage: ${winRate}%`;
    }
  } else {
    if (drawCondition) {
      drawNum += 1;
      myOutputValue = `DRAW! You selected ${input}, the computer selected ${randomChoice}. <br> Number of wins: ${winNum} <br> Number of loses: ${loseNum} <br> Number of draws: ${drawNum} <br> Number of guesses: ${totalNum} <br> ${userName}'s Win percentage: ${winRate}%`;
    } else if (normalLosingCondition) {
      winNum += 1;
      myOutputValue = `WIN! You selected ${input}, the computer selected ${randomChoice}. <br> Number of wins: ${winNum} <br> Number of loses: ${loseNum} <br> Number of draws: ${drawNum} <br> Number of guesses: ${totalNum} <br> ${userName}'s Win percentage: ${winRate}%`;
    } else if (normalWinningCondition) {
      loseNum += 1;
      myOutputValue = `LOSE! You selected ${input}, the computer selected ${randomChoice}. <br> Number of wins: ${winNum} <br> Number of loses: ${loseNum} <br> Number of draws: ${drawNum} <br> Number of guesses: ${totalNum} <br> ${userName}'s Win percentage: ${winRate}%`;
    }
  }
  // Define the variables here after determining game result
  totalNum += 1;

  // calculate win rate
  winRate = (winNum / totalNum) * 100;
  return myOutputValue;
};
