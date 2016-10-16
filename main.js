//  main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
var game = require('./game.js') 
var word = require('./word.js') 
var letter = require('./letter.js') 
var inquirer = require('inquirer');



var userGuesses = function (teamName, teamDisplayName) {

// Get a letter guess or get the word "uncle.""
inquirer.prompt([

	{
		type: "input",
		message: "Enter a letter or enter the word uncle to give up. ",
		name: "guess"
	}
]
).then(function (user) {
	if (user.guess.includes ("uncle")) {      // if they type uncle give them the name
			console.log ("OK. Here is the team name. ", teamName);
		}
	// if they type more than 1 letter and not uncle, throw error message
	else if (user.guess.length > 1 ) {
		console.log ("Only enter 1 letter or enter the word uncle. Try again.")
		}
	else {
		var outcome = checkCorrectLetter (teamName, user.guess);   // check if they typed a correct letter
			if (outcome) {  // they typed a correct letter
	
				teamDisplayName = replaceLetterInDisplayName (teamName, teamDisplayName, user.guess);

				console.log ("Correct! The team name has ", user.guess, "\n", teamDisplayName, "\n");

				if (teamDisplayName.indexOf('_') == -1) {   // if there are no underscores in the display name they guessed it
						console.log ("You won!  You named that team! ", teamName, "!");
						return;
				}
			}
			else {  	// they typed an incorrect letter
				console.log ("There is no ", user.guess, " in the team name. Keep trying. \n");
			}
		}
		
	userGuesses (teamName, teamDisplayName);  // keep playing until the name is guessed
//} );
} );
}


var teamName = chooseRandomTeam ();  // get a team

teamDisplayName = convertToDisplayName (teamName); // create a display name with underscores and spaces

userGuesses (teamName, teamDisplayName);  // play the guessing game