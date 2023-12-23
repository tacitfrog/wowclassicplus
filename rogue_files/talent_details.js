var i = 0;
var t = 0;

var className = "Rogue Talents";

tree[i] = "Assassination"; i++;
tree[i] = "Combat"; i++;
tree[i] = "Subtlety"; i++;

i = 0;

talent[i] = [0, "Improved Eviscerate", 3, 1, 1]; i++;
talent[i] = [0, "Remorseless Attacks", 2, 2, 1]; i++;
talent[i] = [0, "Malice", 5, 3, 1]; i++;
talent[i] = [0, "Ruthlessness", 3, 1, 2]; i++;
talent[i] = [0, "Murder", 2, 2, 2]; i++;
talent[i] = [0, "Improved Backstab", 3, 4, 2]; i++;
talent[i] = [0, "Relentless Strikes", 1, 1, 3]; i++;
talent[i] = [0, "Improved Expose Armor", 2, 2, 3]; i++;
talent[i] = [0, "Lethality", 5, 3, 3, [getTalentID("Malice"), 5]]; i++;
talent[i] = [0, "Improved Poisons", 5, 2, 4]; i++;
talent[i] = [0, "Vile Poisons", 5, 3, 4]; i++;
talent[i] = [0, "Deadly Brew", 3, 1, 5]; i++;
talent[i] = [0, "Cold Blood", 1, 2, 5]; i++;
talent[i] = [0, "Searing Venom", 1, 3, 5, [getTalentID("Vile Poisons"), 5]]; i++;
talent[i] = [0, "Improved Kidney Shot", 3, 4, 5]; i++;
talent[i] = [0, "Seal Fate", 5, 2, 6, [getTalentID("Cold Blood"), 1]]; i++;
talent[i] = [0, "Vigor", 1, 2, 7, [getTalentID("Seal Fate"), 5]]; i++;

treeStartStop[t] = i -1;
t++;

talent[i] = [1, "Improved Gouge", 3, 1, 1]; i++;
talent[i] = [1, "Improved Sinister Strike", 2, 2, 1]; i++;
talent[i] = [1, "Lightning Reflexes", 5, 3, 1]; i++;
talent[i] = [1, "Improved Slice and Dice", 3, 1, 2]; i++;
talent[i] = [1, "Deflection", 5, 2, 2]; i++;
talent[i] = [1, "Precision", 5, 3, 2]; i++;
talent[i] = [1, "Endurance", 2, 1, 3]; i++;
talent[i] = [1, "Riposte", 1, 2, 3, [getTalentID("Deflection"), 5]]; i++;
talent[i] = [1, "Improved Sprint", 2, 4, 3]; i++;
talent[i] = [1, "Improved Kick", 2, 1, 4]; i++;
talent[i] = [1, "Close Quarters Specialization", 5, 2, 4]; i++;
talent[i] = [1, "Dual Wield Specialization", 5, 3, 4, [getTalentID("Precision"), 5]]; i++;
talent[i] = [1, "Improved Blade Dance", 3, 4, 4]; i++;
talent[i] = [1, "Mace Specialization", 5, 1, 5]; i++;
talent[i] = [1, "Blade Flurry", 1, 2, 5]; i++;
talent[i] = [1, "Sword Specialization", 5, 3, 5]; i++;
talent[i] = [1, "Weapon Expertise", 2, 2, 6, [getTalentID("Blade Flurry"), 1]]; i++;
talent[i] = [1, "Aggression", 3, 3, 6]; i++;
talent[i] = [1, "Adrenaline Rush", 1, 2, 7]; i++;

treeStartStop[t] = i -1;
t++;

talent[i] = [2, "Master of Deception", 5, 2, 1]; i++;
talent[i] = [2, "Opportunity", 5, 3, 1]; i++;
talent[i] = [2, "Improved Sap", 2, 1, 2]; i++;
talent[i] = [2, "Elusiveness", 2, 2, 2]; i++;
talent[i] = [2, "Camouflage", 5, 3, 2]; i++;
talent[i] = [2, "Sadistic Smile", 2, 4, 2]; i++;
talent[i] = [2, "Initiative", 3, 1, 3]; i++;
talent[i] = [2, "Ghostly Strike", 1, 2, 3]; i++;
talent[i] = [2, "Improved Ambush", 3, 3, 3]; i++;
talent[i] = [2, "Setup", 3, 1, 4]; i++;
talent[i] = [2, "Heightened Senses", 3, 2, 4]; i++;
talent[i] = [2, "Serrated Blades", 3, 3, 4]; i++;
talent[i] = [2, "Cheat Death", 3, 1, 5]; i++;
talent[i] = [2, "Preparation", 1, 2, 5]; i++;
talent[i] = [2, "Dirty Deeds", 2, 3, 5]; i++;
talent[i] = [2, "Hemorrhage", 1, 4, 5, [getTalentID("Serrated Blades"), 3]]; i++;
talent[i] = [2, "Deadliness", 3, 3, 6]; i++;
talent[i] = [2, "Improved Hemorrhage", 2, 4, 6, [getTalentID("Hemorrhage"), 1]]; i++;
talent[i] = [2, "Premeditation", 1, 2, 7, [getTalentID("Preparation"), 1]]; i++;
treeStartStop[t] = i -1;
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
//Murder - Assassination
rank[i] = [
		"Increases all damage that you cause to Humanoid, Giant, Beast and Dragonkin targets by 1%.",
		"Increases all damage that you cause to Humanoid, Giant, Beast and Dragonkin targets by 2%."
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
		"Increases the armor reduced by your Expose Armor ability by 25%.",
		"Increases the armor reduced by your Expose Armor ability by 50%."
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
//Improved Poisons - Assassination
rank[i] = [
		"Increases the chance to apply poisons to your target by 2%.",
		"Increases the chance to apply poisons to your target by 4%.",
		"Increases the chance to apply poisons to your target by 6%.",
		"Increases the chance to apply poisons to your target by 8%.",
		"Increases the chance to apply poisons to your target by 10%."
		];
i++;
//Vile Poisons - Assassination
rank[i] = [
		"Increases the damage dealt by your poisons and Envenom ability by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons and Envenom ability by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons and Envenom ability by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons and Envenom ability by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
		"Increases the damage dealt by your poisons and Envenom ability by 20% and gives your poisons an additional 40% chance to resist dispel effects."
		];
i++;
//Deadly Brew - Assassination
rank[i] = [
		"When you inflict any poison on a target, you also have a 6% chance to inflict Instant Poison. <br><br>[Note: This effect uses your highest learned rank of Instant Poison up to the level of the proccing poison. If Instant Poison procs this effect, two applications of Instant Poison are inflicted at the cost of one dose. The proc cannot trigger another proc. The proc chance of this effect benefits from anything that increases the proc chance of Instant Poison and the damage benefits from Vile Poisons.]",
		"When you inflict any poison on a target, you also have a 13% chance to inflict Instant Poison. <br><br>[Note: This effect uses your highest learned rank of Instant Poison up to the level of the proccing poison. If Instant Poison procs this effect, two applications of Instant Poison are inflicted at the cost of one dose. The proc cannot trigger another proc. The proc chance of this effect benefits from anything that increases the proc chance of Instant Poison and the damage benefits from Vile Poisons.]",
		"When you inflict any poison on a target, you also have a 20% chance to inflict Instant Poison. <br><br>[Note: This effect uses your highest learned rank of Instant Poison up to the level of the proccing poison. If Instant Poison procs this effect, two applications of Instant Poison are inflicted at the cost of one dose. The proc cannot trigger another proc. The proc chance of this effect benefits from anything that increases the proc chance of Instant Poison and the damage benefits from Vile Poisons.]"
		];
i++;
//Cold Blood - Assassination
rank[i] = [
		"When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, Eviscerate, or Envenom by 100%.  (Does not break Stealth. Cooldown: 3 minutes.)"
		];
i++;
//Searing Venom - Assassination
rank[i] = [
		"While affected by one or more of your poisons, the chance of the target being critically hit by physical attacks from all sources is increased by 3%."
		];
i++;
//Improved Kidney Shot - Assassination
rank[i] = [
		"While affected by your Kidney Shot ability, the target receives an additional 3% damage from all sources. <br><br>[Note: This effect can only be active once at a time on a target.]",
		"While affected by your Kidney Shot ability, the target receives an additional 6% damage from all sources. <br><br>[Note: This effect can only be active once at a time on a target.]",
		"While affected by your Kidney Shot ability, the target receives an additional 9% damage from all sources. <br><br>[Note: This effect can only be active once at a time on a target.]"
		];
i++;
//Seal Fate - Assassination
rank[i] = [
		"Your critical strikes from abilities that add combo points  have a 20% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points  have a 40% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points  have a 60% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points  have a 80% chance to add an additional combo point.",
		"Your critical strikes from abilities that add combo points  have a 100% chance to add an additional combo point."
		];
i++;
//Vigor - Assassination
rank[i] = [
		"Increases your maximum energy by 10.  In addition, your critical strikes from abilities that add combo points cause you to regain 5 energy."
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
		"Increases your Dodge chance by 1%.",
		"Increases your Dodge chance by 2%.",
		"Increases your Dodge chance by 3%.",
		"Increases your Dodge chance by 4%.",
		"Increases your Dodge chance by 5%."
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
		"Increases your Parry chance by 1%.",
		"Increases your Parry chance by 2%.",
		"Increases your Parry chance by 3%.",
		"Increases your Parry chance by 4%.",
		"Increases your Parry chance by 5%."
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
//Endurance - Combat
rank[i] = [
		"Reduces the cooldown of your Sprint and Evasion abilities by 45 seconds.",
		"Reduces the cooldown of your Sprint and Evasion abilities by 1.5 minutes."
		];
i++;
//Riposte - Combat
rank[i] = [
		"A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 seconds.  (Instant cast. Cost: 10 energy. Cooldown: 6 seconds.)"
		];
i++;
//Improved Sprint - Combat
rank[i] = [
		"Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
		"Gives a 100% chance to remove all movement impairing effects when you activate your Sprint ability."
		];
i++;
//Improved Kick - Combat
rank[i] = [
		"Gives your Kick ability a 50% chance to silence the target for 2 seconds.",
		"Gives your Kick ability a 100% chance to silence the target for 2 seconds."
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
//Dual Wield Specialization - Combat
rank[i] = [
		"Increases the damage done by your offhand weapon by 10%.",
		"Increases the damage done by your offhand weapon by 20%.",
		"Increases the damage done by your offhand weapon by 30%.",
		"Increases the damage done by your offhand weapon by 40%.",
		"Increases the damage done by your offhand weapon by 50%."
		];
i++;
//Improved Blade Dance - Combat
rank[i] = [
		"Reduces all physical damage you take while Blade Dance is active by a percentage equal to 33% of your critical strike chance.  <br><br>[Note: This effect is based on your current critical strike chance from gear, talents, Leader of the Pack, Blessing of Kings, and Grace of Air Totem, but does not include consumables and world buffs for balancing reasons; Close Quarters Specialization counts if you are wielding a qualifying weapon in your main hand.]",
		"Reduces all physical damage you take while Blade Dance is active by a percentage equal to 66% of your critical strike chance.  <br><br>[Note: This effect is based on your current critical strike chance from gear, talents, Leader of the Pack, Blessing of Kings, and Grace of Air Totem, but does not include consumables and world buffs for balancing reasons; Close Quarters Specialization counts if you are wielding a qualifying weapon in your main hand.]",
		"Reduces all physical damage you take while Blade Dance is active by a percentage equal to 100% of your critical strike chance.  <br><br>[Note: This effect is based on your current critical strike chance from gear, talents, Leader of the Pack, Blessing of Kings, and Grace of Air Totem, but does not include consumables and world buffs for balancing reasons; Close Quarters Specialization counts if you are wielding a qualifying weapon in your main hand.]"
		];
i++;
//Mace Specialization - Combat
rank[i] = [
		"Increases your skill with Maces by 1, and gives you a 1% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 2, and gives you a 2% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 3, and gives you a 3% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 4, and gives you a 4% chance to stun your target for 3 seconds with a Mace.",
		"Increases your skill with Maces by 5, and gives you a 5% chance to stun your target for 3 seconds with a Mace."
		];
i++;
//Blade Flurry - Combat
rank[i] = [
		"Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 seconds.  (Cooldown: 2 minutes.)"
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
//Weapon Expertise - Combat
rank[i] = [
		"Increases your skill with Sword, Fist and Dagger weapons by 3.",
		"Increases your skill with Sword, Fist and Dagger weapons by 5."
		];
i++;
//Aggression - Combat
rank[i] = [
		"Increases the damage of your Sinister Strike and Eviscerate abilities by 2% and the threat generated by your Blade Dance ability by 5%.",
		"Increases the damage of your Sinister Strike and Eviscerate abilities by 4% and the threat generated by your Blade Dance ability by 10%.",
		"Increases the damage of your Sinister Strike and Eviscerate abilities by 6% and the threat generated by your Blade Dance ability by 15%."
		];
i++;
//Adrenaline Rush - Combat
rank[i] = [
		"Increases your energy regeneration rate by 100% for 15 seconds. (Cooldown: 5 minutes.)"
		];
i++;


//SUBTLETY

//Master of Deception - Subtlety
rank[i] = [
		"Reduces the chance enemies have to detect you while in Stealth mode.",
		"Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 1).",
		"Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 2).",
		"Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 3).",
		"Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 4)."
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
//Improved Sap - Subtlety
rank[i] = [
		"Gives you a 50% chance to return to Stealth mode after using your Sap ability.",
		"Gives you a 100% chance to return to Stealth mode after using your Sap ability."
		];
i++;
//Elusiveness - Subtlety
rank[i] = [
		"Reduces the cooldown of your Vanish and Blind abilities by 45 seconds.",
		"Reduces the cooldown of your Vanish and Blind abilities by 1.5 minutes."
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
		"Reduces the energy cost of your Tease ability by 4.  In addition, the threat generated by damage caused by your Rupture and Garrote abilities is increased.",
		"Reduces the energy cost of your Tease ability by 8.  In addition, the threat generated by damage caused by your Rupture and Garrote abilities is increased.  More effective than Sadistic Smile (Rank 1)."
		];
i++;
//Initiative - Subtlety
rank[i] = [
		"Gives you a 25% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
		"Gives you a 50% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
		"Gives you a 75% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
		];
i++;
//Ghostly Strike - Subtlety
rank[i] = [
		"A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 seconds.  Awards 1 combo point.  (Instant cast. Cost: 40 energy. Cooldown: 20 seconds.)"
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
		"Gives you a 15% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
		"Gives you a 30% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
		"Gives you a 45% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells."
		];
i++;
//Heightened Senses - Subtlety
rank[i] = [
		"Reduces the chance you are hit by spells and ranged attacks by 1% and the chance you are critically hit by melee attacks by 2%.  In addition, your Stealth detection is increased.",
		"Reduces the chance you are hit by spells and ranged attacks by 2% and the chance you are critically hit by melee attacks by 4%.  In addition, your Stealth detection is increased.  More effective than Heightened Senses (Rank 1).",
		"Reduces the chance you are hit by spells and ranged attacks by 3% and the chance you are critically hit by melee attacks by 6%.  In addition, your Stealth detection is increased.  More effective than Heightened Senses (Rank 2)."
		];
i++;
//Serrated Blades - Subtlety
rank[i] = [
		"Causes your attacks to ignore X of your target's Armor and increases the damage dealt by your Rupture ability by 10%.  In addition, your Blade Dance ability has a 33% chance to apply Rupture to each affected target.  <br><br>[Note: This effect applies a 1-combo point Rupture and uses your highest learned rank of Rupture. X = 1.67 * your current level]",
		"Causes your attacks to ignore X of your target's Armor and increases the damage dealt by your Rupture ability by 20%.  In addition, your Blade Dance ability has a 66% chance to apply Rupture to each affected target.  <br><br>[Note: This effect applies a 1-combo point Rupture and uses your highest learned rank of Rupture. X = 1.67 * your current level]",
		"Causes your attacks to ignore X of your target's Armor and increases the damage dealt by your Rupture ability by 30%.  In addition, your Blade Dance ability has a 100% chance to apply Rupture to each affected target.  <br><br>[Note: This effect applies a 1-combo point Rupture and uses your highest learned rank of Rupture. X = 1.67 * your current level]"
		];
i++;
//Cheat Death - Subtlety
rank[i] = [
		"While you are under the effect of Blade Dance or Ghostly Strike, you have a 33% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 seconds. This effect cannot occur more than once per minute.",
		"While you are under the effect of Blade Dance or Ghostly Strike, you have a 66% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 seconds. This effect cannot occur more than once per minute.",
		"While you are under the effect of Blade Dance or Ghostly Strike, you have a 100% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 seconds. This effect cannot occur more than once per minute."
		];
i++;
//Preparation - Subtlety
rank[i] = [
		"When activated, this ability immediately finishes the cooldown on your other Rogue abilities.  (Does not break Stealth. Cooldown: 10 minutes.)"
		];
i++;
//Dirty Deeds - Subtlety
rank[i] = [
		"Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10.",
		"Reduces the Energy cost of your Cheap Shot and Garrote abilities by 20."
		];
i++;
//Hemorrhage - Subtlety
rank[i] = [
		"An instant strike that damages the opponent and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to X.  Lasts 10 charges or 15 seconds.  Awards 1 combo point.  (Instant cast. Cost: 35 energy.)  <br><br>[Note: This effect can only be active once at a time on a target. X = 3 at Rank 1, 7 at Rank 2 (trainable at level 46), and 11 at Rank 3 (trainable at level 58)]"
		];
i++;
//Deadliness - Subtlety
rank[i] = [
		"Increases your Attack Power by 3%.",
		"Increases your Attack Power by 6%.",
		"Increases your Attack Power by 9%."
		];
i++;
//Improved Hemorrhage - Subtlety
rank[i] = [
		"Hemorrhage refreshes the duration of your Rupture and Garrote effects on the target by up to 2 seconds. <br><br>[Note: This will refresh up to, but not exceed, the initially applied duration of each effect.]",
		"Hemorrhage refreshes the duration of your Rupture and Garrote effects on the target by up to 4 seconds. <br><br>[Note: This will refresh up to, but not exceed, the initially applied duration of each effect.]"
		];
i++;
//Preparation - Subtlety
rank[i] = [
		"When used, adds 2 combo points to your target.  You must add to or use those combo points within 10 seconds or the combo points are lost.  (Requires Stealth. Does not break Stealth. Cooldown: 1 minute.)"
		];
i++;

jsLoaded=true;