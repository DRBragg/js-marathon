let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');
let rocket = require('./rocket');

let ourShip = new Spaceship('NCC_1701');

let crewNames = ['Picard', 'Troy', 'Riker', 'Crusher', 'Data', 'Le Forge'];

let trainedCrew = [];

let trainCrew = (crew) => {
	trainedCrew = crew.map(function (crewName){
		return crewName = new CrewMember(crewName, true);
	});
};

trainCrew(crewNames);

let countdown = (num) => {
	setTimeout(function(){
		if (num > 0) {
			console.log(num);
			return countdown(num - 1);
		} else {
			console.log('We\'re blasting off!!');
			ourShip.takeOff();
		}
	}, 1000);
}

let launchPad = (ourShip, crewMembers) => {
	console.log("Countdown initiated, stand by for launch!");
	crew = ourShip.loadCrew(crewMembers);
	console.log(`Today's captain will be ${ourShip.whoIsCaptain(crew)}`);
	ourShip.mountPropulsion(rocket);
	ourShip.propulsion.addFuel(5);
	countdown(10);
};

launchPad(ourShip, trainedCrew);