var i = 0;
var t = 0;

var className = "shaman";

tree[i] = "Elemental"; i++;
tree[i] = "Enhancement"; i++;
tree[i] = "Restoration"; i++;

i = 0;

talent[i] = [0, "Convection", "", 5, 2, 1]; i++;
talent[i] = [0, "Concussion", "", 5, 3, 1]; i++;
talent[i] = [0, "Earth's Grasp", "", 2, 1, 2]; i++;
talent[i] = [0, "Elemental Warding", "", 3, 2, 2]; i++;
talent[i] = [0, "Call of Flame", "", 3, 3, 2]; i++;
talent[i] = [0, "Elemental Devastation", "moved", 3, 4, 2]; i++;
talent[i] = [0, "Elemental Focus", "", 1, 1, 3]; i++;
talent[i] = [0, "Reverberation", "", 5, 2, 3]; i++;
talent[i] = [0, "Call of Thunder", "", 5, 3, 3]; i++;
talent[i] = [0, "Improved Fire Totems", "changed", 2, 1, 4]; i++;
talent[i] = [0, "Eye of the Storm", "", 3, 2, 4]; i++;
talent[i] = [0, "Unrelenting Storm", "new", 2, 4, 4]; i++;
talent[i] = [0, "Storm Reach", "", 2, 1, 5]; i++;
talent[i] = [0, "Elemental Fury", "", 1, 2, 5]; i++;
talent[i] = [0, "Lightning Overload", "new", 5, 4, 5]; i++;
talent[i] = [0, "Lightning Mastery", "", 5, 3, 6, [getTalentID("Call of Thunder"), 5]]; i++;
talent[i] = [0, "Elemental Mastery", "", 1, 2, 7, [getTalentID("Elemental Fury"), 1]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [1, "Ancestral Knowledge", "", 5, 2, 1]; i++;
talent[i] = [1, "Shield Specialization", "", 5, 3, 1]; i++;
talent[i] = [1, "Guardian Totems", "changed", 3, 1, 2]; i++;
talent[i] = [1, "Thundering Strikes", "", 5, 2, 2]; i++;
talent[i] = [1, "Improved Ghost Wolf", "", 2, 3, 2]; i++;
talent[i] = [1, "Improved Lightning Shield", "", 3, 4, 2]; i++;
talent[i] = [1, "Enhancing Totems", "", 2, 1, 3]; i++;
talent[i] = [1, "Two-handed Axes and Maces", "changed", 1, 3, 3]; i++;
talent[i] = [1, "Anticipation", "", 5, 4, 3]; i++;
talent[i] = [1, "Elemental Weapons", "changedmoved", 3, 1, 4]; i++;
talent[i] = [1, "Flurry", "", 5, 2, 4, [getTalentID("Thundering Strikes"), 5]]; i++;
talent[i] = [1, "Toughness", "", 5, 3, 4]; i++;
talent[i] = [1, "Improved Weapon Totems", "changed", 2, 1, 5]; i++;
talent[i] = [1, "Spirit Weapons", "new", 3, 2, 5]; i++;
talent[i] = [1, "Parry", "", 1, 3, 5]; i++;
talent[i] = [1, "Epicentre", "new", 1, 4, 5]; i++;
talent[i] = [1, "Weapon Mastery", "", 5, 3, 6]; i++;
talent[i] = [1, "Stormstrike", "", 1, 2, 7, [getTalentID("Spirit Weapons"), 3]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [2, "Improved Healing Wave", "", 5, 2, 1]; i++;
talent[i] = [2, "Tidal Focus", "", 5, 3, 1]; i++;
talent[i] = [2, "Improved Reincarnation", "", 2, 1, 2]; i++;
talent[i] = [2, "Ancestral Healing", "", 3, 2, 2]; i++;
talent[i] = [2, "Totemic Focus", "", 5, 3, 2]; i++;
talent[i] = [2, "Nature's Guidance", "", 3, 1, 3]; i++;
talent[i] = [2, "Healing Focus", "", 5, 2, 3]; i++;
talent[i] = [2, "Totemic Mastery", "", 1, 3, 3]; i++;
talent[i] = [2, "Healing Grace", "", 3, 4, 3]; i++;
talent[i] = [2, "Restorative Totems", "", 5, 2, 4]; i++;
talent[i] = [2, "Tidal Mastery", "", 5, 3, 4]; i++;
talent[i] = [2, "Healing Way", "", 3, 1, 5]; i++;
talent[i] = [2, "Nature's Swiftness", "", 1, 3, 5]; i++;
talent[i] = [2, "Improved Chain Heal", "new", 2, 4, 5]; i++;
talent[i] = [2, "Purification", "", 5, 3, 6]; i++;
talent[i] = [2, "Mana Tide Totem", "", 1, 2, 7, [getTalentID("Restorative Totems"), 5]]; i++;

treeStartStop[t] = i - 1;
t++;

i = 0;


//ELEMENTAL

//Convection - Elemental
rank[i] = [
		"Reduces the mana cost of your shock, Lightning Bolt, and Chain Lightning spells by 2%.",
		"Reduces the mana cost of your shock, Lightning Bolt, and Chain Lightning spells by 4%.",
		"Reduces the mana cost of your shock, Lightning Bolt, and Chain Lightning spells by 6%.",
		"Reduces the mana cost of your shock, Lightning Bolt, and Chain Lightning spells by 8%.",
		"Reduces the mana cost of your shock, Lightning Bolt, and Chain Lightning spells by 10%."
		];
i++;
//Concussion - Elemental
rank[i] = [
		"Increases the damage done by your shock, Lightning Bolt, and Chain Lightning spells by 1%.",
		"Increases the damage done by your shock, Lightning Bolt, and Chain Lightning spells by 2%.",
		"Increases the damage done by your shock, Lightning Bolt, and Chain Lightning spells by 3%.",
		"Increases the damage done by your shock, Lightning Bolt, and Chain Lightning spells by 4%.",
		"Increases the damage done by your shock, Lightning Bolt, and Chain Lightning spells by 5%."
		];
i++;
//Earth's Grasp - Elemental
rank[i] = [
		"Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%.",
		"Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20%."
		];
i++;
//Elemental Warding - Elemental
rank[i] = [
		"Reduces damage taken from Fire, Frost, and Nature effects by 4%.",
		"Reduces damage taken from Fire, Frost, and Nature effects by 7%.",
		"Reduces damage taken from Fire, Frost, and Nature effects by 10%."
		];
i++;
//Call of Flame - Elemental
rank[i] = [
		"Increases the damage done by your Fire Totems by 5%.",
		"Increases the damage done by your Fire Totems by 10%.",
		"Increases the damage done by your Fire Totems by 15%."
		];
i++;
//Elemental Devastation - Elemental
rank[i] = [
		"Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by 3% for 10 seconds.",
		"Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by 6% for 10 seconds.",
		"Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by 9% for 10 seconds."
		];
i++;
//Elemental Focus - Elemental
rank[i] = [
		"Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell.  The Clearcasting state reduces the mana cost of your next damage spell by 100%."
		];
i++;
//Reverberation - Elemental
rank[i] = [
		"Reduces the cooldown of your shock spells by 0.2 seconds.",
		"Reduces the cooldown of your shock spells by 0.4 seconds.",
		"Reduces the cooldown of your shock spells by 0.6 seconds.",
		"Reduces the cooldown of your shock spells by 0.8 seconds.",
		"Reduces the cooldown of your shock spells by 1 second."
		];
i++;
//Call of Thunder - Elemental
rank[i] = [
		"Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 1%.",
		"Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 2%.",
		"Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 3%.",
		"Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 4%.",
		"Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 5%."
		];
i++;
//Improved Fire Totems - Elemental
rank[i] = [
		"Reduces the delay before your Fire Nova Totem activates by 1 second, decreases the threat generated by your Magma Totem by 25%, and increases the range of your Searing Totem by 5 yards.",
		"Reduces the delay before your Fire Nova Totem activates by 2 seconds, decreases the threat generated by your Magma Totem by 50%, and increases the range of your Searing Totem by 10 yards."
		];
i++;
//Eye of the Storm - Elemental
rank[i] = [
		"Gives you a 33% chance to gain the Focused Casting effect that lasts for 6 seconds after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage.",
		"Gives you a 66% chance to gain the Focused Casting effect that lasts for 6 seconds after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage.",
		"Gives you a 100% chance to gain the Focused Casting effect that lasts for 6 seconds after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage."
		];
i++;
//Unrelenting Storm - Elemental
rank[i] = [
		"Increases the number of orbs in your Lightning Shield by 1.  In addition, while you have any elemental shield active, you gain 4 mana every 5 seconds.",
		"Increases the number of orbs in your Lightning Shield by 2.  In addition, while you have any elemental shield active, you gain 8 mana every 5 seconds.",
		];
i++;
//Storm Reach - Elemental
rank[i] = [
		"Increases the range of your Lightning Bolt and Chain Lightning spells by 3 yards.",
		"Increases the range of your Lightning Bolt and Chain Lightning spells by 6 yards."
		];
i++;
//Elemental Fury - Elemental
rank[i] = [
		"Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%."
		];
i++;
//Lightning Overload - Elemental
rank[i] = [
		"Gives your Lightning Bolt and Chain Lightning spells a 2% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
		"Gives your Lightning Bolt and Chain Lightning spells a 4% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
		"Gives your Lightning Bolt and Chain Lightning spells a 6% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
		"Gives your Lightning Bolt and Chain Lightning spells a 8% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
		"Gives your Lightning Bolt and Chain Lightning spells a 10% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat."
		];
i++;
//Lightning Mastery - Elemental
rank[i] = [
		"Reduces the casting time of your Lightning Bolt and Chain Lightning spells by 0.2 seconds.",
		"Reduces the casting time of your Lightning Bolt and Chain Lightning spells by 0.4 seconds.",
		"Reduces the casting time of your Lightning Bolt and Chain Lightning spells by 0.6 seconds.",
		"Reduces the casting time of your Lightning Bolt and Chain Lightning spells by 0.8 seconds.",
		"Reduces the casting time of your Lightning Bolt and Chain Lightning spells by 1 second."
		];
i++;
//Elemental Mastery - Elemental
rank[i] = [
		"Cast: instant.<br>When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance and reduces the mana cost by 100%.  (Cooldown: 3 minutes.)"
		];
i++;


//ENHANCEMENT

//Ancestral Knowledge - Enhancement
rank[i] = [
		"Increases your maximum mana by 1%.",
		"Increases your maximum mana by 2%.",
		"Increases your maximum mana by 3%.",
		"Increases your maximum mana by 4%.",
		"Increases your maximum mana by 5%."
		];
i++;
//Shield Specialization - Enhancement
rank[i] = [
		"Increases your chance to block attacks with a shield by 1% and increases the amount blocked by 5%.",
		"Increases your chance to block attacks with a shield by 2% and increases the amount blocked by 10%.",
		"Increases your chance to block attacks with a shield by 3% and increases the amount blocked by 15%.",
		"Increases your chance to block attacks with a shield by 4% and increases the amount blocked by 20%.",
		"Increases your chance to block attacks with a shield by 5% and increases the amount blocked by 25%."
		];
i++;
//Guardian Totems - Enhancement
rank[i] = [
		"Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 second.",
		"Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 20% and reduces the cooldown of your Grounding Totem by 2 seconds.",
		"Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 30% and reduces the cooldown of your Grounding Totem by 3 seconds."
		];
i++;
//Thundering Strikes - Enhancement
rank[i] = [
		"Improves your chance to get a critical strike with your weapon attacks by 1%.",
		"Improves your chance to get a critical strike with your weapon attacks by 2%.",
		"Improves your chance to get a critical strike with your weapon attacks by 3%.",
		"Improves your chance to get a critical strike with your weapon attacks by 4%.",
		"Improves your chance to get a critical strike with your weapon attacks by 5%."
		];
i++;
//Improved Ghost Wolf - Enhancement
rank[i] = [
		"Reduces the cast time of your Ghost Wolf spell by 1 second.",
		"Reduces the cast time of your Ghost Wolf spell by 2 seconds."
		];
i++;
//Improved Lightning Shield - Enhancement
rank[i] = [
		"Increases the damage done by your Lightning Shield orbs by 5%.",
		"Increases the damage done by your Lightning Shield orbs by 10%.",
		"Increases the damage done by your Lightning Shield orbs by 15%."
		];
i++;
//Enhancing Totems - Enhancement
rank[i] = [
		"Increases the effect of your Strength of Earth and Grace of Air Totems by 8%.",
		"Increases the effect of your Strength of Earth and Grace of Air Totems by 15%."
		];
i++;
//Two-handed Axes and Maces - Enhancement
rank[i] = [
		"Allows you to use Two-Handed Axes and Two-Handed Maces.<br><br>[Note: Weapon skill in two-handed axes and maces is remembered regardless of spec, but the Shaman can only equip those weapons if he has this talent.  When changing spec out of it, such weapons will be de-equipped and put into the inventory, or mailed if there's no room.]"
		];
i++;
//Anticipation - Enhancement
rank[i] = [
		"Increases your chance to dodge by 1%.",
		"Increases your chance to dodge by 2%.",
		"Increases your chance to dodge by 3%.",
		"Increases your chance to dodge by 4%.",
		"Increases your chance to dodge by 5%."
		];
i++;
//Elemental Weapons - Enhancement
rank[i] = [
		"Increases the attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13%, and the damage caused by your Flametongue Weapon and Frostbrand Weapon by 10%.",
		"Increases the attack power bonus of your Rockbiter Weapon by 14%, your Windfury Weapon effect by 26%, and the damage caused by your Flametongue Weapon and Frostbrand Weapon by 20%.",
		"Increases the attack power bonus of your Rockbiter Weapon by 20%, your Windfury Weapon effect by 40%, and the damage caused by your Flametongue Weapon and Frostbrand Weapon by 30%."
		];
i++;
//Flurry - Enhancement
rank[i] = [
		"Increases your attack speed by 10% for your next 3 swings after dealing a critical strike.",
		"Increases your attack speed by 15% for your next 3 swings after dealing a critical strike.",
		"Increases your attack speed by 20% for your next 3 swings after dealing a critical strike.",
		"Increases your attack speed by 25% for your next 3 swings after dealing a critical strike.",
		"Increases your attack speed by 30% for your next 3 swings after dealing a critical strike."
		];
i++;
//Toughness - Enhancement
rank[i] = [
		"Increases your armour value from items by 2%.",
		"Increases your armour value from items by 4%.",
		"Increases your armour value from items by 6%.",
		"Increases your armour value from items by 8%.",
		"Increases your armour value from items by 10%."
		];
i++;
//Improved Weapon Totems - Enhancement
rank[i] = [
		"Increases the melee attack power bonus of your Windfury Totem by 15% and the damage caused by your Flametongue Totem by 10%.",
		"Increases the melee attack power bonus of your Windfury Totem by 30% and the damage caused by your Flametongue Totem by 20%."
		];
i++;
//Spirit Weapons - Enhancement
rank[i] = [
		"Grants the Shaman an effect as long as his weapon is imbued with elemental power.<br><br>Rockbiter Weapon - Gives a 7% chance to restore an orb to your Lightning Shield whenever your weapon hits a foe.  The chance is doubled if you critically hit.<br><br>Windfury Weapon/Windfury Totem - Reduces the threat generated by your weapon attacks by 2%.<br><br>Flametongue Weapon/Flametongue Totem - Increases your attack speed by 2%.<br><br>Frostbrand Weapon - Gives a 7% chance to immobilise the target for 3 seconds whenever your Frostbrand effect triggers.<br><br>[Note: The Rockbiter extra effect cannot occur more than once per second.  Your Lightning Shield cannot exceed its maximum number of orbs.  It does not increase the spell duration.  It has no effect if you do not have Lightning Shield active.  The Frostbrand extra effect uses the graphics of the Mage spell Frost Nova.]",
		"Grants the Shaman an effect as long as his weapon is imbued with elemental power.<br><br>Rockbiter Weapon - Gives a 14% chance to restore an orb to your Lightning Shield whenever your weapon hits a foe.  The chance is doubled if you critically hit.<br><br>Windfury Weapon/Windfury Totem - Reduces the threat generated by your weapon attacks by 4%.<br><br>Flametongue Weapon/Flametongue Totem - Increases your attack speed by 4%.<br><br>Frostbrand Weapon - Gives a 14% chance to immobilise the target for 3 seconds whenever your Frostbrand effect triggers.<br><br>[Note: The Rockbiter extra effect cannot occur more than once per second.  Your Lightning Shield cannot exceed its maximum number of orbs.  It does not increase the spell duration.  It has no effect if you do not have Lightning Shield active.  The Frostbrand extra effect uses the graphics of the Mage spell Frost Nova.]",
		"Grants the Shaman an effect as long as his weapon is imbued with elemental power.<br><br>Rockbiter Weapon - Gives a 20% chance to restore an orb to your Lightning Shield whenever your weapon hits a foe.  The chance is doubled if you critically hit.<br><br>Windfury Weapon/Windfury Totem - Reduces the threat generated by your weapon attacks by 6%.<br><br>Flametongue Weapon/Flametongue Totem - Increases your attack speed by 6%.<br><br>Frostbrand Weapon - Gives a 20% chance to immobilise the target for 3 seconds whenever your Frostbrand effect triggers.<br><br>[Note: The Rockbiter extra effect cannot occur more than once per second.  Your Lightning Shield cannot exceed its maximum number of orbs.  It does not increase the spell duration.  It has no effect if you do not have Lightning Shield active.  The Frostbrand extra effect uses the graphics of the Mage spell Frost Nova.]"
		];
i++;
//Parry - Enhancement
rank[i] = [
		"Gives you a chance to parry enemy melee attacks."
		];
i++;
//Epicentre - Enhancement
rank[i] = [
		"Your Earth Shock spell and Lightning Shield orbs also cause half damage and full threat to all other enemies within 3 yards of the target.<br><br>[Note: The interrupt component of Earth Shock only affects the target.  The 'target' of Lightning Shield is the enemy that triggers it.  The damage is applied to nearby enemies in the same way as the Rogue talent Blade Flurry.  The copied damage cannot crit; but if Earth Shock crits the target, the increased damage is copied.  The damage that each enemy suffers is modified by its own effects and Nature resistance.]"
		];
i++;
//Weapon Mastery - Enhancement
rank[i] = [
		"Increases the damage you deal with all weapons by 2%.",
		"Increases the damage you deal with all weapons by 4%.",
		"Increases the damage you deal with all weapons by 6%.",
		"Increases the damage you deal with all weapons by 8%.",
		"Increases the damage you deal with all weapons by 10%."
		];
i++;
//Stormstrike - Enhancement
rank[i] = [
		"Cast: instant.<br>Cost: 21% of base mana.<br>Gives you an extra attack.  In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%.  Lasts 12 seconds.  (Cooldown: 20 seconds.)"
		];
i++;


//RESTORATION

//Improved Healing Wave - Restoration
rank[i] = [
		"Reduces the casting time of your Healing Wave spell by 0.1 seconds.",
		"Reduces the casting time of your Healing Wave spell by 0.2 seconds.",
		"Reduces the casting time of your Healing Wave spell by 0.3 seconds.",
		"Reduces the casting time of your Healing Wave spell by 0.4 seconds.",
		"Reduces the casting time of your Healing Wave spell by 0.5 seconds."
		];
i++;
//Tidal Focus - Restoration
rank[i] = [
		"Reduces the mana cost of your healing spells by 1%.",
		"Reduces the mana cost of your healing spells by 2%.",
		"Reduces the mana cost of your healing spells by 3%.",
		"Reduces the mana cost of your healing spells by 4%.",
		"Reduces the mana cost of your healing spells by 5%."
		];
i++;
//Improved Reincarnation - Restoration
rank[i] = [
		"Reduces the cooldown of your Reincarnation spell by 10 minutes and increases the amount of health and mana you reincarnate with by 10%.",
		"Reduces the cooldown of your Reincarnation spell by 20 minutes and increases the amount of health and mana you reincarnate with by 20%."
		];
i++;
//Ancestral Healing - Restoration
rank[i] = [
		"Increases your target's armour value by 8% for 15 seconds after getting a critical effect from one of your healing spells.",
		"Increases your target's armour value by 16% for 15 seconds after getting a critical effect from one of your healing spells.",
		"Increases your target's armour value by 25% for 15 seconds after getting a critical effect from one of your healing spells."
		];
i++;
//Totemic Focus - Restoration
rank[i] = [
		"Reduces the mana cost of your totems by 5%.",
		"Reduces the mana cost of your totems by 10%.",
		"Reduces the mana cost of your totems by 15%.",
		"Reduces the mana cost of your totems by 20%.",
		"Reduces the mana cost of your totems by 25%."
		];
i++;
//Nature's Guidance - Restoration
rank[i] = [
		"Increases your chance to hit with melee attacks and spells by 1%.",
		"Increases your chance to hit with melee attacks and spells by 2%.",
		"Increases your chance to hit with melee attacks and spells by 3%."
		];
i++;
//Healing Focus - Restoration
rank[i] = [
		"Gives you a 14% chance to avoid interruption caused by damage while casting any healing spell.",
		"Gives you a 70% chance to avoid interruption caused by damage while casting any healing spell.",
		"Gives you a 42% chance to avoid interruption caused by damage while casting any healing spell.",
		"Gives you a 56% chance to avoid interruption caused by damage while casting any healing spell.",
		"Gives you a 70% chance to avoid interruption caused by damage while casting any healing spell."
		];
i++;
//Totemic Mastery - Restoration
rank[i] = [
		"The radius of your totems that affect friendly targets is increased to 30 yards."
		];
i++;
//Healing Grace - Restoration
rank[i] = [
		"Reduces the threat generated by your healing spells by 5%.",
		"Reduces the threat generated by your healing spells by 10%.",
		"Reduces the threat generated by your healing spells by 15%."
		];
i++;
//Restorative Totems - Restoration
rank[i] = [
		"Increases the effect of your Mana Spring and Healing Stream Totems by 5%.",
		"Increases the effect of your Mana Spring and Healing Stream Totems by 10%.",
		"Increases the effect of your Mana Spring and Healing Stream Totems by 15%.",
		"Increases the effect of your Mana Spring and Healing Stream Totems by 20%.",
		"Increases the effect of your Mana Spring and Healing Stream Totems by 25%."
		];
i++;
//Tidal Mastery - Restoration
rank[i] = [
		"Increases the critical effect chance of your healing and lightning spells by 1%.",
		"Increases the critical effect chance of your healing and lightning spells by 2%.",
		"Increases the critical effect chance of your healing and lightning spells by 3%.",
		"Increases the critical effect chance of your healing and lightning spells by 4%.",
		"Increases the critical effect chance of your healing and lightning spells by 5%."
		];
i++;
//Healing Way - Restoration
rank[i] = [
		"Your Healing Wave spells have a 33% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 seconds.  This effect will stack up to 3 times.",
		"Your Healing Wave spells have a 66% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 seconds.  This effect will stack up to 3 times.",
		"Your Healing Wave spells have a 100% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 seconds.  This effect will stack up to 3 times."
		];
i++;
//Nature's Swiftness - Restoration
rank[i] = [
		"Cast: instant.<br>When activated, your next Nature spell with a casting time less than 10 seconds becomes an instant cast spell.  (Cooldown: 3 minutes.)"
		];
i++;
//Improved Chain Heal - Restoration
rank[i] = [
		"Increases the amount healed by your Chain Heal spell to targets after the first by 10%<br><br>[Note: The Ten Storms (T2 set) 3-piece set bonus has been reduced to 20%, from 30%; it stacks additively with this effect for a total of 30%.].",
		"Increases the amount healed by your Chain Heal spell to targets after the first by 20%<br><br>[Note: The Ten Storms (T2 set) 3-piece set bonus has been reduced to 20%, from 30%; it stacks additively with this effect for a total of 40%.]."
		];
i++;
//Purification - Restoration
rank[i] = [
		"Increases the effectiveness of your healing spells by 2%.",
		"Increases the effectiveness of your healing spells by 4%.",
		"Increases the effectiveness of your healing spells by 6%.",
		"Increases the effectiveness of your healing spells by 8%.",
		"Increases the effectiveness of your healing spells by 10%."
		];
i++;
//Mana Tide Totem - Restoration
rank[i] = [
		"Cast: instant.<br>Cost: Y mana.<br>Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 seconds that restores X mana every 3 seconds to group members within 20 yards.  (Cooldown: 5 minutes.)<br><br>[Rank 1: X = 170, Y = 20,<br>&nbsp;Rank 2: X = 230, Y = 40 (level 48),<br>&nbsp;Rank 3: X = 290, Y = 60 (level 58).]"
		];
i++;

jsLoaded=true;