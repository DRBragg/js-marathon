class Spaceship{
	constructor(name, crew = [], propulsion = null){
		this.name = name,
		this.crew = crew,
		this.propulsion = propulsion;
	}

	loadCrew(crewMembersArray){
		crewMembersArray.forEach((member) => {
			this.crew.push(member);
			console.log(`The crew of todays voyage includes ${member['name']}!`);
		});
	}

	whoIsCaptain(crew){
		let crewLength = this.crew.length;
		let captain = this.crew[Math.floor(Math.random() * crewLength)];
		return captain['name'];
	}

	mountPropulsion(newRocket){
		this.propulsion = newRocket;
	}

	takeOff(){
		if (this.propulsion.fire() == true) {
			console.log('BRRRRRRRRRRRRRAAAAAAAAAAAAPPPPPPPPPPP!!!');
		}
	}
}


module.exports = Spaceship;