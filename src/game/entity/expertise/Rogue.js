import Dice from '../../mechanics/Dice.js';

export default class Rogue {
	constructor(lvl, modInt, modCon) {
		this.rolls = new Dice();
		this.skills = [ 'Acrobatics', 'Appraise', 'Climb', 'Craft', 'Diplomacy', 'Disable Device',
			'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge(dungeoneering)', 'Knowledge(local)', 'Linguistics',
			'Perception', 'Preform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Stealth', 'Swim',
			'Use Magic Device' ];
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
		this.saves =[ 0, 2, 0 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = 8 + modCon;
	}

	lvlTwo(modInt, modCon) {
		this.baseAttackBonus =[ 1, 0, 0, 0 ];
		this.saves =[ 0, 3, 0 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlThree(modInt, modCon) {
		this.baseAttackBonus =[ 2, 0, 0, 0 ];
		this.saves =[ 1, 3, 1 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlFour(modInt, modCon) {
		this.baseAttackBonus =[ 3, 0, 0, 0 ];
		this.saves =[ 1, 4, 1 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlFive(modInt, modCon) {
		this.baseAttackBonus =[ 3, 0, 0, 0 ];
		this.saves =[ 1, 4, 1 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlSix(modInt, modCon) {
		this.baseAttackBonus =[ 4, 0, 0, 0 ];
		this.saves =[ 2, 5, 2 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlSeven(modInt, modCon) {
		this.baseAttackBonus =[ 5, 0, 0, 0 ];
		this.saves =[ 2, 5, 2 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlEight(modInt, modCon) {
		this.baseAttackBonus =[ 6, 1, 0, 0 ];
		this.saves =[ 2, 6, 2 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlNine(modInt, modCon) {
		this.baseAttackBonus =[ 6, 1, 0, 0 ];
		this.saves =[ 3, 6, 3 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlTen(modInt, modCon) {
		this.baseAttackBonus =[ 7, 2, 0, 0 ];
		this.saves =[ 3, 7, 3 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlEleven(modInt, modCon) {
		this.baseAttackBonus =[ 8, 3, 0, 0 ];
		this.saves =[ 3, 7, 3 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlTwelve(modInt, modCon) {
		this.baseAttackBonus =[ 9, 4, 0, 0 ];
		this.saves =[ 4, 8, 4 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlThirteen(modInt, modCon) {
		this.baseAttackBonus =[ 9, 4, 0, 0 ];
		this.saves =[ 4, 8, 4 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlFourteen(modInt, modCon) {
		this.baseAttackBonus =[ 10, 5, 0, 0 ];
		this.saves =[ 4, 9, 4 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlFithteen(modInt, modCon) {
		this.baseAttackBonus =[ 11, 6, 1, 0 ];
		this.saves =[ 5, 9, 5 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlSixteen(modInt, modCon) {
		this.baseAttackBonus =[ 12, 7, 2, 0 ];
		this.saves =[ 5, 10, 5 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlSeventeen(modInt, modCon) {
		this.baseAttackBonus =[ 12, 7, 2, 0 ];
		this.saves =[ 5, 10, 5 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlEighteen(modInt, modCon) {
		this.baseAttackBonus =[ 13, 8, 3, 0 ];
		this.saves =[ 6, 11, 6 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlNineteen(modInt, modCon) {
		this.baseAttackBonus =[ 14, 9, 4, 0 ];
		this.saves =[ 6, 11, 6 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
	}

	lvlTwenty(modInt, modCon) {
		this.baseAttackBonus =[ 15, 10, 5, 0 ];
		this.saves =[ 6, 12, 6 ];
		this.spellsLVL =[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		this.skillPoints = 8 + modInt;
		this.hitPoints = this.rolls.eightSided() + modCon;
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
		const diceRolls = this.rolls.multipleRolls(4, 6);
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
