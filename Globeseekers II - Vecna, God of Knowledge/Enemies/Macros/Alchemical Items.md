/*
=====================================================
==         CREATE ALCHEMICAL FOLLOWERS MACRO         ==
=====================================================
This macro creates all unique alchemical followers
from the "Alchemical Consumables Powered by Draw Steel"
PDF, organizing them into a dedicated folder.
*/

(async () => {
  try {
    // Define the folder name
    const folderName = "Alchemical Followers";
    let folder = game.folders.find(f => f.name === folderName && f.type === "Actor");

    // Create the folder if it doesn't exist
    if (!folder) {
      folder = await Folder.create({ name: folderName, type: "Actor", parent: null });
      ui.notifications.info(`Created folder: ${folderName}`);
    }

    const allAlchemicalFollowers = [
      {
        name: "Kuran’zoi Alchemist", type: "npc", img: "icons/creatures/reptiles/chameleon-jeweled-green.webp",
        system: {
          monster: {
            level: 1, // Artisan followers are non-combatants, using level 1 as a base for stat calculations if any.
            role: "minion",
            organization: "group",
            freeStrike: 1,
            ev: 10, // EV — is not explicitly defined, using a placeholder.
            keywords: ["Humanoid", "Time-Raider", "Artisan"]
          },
          stamina: { value: 8, max: 8 },
          damage: { immunities: {}, weaknesses: {} },
          movement: { value: 5, types: ["walk"], hover: false, disengage: 0 },
          combat: { stability: 0, turns: 1, save: { bonus: "", threshold: 10 }, size: { value: 1, letter: "M" } },
          characteristics: { might: { value: 0 }, agility: { value: 1 }, reason: { value: 0 }, intuition: { value: 1 }, presence: { value: 0 } },
          skills: { alchemy: { value: 1, rank: "trained" }, sabotage: { value: 1, rank: "trained" }, search: { value: 1, rank: "trained" }, society: { value: 1, rank: "trained" } },
          languages: { caelian: true, vol: true, yllyric: true },
          source: { book: "Alchemical Consumables", page: "", license: "", revision: 0 },
          _dsid: "kuranzoi-alchemist"
        },
        items: [
          {
            name: "The Hands of Two Trait", type: "feature", img: "icons/skills/trades/hand-to-hand-craft-brown.webp",
            system: {
              description: { value: "<p>When the kuran’zoi alchemist makes a project roll alone they can also attempt to assist their own test before they roll.</p>" }
            }
          }
        ]
      },
      {
        name: "Pactbound Alchemist", type: "npc", img: "icons/creatures/demons/demon-horned-red.webp",
        system: {
          monster: {
            level: 1,
            role: "minion",
            organization: "group",
            freeStrike: 1,
            ev: 10,
            keywords: ["Humanoid", "Devil", "Artisan"]
          },
          stamina: { value: 8, max: 8 },
          damage: { immunities: {}, weaknesses: {} },
          movement: { value: 5, types: ["walk"], hover: false, disengage: 0 },
          combat: { stability: 0, turns: 1, save: { bonus: "", threshold: 10 }, size: { value: 1, letter: "M" } },
          characteristics: { might: { value: 0 }, agility: { value: 1 }, reason: { value: 1 }, intuition: { value: 0 }, presence: { value: 0 } },
          skills: { alchemy: { value: 1, rank: "trained" }, sabotage: { value: 1, rank: "trained" }, search: { value: 1, rank: "trained" }, society: { value: 1, rank: "trained" } },
          languages: { caelian: true, anjali: true, yllyric: true },
          source: { book: "Alchemical Consumables", page: "", license: "", revision: 0 },
          _dsid: "pactbound-alchemist"
        },
        items: [
          {
            name: "Prerequisite Outsourcing Trait", type: "feature", img: "icons/magic/symbols/devil-winged-hand-red.webp",
            system: {
              description: { value: "<p>The pactbound alchemist can source materials from hell when item prerequisites for crafting are not met. A hero must negotiate with an imp, devil, or other fiend for the materials.</p>" }
            }
          }
        ]
      },
      {
        name: "Preoccupied Alchemist", type: "npc", img: "icons/creatures/golems/golem-stone-glowing-green.webp",
        system: {
          monster: {
            level: 1,
            role: "minion",
            organization: "group",
            freeStrike: 1,
            ev: 10,
            keywords: ["Humanoid", "Artisan"]
          },
          stamina: { value: 8, max: 8 },
          damage: { immunities: {}, weaknesses: {} },
          movement: { value: 5, types: ["walk"], hover: false, disengage: 0 },
          combat: { stability: 0, turns: 1, save: { bonus: "", threshold: 10 }, size: { value: 1, letter: "M" } },
          characteristics: { might: { value: 0 }, agility: { value: 1 }, reason: { value: 1 }, intuition: { value: 0 }, presence: { value: 0 } },
          skills: { alchemy: { value: 1, rank: "trained" }, sabotage: { value: 1, rank: "trained" }, search: { value: 1, rank: "trained" }, society: { value: 1, rank: "trained" } },
          languages: { caelian: true, vol: true, yllyric: true },
          source: { book: "Alchemical Consumables", page: "", license: "", revision: 0 },
          _dsid: "preoccupied-alchemist"
        },
        items: [
          {
            name: "Current Obsession Trait", type: "feature", img: "icons/environment/settlement/arcane-furnace.webp",
            system: {
              description: { value: "<p>When the preoccupied alchemist arrives they are already halfway through a project to craft a consumable treasure of the director’s choice that is one echelon higher than the heroes. Once the project is completed they give the heroes an altered recipe for the consumable using one of the options provided by the revised recipe perk.</p>" }
            }
          }
        ]
      },
      {
        name: "Traveling Alchemist", type: "npc", img: "icons/magic/symbols/moon-crescent-orange.webp",
        system: {
          monster: {
            level: 1,
            role: "minion",
            organization: "group",
            freeStrike: 1,
            ev: 10,
            keywords: ["Humanoid", "Artisan"]
          },
          stamina: { value: 8, max: 8 },
          damage: { immunities: {}, weaknesses: {} },
          movement: { value: 5, types: ["walk"], hover: false, disengage: 0 },
          combat: { stability: 0, turns: 1, save: { bonus: "", threshold: 10 }, size: { value: 1, letter: "M" } },
          characteristics: { might: { value: 0 }, agility: { value: 1 }, reason: { value: 1 }, intuition: { value: 0 }, presence: { value: 0 } },
          skills: { alchemy: { value: 1, rank: "trained" }, sabotage: { value: 1, rank: "trained" }, search: { value: 1, rank: "trained" }, society: { value: 1, rank: "trained" } },
          languages: { caelian: true, anjali: true, yllyric: true },
          source: { book: "Alchemical Consumables", page: "", license: "", revision: 0 },
          _dsid: "traveling-alchemist"
        },
        items: [
          {
            name: "Works Remote Trait", type: "feature", img: "icons/environment/settlement/tent-open-purple.webp",
            system: {
              description: { value: "<p>The traveling alchemist does not need to remain at your stronghold or project site while making project rolls.</p>" }
            }
          }
        ]
      },
      {
        name: "Battlechemist", type: "npc", img: "icons/magic/symbols/potion-flask-bubbly-purple.webp",
        system: {
          monster: {
            level: 1,
            role: "minion", // Retainers are typically "minion" or "elite" depending on their power level relative to players
            organization: "solo", // Assuming a single retainer
            freeStrike: 3,
            ev: 10, // Assuming a basic EV for a level 1 retainer. The PDF does not specify EV.
            keywords: ["Humanoid", "Hexer", "Retainer"]
          },
          stamina: { value: 21, max: 21 },
          damage: { immunities: {}, weaknesses: {} },
          movement: { value: 5, types: ["walk"], hover: false, disengage: 0 },
          combat: { stability: 1, turns: 1, save: { bonus: "", threshold: 10 }, size: { value: 1, letter: "M" } },
          characteristics: { might: { value: 0 }, agility: { value: 2 }, reason: { value: 1 }, intuition: { value: 0 }, presence: { value: 0 } },
          skills: {}, // Skills will be added by trait or advancement
          languages: {}, // Languages will be added by trait or advancement
          source: { book: "Alchemical Consumables", page: "", license: "", revision: 0 },
          _dsid: "battlechemist"
        },
        items: [
          {
            name: "Reagent Pouch Trait", type: "feature", img: "icons/containers/bags/pouch-leather-purple.webp",
            system: {
              description: { value: "<p>The battlechemist’s free strikes can be acid, fire, cold, lightning or poison damage.</p>" }
            }
          },
          {
            name: "Alchemic Quick Fire", type: "ability", img: "icons/magic/fire/projectile-fireball-smoke-large.webp",
            system: {
              source: {}, _dsid: "alchemic-quick-fire", story: "", keywords: ["Ranged", "Strike", "Weapon", "Fire"], type: "main", category: "signature", resource: null, trigger: "",
              distance: { type: "ranged", primary: 10, secondary: 0, tertiary: 0 }, damageDisplay: "ranged", target: { type: "single", value: 1 },
              power: { roll: { formula: "@chr", characteristics: ["highest"] }, effects: {} },
              effect: { before: `<p><em>Make a Power Roll + highest characteristic.</em></p><hr><dl>
                <dt><strong>Tier 1:</strong></dt><dd>2 fire damage; burning (EoT). [[/damage 2 fire]]</dd>
                <dt><strong>Tier 2:</strong></dt><dd>5 fire damage; burning (EoT). [[/damage 5 fire]]</dd>
                <dt><strong>Tier 3:</strong></dt><dd>7 fire damage; burning (EoT). [[/damage 7 fire]]</dd>
                </dl><p><strong>Effect:</strong> A burning creature takes 3 fire damage at the start of their turn. [[/damage 3 fire]]</p>`, after: "" },
              spend: { text: "", value: null }
            }
          },
          {
            name: "Jarring Jolts (Level 4 Retainer Ability)", type: "ability", img: "icons/magic/lightning/bolt-strike-blue-white.webp",
            system: {
              source: {}, _dsid: "jarring-jolts", story: "", keywords: ["Area", "Ranged", "Weapon", "Lightning"], type: "main", category: "basic", resource: "encounter", trigger: "",
              distance: { type: "burst", primary: 3, secondary: 0, tertiary: 0 }, damageDisplay: "ranged", target: { type: "enemy", value: null },
              power: { roll: { formula: "@chr", characteristics: ["highest"] }, effects: {} },
              effect: { before: `<p><em>(Level 4 Retainer Advancement Ability) Make a Power Roll + highest characteristic.</em></p><hr><dl>
                <dt><strong>Tier 1:</strong></dt><dd>5 lightning damage; slowed (save ends). [[/damage 5 lightning]]</dd>
                <dt><strong>Tier 2:</strong></dt><dd>7 lightning damage; slowed (save ends). [[/damage 7 lightning]]</dd>
                <dt><strong>Tier 3:</strong></dt><dd>9 lightning damage; slowed (save ends). [[/damage 9 lightning]]</dd>
                </dl>`, after: "" },
              spend: { text: "", value: null }
            }
          },
          {
            name: "Supplemental Salves (Level 7 Retainer Ability)", type: "ability", img: "icons/consumables/potions/potion-bottle-corked-red.webp",
            system: {
              source: {}, _dsid: "supplemental-salves", story: "", keywords: ["Area"], type: "main", category: "basic", resource: "encounter", trigger: "",
              distance: { type: "burst", primary: 3, secondary: 0, tertiary: 0 }, damageDisplay: "ranged", target: { type: "ally", value: null },
              power: { roll: { formula: "", characteristics: [] }, effects: {} },
              effect: { before: `<p><em>(Level 7 Retainer Advancement Ability)</em></p><hr><p>Each target can spend a recovery and can choose one effect on them that can be ended by a saving throw. That effect instead ends at the end of their turn.</p>`, after: "" },
              spend: { text: "", value: null }
            }
          },
          {
            name: "Emergency Break Rod (Level 10 Retainer Ability)", type: "ability", img: "icons/magic/light/explosion-shatter-blue.webp",
            system: {
              source: {}, _dsid: "emergency-break-rod", story: "", keywords: ["Area"], type: "main", category: "basic", resource: "encounter", trigger: "",
              distance: { type: "burst", primary: 3, secondary: 0, tertiary: 0 }, damageDisplay: "melee", target: { type: "special", value: null },
              power: { roll: { formula: "", characteristics: [] }, effects: {} },
              effect: { before: `<p><em>(Level 10 Retainer Advancement Ability)</em></p><hr><p>The area is filled with a sparkling dust that provides concealment and lasts until the end of the battlechemist’s next turn. The first time in a combat round an ally enters or starts their turn in the area they can spend a recovery. While in the area allies do not suffer the effects of conditions. The first time in a combat round an enemy...</p>`, after: "" }, // Description is cut off in PDF
              spend: { text: "", value: null }
            }
          }
        ]
      },
    ];

    ui.notifications.info(`Beginning creation of ${allAlchemicalFollowers.length} Alchemical Followers. This may take a moment...`);

    for (const actorData of allAlchemicalFollowers) {
      await Actor.create({ ...actorData, folder: folder.id });
    }

    ui.notifications.info("Macro finished! All Alchemical Followers have been created successfully.");

  } catch (error) {
    console.error("CREATE ALCHEMICAL FOLLOWERS MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();