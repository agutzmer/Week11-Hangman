
// 	word.js should contain all of the methods which will check the letters guessed versus the random word selected.

checkCorrectLetter = function(teamName, userInput ) {	

		if ( teamName.toLowerCase().indexOf (userInput) == -1)  {
			return (false);
		}
		else {
			return (true);
	}	
}
