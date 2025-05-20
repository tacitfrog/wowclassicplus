var i = 0;
var t = 0;

var className = "hunter";

tree[i] = "Beast Mastery"; i++;
tree[i] = "Marksmanship"; i++;
tree[i] = "Survival"; i++;

i = 0;

talent[i] = [0, "Improved Aspect of the Hawk", "", 5, 2, 1]; i++;
talent[i] = [0, "Endurance Training", "", 5, 3, 1]; i++;
talent[i] = [0, "Focused Attacks", "new", 2, 1, 2]; i++;
talent[i] = [0, "Improved Aspect of the Monkey", "changed", 3, 2, 2]; i++;
talent[i] = [0, "Thick Hide", "", 3, 3, 2]; i++;
talent[i] = [0, "Improved Revive Pet", "", 2, 4, 2]; i++;
talent[i] = [0, "Pathfinding", "changed", 2, 1, 3]; i++;
talent[i] = [0, "Bestial Swiftness", "", 1, 2, 3]; i++;
talent[i] = [0, "Unleashed Fury", "", 5, 3, 3]; i++;
talent[i] = [0, "Improved Mend Pet", "", 2, 2, 4]; i++;
talent[i] = [0, "Ferocity", "", 5, 3, 4]; i++;
talent[i] = [0, "Spirit Bond", "changed", 2, 1, 5]; i++;
talent[i] = [0, "Intimidation", "", 1, 2, 5]; i++;
talent[i] = [0, "Bestial Discipline", "changed", 3, 4, 5]; i++;
talent[i] = [0, "Frenzy", "", 5, 3, 6, [getTalentID("Ferocity"), 5]]; i++;
talent[i] = [0, "Bestial Wrath", "", 1, 2, 7, [getTalentID("Intimidation"), 1]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [1, "Improved Concussive Shot", "", 5, 2, 1]; i++;
talent[i] = [1, "Efficiency", "", 5, 3, 1]; i++;
talent[i] = [1, "Improved Arcane Shot", "changedmoved", 2, 1, 2]; i++;
talent[i] = [1, "Improved Hunter's Mark", "changed", 3, 2, 2]; i++;
talent[i] = [1, "Lethal Shots", "", 5, 3, 2]; i++;
talent[i] = [1, "Aimed Shot", "", 1, 1, 3]; i++;
talent[i] = [1, "Rapid Killing", "new", 2, 2, 3]; i++;
talent[i] = [1, "Hawk Eye", "", 3, 4, 3]; i++;
talent[i] = [1, "Improved Stings", "changed", 5, 2, 4]; i++;
talent[i] = [1, "Mortal Shots", "", 5, 3, 4, [getTalentID("Lethal Shots"), 5]]; i++;
talent[i] = [1, "Scatter Shot", "", 1, 1, 5]; i++;
talent[i] = [1, "Barrage", "", 3, 2, 5]; i++;
talent[i] = [1, "Arcane Aim", "new", 3, 3, 5]; i++;
talent[i] = [1, "Ranged Weapon Specialization", "", 5, 3, 6]; i++;
talent[i] = [1, "Trueshot Aura", "", 1, 2, 7, [getTalentID("Barrage"), 3]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [2, "Improved Raptor Strike", "new", 2, 1, 1]; i++;
talent[i] = [2, "Humanoid Slaying", "", 3, 2, 1]; i++;
talent[i] = [2, "Deflection", "", 5, 3, 1]; i++;
talent[i] = [2, "Entrapment", "", 5, 1, 2]; i++;
talent[i] = [2, "Monster Slaying", "moved", 3, 2, 2]; i++;
talent[i] = [2, "Improved Wing Clip", "changed", 3, 3, 2]; i++;
talent[i] = [2, "Savage Strikes", "changed", 2, 4, 2]; i++;
talent[i] = [2, "Clever Traps", "", 2, 1, 3]; i++;
talent[i] = [2, "Survivalist", "", 5, 2, 3]; i++;
talent[i] = [2, "Deterrence", "", 1, 3, 3]; i++;
talent[i] = [2, "Propitiousness", "new", 1, 4, 3, [getTalentID("Savage Strikes"), 2]]; i++;
talent[i] = [2, "Trap Mastery", "changed", 2, 1, 4]; i++;
talent[i] = [2, "Surefooted", "", 3, 2, 4]; i++;
talent[i] = [2, "Improved Feign Death", "", 2, 4, 4]; i++;
talent[i] = [2, "Resourcefulness", "new", 3, 1, 5]; i++;
talent[i] = [2, "Killer Instinct", "", 3, 2, 5]; i++;
talent[i] = [2, "Counterattack", "", 1, 3, 5, [getTalentID("Deterrence"), 1]]; i++;
talent[i] = [2, "Lightning Reflexes", "", 5, 3, 6]; i++;
talent[i] = [2, "Wyvern Sting", "changed", 1, 2, 7, [getTalentID("Killer Instinct"), 3]]; i++;

treeStartStop[t] = i - 1;
t++;

i = 0;


//BEAST MASTERY

//Improved Aspect of the Hawk - Beast Mastery
rank[i] = [
		"While Aspect of the Hawk is active, all normal ranged attacks have a 1% chance of increasing ranged attack speed by 30% for 12 seconds.",
		"While Aspect of the Hawk is active, all normal ranged attacks have a 2% chance of increasing ranged attack speed by 30% for 12 seconds.",
		"While Aspect of the Hawk is active, all normal ranged attacks have a 3% chance of increasing ranged attack speed by 30% for 12 seconds.",
		"While Aspect of the Hawk is active, all normal ranged attacks have a 4% chance of increasing ranged attack speed by 30% for 12 seconds.",
		"While Aspect of the Hawk is active, all normal ranged attacks have a 5% chance of increasing ranged attack speed by 30% for 12 seconds."
		];
i++;
//Endurance Training - Beast Mastery
rank[i] = [
		"Increases the health of your pets by 3%.",
		"Increases the health of your pets by 6%.",
		"Increases the health of your pets by 9%.",
		"Increases the health of your pets by 12%.",
		"Increases the health of your pets by 15%."
		];
i++;
//Focused Attacks - Beast Mastery
rank[i] = [
		"Your Hunter's Mark also increases the melee attack power of your pets when they strike the target by 15% of its ranged attack power bonus.",
		"Your Hunter's Mark also increases the melee attack power of your pets when they strike the target by 30% of its ranged attack power bonus."
		];
i++;
//Improved Aspect of the Monkey - Beast Mastery
rank[i] = [
		"Increases the dodge bonus of your Aspect of the Monkey by 2%.",
		"Increases the dodge bonus of your Aspect of the Monkey by 4%.",
		"Increases the dodge bonus of your Aspect of the Monkey by 6%."
		];
i++;
//Thick Hide - Beast Mastery
rank[i] = [
		"Increases the armour of your pets by 10%.",
		"Increases the armour of your pets by 20%.",
		"Increases the armour of your pets by 30%."
		];
i++;
//Improved Revive Pet - Beast Mastery
rank[i] = [
		"Revive Pet's casting time is reduced by 3 seconds, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
		"Revive Pet's casting time is reduced by 6 seconds, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
		];
i++;
//Pathfinding - Beast Mastery
rank[i] = [
		"Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.  In addition, your Aspect of the Beast reduces the range at which hostile Beasts will see you and your pet.",
		"Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 6%.  In addition, your Aspect of the Beast reduces the range at which hostile Beasts will see you and your pet.  More effective than Pathfinding (Rank 1)."
		];
i++;
//Bestial Swiftness - Beast Mastery
rank[i] = [
		"Increases the outdoor movement speed of your pets by 30%."
		];
i++;
//Unleashed Fury - Beast Mastery
rank[i] = [
		"Increases the damage done by your pets by 4%.",
		"Increases the damage done by your pets by 8%.",
		"Increases the damage done by your pets by 12%.",
		"Increases the damage done by your pets by 16%.",
		"Increases the damage done by your pets by 20%."
		];
i++;
//Improved Mend Pet - Beast Mastery
rank[i] = [
		"Gives the Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
		"Gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
		];
i++;
//Ferocity - Beast Mastery
rank[i] = [
		"Increases the critical strike chance of your pets by 3%.",
		"Increases the critical strike chance of your pets by 6%.",
		"Increases the critical strike chance of your pets by 9%.",
		"Increases the critical strike chance of your pets by 12%.",
		"Increases the critical strike chance of your pets by 15%."
		];
i++;
//Spirit Bond - Beast Mastery
rank[i] = [
		"While your pet is active, both you and your pet will regenerate 2% of maximum health every 10 seconds.",
		"While your pet is active, both you and your pet will regenerate 4% of maximum health every 10 seconds."
		];
i++;
//Intimidation - Beast Mastery
rank[i] = [
		"Cast: instant.<br>Range: 100 yards.<br>Cost: 8% of base mana.<br>Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 seconds.  (Cooldown: 1 minute.)"
		];
i++;
//Bestial Discipline - Beast Mastery
rank[i] = [
		"Increases the focus regeneration of your pets by 10%.",
		"Increases the focus regeneration of your pets by 20%.",
		"Increases the focus regeneration of your pets by 30%."
		];
i++;
//Frenzy - Beast Mastery
rank[i] = [
		"Gives your pet a 20% chance to gain a 30% attack speed increase for 8 seconds after dealing a critical strike.",
		"Gives your pet a 40% chance to gain a 30% attack speed increase for 8 seconds after dealing a critical strike.",
		"Gives your pet a 60% chance to gain a 30% attack speed increase for 8 seconds after dealing a critical strike.",
		"Gives your pet a 80% chance to gain a 30% attack speed increase for 8 seconds after dealing a critical strike.",
		"Gives your pet a 100% chance to gain a 30% attack speed increase for 8 seconds after dealing a critical strike."
		];
i++;
//Bestial Wrath - Beast Mastery
rank[i] = [
		"Cast: instant.<br>Range: 100 yards.<br>Cost: 12% of base mana.<br>Send your pet into a rage causing 50% additional damage for 18 seconds.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.  (Cooldown: 2 minutes.)"
		];
i++;


//MARKSMANSHIP

//Improved Concussive Shot - Marksmanship
rank[i] = [
		"Gives your Concussive Shot a 4% chance to stun the target for 3 seconds.",
		"Gives your Concussive Shot a 8% chance to stun the target for 3 seconds.",
		"Gives your Concussive Shot a 12% chance to stun the target for 3 seconds.",
		"Gives your Concussive Shot a 16% chance to stun the target for 3 seconds.",
		"Gives your Concussive Shot a 20% chance to stun the target for 3 seconds."
		];
i++;
//Efficiency - Marksmanship
rank[i] = [
		"Reduces the mana cost of your shots and stings by 2%.",
		"Reduces the mana cost of your shots and stings by 4%.",
		"Reduces the mana cost of your shots and stings by 6%.",
		"Reduces the mana cost of your shots and stings by 8%.",
		"Reduces the mana cost of your shots and stings by 10%."
		];
i++;
//Improved Arcane Shot - Marksmanship
rank[i] = [
		"Reduces the cooldown of your Arcane Shot by 0.5 seconds.",
		"Reduces the cooldown of your Arcane Shot by 1 second."
		];
i++;
//Improved Hunter's Mark - Marksmanship
rank[i] = [
		"Increases the ranged attack power bonus of your Hunter's Mark spell by 5%.",
		"Increases the ranged attack power bonus of your Hunter's Mark spell by 10%.",
		"Increases the ranged attack power bonus of your Hunter's Mark spell by 15%."
		];
i++;
//Lethal Shots - Marksmanship
rank[i] = [
		"Increases your critical strike chance with ranged weapons by 1%.",
		"Increases your critical strike chance with ranged weapons by 2%.",
		"Increases your critical strike chance with ranged weapons by 3%.",
		"Increases your critical strike chance with ranged weapons by 4%.",
		"Increases your critical strike chance with ranged weapons by 5%."
		];
i++;
//Aimed Shot - Marksmanship
rank[i] = [
		"Cast: 3 seconds.<br>Range: 8 - 35 yards.<br>Cost: Y mana.<br>An aimed shot that increases ranged damage by X.  (Requires Ranged Weapon. Cooldown: 6 seconds.)<br><br>[Rank 1: X = 70, &nbsp;&nbsp;Y = 75,<br>&nbsp;Rank 2: X = 125, Y = 115 (level 28),<br>&nbsp;Rank 3: X = 200, Y = 160 (level 36),<br>&nbsp;Rank 4: X = 330, Y = 210 (level 44),<br>&nbsp;Rank 5: X = 460, Y = 260 (level 52),<br>&nbsp;Rank 6: X = 600, Y = 310 (level 60).]"
		];
i++;
//Rapid Killing - Marksmanship
rank[i] = [
		"Reduces the cooldown of your Rapid Fire ability by 1 minute.",
		"Reduces the cooldown of your Rapid Fire ability by 2 minutes."
		];
i++;
//Hawk Eye - Marksmanship
rank[i] = [
		"Increases the maximum range of your ranged weapons by 2 yards.",
		"Increases the maximum range of your ranged weapons by 4 yards.",
		"Increases the maximum range of your ranged weapons by 6 yards."
		];
i++;
//Improved Stings - Marksmanship
rank[i] = [
		"Increases the damage done by your Serpent Sting and Wyvern Sting by 5% and gives your stings an additional 6% chance to resist dispel effects.",
		"Increases the damage done by your Serpent Sting and Wyvern Sting by 10% and gives your stings an additional 12% chance to resist dispel effects.",
		"Increases the damage done by your Serpent Sting and Wyvern Sting by 15% and gives your stings an additional 18% chance to resist dispel effects%.",
		"Increases the damage done by your Serpent Sting and Wyvern Sting by 20% and gives your stings an additional 24% chance to resist dispel effects.",
		"Increases the damage done by your Serpent Sting and Wyvern Sting by 25% and gives your stings an additional 30% chance to resist dispel effects."
		];
i++;
//Mortal Shots - Marksmanship
rank[i] = [
		"Increases your ranged weapon critical strike damage bonus by 6%.",
		"Increases your ranged weapon critical strike damage bonus by 12%.",
		"Increases your ranged weapon critical strike damage bonus by 18%.",
		"Increases your ranged weapon critical strike damage bonus by 24%.",
		"Increases your ranged weapon critical strike damage bonus by 30%."
		];
i++;
//Scatter Shot - Marksmanship
rank[i] = [
		"Cast: instant.<br>Range: 15 yards.<br>Cost: 8% of base mana.<br>A short-range shot that deals 50% weapon damage and disorients the target for 4 seconds.  Any damage caused will remove the effect.  Turns off your attack when used.  (Requires Ranged Weapon. Cooldown: 30 seconds.)"
		];
i++;
//Barrage - Marksmanship
rank[i] = [
		"Increases the damage done by your Multi-Shot and Volley spells by 5%.",
		"Increases the damage done by your Multi-Shot and Volley spells by 10%.",
		"Increases the damage done by your Multi-Shot and Volley spells by 15%."
		];
i++;
//Arcane Aim - Marksmanship
rank[i] = [
		"Increases the critical strike chance of your Arcane Shot by 3%.",
		"Increases the critical strike chance of your Arcane Shot by 6%.",
		"Increases the critical strike chance of your Arcane Shot by 9%."
		];
i++;
//Ranged Weapon Specialization - Marksmanship
rank[i] = [
		"Increases the damage you deal with ranged weapons by 1%.",
		"Increases the damage you deal with ranged weapons by 2%.",
		"Increases the damage you deal with ranged weapons by 3%.",
		"Increases the damage you deal with ranged weapons by 4%.",
		"Increases the damage you deal with ranged weapons by 5%."
		];
i++;
//Trueshot Aura - Marksmanship
rank[i] = [
		"Cast: instant.<br>Cost: Y mana.<br>Increases the attack power of party members within 45 yards by X.  Lasts 30 minutes.<br><br>[Rank 1: X = 50, &nbsp;&nbsp;Y = 325,<br>&nbsp;Rank 2: X = 75, &nbsp;&nbsp;Y = 425 (level 50),<br>&nbsp;Rank 3: X = 100, Y = 525 (level 60).]"
		];
i++;


//SURVIVAL

//Improved Raptor Strike - Survival
rank[i] = [
		"Your critical strikes from Raptor Strike increase your melee attack speed by 5% for 6 seconds.",
		"Your critical strikes from Raptor Strike increase your melee attack speed by 10% for 6 seconds."
		];
i++;
//Humanoid Slaying - Survival
rank[i] = [
		"Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%.",
		"Increases all damage caused against Humanoid targets by 2% and increases critical damage caused against Humanoid targets by an additional 2%.",
		"Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional 3%."
		];
i++;
//Deflection - Survival
rank[i] = [
		"Increases your parry chance by 1%.",
		"Increases your parry chance by 2%.",
		"Increases your parry chance by 3%.",
		"Increases your parry chance by 4%.",
		"Increases your parry chance by 5%."
		];
i++;
//Entrapment - Survival
rank[i] = [
		"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 5% chance to entrap the target, preventing them from moving for 5 seconds.",
		"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 10% chance to entrap the target, preventing them from moving for 5 seconds.",
		"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 15% chance to entrap the target, preventing them from moving for 5 seconds.",
		"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 20% chance to entrap the target, preventing them from moving for 5 seconds.",
		"Gives your Immolation Trap, Frost Trap, and Explosive Trap a 25% chance to entrap the target, preventing them from moving for 5 seconds."
		];
i++;
//Monster Slaying - Survival
rank[i] = [
		"Increases all damage caused against Beast, Giant, and Dragonkin targets by 1% and increases critical damage caused against Beast, Giant, and Dragonkin targets by an additional 1%.",
		"Increases all damage caused against Beast, Giant, and Dragonkin targets by 2% and increases critical damage caused against Beast, Giant, and Dragonkin targets by an additional 2%.",
		"Increases all damage caused against Beast, Giant, and Dragonkin targets by 3% and increases critical damage caused against Beast, Giant, and Dragonkin targets by an additional 3%."
		];
i++;
//Improved Wing Clip - Survival
rank[i] = [
		"Gives your Wing Clip ability a 25% chance to immobilise the target for 5 seconds.  This effect cannot occur more than once per 30 seconds.",
		"Gives your Wing Clip ability a 50% chance to immobilise the target for 5 seconds.  This effect cannot occur more than once per 30 seconds.",
		"Gives your Wing Clip ability a 75% chance to immobilise the target for 5 seconds.  This effect cannot occur more than once per 30 seconds."
		];
i++;
//Savage Strikes - Survival
rank[i] = [
		"Increases the critical strike chance of your Raptor Strike, Mongoose Bite, and Counterattack abilities by 10%.",
		"Increases the critical strike chance of your Raptor Strike, Mongoose Bite, and Counterattack abilities by 20%."
		];
i++;
//Clever Traps - Survival
rank[i] = [
		"Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
		"Increases the duration of Freezing and Frost trap effects by 30% and the damage of Immolation and Explosive trap effects by 30%."
		];
i++;
//Survivalist - Survival
rank[i] = [
		"Increases your maximum health by 2%.",
		"Increases your maximum health by 4%.",
		"Increases your maximum health by 6%.",
		"Increases your maximum health by 8%.",
		"Increases your maximum health by 10%."
		];
i++;
//Deterrence - Survival
rank[i] = [
		"Cast: instant.<br>When activated, increases your dodge and parry chance by 25% for 10 seconds.  (Cooldown: 5 minutes.)"
		];
i++;
//Propitiousness - Survival
rank[i] = [
		"Increases all melee damage you deal to targets that are immobilised, frozen, asleep, or stunned by 10%."
		];
i++;
//Trap Mastery - Survival
rank[i] = [
		"Decreases the chance enemies will resist your trap effects by 5% and reduces the cooldown of all traps by 2 seconds.",
		"Decreases the chance enemies will resist your trap effects by 10% and reduces the cooldown of all traps by 4 seconds."
		];
i++;
//Surefooted - Survival
rank[i] = [
		"Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by an additional 5%.",
		"Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by an additional 10%.",
		"Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by an additional 15%."
		];
i++;
//Improved Feign Death - Survival
rank[i] = [
		"Reduces the chance your Feign Death ability will be resisted by 2%.",
		"Reduces the chance your Feign Death ability will be resisted by 4%."
		];
i++;
//Resourcefulness - Survival
rank[i] = [
		"Reduces the mana cost of all traps and melee abilities by 10%.",
		"Reduces the mana cost of all traps and melee abilities by 20%.",
		"Reduces the mana cost of all traps and melee abilities by 30%."
		];
i++;
//Killer Instinct - Survival
rank[i] = [
		"Increases your critical strike chance with all attacks by 1%.",
		"Increases your critical strike chance with all attacks by 2%.",
		"Increases your critical strike chance with all attacks by 3%."
		];
i++;
//Counterattack - Survival
rank[i] = [
		"Cast: instant.<br>Cost: Y mana.<br>A strike that becomes active after parrying an opponent's attack.  This attack deals X damage and immobilises the target for 5 seconds.  Counterattack cannot be blocked, dodged, or parried.  (Cooldown: 5 seconds.)<br><br>[Rank 1: X = 40, &nbsp;&nbsp;Y = 45,<br>&nbsp;Rank 2: X = 70, &nbsp;&nbsp;Y = 65 (level 42),<br>&nbsp;Rank 3: X = 110, Y = 85 (level 54).]"
		];
i++;
//Lightning Reflexes - Survival
rank[i] = [
		"Increases your Agility by 3%.",
		"Increases your Agility by 6%.",
		"Increases your Agility by 9%.",
		"Increases your Agility by 12%.",
		"Increases your Agility by 15%."
		];
i++;
//Wyvern Sting - Survival
rank[i] = [
		"Cast: instant.<br>Range: 8 - 35 yards.<br>Cost: Y mana.<br>A stinging shot that puts the target to sleep for 12 seconds.  Any damage will cancel the effect.  When the target wakes up, the sting slows the target's movement speed by 30% and causes X Nature damage over 12 seconds.  Only usable out of combat.  Only one sting per Hunter can be active on the target at a time.  (Requires Ranged Weapon. Cooldown: 2 minutes.)<br><br>[Rank 1: X = 300, Y = 115,<br>&nbsp;Rank 2: X = 420, Y = 155 (level 50),<br>&nbsp;Rank 3: X = 600, Y = 205 (level 60).]"
		];
i++;

jsLoaded=true;