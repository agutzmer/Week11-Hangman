// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

// Upon initiation of a session create a display name of underscores and spaces

convertToDisplayName = function (teamName) {
	var teamDisplayName = '';

	for (i=0; i<teamName.length; i++) {
		teamDisplayName = teamDisplayName.concat ('_ ');
	}
	return teamDisplayName;
} 


// Find the indicated letter in the team name and place that in the team display name
replaceLetterInDisplayName = function (teamName, teamDisplayName, letter) {
	var updateName = '';
	var a;
	var b;
	var c;

	for (i=0; i<teamName.length; i++) {
		a = teamName[i];
		b = letter.trim();
		c = teamDisplayName [i*2];

		if (a.toLowerCase() == b.toLowerCase() ){
			updateName = updateName.concat(a);
		}
		else {
			updateName = updateName.concat(c);	
		}
		updateName = updateName.concat(' ');
	}
	return updateName;
}