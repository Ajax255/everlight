export class Dice{
	roll = 0;// Holder for dice

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

	fourSided() {
		roll = getRandomInt(1, 4);
		return roll;
	}

	sixSided() {
		roll = getRandomInt(1, 6);
		return roll;
	}

	eightSided() {
		roll = getRandomInt(1, 8);
		return roll;
	}

	tenSided() {
		roll = getRandomInt(1, 10);;
		return roll;
	}

	twelveSided() {
		roll = getRandomInt(1, 12);
		return roll;
	}

	twentySided() {
		roll = 1 + getRandomInt(1, 20);
		return roll;
	}

	percentage() {
		roll = getRandomInt(0, 9) * 10 + dice.nextInt(0, 10);
		return roll;
	}

	multipleRolls(rolls, sided) {
		diceRolls = [];// Holds dice rolls

		diceRolls.clear();
		for (i = 0; i < rolls; i++) {
			switch (sided) {
			case 4:
				diceRolls.push(fourSided());
				break;
			case 6:
				diceRolls.push(sixSided());
				break;
			case 10:
				diceRolls.push(tenSided());
				break;
			case 12:
				diceRolls.push(twelveSided());
				break;
			case 20:
				diceRolls.push(twentySided());
				break;
			case 100:
				diceRolls.push(percentage());
				break;
			}
		}
		return diceRolls;
	}

	combineRolls(rolls) {
		combinedRolls = 0;

		for (roll of rolls) {
			combinedRolls += roll;
		}

		return combinedRolls;
	}

	startingStats() {
		stats = new int[6];
		rollHolder = new int[6][4];
	    statAmount = 0; 

		for (i = 0; i < 6; i++) {
			for (r = 0; r < 4; r++) {
				rollHolder[i][r] = 1 + dice.nextInt(6);
			}
		}

		for (i = 0; i < 6; i++) {
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

		for (i = 0; i < 6; i++) {
			statAmount = 0;
			for (r = 0; r < 4; r++) {
				statAmount += rollHolder[i][r];
			}
			stats[i] = statAmount;
		}
		return stats;
	}

	randomStats() {
		stats = [];
	    rollHolder = [];
		statAmount = 0;

		for (i = 0; i < 6; i++) {
            rollHolder.push([])
			for (r = 0; r < 4; r++) {
				rollHolder[i][r] = sixSided();
			}
		}

		for (i = 0; i < 6; i++) {
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

		for (i = 0; i < 6; i++) {
			statAmount = 0;
			for (r = 0; r < 4; r++) {
				statAmount += rollHolder[i][r];
			}
			stats.push(statAmount);
		}

		return stats;
	}


}