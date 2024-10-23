var i = 0;
var t = 0;

var className = "rogue";

tree[i] = "Assassination"; i++;
tree[i] = "Combat"; i++;
tree[i] = "Subtlety"; i++;

i = 0;

talent[i] = [0, "Improved Eviscerate", "", 3, 1, 1]; i++;
talent[i] = [0, "Remorseless Attacks", "", 2, 2, 1]; i++;
talent[i] = [0, "Malice", "", 5, 3, 1]; i++;
talent[i] = [0, "Ruthlessness", "", 3, 1, 2]; i++;
talent[i] = [0, "Improved Expose Armor", "changed", 2, 2, 2]; i++;
talent[i] = [0, "Improved Backstab", "changed", 3, 4, 2]; i++;
talent[i] = [0, "Relentless Strikes", "", 1, 1, 3]; i++;
talent[i] = [0, "Murder", "changed", 3, 2, 3]; i++;
talent[i] = [0, "Lethality", "", 5, 3, 3, [getTalentID("Malice"), 5]]; i++;
talent[i] = [0, "Vile Poisons", "", 5, 2, 4]; i++;
talent[i] = [0, "Improved Poisons", "", 5, 3, 4]; i++;
talent[i] = [0, "Envenom", "new", 3, 1, 5]; i++;
talent[i] = [0, "Cold Blood", "", 1, 2, 5]; i++;
talent[i] = [0, "Improved Kidney Shot", "", 3, 3, 5]; i++;
talent[i] = [0, "Crippling Brew", "new", 2, 4, 5]; i++;
talent[i] = [0, "Seal Fate", "", 5, 2, 6, [getTalentID("Cold Blood"), 1]]; i++;
talent[i] = [0, "Vigor", "changed", 1, 2, 7, [getTalentID("Seal Fate"), 5]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [1, "Improved Gouge", "", 3, 1, 1]; i++;
talent[i] = [1, "Improved Sinister Strike", "", 2, 2, 1]; i++;
talent[i] = [1, "Lightning Reflexes", "", 5, 3, 1]; i++;
talent[i] = [1, "Improved Slice and Dice", "changed", 3, 1, 2]; i++;
talent[i] = [1, "Deflection", "", 5, 2, 2]; i++;
talent[i] = [1, "Precision", "", 5, 3, 2]; i++;
talent[i] = [1, "Improved Sprint", "changed", 2, 4, 2]; i++;
talent[i] = [1, "Endurance", "changed", 2, 1, 3]; i++;
talent[i] = [1, "Riposte", "", 1, 2, 3, [getTalentID("Deflection"), 5]]; i++;
talent[i] = [1, "Deadened Nerves", "new", 5, 4, 3]; i++;
talent[i] = [1, "Improved Kick", "", 2, 1, 4]; i++;
talent[i] = [1, "Dual Wield Specialization", "", 5, 3, 4, [getTalentID("Precision"), 5]]; i++;
talent[i] = [1, "Close Quarters Specialization", "changed", 5, 4, 4]; i++;
talent[i] = [1, "Mace Specialization", "", 5, 1, 5]; i++;
talent[i] = [1, "Blade Dance", "new", 1, 2, 5, [getTalentID("Riposte"), 1]]; i++;
talent[i] = [1, "Blade Flurry", "", 1, 3, 5]; i++;
talent[i] = [1, "Sword Specialization", "", 5, 4, 5]; i++;
talent[i] = [1, "Aggression", "", 3, 2, 6]; i++;
talent[i] = [1, "Weapon Expertise", "", 2, 3, 6, [getTalentID("Blade Flurry"), 1]]; i++;
talent[i] = [1, "Adrenaline Rush", "", 1, 2, 7]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [2, "Master of Deception", "changed", 5, 2, 1]; i++;
talent[i] = [2, "Opportunity", "", 5, 3, 1]; i++;
talent[i] = [2, "Initiative", "changed", 3, 1, 2]; i++;
talent[i] = [2, "Elusiveness", "changed", 2, 2, 2]; i++;
talent[i] = [2, "Camouflage", "", 5, 3, 2]; i++;
talent[i] = [2, "Sadistic Smile", "new", 2, 4, 2]; i++;
talent[i] = [2, "Improved Sap", "changed", 2, 1, 3]; i++;
talent[i] = [2, "Ghostly Strike", "", 1, 2, 3]; i++;
talent[i] = [2, "Improved Ambush", "", 3, 3, 3]; i++;
talent[i] = [2, "Setup", "", 3, 1, 4]; i++;
talent[i] = [2, "Heightened Senses", "changed", 2, 2, 4]; i++;
talent[i] = [2, "Serrated Blades", "", 3, 3, 4]; i++;
talent[i] = [2, "Cheat Death", "new", 3, 1, 5]; i++;
talent[i] = [2, "Preparation", "", 1, 2, 5]; i++;
talent[i] = [2, "Dirty Deeds", "", 2, 3, 5]; i++;
talent[i] = [2, "Hemorrhage", "changed", 1, 4, 5, [getTalentID("Serrated Blades"), 3]]; i++;
talent[i] = [2, "Deadliness", "", 5, 3, 6]; i++;
talent[i] = [2, "Premeditation", "changed", 1, 2, 7, [getTalentID("Preparation"), 1]]; i++;

treeStartStop[t] = i - 1;
t++;

i = 0;


//ASSASSINATION

//Improved Eviscerate - Assassination
rank[i] = [
		"Increases the damage done by your Eviscerate ability by 5%.",
		"Increases the damage done by your Eviscerate ability by 10%.",
		"Increases the damage done by your Eviscerate ability by 15%."
		];
i++;
//Remorseless Attacks - Assassination
rank[i] = [
		"After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.  Lasts 20 seconds.",
		"After killing an opponent that yields experience or honor, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.  Lasts 20 seconds."
		];
i++;
//Malice - Assassination
rank[i] = [
		"Increases your critical strike chance by 1%.",
		"Increases your critical strike chance by 2%.",
		"Increases your critical strike chance by 3%.",
		"Increases your critical strike chance by 4%.",
		"Increases your critical strike chance by 5%."
		];
i++;
//Ruthlessness - Assassination
rank[i] = [
		"Gives your finishing moves a 20% chance to add a combo point to your target.",
		"Gives your finishing moves a 40% chance to add a combo point to your target.",
		"Gives your finishing moves a 60% chance to add a combo point to your target."
		];
i++;
//Improved Expose Armor - Assassination
rank[i] = [
		"Increases the armour reduced by your Expose Armor ability by 25%.",
		"Increases the armour reduced by your Expose Armor ability by 50%."
		];
i++;
//Improved Backstab - Assassination
rank[i] = [
		"Increases the critical strike chance of your Backstab ability by 10%.",
		"Increases the critical strike chance of your Backstab ability by 20%.",
		"Increases the critical strike chance of your Backstab ability by 30%."
		];
i++;
//Relentless Strikes - Assassination
rank[i] = [
		"Your finishing moves have a 20% chance per combo point to restore 25 energy."
		];
i++;
//Murder - Assassination
rank[i] = [
		"Increases all damage that you cause to Humanoid, Giant, Beast, and Dragonkin targets by 1%.",
		"Increases all damage that you cause to Humanoid, Giant, Beast, and Dragonkin targets by 2%.",
		"Increases all damage that you cause to Humanoid, Giant, Beast, and Dragonkin targets by 3%."
		];
i++;
//Lethality - Assassination
rank[i] = [
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 6%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 12%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 18%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 24%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 30%."
		];
i++;
//Vile Poisons - Assassination
rank[i] = [
		"Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons by 20% and gives your poisons an additional 40% chance to resist dispel effects."
		];
i++;
//Improved Poisons - Assassination
rank[i] = [
		"Increases the chance to apply poisons to your target by 2%.",
		"Increases the chance to apply poisons to your target by 4%.",
		"Increases the chance to apply poisons to your target by 6%.",
		"Increases the chance to apply poisons to your target by 8%.",
		"Increases the chance to apply poisons to your target by 10%."
		];
i++;
//Envenom - Assassination
rank[i] = [
		"Gives your Eviscerate ability a chance to activate doses of your Deadly Poison or Wound Poison on the target.  Each combo point has a separate 20% chance to activate one dose.  Each activated dose is consumed and applies Instant Poison to the target.<br><br>[Note: If you have applied both types of poison to your target, the Deadly Poison doses will be activated first.  Each activated dose applies your highest learned rank of Instant Poison.]",
		"Gives your Eviscerate ability a chance to activate doses of your Deadly Poison or Wound Poison on the target.  Each combo point has a separate 40% chance to activate one dose.  Each activated dose is consumed and applies Instant Poison to the target.<br><br>[Note: If you have applied both types of poison to your target, the Deadly Poison doses will be activated first.  Each activated dose applies your highest learned rank of Instant Poison.]",
		"Gives your Eviscerate ability a chance to activate doses of your Deadly Poison or Wound Poison on the target.  Each combo point has a separate 60% chance to activate one dose.  Each activated dose is consumed and applies Instant Poison to the target.<br><br>[Note: If you have applied both types of poison to your target, the Deadly Poison doses will be activated first.  Each activated dose applies your highest learned rank of Instant Poison.]"
		];
i++;
//Cold Blood - Assassination
rank[i] = [
		"Cast: instant.<br>When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%.  (Does not break Stealth. Cooldown: 3 minutes.)"
		];
i++;
//Improved Kidney Shot - Assassination
rank[i] = [
		"While affected by your Kidney Shot ability, the target receives an additional 3% damage from all sources.",
		"While affected by your Kidney Shot ability, the target receives an additional 6% damage from all sources.",
		"While affected by your Kidney Shot ability, the target receives an additional 9% damage from all sources."
		];
i++;
//Crippling Brew - Assassination
rank[i] = [
		"Gives a 50% chance to apply Crippling Poison whenever you apply Instant Poison.<br><br>[Note: This effect also triggers when your Envenom procs.  Applies your highest learned rank of Crippling Poison.]",
		"Gives a 100% chance to apply Crippling Poison whenever you apply Instant Poison.<br><br>[Note: This effect also triggers when your Envenom procs.  Applies your highest learned rank of Crippling Poison.]"
		];
i++;
//Seal Fate - Assassination
rank[i] = [
		"Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have a 40% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have a 60% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have a 80% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have a 100% chance to add an additional combo point."
		];
i++;
//Vigor - Assassination
rank[i] = [
		"Increases your maximum energy by 10.  In addition, your critical strikes from abilities that add combo points cause you to regain 5 energy.<br><br>[Note: The energy regain effect does not stack with the Bonescythe (T3 set) 4-piece set bonus.]"
		];
i++;


//COMBAT

//Improved Gouge - Combat
rank[i] = [
		"Increases the effect duration of your Gouge ability by 0.5 seconds.",
		"Increases the effect duration of your Gouge ability by 1 seconds.",
		"Increases the effect duration of your Gouge ability by 1.5 seconds."
		];
i++;
//Improved Sinister Strike - Combat
rank[i] = [
		"Reduces the energy cost of your Sinister Strike ability by 3.",
		"Reduces the energy cost of your Sinister Strike ability by 5."
		];
i++;
//Lightning Reflexes - Combat
rank[i] = [
		"Increases your dodge chance by 1%.",
		"Increases your dodge chance by 2%.",
		"Increases your dodge chance by 3%.",
		"Increases your dodge chance by 4%.",
		"Increases your dodge chance by 5%."
		];
i++;
//Improved Slice and Dice - Combat
rank[i] = [
		"Increases the duration of your Slice and Dice ability by 15%.",
		"Increases the duration of your Slice and Dice ability by 30%.",
		"Increases the duration of your Slice and Dice ability by 45%."
		];
i++;
//Deflection - Combat
rank[i] = [
		"Increases your parry chance by 1%.",
		"Increases your parry chance by 2%.",
		"Increases your parry chance by 3%.",
		"Increases your parry chance by 4%.",
		"Increases your parry chance by 5%."
		];
i++;
//Precision - Combat
rank[i] = [
		"Increases your chance to hit with melee weapons by 1%.",
		"Increases your chance to hit with melee weapons by 2%.",
		"Increases your chance to hit with melee weapons by 3%.",
		"Increases your chance to hit with melee weapons by 4%.",
		"Increases your chance to hit with melee weapons by 5%."
		];
i++;
//Improved Sprint - Combat
rank[i] = [
		"Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
		"Gives a 100% chance to remove all movement impairing effects when you activate your Sprint ability."
		];
i++;
//Endurance - Combat
rank[i] = [
		"Reduces the cooldown of your Sprint and Evasion abilities by 1 minute.",
		"Reduces the cooldown of your Sprint and Evasion abilities by 2 minutes."
		];
i++;
//Riposte - Combat
rank[i] = [
		"Cast: instant.<br>Cost: 10 energy.<br>An instant strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 seconds.  (Cooldown: 6 seconds.)"
		];
i++;
//Deadened Nerves - Combat
rank[i] = [
		"Reduces all Physical damage you take by 1%.  In addition, Blade Dance reduces all Physical damage you take by a further 1% per combo point while active.",
		"Reduces all Physical damage you take by 2%.  In addition, Blade Dance reduces all Physical damage you take by a further 1.5% per combo point while active.",
		"Reduces all Physical damage you take by 3%.  In addition, Blade Dance reduces all Physical damage you take by a further 2% per combo point while active.",
		"Reduces all Physical damage you take by 4%.  In addition, Blade Dance reduces all Physical damage you take by a further 2.5% per combo point while active.",
		"Reduces all Physical damage you take by 5%.  In addition, Blade Dance reduces all Physical damage you take by a further 3% per combo point while active."
		];
i++;
//Improved Kick - Combat
rank[i] = [
		"Gives your Kick ability a 50% chance to silence the target for 2 seconds.",
		"Gives your Kick ability a 100% chance to silence the target for 2 seconds."
		];
i++;
//Dual Wield Specialization - Combat
rank[i] = [
		"Increases the damage done by your offhand weapon by 10%.",
		"Increases the damage done by your offhand weapon by 20%.",
		"Increases the damage done by your offhand weapon by 30%.",
		"Increases the damage done by your offhand weapon by 40%.",
		"Increases the damage done by your offhand weapon by 50%."
		];
i++;
//Close Quarters Specialization - Combat
rank[i] = [
		"Increases your chance to get a critical strike with Daggers and Fist Weapons by 1%.",
		"Increases your chance to get a critical strike with Daggers and Fist Weapons by 2%.",
		"Increases your chance to get a critical strike with Daggers and Fist Weapons by 3%.",
		"Increases your chance to get a critical strike with Daggers and Fist Weapons by 4%.",
		"Increases your chance to get a critical strike with Daggers and Fist Weapons by 5%."
		];
i++;
//Mace Specialization - Combat
rank[i] = [
		"Increases your skill with Maces by 1 and gives you a 1% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 2 and gives you a 2% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 3 and gives you a 3% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 4 and gives you a 4% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 5 and gives you a 5% chance to stun your target for 3 seconds with a Mace."
		];
i++;
//Blade Dance - Combat
rank[i] = [
		"Cast: instant.<br>Cost: 25 energy.<br>Finishing move that increases your parry chance and periodically causes threat to all nearby enemies, making them more likely to attack you.  Lasts longer and grants more parry chance per combo point:<br>&nbsp;&nbsp;1 point: &nbsp;&nbsp;14 seconds, X% parry<br>&nbsp;&nbsp;2 points: 18 seconds, Y% parry<br>&nbsp;&nbsp;3 points: 22 seconds, Z% parry<br>&nbsp;&nbsp;4 points: 26 seconds, A% parry<br>&nbsp;&nbsp;5 points: 30 seconds, B% parry<br><br>[Rank 1: X = 6, Y = 7, &nbsp;&nbsp;Z = 8, &nbsp;&nbsp;A = 9, &nbsp;&nbsp;B = 10,<br>&nbsp;Rank 2: X = 7, Y = 9, &nbsp;&nbsp;Z = 11, A = 13, B = 15 (level 38),<br>&nbsp;Rank 3: X = 8, Y = 11, Z = 14, A = 17, B = 20 (level 50).]"
		];
i++;
//Blade Flurry - Combat
rank[i] = [
		"Cast: instant.<br>Cost: 25 energy.<br>Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 seconds.  (Cooldown: 2 minutes.)"
		];
i++;
//Sword Specialization - Combat
rank[i] = [
		"Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword.",
		"Gives you a 2% chance to get an extra attack on the same target after dealing damage with your Sword.",
		"Gives you a 3% chance to get an extra attack on the same target after dealing damage with your Sword.",
		"Gives you a 4% chance to get an extra attack on the same target after dealing damage with your Sword.",
		"Gives you a 5% chance to get an extra attack on the same target after dealing damage with your Sword."
		];
i++;
//Aggression - Combat
rank[i] = [
		"Increases the damage of your Sinister Strike and Eviscerate abilities by 2%.",
		"Increases the damage of your Sinister Strike and Eviscerate abilities by 4%.",
		"Increases the damage of your Sinister Strike and Eviscerate abilities by 6%."
		];
i++;
//Weapon Expertise - Combat
rank[i] = [
		"Increases your skill with Swords, Daggers, and Fist Weapons by 3.",
		"Increases your skill with Swords, Daggers, and Fist Weapons by 5."
		];
i++;
//Adrenaline Rush - Combat
rank[i] = [
		"Cast: instant.<br>Increases your energy regeneration rate by 100% for 15 seconds. (Cooldown: 5 minutes.)"
		];
i++;


//SUBTLETY

//Master of Deception - Subtlety
rank[i] = [
		"Reduces the chance enemies have to detect you while in Stealth mode and reduces the chance you are critically hit by melee and ranged attacks by 1%.",
		"Reduces the chance enemies have to detect you while in Stealth mode and reduces the chance you are critically hit by melee and ranged attacks by 2%.  More effective than Master of Deception (Rank 1).",
		"Reduces the chance enemies have to detect you while in Stealth mode and reduces the chance you are critically hit by melee and ranged attacks by 3%.  More effective than Master of Deception (Rank 2).",
		"Reduces the chance enemies have to detect you while in Stealth mode and reduces the chance you are critically hit by melee and ranged attacks by 4%.  More effective than Master of Deception (Rank 3).",
		"Reduces the chance enemies have to detect you while in Stealth mode and reduces the chance you are critically hit by melee and ranged attacks by 5%.  More effective than Master of Deception (Rank 4)."
		];
i++;
//Opportunity - Subtlety
rank[i] = [
		"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 4%.",
		"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 8%.",
		"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 12%.",
		"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 16%.",
		"Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 20%."
		];
i++;
//Initiative - Subtlety
rank[i] = [
		"Gives you a 25% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
		"Gives you a 50% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
		"Gives you a 75% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
		];
i++;
//Elusiveness - Subtlety
rank[i] = [
		"Reduces the cooldown of your Vanish and Blind abilities by 1 minute.",
		"Reduces the cooldown of your Vanish and Blind abilities by 2 minutes."
		];
i++;
//Camouflage - Subtlety
rank[i] = [
		"Increases your speed while stealthed by 3% and reduces the cooldown of your Stealth ability by 1 second.",
		"Increases your speed while stealthed by 6% and reduces the cooldown of your Stealth ability by 2 seconds.",
		"Increases your speed while stealthed by 9% and reduces the cooldown of your Stealth ability by 3 seconds.",
		"Increases your speed while stealthed by 12% and reduces the cooldown of your Stealth ability by 4 seconds.",
		"Increases your speed while stealthed by 15% and reduces the cooldown of your Stealth ability by 5 seconds."
		];
i++;
//Sadistic Smile - Subtlety
rank[i] = [
		"Increases the threat generated by your Garrote and Rupture abilities by 25%.",
		"Increases the threat generated by your Garrote and Rupture abilities by 50%."
		];
i++;
//Improved Sap - Subtlety
rank[i] = [
		"Gives you a 50% chance to return to Stealth mode after using your Sap ability.",
		"Gives you a 100% chance to return to Stealth mode after using your Sap ability."
		];
i++;
//Ghostly Strike - Subtlety
rank[i] = [
		"Cast: instant.<br>Cost: 40 energy.<br>An instant strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 seconds.  Awards 1 combo point.  (Cooldown: 20 seconds.)"
		];
i++;
//Improved Ambush - Subtlety
rank[i] = [
		"Increases the critical strike chance of your Ambush ability by 15%.",
		"Increases the critical strike chance of your Ambush ability by 30%.",
		"Increases the critical strike chance of your Ambush ability by 45%."
		];
i++;
//Setup - Subtlety
rank[i] = [
		"Gives you a 15% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.  This effect cannot occur more than once per second.",
		"Gives you a 30% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.  This effect cannot occur more than once per second.",
		"Gives you a 45% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.  This effect cannot occur more than once per second."
		];
i++;
//Heightened Senses - Subtlety
rank[i] = [
		"Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
		"Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 4%.  More effective than Heightened Senses (Rank 1)."
		];
i++;
//Serrated Blades - Subtlety
rank[i] = [
		"Causes your attacks to ignore X of your target's armour and increases the damage dealt by your Rupture ability by 10%.<br><br>[Note: X = 1.67 * your current level.]",
		"Causes your attacks to ignore X of your target's armour and increases the damage dealt by your Rupture ability by 20%.<br><br>[Note: X = 3.33 * your current level.]",
		"Causes your attacks to ignore X of your target's armour and increases the damage dealt by your Rupture ability by 30%.<br><br>[Note: X = 5 * your current level.]"
		];
i++;
//Cheat Death - Subtlety
rank[i] = [
		"While Ghostly Strike, Evasion, or Blade Dance is active, you have a 33% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 seconds. This effect cannot occur more than once per minute.",
		"While Ghostly Strike, Evasion, or Blade Dance is active, you have a 66% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 seconds. This effect cannot occur more than once per minute.",
		"While Ghostly Strike, Evasion, or Blade Dance is active, you have a 100% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 seconds. This effect cannot occur more than once per minute."
		];
i++;
//Preparation - Subtlety
rank[i] = [
		"Cast: instant.<br>When activated, this ability immediately finishes the cooldown on your other Rogue abilities.  (Does not break Stealth. Cooldown: 10 minutes.)"
		];
i++;
//Dirty Deeds - Subtlety
rank[i] = [
		"Reduces the energy cost of your Cheap Shot and Garrote abilities by 10.",
		"Reduces the energy cost of your Cheap Shot and Garrote abilities by 20."
		];
i++;
//Hemorrhage - Subtlety
rank[i] = [
		"Cast: instant.<br>Cost: 35 energy.<br>An instant strike that deals 100% weapon damage and causes the target to hemorrhage, refreshing the duration of your Garrote and Rupture effects on the target by up to 3 seconds and increasing any Physical damage dealt to the target by up to X.  Lasts 10 charges or 15 seconds.  Awards 1 combo point.<br><br>[Rank 1: X = 3,<br>&nbsp;Rank 2: X = 5 &nbsp;&nbsp;(level 38),<br>&nbsp;Rank 3: X = 7 &nbsp;&nbsp;(level 48),<br>&nbsp;Rank 4: X = 11 (level 58).]"
		];
i++;
//Deadliness - Subtlety
rank[i] = [
		"Increases your attack power by 2%.",
		"Increases your attack power by 4%.",
		"Increases your attack power by 6%.",
		"Increases your attack power by 8%.",
		"Increases your attack power by 10%."
		];
i++;
//Preparation - Subtlety
rank[i] = [
		"Cast: instant.<br>When used, adds 2 combo points to your target and increases the damage of your next Backstab, Garrote, or Ambush ability used against that target by 10%.  Lasts 10 seconds.  You must add to or use the combo points before the effect ends or they will be lost.  (Requires Stealth. Does not break Stealth. Cooldown: 2 minutes.)"
		];
i++;

jsLoaded=true;