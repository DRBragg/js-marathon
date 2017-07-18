let rocket = {
	fuel:  0,

	addFuel(amount){
		this.fuel += amount;
		console.log(`Fuel remaining: ${this.fuel}`);
	},

	fire(){
		if (this.fuel > 0) {
			this.fuel--;
			console.log(`The rockets have fired! Fuel remaining: ${this.fuel}`);
			return true;
		} else {
			console.log(`The rockets failed to fire...`);
			return false;
		}
	},
}

module.exports = rocket;