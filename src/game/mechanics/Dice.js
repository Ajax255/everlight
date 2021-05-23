export default class Dice{
	constructor() { }

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	}
	
	fourSided() {
		return this.getRandomInt(1, 4);
	}

	sixSided() {
		return this.getRandomInt(1, 6);
	}

	eightSided() {
		return this.getRandomInt(1, 8);
	}

	tenSided() {
		return this.getRandomInt(1, 10);
	}

	twelveSided() {
		return this.getRandomInt(1, 12);
	}

	twentySided() {
		return this.getRandomInt(1, 20);
	}

	percentage() {
		return this.getRandomInt(0, 9) * 10 + this.getRandomInt(0, 10);
	}

	multipleRolls(rolls, sided) {
		let diceRolls = [];// Holds dice rolls

		for (let i = 0; i < rolls; i++) {
			switch (sided) {
			case 4:
				diceRolls.push(this.fourSided());
				break;
			case 6:
				diceRolls.push(this.sixSided());
				break;
			case 10:
				diceRolls.push(this.tenSided());
				break;
			case 12:
				diceRolls.push(this.twelveSided());
				break;
			case 20:
				diceRolls.push(this.twentySided());
				break;
			case 100:
				diceRolls.push(this.percentage());
				break;
			}
		}
		return diceRolls;
	}

	startingStats() {
		let rollHolder = this.rollStats();
	
		rollHolder = this.removeLowestState(rollHolder);
		
		return this.calcStats(rollHolder);
	}

	rollStats(){
		let rollHolder = [];

		for (let i = 0; i < 6; i++) {
			rollHolder.push([]);
			for (let r = 0; r < 4; r++) {
				rollHolder[i][r] = this.sixSided();
			}
		}

		return rollHolder;
	}

	removeLowestState(rollHolder){
		for (let i = 0; i < 6; i++) {
			if (rollHolder[i][0] < rollHolder[i][1] || rollHolder[i][0] < rollHolder[i][2]
					|| rollHolder[i][0] < rollHolder[i][3]) {
				rollHolder[i][0] = 0;
			} else if (rollHolder[i][1] < rollHolder[i][0] || rollHolder[i][1] < rollHolder[i][2]
					|| rollHolder[i][1] < rollHolder[i][3]) {
				rollHolder[i][1] = 0;
			} else if (rollHolder[i][2] < rollHolder[i][0] || rollHolder[i][2] < rollHolder[i][1]
					|| rollHolder[i][2] < rollHolder[i][3]) {
				rollHolder[i][2] = 0;
			} else if (rollHolder[i][3] < rollHolder[i][0] || rollHolder[i][3] < rollHolder[i][1]
					|| rollHolder[i][3] < rollHolder[i][2]) {
				rollHolder[i][3] = 0;
			}
		}

		return rollHolder;
	}

	combineRolls(rolls) {
		let combinedRolls = 0;

		for (let roll of rolls) {
			combinedRolls += roll;
		}

		return combinedRolls;
	}

	calcStats(rollHolder){
		let stats = [];

		for (let i = 0; i < 6; i++) {
			stats.push(this.combineRolls(rollHolder[i]));
		}

		return stats;
	}
}

