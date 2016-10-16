


var nflTeams = ["Ravens", "Bengals", "Browns", "Steelers", "Texans", "Colts", "Jaguars", "Titans", "Bills", "Dolphins", "Patriots", "Jets", "Patriots", "Jets", "Broncos", "Chiefs", "Raiders", "Chargers", "Packers", "Bears", "Vikings", "Lions", "Falcons", "Saints", "Panthers", "Buccaneers", "Cowboys", "Giants", "Eagles", "Redskins", "Cardinals", "Rams", "49ers", "Seahawks" ];

chooseRandomTeam = function () {
	var randomIndex = Math.floor(Math.random() * nflTeams.length ); 
	return (nflTeams [ randomIndex ]);			
};

