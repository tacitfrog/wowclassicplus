var i = 0;
var t = 0;

var className = "warlock";

tree[i] = "Affliction"; i++;
tree[i] = "Demonology"; i++;
tree[i] = "Destruction"; i++;

i = 0;

talent[i] = [0, "Suppression", "", 5, 2, 1]; i++;
talent[i] = [0, "Improved Corruption", "", 5, 3, 1]; i++;
talent[i] = [0, "Enfeebling Curses", "new", 5, 1, 2]; i++;
talent[i] = [0, "Improved Drain Soul", "", 2, 2, 2]; i++;
talent[i] = [0, "Improved Life Tap", "", 2, 3, 2]; i++;
talent[i] = [0, "Improved Drain Life", "changed", 2, 4, 2]; i++;
talent[i] = [0, "Dark Pact", "changedmoved", 1, 1, 3]; i++;
talent[i] = [0, "Fel Concentration", "", 5, 2, 3]; i++;
talent[i] = [0, "Amplify Curse", "", 1, 3, 3]; i++;
talent[i] = [0, "Grim Reach", "", 2, 1, 4]; i++;
talent[i] = [0, "Nightfall", "", 2, 2, 4]; i++;
talent[i] = [0, "Improved Drain Mana", "changed", 3, 4, 4]; i++;
talent[i] = [0, "Paroxysm", "new", 3, 1, 5]; i++;
talent[i] = [0, "Siphon Life", "", 1, 2, 5]; i++;
talent[i] = [0, "Curse of Exhaustion", "", 1, 3, 5, [getTalentID("Amplify Curse"), 1]]; i++;
talent[i] = [0, "Unstable Afflictions", "new", 3, 4, 5]; i++;
talent[i] = [0, "Shadow Mastery", "", 5, 2, 6, [getTalentID("Siphon Life"), 1]]; i++;
talent[i] = [0, "Seed of Corruption", "new", 1, 2, 7, [getTalentID("Shadow Mastery"), 1]]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [1, "Improved Healthstone", "", 2, 1, 1]; i++;
talent[i] = [1, "Improved Imp", "", 3, 2, 1]; i++;
talent[i] = [1, "Demonic Embrace", "", 5, 3, 1]; i++;
talent[i] = [1, "Improved Health Funnel", "changed", 2, 1, 2]; i++;
talent[i] = [1, "Improved Voidwalker", "", 3, 2, 2]; i++;
talent[i] = [1, "Fel Intellect", "", 5, 3, 2]; i++;
talent[i] = [1, "Improved Succubus", "", 3, 1, 3]; i++;
talent[i] = [1, "Fel Domination", "", 1, 2, 3]; i++;
talent[i] = [1, "Fel Stamina", "", 5, 3, 3]; i++;
talent[i] = [1, "Improved Demon Armor", "new", 3, 4, 3]; i++;
talent[i] = [1, "Improved Firestone", "changedmoved", 3, 1, 4]; i++;
talent[i] = [1, "Master Summoner", "", 2, 2, 4, [getTalentID("Fel Domination"), 1]]; i++;
talent[i] = [1, "Unholy Power", "changed", 5, 3, 4]; i++;
talent[i] = [1, "Improved Spellstone", "changedmoved", 2, 1, 5]; i++;
talent[i] = [1, "Demonic Sacrifice", "", 1, 2, 5]; i++;
talent[i] = [1, "Improved Enslave Demon", "changedmoved", 2, 4, 5]; i++;
talent[i] = [1, "Master Demonologist", "", 5, 3, 6, [getTalentID("Unholy Power"), 5]]; i++;
talent[i] = [1, "Soul Link", "moved", 1, 3, 7]; i++;

treeStartStop[t] = i - 1;
t++;

talent[i] = [2, "Improved Shadow Bolt", "", 5, 2, 1]; i++;
talent[i] = [2, "Cataclysm", "", 5, 3, 1]; i++;
talent[i] = [2, "Bane", "", 5, 2, 2]; i++;
talent[i] = [2, "Aftermath", "", 5, 3, 2]; i++;
talent[i] = [2, "Improved Firebolt", "", 2, 1, 3]; i++;
talent[i] = [2, "Improved Lash of Pain", "", 2, 2, 3]; i++;
talent[i] = [2, "Devastation", "", 5, 3, 3]; i++;
talent[i] = [2, "Shadowburn", "", 1, 4, 3]; i++;
talent[i] = [2, "Intensity", "", 2, 1, 4]; i++;
talent[i] = [2, "Destructive Reach", "", 2, 2, 4]; i++;
talent[i] = [2, "Improved Searing Pain", "", 5, 4, 4]; i++;
talent[i] = [2, "Pyroclasm", "", 2, 1, 5, [getTalentID("Intensity"), 2]]; i++;
talent[i] = [2, "Improved Immolate", "", 3, 2, 5]; i++;
talent[i] = [2, "Ruin", "", 1, 3, 5, [getTalentID("Devastation"), 5]]; i++;
talent[i] = [2, "Emberstorm", "", 5, 3, 6]; i++;
talent[i] = [2, "Conflagrate", "", 1, 2, 7, [getTalentID("Improved Immolate"), 3]]; i++;

treeStartStop[t] = i - 1;
t++;

i = 0;


//AFFLICTION

//Suppression - Affliction
rank[i] = [
		"Reduces the chance for enemies to resist your Affliction spells by 2%.",
		"Reduces the chance for enemies to resist your Affliction spells by 4%.",
		"Reduces the chance for enemies to resist your Affliction spells by 6%.",
		"Reduces the chance for enemies to resist your Affliction spells by 8%.",
		"Reduces the chance for enemies to resist your Affliction spells by 10%."
		];
i++;
//Improved Corruption - Affliction
rank[i] = [
		"Reduces the casting time of your Corruption spell by 0.4 seconds.",
		"Reduces the casting time of your Corruption spell by 0.8 seconds.",
		"Reduces the casting time of your Corruption spell by 1.2 seconds.",
		"Reduces the casting time of your Corruption spell by 1.6 seconds.",
		"Reduces the casting time of your Corruption spell by 2 seconds."
		];
i++;
//Enfeebling Curses - Affliction
rank[i] = [
		"Increases the effect of your Curse of Weakness, Curse of Agony, and Curse of Exhaustion by 4%.",
		"Increases the effect of your Curse of Weakness, Curse of Agony, and Curse of Exhaustion by 8%.",
		"Increases the effect of your Curse of Weakness, Curse of Agony, and Curse of Exhaustion by 12%.",
		"Increases the effect of your Curse of Weakness, Curse of Agony, and Curse of Exhaustion by 16%.",
		"Increases the effect of your Curse of Weakness, Curse of Agony, and Curse of Exhaustion by 20%."
		];
i++;
//Improved Drain Soul - Affliction
rank[i] = [
		"Gives you a 50% chance to get a 100% increase to your mana regeneration for 10 seconds if the target is killed by you while you drain its soul.  For the duration, your mana may continue to regenerate while casting at 50% of normal.",
		"Gives you a 100% chance to get a 100% increase to your mana regeneration for 10 seconds if the target is killed by you while you drain its soul.  For the duration, your mana may continue to regenerate while casting at 50% of normal."
		];
i++;
//Improved Life Tap - Affliction
rank[i] = [
		"Increases the amount of mana awarded by your Life Tap spell by 10%.",
		"Increases the amount of mana awarded by your Life Tap spell by 20%."
		];
i++;
//Improved Drain Life - Affliction
rank[i] = [
		"Increases the health drained by your Drain Life spell by 2% for each of your other Affliction effects on the target.",
		"Increases the health drained by your Drain Life spell by 4% for each of your other Affliction effects on the target."
		];
i++;
//Dark Pact - Affliction
rank[i] = [
		"Cast: instant.<br>Drains X of your summoned demon's mana, returning 100% to you.<br><br>[Rank 1: X = 50,<br>&nbsp;Rank 2: X = 100 (level 30),<br>&nbsp;Rank 3: X = 150 (level 40),<br>&nbsp;Rank 4: X = 200 (level 50),<br>&nbsp;Rank 5: X = 250 (level 60).]"
		];
i++;
//Fel Concentration - Affliction
rank[i] = [
		"Gives you a 14% chance to avoid interruption caused by damage while channeling your Drain Life, Drain Mana, or Drain Soul spells.",
		"Gives you a 28% chance to avoid interruption caused by damage while channeling your Drain Life, Drain Mana, or Drain Soul spells.",
		"Gives you a 42% chance to avoid interruption caused by damage while channeling your Drain Life, Drain Mana, or Drain Soul spells.",
		"Gives you a 56% chance to avoid interruption caused by damage while channeling your Drain Life, Drain Mana, or Drain Soul spells.",
		"Gives you a 70% chance to avoid interruption caused by damage while channeling your Drain Life, Drain Mana, or Drain Soul spells."
		];
i++;
//Amplify Curse - Affliction
rank[i] = [
		"Cast: instant.<br>Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%.  Lasts 30 seconds.  (Cooldown: 3 minutes.)"
		];
i++;
//Grim Reach - Affliction
rank[i] = [
		"Increases the range of your Affliction spells by 10%.",
		"Increases the range of your Affliction spells by 20%."
		];
i++;
//Nightfall - Affliction
rank[i] = [
		"Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging an enemy.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
		"Gives your Corruption and Drain Life spells a 4% chance to cause you to enter a Shadow Trance state after damaging an enemy.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%."
		];
i++;
//Improved Drain Mana - Affliction
rank[i] = [
		"Causes 15% of the mana drained by your Drain Mana spell to damage the target.",
		"Causes 30% of the mana drained by your Drain Mana spell to damage the target.",
		"Causes 45% of the mana drained by your Drain Mana spell to damage the target."
		];
i++;
//Paroxysm - Affliction
rank[i] = [
		"Gives your Corruption and Drain Life spells a 3% chance to deal or drain an additional 30% damage or health when damaging an enemy.",
		"Gives your Corruption and Drain Life spells a 6% chance to deal or drain an additional 30% damage or health when damaging an enemy.",
		"Gives your Corruption and Drain Life spells a 9% chance to deal or drain an additional 30% damage or health when damaging an enemy."
		];
i++;
//Siphon Life - Affliction
rank[i] = [
		"Cast: instant.<br>Range: 30 yards.<br>Cost: Y mana.<br>Transfers X health from the target to the caster every 3 seconds.  Lasts 30 seconds.<br><br>[Rank 1: X = 15, Y = 150,<br>&nbsp;Rank 2: X = 22, Y = 205 (level 38),<br>&nbsp;Rank 3: X = 33, Y = 285 (level 48),<br>&nbsp;Rank 4: X = 45, Y = 365 (level 58).]"
		];
i++;
//Curse of Exhaustion - Affliction
rank[i] = [
		"Cast: instant.<br>Range: 30 yards.<br>Cost: 8% of base mana.<br>Reduces the target's movement speed by 10% for 12 seconds.  Only one curse per Warlock can be active on any one target."
		];
i++;
//Unstable Afflictions - Affliction
rank[i] = [
		"Gives your Corruption, Seed of Corruption, and Siphon Life periodic effects an additional 10% chance to resist dispel effects.  If an enemy's dispel attempt fails, there is a 50% chance that they will suffer X to Y Shadow damage and be silenced for 3 seconds.<br><br>[Note: X = 4 * your current level, Y = 5 * your current level.]",
		"Gives your Corruption, Seed of Corruption, and Siphon Life periodic effects an additional 20% chance to resist dispel effects.  If an enemy's dispel attempt fails, there is a 50% chance that they will suffer X to Y Shadow damage and be silenced for 3 seconds.<br><br>[Note: X = 4 * your current level, Y = 5 * your current level.]",
		"Gives your Corruption, Seed of Corruption, and Siphon Life periodic effects an additional 30% chance to resist dispel effects.  If an enemy's dispel attempt fails, there is a 50% chance that they will suffer X to Y Shadow damage and be silenced for 3 seconds.<br><br>[Note: X = 4 * your current level, Y = 5 * your current level.]"
		];
i++;
//Shadow Mastery - Affliction
rank[i] = [
		"Increases the damage dealt and health drained by your Shadow spells by 2%.",
		"Increases the damage dealt and health drained by your Shadow spells by 4%.",
		"Increases the damage dealt and health drained by your Shadow spells by 6%.",
		"Increases the damage dealt and health drained by your Shadow spells by 8%.",
		"Increases the damage dealt and health drained by your Shadow spells by 10%."
		];
i++;
//Seed of Corruption - Affliction
rank[i] = [
		"Cast: 2 seconds.<br>Range: 30 yards.<br>Cost: A mana.<br>Imbeds a demon seed in the enemy target, causing X Shadow damage over 18 seconds.  When the target takes X total damage or dies, the seed will inflict Y to Z Shadow damage to all other enemies within 10 yards of the target.  Only one corruption spell per Warlock can be active on any one target.<br><br>[Rank 1: X = 324, Y = 164, Z = 204, A = 474,<br>&nbsp;Rank 2: X = 486, Y = 286, Z = 326, A = 580 (level 48),<br>&nbsp;Rank 3: X = 666, Y = 428, Z = 470, A = 722 (level 56).]"
		];
i++;


// DEMONOLOGY

//Improved Healthstone - Demonology
rank[i] = [
		"Increases the amount of health restored by your Healthstone by 10%.",
		"Increases the amount of health restored by your Healthstone by 20%."
		];
i++;
//Improved Imp - Demonology
rank[i] = [
		"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
		"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 20%.",
		"Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%."
		];
i++;
//Demonic Embrace - Demonology
rank[i] = [
		"Increases your total Stamina by 3%, but reduces your total Spirit by 1%.",
		"Increases your total Stamina by 6%, but reduces your total Spirit by 2%.",
		"Increases your total Stamina by 9%, but reduces your total Spirit by 3%.",
		"Increases your total Stamina by 12%, but reduces your total Spirit by 4%.",
		"Increases your total Stamina by 15%, but reduces your total Spirit by 5%."
		];
i++;
//Improved Health Funnel - Demonology
rank[i] = [
		"Increases the amount of health transferred by your Health Funnel spell by 10% and reduces the health cost by 10%.",
		"Increases the amount of health transferred by your Health Funnel spell by 20% and reduces the health cost by 20%."
		];
i++;
//Improved Voidwalker - Demonology
rank[i] = [
		"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 10%.",
		"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 20%.",
		"Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 30%."
		];
i++;
//Fel Intellect - Demonology
rank[i] = [
		"Increases the maximum mana of your Imp, Voidwalker, Succubus, and Felhunter by 3%.",
		"Increases the maximum mana of your Imp, Voidwalker, Succubus, and Felhunter by 6%.",
		"Increases the maximum mana of your Imp, Voidwalker, Succubus, and Felhunter by 9%.",
		"Increases the maximum mana of your Imp, Voidwalker, Succubus, and Felhunter by 12%.",
		"Increases the maximum mana of your Imp, Voidwalker, Succubus, and Felhunter by 15%."
		];
i++;
//Improved Succubus - Demonology
rank[i] = [
		"Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 10% and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 10%.",
		"Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 20% and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 20%.",
		"Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 30% and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 30%."
		];
i++;
//Fel Domination - Demonology
rank[i] = [
		"Cast: instant.<br>Your next Imp, Voidwalker, Succubus, or Felhunter Summon spell has its casting time reduced by 5.5 seconds and its mana cost reduced by 50%.  (Cooldown: 15 minutes.)"
		];
i++;
//Fel Stamina - Demonology
rank[i] = [
		"Increases the maximum health of your Imp, Voidwalker, Succubus, and Felhunter by 3%.",
		"Increases the maximum health of your Imp, Voidwalker, Succubus, and Felhunter by 6%.",
		"Increases the maximum health of your Imp, Voidwalker, Succubus, and Felhunter by 9%.",
		"Increases the maximum health of your Imp, Voidwalker, Succubus, and Felhunter by 12%.",
		"Increases the maximum health of your Imp, Voidwalker, Succubus, and Felhunter by 15%."
		];
i++;
//Improved Demon Armor - Demonology
rank[i] = [
		"Increases the armour given by your Demon Skin and Demon Armor spells by 5% and the health restored by 2 every 5 seconds.",
		"Increases the armour given by your Demon Skin and Demon Armor spells by 10% and the health restored by 4 every 5 seconds.",
		"Increases the armour given by your Demon Skin and Demon Armor spells by 15% and the health restored by 6 every 5 seconds."
		];
i++;
//Improved Firestone - Demonology
rank[i] = [
		"While you have a Firestone equipped, any Fire damage that you or your Imp deal has a 10% chance to heal you for 20% of the damage caused.<br><br>[Note: The healing causes no threat.  The effect only heals you, not your Imp.  This effect can trigger from your Firestone effect, Fire wands, Fire Shield, or from Fire damage spells.  If it triggers on Immolate, health is returned only off the initial damage.  For Rain of Fire and Hellfire, it can trigger independently from any wave of hits and is calculated off the total damage dealt in that wave.]",
		"While you have a Firestone equipped, any Fire damage that you or your Imp deal has a 20% chance to heal you for 20% of the damage caused.<br><br>[Note: The healing causes no threat.  The effect only heals you, not your Imp.  This effect can trigger from your Firestone effect, Fire wands, Fire Shield, or from Fire damage spells.  If it triggers on Immolate, health is returned only off the initial damage.  For Rain of Fire and Hellfire, it can trigger independently from any wave of hits and is calculated off the total damage dealt in that wave.]",
		"While you have a Firestone equipped, any Fire damage that you or your Imp deal has a 30% chance to heal you for 20% of the damage caused.<br><br>[Note: The healing causes no threat.  The effect only heals you, not your Imp.  This effect can trigger from your Firestone effect, Fire wands, Fire Shield, or from Fire damage spells.  If it triggers on Immolate, health is returned only off the initial damage.  For Rain of Fire and Hellfire, it can trigger independently from any wave of hits and is calculated off the total damage dealt in that wave.]"
		];
i++;
//Master Summoner - Demonology
rank[i] = [
		"Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by 2 seconds and the mana cost by 20%.",
		"Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by 4 seconds and the mana cost by 40%."
		];
i++;
//Unholy Power - Demonology
rank[i] = [
		"Increases the critical strike chance of your Imp's Firebolt spell by 1% and the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 4%.",
		"Increases the critical strike chance of your Imp's Firebolt spell by 2% and the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 8%.",
		"Increases the critical strike chance of your Imp's Firebolt spell by 3% and the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 12%.",
		"Increases the critical strike chance of your Imp's Firebolt spell by 4% and the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 16%.",
		"Increases the critical strike chance of your Imp's Firebolt spell by 5% and the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 20%."
		];
i++;
//Improved Spellstone - Demonology
rank[i] = [
		"Whenever you critically hit an enemy with a spell while you have a Spellstone equipped, both you and your summoned demon restore 2% of maximum mana.",
		"Whenever you critically hit an enemy with a spell while you have a Spellstone equipped, both you and your summoned demon restore 4% of maximum mana."
		];
i++;
//Demonic Sacrifice - Demonology
rank[i] = [
		"Cast: instant.<br>When activated, sacrifices your summoned demon to grant you an effect that lasts 30 minutes.  The effect is cancelled if any demon is summoned.<br><br>Imp: Increases your Fire damage by 15%.<br><br>Voidwalker: Restores 3% of your total health every 4 seconds.<br><br>Succubus: Increases your Shadow damage by 15%.<br><br>Felhunter: Restores 2% of your total mana every 4 seconds."
		];
i++;
//Improved Enslave Demon - Demonology
rank[i] = [
		"Reduces the attack speed and casting speed penalty of your Enslave Demon spell by 5% and reduces the resist chance by 5%.",
		"Reduces the attack speed and casting speed penalty of your Enslave Demon spell by 10% and reduces the resist chance by 10%."
		];
i++;
//Master Demonologist - Demonology
rank[i] = [
		"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Reduces threat caused by 4%.<br><br>Voidwalker - Reduces Physical damage taken by 2%.<br><br>Succubus - Increases all damage caused by 2%.<br><br>Felhunter - Increases all resistances by 0.2 per level.",
		"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Reduces threat caused by 8%.<br><br>Voidwalker - Reduces Physical damage taken by 4%.<br><br>Succubus - Increases all damage caused by 4%.<br><br>Felhunter - Increases all resistances by 0.4 per level.",
		"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Reduces threat caused by 12%.<br><br>Voidwalker - Reduces Physical damage taken by 6%.<br><br>Succubus - Increases all damage caused by 6%.<br><br>Felhunter - Increases all resistances by 0.6 per level.",
		"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Reduces threat caused by 16%.<br><br>Voidwalker - Reduces Physical damage taken by 8%.<br><br>Succubus - Increases all damage caused by 8%.<br><br>Felhunter - Increases all resistances by 0.8 per level.",
		"Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br><br>Imp - Reduces threat caused by 20%.<br><br>Voidwalker - Reduces Physical damage taken by 10%.<br><br>Succubus - Increases all damage caused by 10%.<br><br>Felhunter - Increases all resistances by 1 per level."
		];
i++;
//Soul Link - Demonology
rank[i] = [
		"Cast: instant.<br>When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, or Felhunter demon instead.  In addition, both the demon and master will inflict 3% more damage.  Lasts as long as the demon is active."
		];
i++;


//DESTRUCTION

//Improved Shadow Bolt - Destruction
rank[i] = [
		"Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 4% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.",
		"Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 8% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.",
		"Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 12% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.",
		"Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 16% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds.",
		"Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 20% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 seconds."
		];
i++;
//Cataclysm - Destruction
rank[i] = [
		"Reduces the mana cost of your Destruction spells by 1%.",
		"Reduces the mana cost of your Destruction spells by 2%.",
		"Reduces the mana cost of your Destruction spells by 3%.",
		"Reduces the mana cost of your Destruction spells by 4%.",
		"Reduces the mana cost of your Destruction spells by 5%."
		];
i++;
//Bane - Destruction
rank[i] = [
		"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1 seconds and your Soul Fire spell by 0.4 seconds.",
		"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.2 seconds and your Soul Fire spell by 0.8 seconds.",
		"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.3 seconds and your Soul Fire spell by 1.2 seconds.",
		"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.4 seconds and your Soul Fire spell by 1.6 seconds.",
		"Reduces the casting time of your Shadow Bolt and Immolate spells by 0.5 seconds and your Soul Fire spell by 2 seconds."
		];
i++;
//Aftermath - Destruction
rank[i] = [
		"Gives your Destruction spells a 2% chance to daze the target for 5 seconds.",
		"Gives your Destruction spells a 4% chance to daze the target for 5 seconds.",
		"Gives your Destruction spells a 6% chance to daze the target for 5 seconds.",
		"Gives your Destruction spells a 8% chance to daze the target for 5 seconds.",
		"Gives your Destruction spells a 10% chance to daze the target for 5 seconds."
		];
i++;
//Improved Firebolt - Destruction
rank[i] = [
		"Reduces the casting time of your Imp's Firebolt spell by 0.5 seconds.",
		"Reduces the casting time of your Imp's Firebolt spell by 1 second."
		];
i++;
//Improved Lash of Pain - Destruction
rank[i] = [
		"Reduces the cooldown of your Succubus' Lash of Pain spell by 3 seconds.",
		"Reduces the cooldown of your Succubus' Lash of Pain spell by 6 seconds."
		];
i++;
//Devastation - Destruction
rank[i] = [
		"Increases the critical strike chance of your Destruction spells by 1%.",
		"Increases the critical strike chance of your Destruction spells by 2%.",
		"Increases the critical strike chance of your Destruction spells by 3%.",
		"Increases the critical strike chance of your Destruction spells by 4%.",
		"Increases the critical strike chance of your Destruction spells by 5%."
		];
i++;
//Shadowburn - Destruction
rank[i] = [
		"Cast: instant.<br>Range: 20 yards.<br>Cost: Z mana.<br>Reagent: Soul Shard.<br>Instantly blasts the target for X to Y Shadow damage.  If the target dies within 5 seconds of Shadowburn, and yields experience or honor, the caster gains a Soul Shard.  (Cooldown: 15 seconds.)<br><br>[Rank 1: X = 91, &nbsp;&nbsp;Y = 104, Z = 105,<br>&nbsp;Rank 2: X = 123, Y = 140, Z = 130 (level 24),<br>&nbsp;Rank 3: X = 196, Y = 221, Z = 190 (level 32),<br>&nbsp;Rank 4: X = 274, Y = 307, Z = 245 (level 40),<br>&nbsp;Rank 5: X = 365, Y = 408, Z = 305 (level 48),<br>&nbsp;Rank 6: X = 462, Y = 514, Z = 365 (level 56).]"
		];
i++;
//Intensity - Destruction
rank[i] = [
		"Gives you a 35% chance to resist interruption caused by damage while channeling the Rain of Fire, Hellfire, or Soul Fire spell.",
		"Gives you a 70% chance to resist interruption caused by damage while channeling the Rain of Fire, Hellfire, or Soul Fire spell."
		];
i++;
//Destructive Reach - Destruction
rank[i] = [
		"Increases the range of your Destruction spells by 10%.",
		"Increases the range of your Destruction spells by 20%."
		];
i++;
//Improved Searing Pain - Destruction
rank[i] = [
		"Increases the critical strike chance of your Searing Pain spell by 2%.",
		"Increases the critical strike chance of your Searing Pain spell by 4%.",
		"Increases the critical strike chance of your Searing Pain spell by 6%.",
		"Increases the critical strike chance of your Searing Pain spell by 8%.",
		"Increases the critical strike chance of your Searing Pain spell by 10%."
		];
i++;
//Pyroclasm - Destruction
rank[i] = [
		"Gives your Rain of Fire, Hellfire, and Soul Fire spells a 13% chance to stun the target for 3 seconds.",
		"Gives your Rain of Fire, Hellfire, and Soul Fire spells a 26% chance to stun the target for 3 seconds."
		];
i++;
//Improved Immolate - Destruction
rank[i] = [
		"Increases the initial damage of your Immolate spell by 5%.",
		"Increases the initial damage of your Immolate spell by 10%.",
		"Increases the initial damage of your Immolate spell by 15%."
		];
i++;
//Ruin - Destruction
rank[i] = [
		"Increases the critical strike damage bonus of your Destruction spells by 100%."
		];
i++;
//Emberstorm - Destruction
rank[i] = [
		"Increases the damage done by your Fire spells by 2%.",
		"Increases the damage done by your Fire spells by 4%.",
		"Increases the damage done by your Fire spells by 6%.",
		"Increases the damage done by your Fire spells by 8%.",
		"Increases the damage done by your Fire spells by 10%."
		];
i++;
//Conflagrate - Destruction
rank[i] = [
		"Cast: instant.<br>Range: 30 yards.<br>Cost: Z mana.<br>Ignites a target that is already afflicted by Immolate, dealing X to Y Fire damage and consuming the Immolate spell.  (Cooldown: 10 seconds.)<br><br>[Rank 1: X = 249, Y = 316, Z = 165,<br>&nbsp;Rank 2: X = 326, Y = 407, Z = 200 (level 48),<br>&nbsp;Rank 3: X = 395, Y = 491, Z = 230 (level 54),<br>&nbsp;Rank 4: X = 447, Y = 557, Z = 255 (level 60).]"
		];
i++;

jsLoaded=true;