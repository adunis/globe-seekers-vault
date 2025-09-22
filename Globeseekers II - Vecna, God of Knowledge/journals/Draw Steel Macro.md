/*
=====================================================
==         DRAW STEEL: CREATE EVERYTHING MACRO       ==
=====================================================
This single macro will create five different documents
to serve as a comprehensive template and example.
- A Monster with an embedded ability.
- A Treasure item with a passive bonus (Active Effect).
- A Title item.
- A standalone Ability with a damage enricher.
- A multi-page Journal Entry.

If this macro fails, please check the developer
console (F12) for any red error messages.
*/

(async () => {
  try {
    // --- 1. CREATE A MONSTER (NPC ACTOR) ---
    // This demonstrates creating an NPC with all its stats and an embedded ability item.
    ui.notifications.info("Attempting to create Monster...");
    
    const monsterData = {
      name: "Goblin Gutter-Skulk",
      type: "npc",
      img: "systems/draw-steel/assets/icons/hood.svg",
      system: {
        monster: { level: 1, role: "skirmisher", organization: "troop", freeStrike: 3, keywords: ["goblinoid", "humanoid"] },
        characteristics: { agility: { value: 2 }, intuition: { value: 1 }, might: { value: 0 }, presence: { value: -1 }, reason: { value: -1 } },
        stamina: { value: 8, max: 8 },
        combat: { stability: 11, turns: 1, save: { bonus: "", threshold: 10 }, size: { value: 1, letter: "" } },
        movement: { value: 6, types: ["walk"], hover: false, disengage: 3 },
        damage: { immunities: {}, weaknesses: {} },
        source: { book: "Core Rulebook", page: "123", license: "", revision: 0 },
        _dsid: "goblin-gutter-skulk"
      },
      items: [ // Embed items directly into the actor data
        {
          name: "Rusty Shiv", type: "ability", img: "icons/weapons/daggers/dagger-notched-black.webp",
          system: {
            source: { book: "", page: "", license: "", revision: 0 }, _dsid: "rusty-shiv", story: "", keywords: ["weapon", "melee"], type: "main", category: "attack", resource: null, trigger: "",
            distance: { type: "melee", primary: 1, secondary: 0, tertiary: 0 }, damageDisplay: "melee", target: { type: "single", value: 1 },
            power: {
              roll: { formula: "@chr", characteristics: ["agility"] },
              effects: {
                [foundry.utils.randomID()]: {
                  name: "Shiv Damage", img: "icons/weapons/daggers/dagger-notched-black.webp", type: "damage",
                  damage: {
                    tier1: { value: "1d4+@potency.weak", types: ["untyped"], properties: [], potency: { value: "", characteristic: "" } },
                    tier2: { value: "1d6+@potency.average", types: ["untyped"], properties: [], potency: { value: "", characteristic: "" } },
                    tier3: { value: "1d8+@potency.strong", types: ["untyped"], properties: [], potency: { value: "", characteristic: "" } }
                  }
                }
              }
            },
            effect: { before: "<p>The goblin lashes out with its crude blade.</p>", after: "" }, spend: { text: "", value: null }
          }
        }
      ]
    };
    await Actor.create(monsterData, { renderSheet: true });
    ui.notifications.info("Successfully created Monster: Goblin Gutter-Skulk");


    // --- 2. CREATE A TREASURE ITEM ---
    // This demonstrates creating a piece of equipment that grants a passive bonus via an Active Effect.
    ui.notifications.info("Attempting to create Treasure...");
    
    const treasureData = {
        name: "Shield of the Stalwart", type: "treasure", img: "systems/draw-steel/assets/icons/crenulated-shield.svg",
        system: {
            category: "shield", kind: "shield", echelon: "echelon1", quantity: 1,
            description: { value: "<p>A sturdy shield that instills a sense of resilience in its bearer.</p>", director: "" },
            source: { book: "", page: "", license: "", revision: 0 }, _dsid: "shield-of-the-stalwart"
        },
        effects: [ // Note: 'effects' is at the top level, NOT inside 'system'.
            {
                label: "Stability Bonus", icon: "systems/draw-steel/assets/icons/crenulated-shield.svg", transfer: true,
                changes: [ { key: "system.combat.stability", mode: 2, value: "1", priority: 20 } ] // mode 2 = ADD
            }
        ]
    };
    await Item.create(treasureData, { renderSheet: true });
    ui.notifications.info("Successfully created Treasure: Shield of the Stalwart");


    // --- 3. CREATE A TITLE ITEM ---
    // This demonstrates creating a Title, which is a specific type of feature.
    ui.notifications.info("Attempting to create Title...");

    const titleData = {
        name: "Ratcatcher", type: "title", img: "icons/creatures/mammals/rat-brown-crouched.webp",
        system: {
            echelon: "echelon1",
            story: "<i>You are known in the grimy alleys and sewers as the one to call when the vermin get too bold.</i>",
            prerequisites: { value: "Clear out a nest of dire rats." },
            description: { value: "<p>You gain a special ability based on your methods.</p>", director: "" },
            source: { book: "", page: "", license: "", revision: 0 }, _dsid: "ratcatcher"
        }
    };
    await Item.create(titleData, { renderSheet: true });
    ui.notifications.info("Successfully created Title: Ratcatcher");


    // --- 4. CREATE A STANDALONE ABILITY ---
    // This demonstrates an ability whose damage is calculated and handled by a text enricher.
    ui.notifications.info("Attempting to create Ability...");

    const abilityData = {
        name: "Psychic Pulse", type: "ability", img: "icons/magic/light/explosion-star-glow-blue.webp",
        system: {
            source: { book: "Heroes", page: "150", license: "Draw Steel Creator License", revision: 1 }, _dsid: "psychic-pulse",
            story: "A burst of psionic energy interferes with your enemy’s synapses.", keywords: ["area", "psionic"],
            type: "maneuver", category: "heroic", resource: 3, trigger: "",
            distance: { type: "burst", primary: 2, secondary: 0, tertiary: 0 }, damageDisplay: "melee",
            target: { type: "enemy", value: null },
            power: { roll: { formula: "@chr", characteristics: [] }, effects: {} },
            effect: {
                before: `<p>Each target takes psychic damage equal to twice your Intuition score. [[/damage 2*@characteristics.intuition.value psychic]]</p><p>At the end of your current turn, each enemy in the area of your Null Field ability takes psychic damage equal to your Intuition score. [[/damage @characteristics.intuition.value psychic]]</p>`,
                after: ""
            },
            spend: { text: "", value: null }
        }
    };
    await Item.create(abilityData, { renderSheet: true });
    ui.notifications.info("Successfully created Ability: Psychic Pulse");


    // --- 5. CREATE A JOURNAL ENTRY ---
    // This demonstrates creating a Journal Entry with multiple pages (text and image).
    ui.notifications.info("Attempting to create Journal Entry...");

    const journalData = {
        name: "Campaign Primer",
        pages: [
            {
                name: "Introduction", type: "text",
                text: {
                    content: `<h1>Welcome, Heroes!</h1><p>Your journey begins in the bustling city of Silverhaven, a beacon of trade and turmoil. For generations, the city has stood as a bastion against the encroaching wilds, but shadows now lengthen within its very walls.</p><h2>Your Quest</h2><p>A mysterious plague sweeps through the lower districts, and the City Guard is stretched thin. You have been summoned by Captain Valerius of the Watch. He needs brave souls to investigate the source of the affliction.</p><ul><li>Explore the Warrens.</li><li>Uncover the conspiracy.</li><li>Save Silverhaven!</li></ul>`,
                    format: 1 // 1 = HTML
                }
            },
            {
                name: "Map of Silverhaven", type: "image",
                src: "systems/draw-steel/assets/icons/flag-banner.svg"
            }
        ]
    };
    await JournalEntry.create(journalData, { renderSheet: true });
    ui.notifications.info("Successfully created Journal Entry: Campaign Primer");

    ui.notifications.info("Macro finished! All documents created successfully.");

  } catch (error) {
    console.error("DRAW STEEL MACRO | An error occurred during creation:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();

