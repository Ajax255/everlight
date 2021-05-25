export class LevelController {
	/*
        public void lvlKeeper(int lvl, int exp, int[] modifiers, Player player) {
            int oldLevel = lvl;
    
            if (exp >= 2000) {
                lvl = 2;
            } else if (exp >= 5000) {
                lvl = 3;
            } else if (exp >= 9000) {
                lvl = 4;
            } else if (exp >= 15000) {
                lvl = 5;
            } else if (exp >= 23000) {
                lvl = 6;
            } else if (exp >= 35000) {
                lvl = 7;
            } else if (exp >= 51000) {
                lvl = 8;
            } else if (exp >= 75000) {
                lvl = 9;
            } else if (exp >= 105000) {
                lvl = 10;
            } else if (exp >= 155000) {
                lvl = 11;
            } else if (exp >= 220000) {
                lvl = 12;
            } else if (exp >= 315000) {
                lvl = 13;
            } else if (exp >= 445000) {
                lvl = 14;
            } else if (exp >= 635000) {
                lvl = 15;
            } else if (exp >= 890000) {
                lvl = 16;
            } else if (exp >= 1300000) {
                lvl = 17;
            } else if (exp >= 1800000) {
                lvl = 18;
            } else if (exp >= 2550000) {
                lvl = 19;
            } else if (exp >= 3600000) {
                lvl = 20;
            }
    
            if (oldLevel != lvl) {
                player.setLevel(lvl);
                switch (player.getProfession()) {
                case "Cleric":
                    Cleric cleric = new Cleric(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(cleric.getBaseAttackBonus());
                    player.setSaves(cleric.getSaves());
                    player.setSpellsLVL(cleric.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + cleric.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + cleric.getHitPoints());
                    cleric = null;
                    break;
                case "Druid":
                    Druid druid = new Druid(player.getLevel(), player.getModifierStats()[3], player.getModifierStats()[2]);
                    player.setBaseAttackBonus(druid.getBaseAttackBonus());
                    player.setSaves(druid.getSaves());
                    player.setSpellsLVL(druid.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + druid.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + druid.getHitPoints());
                    druid = null;
                    break;
                case "Fighter":
                    Fighter fighter = new Fighter(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(fighter.getBaseAttackBonus());
                    player.setSaves(fighter.getSaves());
                    player.setSpellsLVL(fighter.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + fighter.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + fighter.getHitPoints());
                    fighter = null;
                    break;
                case "Paladin":
                    Paladin paladin = new Paladin(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(paladin.getBaseAttackBonus());
                    player.setSaves(paladin.getSaves());
                    player.setSpellsLVL(paladin.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + paladin.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + paladin.getHitPoints());
                    paladin = null;
                    break;
                case "Ranger":
                    Ranger ranger = new Ranger(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(ranger.getBaseAttackBonus());
                    player.setSaves(ranger.getSaves());
                    player.setSpellsLVL(ranger.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + ranger.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + ranger.getHitPoints());
                    ranger = null;
                    break;
                case "Rogue":
                    Rogue rogue = new Rogue(player.getLevel(), player.getModifierStats()[3], player.getModifierStats()[2]);
                    player.setBaseAttackBonus(rogue.getBaseAttackBonus());
                    player.setSaves(rogue.getSaves());
                    player.setSpellsLVL(rogue.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + rogue.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + rogue.getHitPoints());
                    rogue = null;
                    break;
                case "Sorcerer":
                    Sorcerer sorcerer = new Sorcerer(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(sorcerer.getBaseAttackBonus());
                    player.setSaves(sorcerer.getSaves());
                    player.setSpellsLVL(sorcerer.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + sorcerer.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + sorcerer.getHitPoints());
                    sorcerer = null;
                    break;
                case "Wizard":
                    Wizard wizard = new Wizard(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(wizard.getBaseAttackBonus());
                    player.setSaves(wizard.getSaves());
                    player.setSpellsLVL(wizard.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + wizard.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + wizard.getHitPoints());
                    wizard = null;
                    break;
                case "Alchemist":
                    Alchemist alchemist = new Alchemist(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(alchemist.getBaseAttackBonus());
                    player.setSaves(alchemist.getSaves());
                    player.setSpellsLVL(alchemist.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + alchemist.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + alchemist.getHitPoints());
                    alchemist = null;
                    break;
                case "Summoner":
                    Summoner summoner = new Summoner(player.getLevel(), player.getModifierStats()[3],
                            player.getModifierStats()[2]);
                    player.setBaseAttackBonus(summoner.getBaseAttackBonus());
                    player.setSaves(summoner.getSaves());
                    player.setSpellsLVL(summoner.getSpellsLVL());
                    player.setSkillPoints(player.getSkillPoints() + summoner.getSkillPoints());
                    player.setHitPoints(player.getHitPoints() + summoner.getHitPoints());
                    summoner = null;
                }
    
            }
        }*/
}
    