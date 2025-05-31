var i = 0;
var t = 0;

var className = "rogue";

tree[i] = "Assassination"; i++;
tree[i] = "Combat"; i++;
tree[i] = "Subtlety"; i++;

i = 0;

talent[i] = [0, "Improved Eviscerate", "", 3, 1, 1]; i++;
talent[i] = [0, "Remorseless Attacks", "changed", 2, 2, 1]; i++;
talent[i] = [0, "Malice", "", 5, 3, 1]; i++;
talent[i] = [0, "Ruthlessness", "", 3, 1, 2]; i++;
talent[i] = [0, "Murder", "", 2, 2, 2]; i++;
talent[i] = [0, "Improved Backstab", "moved", 3, 4, 2]; i++;
talent[i] = [0, "Relentless Strikes", "", 1, 1, 3]; i++;
talent[i] = [0, "Improved Expose Armor", "", 2, 2, 3]; i++;
talent[i] = [0, "Lethality", "", 5, 3, 3, [getTalentID("Malice"), 5]]; i++;
talent[i] = [0, "Vile Poisons", "changed", 5, 2, 4]; i++;
talent[i] = [0, "Improved Poisons", "", 5, 3, 4]; i++;
talent[i] = [0, "Crippling Brew", "new", 2, 1, 5]; i++;
talent[i] = [0, "Cold Blood", "", 1, 2, 5]; i++;
talent[i] = [0, "Improved Kidney Shot", "", 3, 3, 5]; i++;
talent[i] = [0, "Seal Fate", "", 5, 2, 6, [getTalentID("Cold Blood"), 1]]; i++;
talent[i] = [0, "Vigor", "changedmoved", 1, 2, 7, [getTalentID("Seal Fate"), 5]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [1, "Improved Gouge", "", 3, 1, 1]; i++;
talent[i] = [1, "Improved Sinister Strike", "", 2, 2, 1]; i++;
talent[i] = [1, "Lightning Reflexes", "", 5, 3, 1]; i++;
talent[i] = [1, "Combat Acumen", "changedmoved", 3, 1, 2]; i++;
talent[i] = [1, "Deflection", "", 5, 2, 2]; i++;
talent[i] = [1, "Precision", "", 5, 3, 2]; i++;
talent[i] = [1, "Improved Sprint", "moved", 2, 4, 2]; i++;
talent[i] = [1, "Endurance", "changed", 2, 1, 3]; i++;
talent[i] = [1, "Riposte", "", 1, 2, 3, [getTalentID("Deflection"), 5]]; i++;
talent[i] = [1, "Deadened Nerves", "new", 3, 4, 3]; i++;
talent[i] = [1, "Improved Kick", "", 2, 1, 4]; i++;
talent[i] = [1, "Dual Wield Specialization", "", 5, 3, 4, [getTalentID("Precision"), 5]]; i++;
talent[i] = [1, "Close Quarters Specialization", "changedmoved", 5, 4, 4]; i++;
talent[i] = [1, "Mace Specialization", "", 5, 1, 5]; i++;
talent[i] = [1, "Blade Dance", "new", 1, 2, 5, [getTalentID("Riposte"), 1]]; i++;
talent[i] = [1, "Blade Flurry", "changed", 1, 3, 5]; i++;
talent[i] = [1, "Sword Specialization", "", 5, 4, 5]; i++;
talent[i] = [1, "Aggression", "", 3, 2, 6]; i++;
talent[i] = [1, "Weapon Expertise", "", 2, 3, 6, [getTalentID("Blade Flurry"), 1]]; i++;
talent[i] = [1, "Adrenaline Rush", "", 1, 2, 7]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [2, "Master of Deception", "changed", 5, 2, 1]; i++;
talent[i] = [2, "Opportunity", "", 5, 3, 1]; i++;
talent[i] = [2, "Initiative", "moved", 3, 1, 2]; i++;
talent[i] = [2, "Elusiveness", "changed", 2, 2, 2]; i++;
talent[i] = [2, "Camouflage", "", 5, 3, 2]; i++;
talent[i] = [2, "Improved Sap", "changedmoved", 2, 1, 3]; i++;
talent[i] = [2, "Ghostly Strike", "", 1, 2, 3]; i++;
talent[i] = [2, "Serrated Blades", "moved", 3, 3, 3]; i++;
talent[i] = [2, "Setup", "", 3, 1, 4]; i++;
talent[i] = [2, "Heightened Senses", "moved", 2, 2, 4]; i++;
talent[i] = [2, "Improved Ambush", "changedmoved", 2, 3, 4]; i++;
talent[i] = [2, "Cheat Death", "new", 3, 1, 5]; i++;
talent[i] = [2, "Preparation", "", 1, 2, 5]; i++;
talent[i] = [2, "Dirty Deeds", "", 2, 3, 5]; i++;
talent[i] = [2, "Hemorrhage", "changed", 1, 4, 5, [getTalentID("Serrated Blades"), 3]]; i++;
talent[i] = [2, "Deadliness", "changed", 5, 3, 6]; i++;
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
		"After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ghostly Strike, Ambush, or Eviscerate.  Lasts 20 seconds.<br><br>[Note: You no longer have to land the killing blow to trigger this effect, but you do need to have caused damage to the target within 2 seconds of its death.]",
		"After killing an opponent that yields experience or honor, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Ghostly Strike, Ambush, or Eviscerate.  Lasts 20 seconds.<br><br>[Note: You no longer have to land the killing blow to trigger this effect, but you do need to have caused damage to the target within 2 seconds of its death.]"
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
//Murder - Assassination
rank[i] = [
		"Increases all damage that you cause to Humanoid, Giant, Beast, and Dragonkin targets by 1%.",
		"Increases all damage that you cause to Humanoid, Giant, Beast, and Dragonkin targets by 2%."
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
//Improved Expose Armor - Assassination
rank[i] = [
		"Increases the armour reduced by your Expose Armor ability by 25%.",
		"Increases the armour reduced by your Expose Armor ability by 50%."
		];
i++;
//Lethality - Assassination
rank[i] = [
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Hemorrhage, and Ghostly Strike abilities by 6%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Hemorrhage, and Ghostly Strike abilities by 12%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Hemorrhage, and Ghostly Strike abilities by 18%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Hemorrhage, and Ghostly Strike abilities by 24%.",
		"Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Hemorrhage, and Ghostly Strike abilities by 30%."
		];
i++;
//Vile Poisons - Assassination
rank[i] = [
		"Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.<br><br>[Note: Also affects Spitebomb damage.]",
		"Increases the damage dealt by your poisons by 8% and gives your poisons an additional 16% chance to resist dispel effects.<br><br>[Note: Also affects Spitebomb damage.]",
		"Increases the damage dealt by your poisons by 12% and gives your poisons an additional 24% chance to resist dispel effects.<br><br>[Note: Also affects Spitebomb damage.]",
		"Increases the damage dealt by your poisons by 16% and gives your poisons an additional 32% chance to resist dispel effects.<br><br>[Note: Also affects Spitebomb damage.]",
		"Increases the damage dealt by your poisons by 20% and gives your poisons an additional 40% chance to resist dispel effects.<br><br>[Note: Also affects Spitebomb damage.]"
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
//Crippling Brew - Assassination
rank[i] = [
		"Gives a 50% chance to apply Crippling Poison with half its usual duration whenever you apply another poison.<br><br>[Note: Does not require you to have Crippling Poison applied to your weapons.  Applies your highest learned rank of Crippling Poison (for 6 seconds).  Only triggers from poisons that can be crafted by Rogues.  Also triggers on targets of Spitebomb damage.]",
		"Gives a 100% chance to apply Crippling Poison with half its usual duration whenever you apply another poison.<br><br>[Note: Does not require you to have Crippling Poison applied to your weapons.  Applies your highest learned rank of Crippling Poison (for 6 seconds).  Only triggers from poisons that can be crafted by Rogues.  Also triggers on targets of Spitebomb damage.]"
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
//Seal Fate - Assassination
rank[i] = [
		"Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have a 40% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have a 60% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have an 80% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points have a 100% chance to add an additional combo point."
		];
i++;
//Vigor - Assassination
rank[i] = [
		"Your critical strikes from abilities that add combo points cause you to regain 5 energy.  In addition, your maximum energy is increased by 10.<br><br>[Note: The Nightslayer (T1 set) 5-piece set bonus does stack with the maximum energy component, for a total of 120 energy.  The Bonescythe (T3 set) 4-piece set bonus does not stack with the energy regain component.]"
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
//Combat Acumen - Combat
rank[i] = [
		"Increases the duration of your Slice and Dice and Blade Dance abilities by 15%.",
		"Increases the duration of your Slice and Dice and Blade Dance abilities by 30%.",
		"Increases the duration of your Slice and Dice and Blade Dance abilities by 45%."
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
		"Reduces all Physical damage you take by 2%.",
		"Reduces all Physical damage you take by 4%.",
		"Reduces all Physical damage you take by 6%."
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
		"Cast: instant.<br>Cost: 25 energy.<br>Finishing move that increases your parry chance, your threat generation, and periodically causes threat to all nearby enemies, making them more likely to attack you.  Cancelled if you Vanish.  Lasts longer and grants more parry chance per combo point:<br>&nbsp;&nbsp;1 point: &nbsp;&nbsp;9 seconds, &nbsp;&nbsp;X% parry<br>&nbsp;&nbsp;2 points: 12 seconds, Y% parry<br>&nbsp;&nbsp;3 points: 15 seconds, Z% parry<br>&nbsp;&nbsp;4 points: 18 seconds, A% parry<br>&nbsp;&nbsp;5 points: 21 seconds, B% parry<br><br>[Rank 1: X = 3, Y = 6, Z = 9, &nbsp;&nbsp;A = 12, B = 15,<br>&nbsp;Rank 2: X = 4, Y = 8, Z = 12, A = 16, B = 20 (level 48).]<br><br>[Note: While active, increases all threat you generate by 25% to cancel out the Rogue class' passive 20% reduction.  Also, pulses threat to all enemies within 5 yards every 2 seconds; the amount of threat pulsed is 70/100 at Rank 1/2, subject to further balancing, to counter threat from healing in the early fight.]"
		];
i++;
//Blade Flurry - Combat
rank[i] = [
		"Cast: instant.<br>Cost: 25 energy.<br>Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 seconds.  (Cooldown: 2 minutes.)<br><br>[Note: Any Rogue poisons that your weapons apply to the target are also applied to the additional opponent.  This consumes an extra poison charge.  Instant Poison and Spiteful Poison damage dealt to the target no longer copies to the additional opponent, as the poisons now proc separately on that opponent.]"
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
//Serrated Blades - Subtlety
rank[i] = [
		"Causes your attacks to ignore X of your target's armour and increases the damage dealt by your Rupture ability by 10%.<br><br>[Note: X = 1.67 * your current level.]",
		"Causes your attacks to ignore X of your target's armour and increases the damage dealt by your Rupture ability by 20%.<br><br>[Note: X = 3.33 * your current level.]",
		"Causes your attacks to ignore X of your target's armour and increases the damage dealt by your Rupture ability by 30%.<br><br>[Note: X = 5 * your current level.]"
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
//Improved Ambush - Subtlety
rank[i] = [
		"Increases the critical strike chance of your Ambush ability by 25%.",
		"Increases the critical strike chance of your Ambush ability by 50%.",
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
		"Cast: instant.<br>Cost: 35 energy.<br>An instant strike that deals 110% weapon damage and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to X.  Lasts 10 charges or 15 seconds.  Awards 1 combo point.<br><br>[Rank 1: X = 4,<br>&nbsp;Rank 2: X = 6 &nbsp;&nbsp;(level 38),<br>&nbsp;Rank 3: X = 9 &nbsp;&nbsp;(level 48),<br>&nbsp;Rank 4: X = 12 (level 58).]"
		];
i++;
//Deadliness - Subtlety
rank[i] = [
		"Gives your Hemorrhage and Backstab abilities a 20% chance to refresh the duration of your Garrote and Rupture effects on the target by up to 3 seconds. In addition, all damage you cause to bleeding targets is increased by 1%.",
		"Gives your Hemorrhage and Backstab abilities a 40% chance to refresh the duration of your Garrote and Rupture effects on the target by up to 3 seconds. In addition, all damage you cause to bleeding targets is increased by 2%.",
		"Gives your Hemorrhage and Backstab abilities a 60% chance to refresh the duration of your Garrote and Rupture effects on the target by up to 3 seconds. In addition, all damage you cause to bleeding targets is increased by 3%.",
		"Gives your Hemorrhage and Backstab abilities an 80% chance to refresh the duration of your Garrote and Rupture effects on the target by up to 3 seconds. In addition, all damage you cause to bleeding targets is increased by 4%.",
		"Gives your Hemorrhage and Backstab abilities a 100% chance to refresh the duration of your Garrote and Rupture effects on the target by up to 3 seconds. In addition, all damage you cause to bleeding targets is increased by 5%."
		];
i++;
//Preparation - Subtlety
rank[i] = [
		"Cast: instant.<br>When used, adds 2 combo points to your target and increases the damage of your next Backstab, Garrote, Ambush, or Eviscerate used against that target by 10%.  Lasts 20 seconds.  You must add to or use the combo points before the effect ends or they will be lost.  (Requires Stealth. Does not break Stealth. Cooldown: 2 minutes.)"
		];
i++;

jsLoaded=true;