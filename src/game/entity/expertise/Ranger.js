import Dice from '../game/mechanics/Dice.js';

export class Ranger {
	constructor(lvl, modInt, modCon) {
		this.rolls = new Dice();
		this.skills = [ 'Climb', 'Craft', 'Handle Animal', 'Heal', 'Intimidate', 'Knowledge(dungeoneering)',
			'Knowledge(geography)', 'Knowledge(nature)', 'Perception', 'Profession', 'Ride', 'Spellcraft', 'Stealth',
			'Survival', 'Swim' ];
		this.baseAttackBonus = [0, 0, 0, 0];
		this.spellsLVL = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
		this.saves = [0, 0, 0];
		this.startingWealth;
		this.hitPoints;
		this.skillPoints; 
		this.featPoints;

		switch (lvl) {
		case 1:
			this.setLvlOne(modInt, modCon);
			break;
		case 2:
			this.lvlTwo(modInt, modCon);
			break;
		case 3:
			this.lvlThree(modInt, modCon);
			break;
		case 4:
			this.lvlFour(modInt, modCon);
			break;
		case 5:
			this.lvlFive(modInt, modCon);
			break;
		case 6:
			this.lvlSix(modInt, modCon);
			break;
		case 7:
			this.lvlSeven(modInt, modCon);
			break;
		case 8:
			this.lvlEight(modInt, modCon);
			break;
		case 9:
			this.lvlNine(modInt, modCon);
			break;
		case 10:
			this.lvlTen(modInt, modCon);
			break;
		case 11:
			this.lvlEleven(modInt, modCon);
			break;
		case 12:
			this.lvlTwelve(modInt, modCon);
			break;
		case 13:
			this.lvlThirteen(modInt, modCon);
			break;
		case 14:
			this.lvlFourteen(modInt, modCon);
			break;
		case 15:
			this.lvlFithteen(modInt, modCon);
			break;
		case 16:
			this.lvlSeventeen(modInt, modCon);
			break;
		case 17:
			this.lvlEighteen(modInt, modCon);
			break;
		case 19:
			this.lvlNineteen(modInt, modCon);
			break;
		case 20:
			this.lvlTwenty(modInt, modCon);
			break;
		}
	}

	setLvlOne(modInt, modCon) {
		this.baseAttackBonus =[ 1, 0, 0, 0 ];
		this.saves =[ 2, 0, 0 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = 10 + modCon;
	}

	lvlTwo(modInt, modCon) {
		this.baseAttackBonus =[ 2, 0, 0, 0 ];
		this.saves =[ 3, 0, 0 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlThree(modInt, modCon) {
		this.baseAttackBonus =[ 3, 0, 0, 0 ];
		this.saves =[ 3, 1, 1 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlFour(modInt, modCon) {
		this.baseAttackBonus =[ 4, 0, 0, 0 ];
		this.saves =[ 4, 1, 1 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlFive(modInt, modCon) {
		this.baseAttackBonus =[ 5, 0, 0, 0 ];
		this.saves =[ 4, 1, 1 ];
		this.spellsLVL =[ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlSix(modInt, modCon) {
		this.baseAttackBonus =[ 6, 1, 0, 0 ];
		this.saves =[ 5, 2, 2 ];
		this.spellsLVL =[ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlSeven(modInt, modCon) {
		this.baseAttackBonus =[ 7, 2, 0, 0 ];
		this.saves =[ 5, 2, 2 ];
		this.spellsLVL =[ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlEight(modInt, modCon) {
		this.baseAttackBonus =[ 8, 3, 0, 0 ];
		this.saves =[ 6, 2, 2 ];
		this.spellsLVL =[ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlNine(modInt, modCon) {
		this.baseAttackBonus =[ 9, 4, 0, 0 ];
		this.saves =[ 6, 3, 3 ];
		this.spellsLVL =[ 0, 2, 1, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlTen(modInt, modCon) {
		this.baseAttackBonus =[ 10, 5, 0, 0 ];
		this.saves =[ 7, 3, 3 ];
		this.spellsLVL =[ 0, 2, 1, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlEleven(modInt, modCon) {
		this.baseAttackBonus =[ 11, 6, 1, 0 ];
		this.saves =[ 7, 3, 3 ];
		this.spellsLVL =[ 0, 2, 1, 1, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlTwelve(modInt, modCon) {
		this.baseAttackBonus =[ 12, 7, 2, 0 ];
		this.saves =[ 8, 4, 4 ];
		this.spellsLVL =[ 0, 2, 2, 1, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlThirteen(modInt, modCon) {
		this.baseAttackBonus =[ 13, 8, 3, 0 ];
		this.saves =[ 8, 4, 4 ];
		this.spellsLVL =[ 0, 3, 2, 1, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlFourteen(modInt, modCon) {
		this.baseAttackBonus =[ 14, 9, 4, 0 ];
		this.saves =[ 9, 4, 4 ];
		this.spellsLVL =[ 0, 3, 2, 1, 1, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlFithteen(modInt, modCon) {
		this.baseAttackBonus =[ 15, 10, 5, 0 ];
		this.saves =[ 9, 5, 5 ];
		this.spellsLVL =[ 0, 3, 2, 2, 1, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlSixteen(modInt, modCon) {
		this.baseAttackBonus =[ 16, 11, 6, 1 ];
		this.saves =[ 10, 5, 5 ];
		this.spellsLVL =[ 0, 3, 3, 2, 1, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlSeventeen(modInt, modCon) {
		this.baseAttackBonus =[ 17, 12, 7, 2 ];
		this.saves =[ 10, 5, 5 ];
		this.spellsLVL =[ 0, 4, 3, 2, 1, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlEighteen(modInt, modCon) {
		this.baseAttackBonus =[ 18, 13, 8, 3 ];
		this.saves =[ 11, 6, 6 ];
		this.spellsLVL =[ 0, 4, 3, 2, 2, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlNineteen(modInt, modCon) {
		this.baseAttackBonus =[ 19, 14, 9, 4 ];
		this.saves =[ 11, 6, 6 ];
		this.spellsLVL =[ 0, 4, 3, 3, 2, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	lvlTwenty(modInt, modCon) {
		this.baseAttackBonus =[ 20, 15, 10, 5 ];
		this.saves =[ 12, 6, 6 ];
		this.spellsLVL =[ 0, 4, 4, 3, 3, 0, 0, 0, 0, 0 ];
		this.skillPoints = 6 + modInt;
		this.hitPoints = this.rolls.tenSided() + modCon;
	}

	getskills() {
		return this.skills;
	}

	setskills(skills) {
		this.skills = skills;
	}

	getBaseAttackBonus() {
		return this.baseAttackBonus;
	}

	setBaseAttackBonus(baseAttackBonus) {
		this.this.baseAttackBonus = baseAttackBonus;
	}

	getSpellsLVL() {
		return this.spellsLVL;
	}

	setSpellsLVL(spellsLVL) {
		this.this.spellsLVL = spellsLVL;
	}

	getSaves() {
		return this.saves;
	}

	setSaves(saves) {
		this.this.saves = saves;
	}

	setStartingWealth(startingWealth) {
		this.startingWealth = startingWealth;
	}

	setHitPoints(hitPoints) {
		this.this.hitPoints = hitPoints;
	}

	setSkillPoints(skillPoints) {
		this.this.skillPoints = skillPoints;
	}

	setFeatPoints(featPoints) {
		this.featPoints = featPoints;
	}

	getStartingWealth() {
		const diceRolls = this.rolls.multipleRolls(5, 6);
		return this.rolls.combineRolls(diceRolls) * 10;
	}

	getHitPoints() {
		return this.hitPoints;
	}

	getSkillPoints() {
		return this.skillPoints;
	}

	getFeatPoints() {
		return this.featPoints;
	}
}
