var i = 0;
var t = 0;

var className = "mage";

tree[i] = "Arcane"; i++;
tree[i] = "Fire"; i++;
tree[i] = "Frost"; i++;

i = 0;

talent[i] = [0, "Arcane Subtlety", "", 2, 1, 1]; i++;
talent[i] = [0, "Arcane Focus", "", 5, 2, 1]; i++;
talent[i] = [0, "Improved Arcane Missiles", "changed", 3, 3, 1]; i++;
talent[i] = [0, "Wand Specialization", "", 2, 1, 2]; i++;
talent[i] = [0, "Magic Absorption", "", 5, 2, 2]; i++;
talent[i] = [0, "Arcane Concentration", "changed", 5, 3, 2]; i++;
talent[i] = [0, "Magic Attunement", "", 2, 1, 3]; i++;
talent[i] = [0, "Improved Arcane Explosion", "", 3, 2, 3]; i++;
talent[i] = [0, "Arcane Resilience", "", 1, 3, 3]; i++;
talent[i] = [0, "Arcane Potency", "new", 3, 4, 3, [getTalentID("Arcane Concentration"), 5]]; i++;
talent[i] = [0, "Improved Mana Shield", "changed", 2, 1, 4]; i++;
talent[i] = [0, "Improved Counterspell", "", 2, 2, 4]; i++;
talent[i] = [0, "Arcane Meditation", "", 3, 4, 4]; i++;
talent[i] = [0, "Improved Blink", "new", 2, 1, 5]; i++;
talent[i] = [0, "Presence of Mind", "", 1, 2, 5]; i++;
talent[i] = [0, "Arcane Mind", "", 5, 3, 5, [getTalentID("Arcane Resilience"), 1]]; i++;
talent[i] = [0, "Arcane Instability", "", 3, 2, 6, [getTalentID("Presence of Mind"), 1]]; i++;
talent[i] = [0, "Arcane Volatility", "new", 2, 3, 6]; i++;
talent[i] = [0, "Arcane Power", "", 1, 2, 7, [getTalentID("Arcane Instability"), 3]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [1, "Improved Fireball", "", 5, 2, 1]; i++;
talent[i] = [1, "Impact", "", 5, 3, 1]; i++;
talent[i] = [1, "Ignite", "", 5, 1, 2]; i++;
talent[i] = [1, "Flame Throwing", "", 2, 2, 2]; i++;
talent[i] = [1, "Improved Fire Blast", "", 3, 3, 2]; i++;
talent[i] = [1, "Incinerate", "", 2, 1, 3]; i++;
talent[i] = [1, "Improved Flamestrike", "", 3, 2, 3]; i++;
talent[i] = [1, "Pyroblast", "", 1, 3, 3]; i++;
talent[i] = [1, "Burning Soul", "", 2, 4, 3]; i++;
talent[i] = [1, "Improved Scorch", "", 3, 1, 4]; i++;
talent[i] = [1, "Fire Warding", "changed", 2, 2, 4]; i++;
talent[i] = [1, "Master of Elements", "", 3, 4, 4]; i++;
talent[i] = [1, "Pyromania", "new", 3, 1, 5]; i++;
talent[i] = [1, "Critical Mass", "", 3, 2, 5]; i++;
talent[i] = [1, "Blast Wave", "", 1, 3, 5, [getTalentID("Pyroblast"), 1]]; i++;
talent[i] = [1, "Fire Power", "", 5, 3, 6]; i++;
talent[i] = [1, "Combustion", "", 1, 2, 7, [getTalentID("Critical Mass"), 3]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [2, "Frost Warding", "", 2, 1, 1]; i++;
talent[i] = [2, "Improved Frostbolt", "", 5, 2, 1]; i++;
talent[i] = [2, "Elemental Precision", "", 3, 3, 1]; i++;
talent[i] = [2, "Ice Shards", "", 5, 1, 2]; i++;
talent[i] = [2, "Frostbite", "", 3, 2, 2]; i++;
talent[i] = [2, "Improved Frost Nova", "", 2, 3, 2]; i++;
talent[i] = [2, "Permafrost", "", 3, 4, 2]; i++;
talent[i] = [2, "Piercing Ice", "", 3, 1, 3]; i++;
talent[i] = [2, "Cold Snap", "", 1, 2, 3]; i++;
talent[i] = [2, "Improved Blizzard", "", 3, 4, 3]; i++;
talent[i] = [2, "Arctic Reach", "", 2, 1, 4]; i++;
talent[i] = [2, "Frost Channeling", "", 3, 2, 4]; i++;
talent[i] = [2, "Shatter", "", 5, 3, 4, [getTalentID("Improved Frost Nova"), 2]]; i++;
talent[i] = [2, "Arctic Winds", "new", 3, 1, 5]; i++;
talent[i] = [2, "Ice Block", "", 1, 2, 5]; i++;
talent[i] = [2, "Improved Cone of Cold", "", 3, 3, 5]; i++;
talent[i] = [2, "Winter's Chill", "", 5, 3, 6]; i++;
talent[i] = [2, "Ice Barrier", "", 1, 2, 7, [getTalentID("Ice Block"), 1]]; i++;

treeStartStop[t] = i - 1;
t++;

i = 0;


//ARCANE

//Arcane Subtlety - Arcane
rank[i] = [
		"Reduces your target's resistance to all your spells by 5 and reduces the threat caused by your Arcane spells by 20%.",
		"Reduces your target's resistance to all your spells by 10 and reduces the threat caused by your Arcane spells by 40%."
		];
i++;
//Arcane Focus - Arcane
rank[i] = [
		"Reduces the chance that the opponent can resist your Arcane spells by 2%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 4%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 6%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 8%.",
		"Reduces the chance that the opponent can resist your Arcane spells by 10%."
		];
i++;
//Improved Arcane Missiles - Arcane
rank[i] = [
		"Gives you a 33% chance to avoid interruption caused by damage while channeling Arcane Missles.",
		"Gives you a 66% chance to avoid interruption caused by damage while channeling Arcane Missles.",
		"Gives you a 100% chance to avoid interruption caused by damage while channeling Arcane Missles."
		];
i++;
//Wand Specialization - Arcane
rank[i] = [
		"Increases your damage with Wands by 13%.",
		"Increases your damage with Wands by 25%."
		];
i++;
//Magic Absorption - Arcane
rank[i] = [
		"Increases all resistances by 2 and causes all spells you fully resist to restore 1% of your total mana.  This effect cannot occur more than once per second.",
		"Increases all resistances by 4 and causes all spells you fully resist to restore 2% of your total mana.  This effect cannot occur more than once per second.",
		"Increases all resistances by 6 and causes all spells you fully resist to restore 3% of your total mana.  This effect cannot occur more than once per second.",
		"Increases all resistances by 8 and causes all spells you fully resist to restore 4% of your total mana.  This effect cannot occur more than once per second.",
		"Increases all resistances by 10 and causes all spells you fully resist to restore 5% of your total mana.  This effect cannot occur more than once per second."
		];
i++;
//Arcane Concentration - Arcane
rank[i] = [
		"Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target.  For Arcane Missiles, you have a 1% chance after each missile hits the target.  The Clearcasting state reduces the mana cost of your next spell by 100%.",
		"Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target.  For Arcane Missiles, you have a 2% chance after each missile hits the target.  The Clearcasting state reduces the mana cost of your next spell by 100%.",
		"Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target.  For Arcane Missiles, you have a 3% chance after each missile hits the target.  The Clearcasting state reduces the mana cost of your next spell by 100%.",
		"Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target.  For Arcane Missiles, you have a 4% chance after each missile hits the target.  The Clearcasting state reduces the mana cost of your next spell by 100%.",
		"Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target.  For Arcane Missiles, you have a 5% chance after each missile hits the target.  The Clearcasting state reduces the mana cost of your next spell by 100%."
		];
i++;
//Magic Attunement - Arcane
rank[i] = [
		"Increases the effect of your Amplify Magic and Dampen Magic spells by 25%.",
		"Increases the effect of your Amplify Magic and Dampen Magic spells by 50%."
		];
i++;
//Improved Arcane Explosion - Arcane
rank[i] = [
		"Increases the critical strike chance of your Arcane Explosion spell by 2%.",
		"Increases the critical strike chance of your Arcane Explosion spell by 4%.",
		"Increases the critical strike chance of your Arcane Explosion spell by 6%."
		];
i++;
//Arcane Resilience - Arcane
rank[i] = [
		"Increases your armour by an amount equal to 50% of your Intellect."
		];
i++;
//Arcane Potency - Arcane
rank[i] = [
		"Increases the damage of your Arcane Missiles spell when cast while Clearcasting by 2%.",
		"Increases the damage of your Arcane Missiles spell when cast while Clearcasting by 4%.",
		"Increases the damage of your Arcane Missiles spell when cast while Clearcasting by 6%."
		];
i++;
//Improved Mana Shield - Arcane
rank[i] = [
		"Decreases the mana lost per point of damage taken when Mana Shield is active by 20%.",
		"Decreases the mana lost per point of damage taken when Mana Shield is active by 40%."
		];
i++;
//Improved Counterspell - Arcane
rank[i] = [
		"Gives your Counterspell a 50% chance to silence the target for 4 seconds.",
		"Gives your Counterspell a 100% chance to silence the target for 4 seconds."
		];
i++;
//Arcane Meditation - Arcane
rank[i] = [
		"Allows 5% of your mana regeneration to continue while casting.",
		"Allows 10% of your mana regeneration to continue while casting.",
		"Allows 15% of your mana regeneration to continue while casting."
		];
i++;
//Improved Blink - Arcane
rank[i] = [
		"Reduces the mana cost of your Blink spell by 25%.",
		"Reduces the mana cost of your Blink spell by 50%."
		];
i++;
//Presence of Mind - Arcane
rank[i] = [
		"Cast: instant.<br>When activated, your next Mage spell with a casting time less than 10 seconds becomes an instant cast spell.  (Cooldown: 3 minutes.)"
		];
i++;
//Arcane Mind - Arcane
rank[i] = [
		"Increases your maximum mana by 2%.",
		"Increases your maximum mana by 4%.",
		"Increases your maximum mana by 6%.",
		"Increases your maximum mana by 8%.",
		"Increases your maximum mana by 10%."
		];
i++;
//Arcane Instability - Arcane
rank[i] = [
		"Increases your spell damage and critical strike chance by 1%.",
		"Increases your spell damage and critical strike chance by 2%.",
		"Increases your spell damage and critical strike chance by 3%."
		];
i++;
//Arcane Volatility - Arcane
rank[i] = [
		"When your Arcane Missiles or Arcane Explosion spells critically hit an enemy target, all group members within 15 yards of the target are healed for 5% of the damage caused.<br><br>[Note: The healing causes no threat.  This effect will heal the caster if he is within 15 yards of the target.]",
		"When your Arcane Missiles or Arcane Explosion spells critically hit an enemy target, all group members within 15 yards of the target are healed for 10% of the damage caused.<br><br>[Note: The healing causes no threat.  This effect will heal the caster if he is within 15 yards of the target.]"
		];
i++;
//Arcane Power - Arcane
rank[i] = [
		"Cast: instant.<br>When activated, your spells deal 30% more damage while costing 30% more mana to cast.  This effect lasts 15 seconds.  (Cooldown: 3 minutes.)"
		];
i++;


// FIRE

//Improved Fireball - Fire
rank[i] = [
		"Reduces the casting time of your Fireball spell by 0.1 seconds.",
		"Reduces the casting time of your Fireball spell by 0.2 seconds.",
		"Reduces the casting time of your Fireball spell by 0.3 seconds.",
		"Reduces the casting time of your Fireball spell by 0.4 seconds.",
		"Reduces the casting time of your Fireball spell by 0.5 seconds."
		];
i++;
//Impact - Fire
rank[i] = [
		"Gives your Fire spells a 2% chance to stun the target for 2 seconds.",
		"Gives your Fire spells a 4% chance to stun the target for 2 seconds.",
		"Gives your Fire spells a 6% chance to stun the target for 2 seconds.",
		"Gives your Fire spells a 8% chance to stun the target for 2 seconds.",
		"Gives your Fire spells a 10% chance to stun the target for 2 seconds."
		];
i++;
//Ignite - Fire
rank[i] = [
		"Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 seconds.",
		"Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell's damage over 4 seconds.",
		"Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell's damage over 4 seconds.",
		"Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell's damage over 4 seconds.",
		"Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 seconds."
		];
i++;
//Flame Throwing - Fire
rank[i] = [
		"Increases the range of your Fire spells by 3 yards.",
		"Increases the range of your Fire spells by 6 yards."
		];
i++;
//Improved Fire Blast - Fire
rank[i] = [
		"Reduces the cooldown of your Fire Blast spell by 0.5 seconds.",
		"Reduces the cooldown of your Fire Blast spell by 1 second.",
		"Reduces the cooldown of your Fire Blast spell by 1.5 seconds."
		];
i++;
//Incinerate - Fire
rank[i] = [
		"Increases the critical strike chance of your Fire Blast and Scorch spells by 2%.",
		"Increases the critical strike chance of your Fire Blast and Scorch spells by 4%."
		];
i++;
//Improved Flamestrike - Fire
rank[i] = [
		"Increases the critical strike chance of your Flamestrike spell by 5%.",
		"Increases the critical strike chance of your Flamestrike spell by 10%.",
		"Increases the critical strike chance of your Flamestrike spell by 15%."
		];
i++;
//Pyroblast - Fire
rank[i] = [
		"Cast: 6 seconds.<br>Range: 35 yards.<br>Cost: A mana.<br>Hurls an immense fiery boulder that causes X to Y Fire damage and an additional Z Fire damage over 12 seconds.<br><br>[Rank 1: X = 148, Y = 195, Z = 56, &nbsp;&nbsp;A = 125,<br>&nbsp;Rank 2: X = 193, Y = 250, Z = 72, &nbsp;&nbsp;A = 150 (level 24),<br>&nbsp;Rank 3: X = 270, Y = 343, Z = 96, &nbsp;&nbsp;A = 195 (level 30),<br>&nbsp;Rank 4: X = 347, Y = 437, Z = 124, A = 240 (level 36),<br>&nbsp;Rank 5: X = 427, Y = 536, Z = 156, A = 285 (level 42), <br>&nbsp;Rank 6: X = 525, Y = 654, Z = 188, A = 335 (level 48),<br>&nbsp;Rank 7: X = 625, Y = 776, Z = 228, A = 385 (level 54),<br>&nbsp;Rank 8: X = 716, Y = 890, Z = 268, A = 440 (level 60).]"
		];
i++;
//Burning Soul - Fire
rank[i] = [
		"Gives your Fire spells a 35% chance not to lose casting time when you take damage and reduces the threat caused by your Fire spells by 15%.",
		"Gives your Fire spells a 70% chance not to lose casting time when you take damage and reduces the threat caused by your Fire spells by 30%."
		];
i++;
//Improved Scorch - Fire
rank[i] = [
		"Your Scorch spell has a 33% chance to cause your target to be vulnerable to Fire damage.  This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 seconds.  Stacks up to 5 times.",
		"Your Scorch spell has a 66% chance to cause your target to be vulnerable to Fire damage.  This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 seconds.  Stacks up to 5 times.",
		"Your Scorch spell has a 100% chance to cause your target to be vulnerable to Fire damage.  This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 seconds.  Stacks up to 5 times."
		];
i++;
//Fire Warding - Fire
rank[i] = [
		"Increases the Fire damage dealt to attackers by your Molten Armor by 5%.  In addition, gives your Fire Ward a 10% chance to reflect Fire spells and effects while active.",
		"Increases the Fire damage dealt to attackers by your Molten Armor by 10%.  In addition, gives your Fire Ward a 20% chance to reflect Fire spells and effects while active."
		];
i++;
//Master of Elements - Fire
rank[i] = [
		"Your Fire and Frost spell critical hits will refund 10% of their base mana cost.",
		"Your Fire and Frost spell critical hits will refund 20% of their base mana cost.",
		"Your Fire and Frost spell critical hits will refund 30% of their base mana cost."
		];
i++;
//Pyromania - Fire
rank[i] = [
		"Your spell critical hits reduce the cast time of your next Flamestrike spell by 15%.  Lasts 10 seconds.",
		"Your spell critical hits reduce the cast time of your next Flamestrike spell by 30%.  Lasts 10 seconds.",
		"Your spell critical hits reduce the cast time of your next Flamestrike spell by 45%.  Lasts 10 seconds."
		];
i++;
//Critical Mass - Fire
rank[i] = [
		"Increases the critical strike chance of your Fire spells by 2%.",
		"Increases the critical strike chance of your Fire spells by 4%.",
		"Increases the critical strike chance of your Fire spells by 6%."
		];
i++;
//Blast Wave - Fire
rank[i] = [
		"Cast: instant.<br>Cost: Z mana.<br>A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for X to Y Fire damage, and dazing them for 6 seconds.  (Cooldown: 45 seconds.)<br><br>[Rank 1: X = 160, Y = 192, Z = 215,<br>&nbsp;Rank 2: X = 208, Y = 249, Z = 270 (level 36),<br>&nbsp;Rank 3: X = 285, Y = 338, Z = 355 (level 44),<br>&nbsp;Rank 4: X = 374, Y = 443, Z = 450 (level 52),<br>&nbsp;Rank 5: X = 462, Y = 544, Z = 545 (level 60).]"
		];
i++;
//Fire Power - Fire
rank[i] = [
		"Increase the damage done by your Fire spells by 2%.",
		"Increase the damage done by your Fire spells by 4%.",
		"Increase the damage done by your Fire spells by 6%.",
		"Increase the damage done by your Fire spells by 8%.",
		"Increase the damage done by your Fire spells by 10%."
		];
i++;
//Combustion - Fire
rank[i] = [
		"Cast: instant.<br>When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%.  This effect lasts until you have caused 3 critical strikes with Fire spells.  (Cooldown: 3 minutes.)"
		];
i++;


//FROST

//Frost Warding - Frost
rank[i] = [
		"Increases the armour and resistances given by your Frost Armour and Ice Armour spells by 15%.  In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
		"Increases the armour and resistances given by your Frost Armour and Ice Armour spells by 30%.  In addition, gives your Frost Ward a 20% chance to reflect Frost spells and effects while active."
		];
i++;
//Improved Frostbolt - Frost
rank[i] = [
		"Reduces the casting time of your Frostbolt spell by 0.1 seconds.",
		"Reduces the casting time of your Frostbolt spell by 0.2 seconds.",
		"Reduces the casting time of your Frostbolt spell by 0.3 seconds.",
		"Reduces the casting time of your Frostbolt spell by 0.4 seconds.",
		"Reduces the casting time of your Frostbolt spell by 0.5 seconds."
		];
i++;
//Elemental Precision - Frost
rank[i] = [
		"Reduces the chance that the opponent can resist your Frost and Fire spells by 2%.",
		"Reduces the chance that the opponent can resist your Frost and Fire spells by 4%.",
		"Reduces the chance that the opponent can resist your Frost and Fire spells by 6%."
		];
i++;
//Ice Shards - Frost
rank[i] = [
		"Increases the critical strike damage bonus of your Frost spells by 20%.",
		"Increases the critical strike damage bonus of your Frost spells by 40%.",
		"Increases the critical strike damage bonus of your Frost spells by 60%.",
		"Increases the critical strike damage bonus of your Frost spells by 80%.",
		"Increases the critical strike damage bonus of your Frost spells by 100%."
		];
i++;
//Frostbite - Frost
rank[i] = [
		"Gives your Chill effects a 5% chance to freeze the target for 5 seconds.",
		"Gives your Chill effects a 10% chance to freeze the target for 5 seconds.",
		"Gives your Chill effects a 15% chance to freeze the target for 5 seconds."
		];
i++;
//Improved Frost Nova - Frost
rank[i] = [
		"Reduces the cooldown of your Frost Nova spell by 2 seconds.",
		"Reduces the cooldown of your Frost Nova spell by 4 seconds."
		];
i++;
//Permafrost - Frost
rank[i] = [
		"Increases the duration of your Chill effects by 1 second and reduces the target's speed by an additional 4%.",
		"Increases the duration of your Chill effects by 2 seconds and reduces the target's speed by an additional 7%.",
		"Increases the duration of your Chill effects by 3 seconds and reduces the target's speed by an additional 10%."
		];
i++;
//Piercing Ice - Frost
rank[i] = [
		"Increases the damage done by your Frost spells by 2%.",
		"Increases the damage done by your Frost spells by 4%.",
		"Increases the damage done by your Frost spells by 6%."
		];
i++;
//Cold Snap - Frost
rank[i] = [
		"Cast: instant.<br>When activated, this spell finishes the cooldown on all of your Frost spells.  (Cooldown: 10 minutes.)"
		];
i++;
//Improved Blizzard - Frost
rank[i] = [
		"Adds a Chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 30%.  Lasts 2 seconds.",
		"Adds a Chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 50%.  Lasts 2 seconds.",
		"Adds a Chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 65%.  Lasts 2 seconds."
		];
i++;
//Arctic Reach - Frost
rank[i] = [
		"Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
		"Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%."
		];
i++;
//Frost Channeling - Frost
rank[i] = [
		"Reduces the mana cost of your Frost spells by 5% and reduces the threat caused by your Frost spells by 10%.",
		"Reduces the mana cost of your Frost spells by 10% and reduces the threat caused by your Frost spells by 20%.",
		"Reduces the mana cost of your Frost spells by 15% and reduces the threat caused by your Frost spells by 30%."
		];
i++;
//Shatter - Frost
rank[i] = [
		"Increases the critical strike chance of all your spells against frozen targets by 10%.",
		"Increases the critical strike chance of all your spells against frozen targets by 20%.",
		"Increases the critical strike chance of all your spells against frozen targets by 30%.",
		"Increases the critical strike chance of all your spells against frozen targets by 40%.",
		"Increases the critical strike chance of all your spells against frozen targets by 50%."
		];
i++;
//Arctic Winds - Frost
rank[i] = [
		"Reduces the chance that you are hit by melee and ranged attacks by 1% and reduces the mana cost of your Frost Ward spell by 20%.",
		"Reduces the chance that you are hit by melee and ranged attacks by 2% and reduces the mana cost of your Frost Ward spell by 40%.",
		"Reduces the chance that you are hit by melee and ranged attacks by 3% and reduces the mana cost of your Frost Ward spell by 60%."
		];
i++;
//Ice Block - Frost
rank[i] = [
		"Cast: instant.<br>Cost: 15 mana.<br>You become encased in a block of ice, protecting you from all physical attacks and spells for 10 seconds, but during that time you cannot attack, move or cast spells.  (Cooldown: 5 minutes.)"
		];
i++;
//Improved Cone of Cold - Frost
rank[i] = [
		"Increases the damage dealt by your Cone of Cold spell by 15%.",
		"Increases the damage dealt by your Cone of Cold spell by 25%.",
		"Increases the damage dealt by your Cone of Cold spell by 35%."
		];
i++;
//Winter's Chill - Frost
rank[i] = [
		"Gives your Frost damage spells a 20% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 seconds.  Stacks up to 5 times.",
		"Gives your Frost damage spells a 40% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 seconds.  Stacks up to 5 times.",
		"Gives your Frost damage spells a 60% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 seconds.  Stacks up to 5 times.",
		"Gives your Frost damage spells a 80% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 seconds.  Stacks up to 5 times.",
		"Gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 seconds.  Stacks up to 5 times."
		];
i++;
//Ice Barrier - Frost
rank[i] = [
		"Cast: instant.<br>Cost: Y mana.<br>Instantly shields you, absorbing X damage.  Lasts 1 minute.  While the shield holds, spells will not be interrupted.  (Cooldown: 30 seconds.)<br><br>[Rank 1: X = 455, Y = 305,<br>&nbsp;Rank 2: X = 569, Y = 360 (level 46),<br>&nbsp;Rank 3: X = 700, Y = 420 (level 52),<br>&nbsp;Rank 5: X = 826, Y = 480 (level 58).]"
		];
i++;

jsLoaded=true;