import Dice from '../../mechanics/Dice.js';

export default class Wizard {
	constructor(lvl, modInt, modCon) {
		this.rolls = new Dice();
		this.skills = [ 'Appraise', 'Craft', 'Fly', 'Heal', 'Knowledge(all)', 'Linguistics', 'Profession', 'Spellcraft' ];
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
		this.baseAttackBonus =[ 0, 0, 0, 0 ];
		this.saves =[ 0, 0, 2 ];
		this.spellsLVL =[ 3, 1, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = 6 + modCon;
	}

	lvlTwo(modInt, modCon) {
		this.baseAttackBonus =[ 1, 0, 0, 0 ];
		this.saves =[ 0, 0, 3 ];
		this.spellsLVL =[ 4, 2, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlThree(modInt, modCon) {
		this.baseAttackBonus =[ 1, 0, 0, 0 ];
		this.saves =[ 1, 1, 3 ];
		this.spellsLVL =[ 4, 2, 1, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlFour(modInt, modCon) {
		this.baseAttackBonus =[ 2, 0, 0, 0 ];
		this.saves =[ 1, 1, 4 ];
		this.spellsLVL =[ 4, 3, 2, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlFive(modInt, modCon) {
		this.baseAttackBonus =[ 2, 0, 0, 0 ];
		this.saves =[ 1, 1, 4 ];
		this.spellsLVL =[ 4, 3, 2, 1, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlSix(modInt, modCon) {
		this.baseAttackBonus =[ 3, 0, 0, 0 ];
		this.saves =[ 2, 2, 5 ];
		this.spellsLVL =[ 4, 3, 3, 2, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlSeven(modInt, modCon) {
		this.baseAttackBonus =[ 3, 0, 0, 0 ];
		this.saves =[ 2, 2, 5 ];
		this.spellsLVL =[ 4, 4, 3, 2, 1, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlEight(modInt, modCon) {
		this.baseAttackBonus =[ 4, 0, 0, 0 ];
		this.saves =[ 2, 2, 6 ];
		this.spellsLVL =[ 4, 4, 3, 3, 2, 0, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlNine(modInt, modCon) {
		this.baseAttackBonus =[ 4, 0, 0, 0 ];
		this.saves =[ 3, 3, 6 ];
		this.spellsLVL =[ 4, 4, 4, 3, 2, 1, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlTen(modInt, modCon) {
		this.baseAttackBonus =[ 5, 0, 0, 0 ];
		this.saves =[ 3, 3, 7 ];
		this.spellsLVL =[ 4, 4, 4, 3, 3, 2, 0, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlEleven(modInt, modCon) {
		this.baseAttackBonus =[ 5, 0, 0, 0 ];
		this.saves =[ 3, 3, 7 ];
		this.spellsLVL =[ 4, 4, 4, 4, 3, 2, 1, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlTwelve(modInt, modCon) {
		this.baseAttackBonus =[ 6, 1, 0, 0 ];
		this.saves =[ 4, 4, 8 ];
		this.spellsLVL =[ 4, 4, 4, 4, 3, 3, 2, 0, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlThirteen(modInt, modCon) {
		this.baseAttackBonus =[ 6, 1, 0, 0 ];
		this.saves =[ 4, 4, 8 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 3, 2, 1, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlFourteen(modInt, modCon) {
		this.baseAttackBonus =[ 7, 2, 0, 0 ];
		this.saves =[ 4, 4, 9 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 3, 3, 2, 0, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlFithteen(modInt, modCon) {
		this.baseAttackBonus =[ 7, 2, 0, 0 ];
		this.saves =[ 5, 5, 9 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 4, 3, 2, 1, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlSixteen(modInt, modCon) {
		this.baseAttackBonus =[ 8, 3, 0, 0 ];
		this.saves =[ 5, 5, 10 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 4, 3, 3, 2, 0 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlSeventeen(modInt, modCon) {
		this.baseAttackBonus =[ 8, 3, 0, 0 ];
		this.saves =[ 5, 5, 10 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 4, 4, 3, 2, 1 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlEighteen(modInt, modCon) {
		this.baseAttackBonus =[ 9, 4, 0, 0 ];
		this.saves =[ 6, 6, 11 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 4, 4, 3, 3, 2 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlNineteen(modInt, modCon) {
		this.baseAttackBonus =[ 9, 4, 0, 0 ];
		this.saves =[ 6, 6, 11 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
	}

	lvlTwenty(modInt, modCon) {
		this.baseAttackBonus =[ 10, 5, 0, 0 ];
		this.saves =[ 6, 6, 12 ];
		this.spellsLVL =[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ];
		this.skillPoints = 2 + modInt;
		this.hitPoints = this.rolls.sixSided() + modCon;
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
		const diceRolls = this.rolls.multipleRolls(2, 6);
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
