/*
=====================================================
==         CREATE MONSTER: SUPERVISORE CYGNUS        ==
=====================================================
This single macro creates the complete Supervisore Cygnus
boss monster, with all traits and abilities embedded.

All ability effects, tiers, and damage are placed
directly into the description field for easy reference
during gameplay, using damage enrichers for one-click
damage application by the GM.
*/

(async () => {
  try {
    const monsterData = {
      name: "Supervisore Cygnus",
      type: "npc",
      img: "icons/magic/death/undead-lich-tan.webp", // A fitting image
      system: {
        // --- Core Monster Stats ---
        monster: {
          level: 4,
          role: "leader",
          organization: "solo", // A boss is typically a Solo organization
          freeStrike: 6,
          ev: 22,
          keywords: ["Undead", "Tecno-Lich", "Boss"]
        },
        stamina: { value: 150, max: 150 },
        damage: { immunities: { corruption: 8, psychic: 8 }, weaknesses: {} },
        movement: { value: 6, types: ["walk"], hover: false, disengage: 3 },
        combat: { stability: 18, turns: 1, save: { bonus: "", threshold: 10 }, size: { value: 1, letter: "" } }, // Stability is auto-calculated, but we can set a base
        characteristics: { might: { value: 3 }, agility: { value: 4 }, reason: { value: 5 }, intuition: { value: 4 }, presence: { value: 3 } },
        source: { book: "Custom Campaign", page: "", license: "", revision: 1 },
        _dsid: "supervisore-cygnus"
      },
      // --- EMBEDDED ITEMS (TRAITS & ABILITIES) ---
      items: [
        // --- TRAITS (as 'feature' items) ---
        {
          name: "End Effect", type: "feature", img: "icons/magic/defensive/shield-barrier-glowing-gold.webp",
          system: { description: { value: "<p>At the end of each of their turns, Cygnus can take 8 damage to end one effect on them that can be ended by a saving throw. This damage can't be reduced in any way.</p>" } }
        },
        {
          name: "Supernatural Insight", type: "feature", img: "icons/magic/perception/eye-ringed-glow-angry-large-teal.webp",
          system: { description: { value: "<p>Cygnus ignores concealment if it's granted by a supernatural effect.</p>" } }
        },
        // --- ABILITIES ---
        {
          name: "Fulmine Psichico", type: "ability", img: "icons/magic/lightning/fist-unarmed-strike-blue.webp",
          system: {
            source: {}, _dsid: "fulmine-psichico", story: "", keywords: ["Magic", "Melee", "Strike", "Lightning", "Psionic"], type: "main", category: "signature", resource: null, trigger: "",
            distance: { type: "melee", primary: 2, secondary: 0, tertiary: 0 }, damageDisplay: "melee", target: { type: "single", value: 2 },
            power: { roll: { formula: "@chr", characteristics: ["reason"] }, effects: {} },
            effect: { before: `<p><em>Make a Power Roll + 3. The damage type can be lightning or psychic.</em></p><hr><dl><dt><strong>Tier 1:</strong></dt><dd>10 damage; pull 1. ( [[/damage 10 lightning]] / [[/damage 10 psychic]] )</dd><dt><strong>Tier 2:</strong></dt><dd>15 damage; pull 2. ( [[/damage 15 lightning]] / [[/damage 15 psychic]] )</dd><dt><strong>Tier 3:</strong></dt><dd>20 damage; pull 3. ( [[/damage 20 lightning]] / [[/damage 20 psychic]] )</dd></dl><hr><p><strong>Effect:</strong> Any target who is adjacent to Cygnus after the power roll is resolved takes 5 corruption damage. [[/damage 5 corruption]]</p>`, after: "" },
            spend: { text: "<strong>Spend 2 Malice:</strong> This ability targets one additional target.", value: null }
          }
        },
        {
            name: "Shock di Sistema", type: "ability", img: "icons/magic/lightning/orb-ball-blue.webp",
            system: {
                source: {}, _dsid: "shock-di-sistema", story: "", keywords: ["Area", "Ranged", "Psionic", "Lightning"], type: "main", category: "basic", resource: null, trigger: "",
                distance: { type: "burst", primary: 5, secondary: 10, tertiary: 0 }, damageDisplay: "ranged", target: { type: "enemy", value: null },
                power: { roll: { formula: "@chr", characteristics: ["reason"] }, effects: {} },
                effect: { before: `<p><em>Make a Power Roll + 3. The damage type can be psychic or lightning.</em></p><hr><dl><dt><strong>Tier 1:</strong></dt><dd>5 damage. ( [[/damage 5 psychic]] / [[/damage 5 lightning]] )</dd><dt><strong>Tier 2:</strong></dt><dd>8 damage, and each target is dazed until the end of its next turn. ( [[/damage 8 psychic]] / [[/damage 8 lightning]] )</dd><dt><strong>Tier 3:</strong></dt><dd>10 damage, and each target is dazed (save ends). ( [[/damage 10 psychic]] / [[/damage 10 lightning]] )</dd></dl>`, after: "" },
                spend: { text: "", value: null }
            }
        },
        {
            name: "Salto Statico", type: "ability", img: "icons/magic/movement/trail-streak-zigzag-yellow.webp",
            system: {
                source: {}, _dsid: "salto-statico", story: "", keywords: ["Move", "Teleport", "Lightning"], type: "maneuver", category: "basic", resource: null, trigger: "",
                distance: { type: "self", primary: 0, secondary: 0, tertiary: 0 }, damageDisplay: "melee", target: { type: "self" },
                power: { roll: { formula: "", characteristics: [] }, effects: {} },
                effect: { before: `<p>Cygnus teleports up to 5 squares. Each enemy adjacent to the starting or ending square takes 3 lightning damage. [[/damage 3 lightning]]</p>`, after: "" },
                spend: { text: "", value: null }
            }
        },
        {
            name: "Ritorsione Ad Arco", type: "ability", img: "icons/magic/lightning/bolt-strike-blue-white.webp",
            system: {
                source: {}, _dsid: "ritorsione-ad-arco", story: "", keywords: ["Lightning"], type: "triggered", category: "basic", resource: null, trigger: "An ally within 10 squares is damaged by an enemy.",
                distance: { type: "ranged", primary: 10, secondary: 0, tertiary: 0 }, damageDisplay: "ranged", target: { type: "single", value: 1 },
                power: { roll: { formula: "", characteristics: [] }, effects: {} },
                effect: { before: `<p>The triggering enemy takes 5 lightning damage and is weakened until the end of its next turn. [[/damage 5 lightning]]</p>`, after: "" },
                spend: { text: "", value: null }
            }
        },
        {
            name: "Sovraccaricare i Servitori (VA 1)", type: "ability", img: "icons/creatures/abilities/paw-print-yellow.webp",
            system: {
                source: {}, _dsid: "sovraccaricare-i-servitori", story: "", keywords: ["Area"], type: "other", category: "villain", resource: 1, trigger: "",
                distance: { type: "burst", primary: 10, secondary: 0, tertiary: 0 }, damageDisplay: "melee", target: { type: "ally", value: 3 },
                power: { roll: { formula: "", characteristics: [] }, effects: {} },
                effect: { before: `<p>Up to three construct or undead allies in the area can immediately shift up to their speed and gain an edge on their next strike this round.</p>`, after: "" },
                spend: { text: "", value: null }
            }
        },
        {
            name: "Sovraccarico Psichico (VA 2)", type: "ability", img: "icons/creatures/abilities/salamander-fire-spit-orange.webp",
            system: {
                source: {}, _dsid: "sovraccarico-psichico", story: "", keywords: ["Area", "Psionic"], type: "other", category: "villain", resource: 2, trigger: "",
                distance: { type: "burst", primary: 5, secondary: 0, tertiary: 0 }, damageDisplay: "melee", target: { type: "enemy", value: null },
                power: { roll: { formula: "", characteristics: [] }, effects: {} },
                effect: { before: `<p>Each target takes 10 psychic damage and is stunned until the end of its next turn. [[/damage 10 psychic]]</p>`, after: "" },
                spend: { text: "", value: null }
            }
        },
        {
            name: "Assalto a Sfasamento (VA 3)", type: "ability", img: "icons/creatures/abilities/dragon-breath-purple.webp",
            system: {
                source: {}, _dsid: "assalto-a-sfasamento", story: "", keywords: ["Teleport", "Strike"], type: "other", category: "villain", resource: 3, trigger: "",
                distance: { type: "self", primary: 0, secondary: 0, tertiary: 0 }, damageDisplay: "melee", target: { type: "self" },
                power: { roll: { formula: "", characteristics: [] }, effects: {} },
                effect: { before: `<p>Cygnus teleports up to 10 squares. During this teleport, he can make up to three Fulmine Psichico strikes against different targets. These strikes do not pull the targets.</p>`, after: "" },
                spend: { text: "", value: null }
            }
        }
      ]
    };
    
    await Actor.create(monsterData, { renderSheet: true });

    ui.notifications.info(`Successfully created monster: ${monsterData.name}`);

  } catch (error) {
    console.error("SUPERVISORE CYGNUS MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();



/*
=====================================================
==         CREATE TREASURE: ALCHEMIC ACID          ==
=====================================================
This macro creates the "Alchemic Acid" consumable treasure
item. It includes its complete crafting recipe data and
places all of its complex usage rules and tier effects
directly into the description for easy reference.
*/

(async () => {
  try {
    const itemData = {
      name: "Alchemic Acid",
      type: "treasure",
      img: "icons/consumables/potions/potion-bottle-corked-labeled-green.webp",
      system: {
        // --- Core Treasure Details ---
        category: "consumable",
        kind: "other", // A vial fits best here
        echelon: "1",
        keywords: ["Alchemy", "Volatile"],
        quantity: 1,

        // --- Crafting Recipe Information ---
        project: {
          prerequisites: "Nitric salts and powdered copper",
          source: "Texts or lore on alchemy in any language",
          rollCharacteristic: ["reason", "intuition"],
          goal: 45,
          yield: {
            amount: "1d3",
            display: "recipe yields 1d3"
          }
        },

        // --- THE COMPLETE DESCRIPTION BLOCK ---
        description: {
          value: `
            <p><em>A fragile vial of a bubbly corrosive liquid.</em></p>
            <hr>
            <p>
              <strong>Effect:</strong> As a maneuver, you make a ranged free strike using a vial of Alchemic Acid. 
              The strike deals an extra <strong>1 damage</strong> [[/damage 1]] and adds the following effects to the tier outcomes of the power roll:
            </p>
            <dl>
              <dt><strong>Tier 1:</strong></dt>
              <dd>The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends). [[/damage 5 corruption]]</dd>
              
              <dt><strong>Tier 2:</strong></dt>
              <dd>The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends). [[/damage 5 corruption]]</dd>
              
              <dt><strong>Tier 3:</strong></dt>
              <dd>The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends). [[/damage 5 corruption]]</dd>
            </dl>
          `,
          director: ""
        },

        // --- Standard Boilerplate ---
        source: { book: "", page: "", license: "", revision: 0 },
        _dsid: "alchemic-acid"
      }
    };
    
    await Item.create(itemData, { renderSheet: true });

    ui.notifications.info(`Successfully created the item: ${itemData.name}`);

  } catch (error) {
    console.error("ALCHEMIC ACID MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();





/*
=====================================================
==    DRAW STEEL: TREASURE COMPENDIUM MACRO (V2)     ==
=====================================================
This macro creates an example item for every possible
combination of Treasure Category and Kind.

VERSION 2 CHANGES:
- Leveled Treasure benefits are now detailed in the
  item's description instead of using Active Effects.
- The 'echelon' field for all items is now correctly
  formatted as an integer (e.g., 1) instead of a string.
*/

(async () => {
  try {
    const allItems = [
      // ===================================================================
      // ==                        CONSUMABLES                            ==
      // ===================================================================
      {
        name: "[Consumable] Black Ash Dart", type: "treasure", img: "icons/weapons/thrown/dart-poisoned-black.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 3,
          project: { prerequisites: "Three vials of black ash", source: "Texts or lore in Szetch", rollCharacteristic: ["agility", "intuition"], goal: 45, yield: { amount: "1d3", display: "yields 1d3 darts" }},
          description: { value: `<p><em>A diamond-shaped dart holds a shimmering black vial at its core.</em></p><hr><p><strong>Effect:</strong> As a maneuver, you make a ranged free strike using a black ash dart. The strike deals an extra 1 damage [[/damage 1]] and adds the following effects to the tier outcomes:</p><dl><dt><strong>Tier 1:</strong></dt><dd>You can teleport the target up to 2 squares.</dd><dt><strong>Tier 2:</strong></dt><dd>You can teleport the target up to 4 squares.</dd><dt><strong>Tier 3:</strong></dt><dd>You can teleport the target up to 6 squares.</dd></dl>`},
          source: {}, _dsid: "black-ash-dart"
        }
      },
      {
        name: "[Consumable] Healing Potion", type: "treasure", img: "icons/consumables/potions/potion-bottle-corked-red.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Herbalism Kit", source: "Apothecary's Guide", rollCharacteristic: ["intuition"], goal: 30, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>A vial of shimmering red liquid that smells of berries.</em></p><hr><p><strong>Effect:</strong> As a maneuver, you drink this potion and regain stamina equal to your recovery value. [[/heal @recoveries.recoveryValue]]</p>`},
          source: {}, _dsid: "healing-potion"
        }
      },
      {
        name: "[Consumable] Armor Patch Kit", type: "treasure", img: "icons/tools/fasteners/leather-clasp-cord-brown.webp",
        system: {
          category: "consumable", kind: "armor", echelon: 1, quantity: 1,
          project: { prerequisites: "Smith's Tools", source: "Armorer's Manual", rollCharacteristic: ["might"], goal: 25, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>A set of tools and materials for a quick field repair.</em></p><hr><p><strong>Effect:</strong> During a respite, you can use this kit to remove a temporary negative property from a suit of armor.</p>`},
          source: {}, _dsid: "armor-patch-kit"
        }
      },
      {
        name: "[Consumable] Scroll of Warding", type: "treasure", img: "icons/sundries/scrolls/scroll-runed-brown-gold.webp",
        system: {
          category: "consumable", kind: "implement", echelon: 1, quantity: 1,
          project: { prerequisites: "Arcane Ink", source: "Scribe's Handbook", rollCharacteristic: ["reason"], goal: 40, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>A roll of parchment covered in glowing runes.</em></p><hr><p><strong>Effect:</strong> As a triggered action when an enemy targets you with an attack, you can use this scroll to gain a +2 bonus to Stability against that attack.</p>`},
          source: {}, _dsid: "scroll-of-warding"
        }
      },

      // ===================================================================
      // ==                         TRINKETS                              ==
      // ===================================================================
      {
        name: "[Trinket] Color Cloak (Red)", type: "treasure", img: "icons/equipment/back/cloak-collared-red.webp",
        system: {
          category: "trinket", kind: "armor", echelon: 1, quantity: 1,
          project: { prerequisites: "A pint of red ichor, soul chalk", source: "Licensing agreements in Anjali", rollCharacteristic: ["reason", "intuition"], goal: 150, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>This red woolen hooded cloak is emblazoned with a golden Anjali sigil meaning “fire.”</em></p><hr><p><strong>Effect:</strong> While worn, a red Color Cloak grants you fire immunity equal to your level.</p><p>Additionally, when you are targeted by any effect that deals fire damage, you can use a triggered action to reduce the damage to 0. If you do so, the fire immunity granted by this cloak becomes fire weakness with the same value until the end of the next round. You can’t use this triggered action again until this weakness ends.</p>`}
        },
        effects: [
          { label: "Fire Immunity", icon: "icons/magic/fire/elemental-fire.webp", transfer: true, changes: [{ key: "system.damage.immunities.fire", mode: 2, value: "@level" }] }
        ]
      },
      {
        name: "[Trinket] Ever-Sharp Dagger", type: "treasure", img: "icons/weapons/daggers/dagger-ornate-gold.webp",
        system: {
          category: "trinket", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "A whetstone from the heart of a mountain", source: "Dwarven Crafting Lore", rollCharacteristic: ["might"], goal: 100, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>This simple but elegant dagger never seems to lose its edge.</em></p><hr><p><strong>Effect:</strong> This dagger functions as a normal dagger, but it never needs sharpening and is considered a magic weapon for the purpose of overcoming damage immunities.</p>`},
          source: {}, _dsid: "ever-sharp-dagger"
        }
      },
      {
        name: "[Trinket] Ever-Burning Torch", type: "treasure", img: "icons/tools/light/torch-brown-lit.webp",
        system: {
          category: "trinket", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Wood from a petrified forest", source: "Elven Rituals", rollCharacteristic: ["intuition"], goal: 90, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>This simple wooden torch is capped with a magically preserved flame.</em></p><hr><p><strong>Effect:</strong> This torch burns endlessly without consuming fuel. It can be extinguished or lit with a word as a free maneuver. It sheds bright light in a 5-square radius.</p>`},
          source: {}, _dsid: "ever-burning-torch"
        }
      },
      {
        name: "[Trinket] Orb of Minor Prophecy", type: "treasure", img: "icons/magic/perception/orb-crystal-ball-scrying-blue.webp",
        system: {
          category: "trinket", kind: "implement", echelon: 1, quantity: 1,
          project: { prerequisites: "A flawless crystal sphere", source: "Divination Texts", rollCharacteristic: ["presence"], goal: 120, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>Whispers of the near future swirl within this crystal orb.</em></p><hr><p><strong>Effect:</strong> Once per day, you can spend ten minutes concentrating on this orb to gain an edge on a single ability roll made before your next respite.</p>`},
          source: {}, _dsid: "orb-of-minor-prophecy"
        }
      },

      // ===================================================================
      // ==                     LEVELED TREASURES (CORRECTED)             ==
      // ===================================================================
      {
        name: "[Leveled] Adaptive Second Skin of Toxins", type: "treasure", img: "icons/equipment/chest/breastplate-banded-leather-brown.webp",
        system: {
          category: "leveled", kind: "armor", echelon: 1, quantity: 1,
          project: { prerequisites: "Five rabid honey badger pelts, hedgehog quills", source: "Texts or lore in Yllyric", rollCharacteristic: ["agility", "intuition"], goal: 450, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>This suit is shaped of tough leather and set with thousands of tiny barbs on the inside, all thankfully pain-free to the touch.</em></p><hr><h3>1st Level</h3><p>While you wear this armor, you gain a +6 bonus to Stamina, and you have immunity to acid and poison damage equal to your highest characteristic score.</p><h3>5th Level</h3><p>The armor’s bonus to Stamina increases to +12. Additionally, whenever an adjacent creature deals damage to you, they take 3 acid or poison damage (your choice).</p><h3>9th Level</h3><p>The armor’s bonus to Stamina increases to +21, and an adjacent creature who deals damage to you takes 6 acid or poison damage. Additionally, you can use a maneuver to transmute a 2-cube area of liquid or gas adjacent to you into liquid acid or poison gas until the start of your next turn. Any creature who enters the area for the first time in a combat round or starts their turn there takes 6 acid or poison damage, as appropriate.</p>`}
        }
      },
      {
        name: "[Leveled] Abjurer's Bastion", type: "treasure", img: "icons/equipment/finger/ring-inscribed-runes.webp",
        system: {
          category: "leveled", kind: "implement", echelon: 1, quantity: 1,
          project: { prerequisites: "A diamond ring", source: "Texts or lore in Caelian", rollCharacteristic: ["might", "reason", "intuition"], goal: 450, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>An ornate ring set with a large diamond that swirls with blue light.</em></p><hr><h3>1st Level</h3><p>While you wield this implement, your magic or psionic abilities that deal rolled damage gain a +1 damage bonus. Additionally, whenever you deal rolled damage to a creature using a magic or psionic ability, you gain temporary Stamina equal to your highest characteristic score.</p><h3>5th Level</h3><p>The implement’s damage bonus increases to +2. Additionally, whenever you deal rolled damage using a magic or psionic ability, you can use a maneuver to create an immobile field of protection that is a 1 cube, around yourself or around an ally within 5 squares. While in the area, you or the chosen ally has damage immunity 5. The field disappears at the start of your next turn.</p><h3>9th Level</h3><p>The implement’s damage bonus increases to +3. Whenever you deal rolled damage to a creature using a magic or psionic ability, you and each ally within 5 squares of you gains temporary Stamina equal to your highest characteristic score. Additionally, the size of your field of protection increases to a 3 cube, and it can be placed anywhere within 10 squares of you. You and each ally in the area gain its benefits.</p>`}
        }
      },
      {
        name: "[Leveled] Growing Blade", type: "treasure", img: "icons/weapons/swords/sword-broad-runes.webp",
        system: {
          category: "leveled", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "Heartwood of an ancient tree", source: "Fey Smithing", rollCharacteristic: ["might", "intuition"], goal: 450, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>A blade that seems to hum with latent power, growing stronger alongside its wielder.</em></p><hr><h3>1st Level</h3><p>Your weapon strikes with this blade gain a +1 bonus to damage rolls.</p><h3>5th Level</h3><p>The damage bonus increases to +2.</p><h3>9th Level</h3><p>The damage bonus increases to +3.</p>`}
        }
      },
      {
        name: "[Leveled] Charm of Resilience", type: "treasure", img: "icons/magic/defensive/shield-stone-rhombus-yellow.webp",
        system: {
          category: "leveled", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "The scale of an ancient turtle", source: "Monastic Traditions", rollCharacteristic: ["presence"], goal: 400, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>A simple stone charm that feels warm to the touch and hardens the spirit against harm.</em></p><hr><h3>1st Level</h3><p>You gain a +1 bonus to your save bonus.</p><h3>5th Level</h3><p>The bonus to your save bonus increases to +2.</p><h3>9th Level</h3><p>The bonus to your save bonus increases to +3.</p>`}
        }
      },

      // ===================================================================
      // ==                         ARTIFACTS                             ==
      // ===================================================================
      {
        name: "[Artifact] Blade of a Thousand Years", type: "treasure", img: "icons/weapons/swords/sword-runes-glowing.webp",
        system: {
          category: "artifact", kind: "weapon", echelon: 3, quantity: 1,
          project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>This fabled sword features a hilt made of glittering starlight, out of which its gleaming metal blade extends.</em></p><hr><h3>Suited for Victory</h3><p>This sword takes on the size, shape, and make that the wielder wills into it. It can be a light, medium, or heavy weapon, and you can change its weapon type and appearance as a free maneuver. Any weapon ability that deals rolled damage using the Blade of a Thousand Years gains a +5 damage bonus, and that ability always deals holy damage. Any creature with weakness to holy damage who takes damage from this weapon is also frightened and weakened until the end of their next turn.</p><h3>Rally the Righteous</h3><p>Each ally within 1 mile of the weapon gains an edge on weapon abilities and magic abilities, and has damage immunity 5. Additionally, each such creature’s Stamina maximum increases by 15 and they gain a +15 bonus to Stamina when this ability first affects them.</p><h3>Turn the Tide</h3><p>Each enemy minion within 1 mile of the sword is dazed. Any enemy leader or solo creature in that area takes a bane on ability rolls.</p><h3>Victory’s Assurance</h3><p>This weapon always appears on the eve before what will later come to be known as a historic battle. It disappears after 24 hours or when the battle is won, whichever comes first...</p><h3>Soul of the Martyr</h3><p>If the wielder dies while holding this blade, their soul is drawn into the starlight hilt, where it remains for the rest of time to prevent any chance of resurrection...</p>`},
          source: {}, _dsid: "blade-of-a-thousand-years"
        }
      },
      {
        name: "[Artifact] Aegis of the World-Warden", type: "treasure", img: "icons/equipment/shield/buckler-decorated-gold-blue.webp",
        system: {
          category: "artifact", kind: "armor", echelon: 3, quantity: 1,
          project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>This shield is said to contain a fragment of the world's creation. It is impossibly light and radiates a feeling of absolute safety.</em></p><hr><p><strong>Unbreakable Defense:</strong> You are immune to critical hits. Any attack that would be a critical hit against you is instead a normal hit.</p><p><strong>Shared Ward:</strong> As a maneuver, you can choose up to 5 allies you can see. Until the start of your next turn, any damage they take is halved, and you take the other half. This damage cannot be reduced in any way.</p>`},
          source: {}, _dsid: "aegis-of-the-world-warden"
        }
      },
      {
        name: "[Artifact] The Scribe's Tome", type: "treasure", img: "icons/sundries/books/book-runed-glowing-purple.webp",
        system: {
          category: "artifact", kind: "implement", echelon: 3, quantity: 1,
          project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>A book whose pages turn on their own, revealing any piece of knowledge the wielder desires.</em></p><hr><p><strong>Infinite Knowledge:</strong> You are considered to have every Lore and Academic skill. When you make a skill test using one of these skills, you cannot fail; your roll result is always considered a Tier 3 success.</p><p><strong>Rewrite Reality:</strong> Once per week, you can spend one hour writing in the tome to cast a "Wish" spell, altering reality to your whim. Doing so comes at a great cost, determined by the Director.</p>`},
          source: {}, _dsid: "the-scribes-tome"
        }
      },
      {
        name: "[Artifact] The Heartstone", type: "treasure", img: "icons/commodities/gems/gem-heart-engraved-red.webp",
        system: {
          category: "artifact", kind: "other", echelon: 3, quantity: 1,
          project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
          description: { value: `<p><em>A flawless, fist-sized ruby that beats with a slow, steady pulse, like a living heart.</em></p><hr><p><strong>Lifeblood of the Land:</strong> While you carry the Heartstone, no creature, friendly or hostile, can die from their wounds within 1 mile of you. Any creature that would be reduced to 0 or fewer stamina is instead reduced to 1 stamina. This effect does not prevent death from disintegration, soul-devouring, or other reality-warping effects.</p><p><strong>Final Sacrifice:</strong> You can choose to crush the Heartstone. If you do, you and every creature you choose within 1 mile are instantly and fully healed, and all negative effects on them are ended. The Heartstone is destroyed forever.</p>`},
          source: {}, _dsid: "the-heartstone"
        }
      },
    ];

    ui.notifications.info("Beginning creation of 16 treasure items. This may take a moment...");

    for (const item of allItems) {
      await Item.create(item);
    }

    ui.notifications.info("Macro finished! All treasure items have been created successfully.");

  } catch (error) {
    console.error("TREASURE COMPENDIUM MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();



/*
=====================================================
==         CREATE ALL DRAW STEEL TITLES MACRO        ==
=====================================================
This macro creates every Title from the provided list
as a 'title' type item in Foundry VTT.

All mechanical effects and choices are placed directly
into the item's description for easy reference by the
player and GM.
*/

(async () => {
  try {
    const allTitles = [
      {
        name: "Ancient Loremaster",
        img: "icons/sundries/books/book-stack-brown.webp",
        prerequisite: "You find a trove of forgotten books.",
        description: `
          <p><em>It’s astonishing what you find in old books. Look at this—nearly complete schematics for a war automaton, gathering dust because nobody here reads Zaliac.</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Leverage:</strong> You know a priceless secret. The Director chooses the type of person who would value this secret. When engaged in a negotiation with this type of person, you can offer this secret. If they accept, their interest increases by 3 (to a maximum of 5). You can share this secret only once.</li>
            <li><strong>Rare Books:</strong> You add rare, ancient books to your collection. Whenever you undertake a research project, roll 1d6 for each dead language you know and add the total to the project roll.</li>
            <li><strong>Susurrus Codex:</strong> You find a sinister book that whispers advice in a voice no one else can hear. As long as you follow the book’s advice, you gain an edge on Reason tests and take a bane on Presence tests. You can stop following the book’s advice at any time, but the book won’t speak to you for the rest of the day.</li>
          </ul>`
      },
      {
        name: "Battleaxe Diplomat",
        img: "icons/weapons/axes/axe-double-engraved-runes.webp",
        prerequisite: "You gain the friendship or alliance of a creature you once battled.",
        description: `
          <p><em>We seem to be equals in might and combat prowess. Perhaps we should bandy words awhile instead.</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Iron Hand in Velvet Glove:</strong> The first time during a negotiation that you make a test using the Intimidate skill and don’t make an argument that appeals to an NPC’s motivation, you don’t lower the NPC’s patience or interest no matter the outcome of the roll.</li>
            <li><strong>Truce!:</strong> You have a double edge on tests made to stop combat and start a negotiation.</li>
            <li><strong>Warriors’ Understanding:</strong> You gain an edge on Presence tests made to interact with creatures you have fought against in combat encounters.</li>
          </ul>`
      },
      {
        name: "Brawler",
        img: "icons/skills/melee/unarmed-punch-fist-yellow.webp",
        prerequisite: "You triumph in battle without killing any of your foes.",
        description: `
          <p><em>We won’t kill you. But you might wish we had.</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Duck!:</strong> When an enemy strikes you while a second creature is flanking you, you can use a triggered action to redirect the strike against the second creature. Once you use this benefit, you can’t use it again until you earn 1 or more Victories.</li>
            <li><strong>Furniture Fighter:</strong> When you use a weapon ability with an improvised weapon or a weapon that isn’t part of your kit, the ability benefits from your kit’s melee weapon damage bonus.</li>
            <li><strong>Headbutt:</strong> While you are grabbed or restrained, your free strikes don’t take a bane when those conditions would impose one.</li>
            <li><strong>If I Wanted You Dead, You’d Be Dead:</strong> Whenever you defeat foes without killing any of them, you gain an edge on tests during negotiations with those foes.</li>
          </ul>`
      },
      {
        name: "City Rat",
        img: "icons/environment/settlement/building-rubble.webp",
        prerequisite: "You have spent at least five respites in a metropolis.",
        description: `
          <p><em>Stay out all night, visit the dives. Get in a fight, run from the cops. That’s the real city.</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Discerning Shopper:</strong> When looking for an item prerequisite for a crafting project, you can remember meeting someone who might have the item—or at least information about it.</li>
            <li><strong>One with the Crowd:</strong> While you’re using one or more creatures as cover, you gain an edge on tests made to hide and sneak.</li>
            <li><strong>Street Smart:</strong> While in a settlement, you can’t be surprised.</li>
          </ul>`
      },
      {
        name: "Doomed",
        img: "icons/magic/death/hand-undead-skeleton-fire-green.webp",
        prerequisite: "You aren’t a hakaan but have witnessed the death of a hakaan.",
        description: `
          <p><em>I don’t know what it meant, but when I watched her die, I saw a vision. I watched her die and saw my own death. Am I losing my mind?</em></p><hr>
          <p><strong>Effect:</strong> You aren’t destined for a meaningful death, but you still might achieve one. When you’re reduced to 0 Stamina but remain conscious, you can become doomed. If you do, you can’t regain Stamina, you automatically obtain a tier 3 outcome on tests and power rolls, and you don’t die until your Stamina reaches the negative of your Stamina maximum. At the end of the encounter, you die.</p>`
      },
      {
        name: "Dwarven Legionnaire",
        img: "icons/equipment/shield/buckler-plate-steel-blue.webp",
        prerequisite: "You fight alongside three or more dwarves.",
        description: `
          <p><em>I have learned much. It might be your courage that inspires others. Watch your opponent’s shield as well as their sword. And above all, stand fast, and do not yield.</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Close Formation:</strong> While adjacent to two or more allies, you gain a +2 bonus to stability.</li>
            <li><strong>Rune of Alarm:</strong> You can spend 10 uninterrupted minutes to inscribe a magic eye-shaped rune on a surface. The rune sheds light for 2 squares and is dispelled 1 minute after activation or if you inscribe it elsewhere. It activates when an enemy comes within 2 squares. When activated, you wake up if nonmagically asleep and can perceive through the rune for 1 minute.</li>
            <li><strong>Stonemeld:</strong> While adjacent to a stone wall, you can use a maneuver to gain concealment. This concealment lasts until you leave the square or use an ability.</li>
          </ul>`
      },
      {
        name: "Elemental Dabbler",
        img: "icons/magic/fire/projectile-fireball-smoke-large.webp",
        prerequisite: "You defeat a creature with the Elemental keyword, such as a crux of fire.",
        description: `
          <p><em>Spirit of fire, I command you!</em></p><hr>
          <p><strong>Effect:</strong> Choose a damage type to which the defeated creature had an immunity (such as fire). Then choose one of the following benefits:</p>
          <ul>
            <li><strong>Elemental Blaster:</strong> You have the Elementalist 1st-level Hurl Element feature, dealing the chosen damage type.</li>
            <li><strong>Elemental Immunity:</strong> You have immunity to the chosen damage type equal to your highest characteristic score.</li>
            <li><strong>Elemental Weapons:</strong> Whenever you use a damage-dealing weapon ability, that ability can deal damage of the chosen type instead of its usual damage type.</li>
          </ul>`
      },
      {
        name: "Faction Member",
        img: "icons/sundries/flags/banner-symbol-sun-gold-red.webp",
        prerequisite: "You join an army, guild, or similar organization.",
        description: `
          <p><em>In six months, I’ll be running this place.</em></p><hr>
          <p><strong>Effect:</strong> You gain membership in a faction. You’re regarded as a promising but untested agent, and you’re allowed to operate independently. When engaged in a negotiation with any member of your faction, their patience increases by 2 (to a maximum of 5).</p>
          <p>Additionally, the Director assigns you one of the following benefits, as appropriate. You can use this benefit only in a settlement where your faction has a presence, and once used, you can’t use it again until you complete a task for your faction.</p>
          <ul>
            <li><strong>Academic Faction:</strong> Find a sage (+5 bonus) to make up to three Reason tests for lore or research projects on your behalf.</li>
            <li><strong>Guild Faction:</strong> Find an expert crafter (+5 bonus) to make up to three project rolls for crafting projects on your behalf.</li>
            <li><strong>Martial Faction:</strong> Recruit up to three minions (level no greater than your own) to follow your orders for a day.</li>
            <li><strong>Spy Faction:</strong> Find an agent who can provide three pieces of information about the settlement.</li>
          </ul>
          <p><strong>Special:</strong> You can gain this title multiple times, once for each faction.</p>`
      },
      {
        name: "Local Hero",
        img: "icons/environment/settlement/house-manor.webp",
        prerequisite: "You save a community from certain destruction.",
        description: `
          <p><em>Your coin won’t spend here. The Heroes of Gravesford drink for free in this tavern!</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Easy Marks:</strong> You gain an edge on tests made using skills from the interpersonal and intrigue skill groups when influencing members of a community that you have saved.</li>
            <li><strong>Local Fame:</strong> You earn 1 Renown.</li>
            <li><strong>A New Dawn:</strong> Each time you finish a respite while in a community you have saved, the party gains a hero token. This hero token disappears at the end of your next respite if it hasn’t been used.</li>
          </ul>`
      },
      {
        name: "Mage Hunter",
        img: "icons/magic/defensive/shield-barrier-glowing-triangle-blue-gray.webp",
        prerequisite: "You defeat three leader or solo creatures who each have at least one ability with the Magic keyword.",
        description: `
          <p><em>Their power is dangerous. Unnatural. Someone needs to do something.</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Arcane Dampening:</strong> When resisting potencies from magic abilities, your characteristic scores are considered to be 1 higher than usual.</li>
            <li><strong>Oh No, You Don’t!:</strong> Whenever an adjacent creature uses an ability with the Magic keyword, you can make a free strike against them as a triggered action.</li>
            <li><strong>Stink of Magic:</strong> As a maneuver, you open your senses to the residue of magic. Until the end of your next turn, you are aware of whether each creature within 5 squares is a construct, an undead, or a creature from another world, and whether they have used a magic ability in the previous hour. Additionally, you can’t be surprised by constructs, undead, or creatures from another world.</li>
          </ul>`
      },
      {
        name: "Marshal",
        img: "icons/sundries/documents/document-sealed-red-brown.webp",
        prerequisite: "You join an organization that hunts criminals or you are deputized to act for the local authorities.",
        description: `
          <p><em>I said you had twenty-four hours to leave town. That was … what, about twenty-four hours ago?</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Guess It’s the Hard Way Then:</strong> When combat begins and you aren’t surprised, the first time you take damage before taking your turn, you halve that damage.</li>
            <li><strong>Heedless Pursuer:</strong> Once on each of your turns, you can use a free maneuver to deal yourself 1d6 damage that can’t be reduced in any way. When you do, you ignore difficult terrain and you can increase the distance of any jump you make by 1 square, both until the end of your turn.</li>
            <li><strong>Silver Shield:</strong> You have a badge granted to you by your organization. While you wear it, you gain the My Life for Yours feature from the censor class. When you use that ability, you can’t spend wrath unless you have the Wrath class feature.</li>
            <li><strong>Trained Tracker:</strong> You gain an edge on tests made to track criminals.</li>
          </ul>`
      },
      {
        name: "Monster Bane",
        img: "icons/creatures/mammals/wolf-howl-forest-black.webp",
        prerequisite: "You defeat a leader or solo creature with a Reason score of −2 or lower, such as an arixx.",
        description: `
          <p><em>You dare mock Blunwin Mousebane? You think my deed trivial? Ah, but you didn’t see the size of the mouse!</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Beast Bane:</strong> Creatures with the Animal keyword take a bane on strikes made against you.</li>
            <li><strong>Monster Soother:</strong> You gain an edge on tests made to calm or tame nonsapient creatures.</li>
            <li><strong>Monster Trophy:</strong> You decorate your equipment with a trophy from a creature you defeated. While the trophy is visible, you gain an edge on tests made to intimidate sapient creatures.</li>
          </ul>`
      },
      {
        name: "Owed a Favor",
        img: "icons/sundries/documents/document-hand-signed-red.webp",
        prerequisite: "You successfully perform a service for a powerful faction.",
        description: `
          <p><em>The Guild’s gratitude knows no bounds! We’ll repay you in any way we can … short of actually paying you.</em></p><hr>
          <p><strong>Effect:</strong> The faction will perform one favor for the party, provided it doesn’t interfere with the faction’s goals.</p>
          <p>Additionally, the faction is a good source of information. The Director chooses a skill appropriate to the faction. While in a settlement where the faction has a presence, you gain this skill if you don’t already have it. If you already have the skill, you instead gain an edge on tests made using it.</p>`
      },
      {
        name: "Presumed Dead",
        img: "icons/sundries/survival/tent-military-green.webp",
        prerequisite: "You die in a way that prevents your body from being recovered or examined.",
        description: `
          <p><em>But … you’re dead. We went to your funeral.</em></p><hr>
          <p><strong>Effect:</strong> While it might appear that you died, you did not. Instead, you regain 1 Stamina and can spend 1 or more Recoveries. Additionally, you gain a 1st-echelon trinket of the Director’s choice.</p>
          <p>At a dramatic moment determined by the Director, you rejoin your party with an explanation for your narrow escape, and how you found your new trinket along the way.</p>`
      },
      {
        name: "Ratcatcher",
        img: "icons/creatures/mammals/rat-chewed-skull-brown.webp",
        prerequisite: "You defeat a leader or solo creature who is size 1S or smaller, such as a goblin monarch.",
        description: `
          <p><em>I like fighting these little guys. Means I don’t have to waste money on a helmet.</em></p><hr>
          <p><strong>Effect:</strong> Choose one of the following benefits:</p>
          <ul>
            <li><strong>Come Out to Play:</strong> You have the following ability, which can be paid for using your Heroic Resource:<br><em>Come Out to Play (1 Heroic Resource), Area, Magic Maneuver. 5 burst. Target: Each enemy in the area hidden to you. Effect: Each target who has P<v is taunted by you until the end of their next turn, and you know the location of each creature taunted in this way.</em></li>
            <li><strong>Deadly and Big:</strong> Your strikes gain a +3 damage bonus against creatures whose size is smaller than yours.</li>
            <li><strong>Everybody Move!:</strong> When you use the Knockback maneuver, you can target one additional creature of your size or two additional smaller creatures.</li>
          </ul>`
      }
    ];

    ui.notifications.info(`Beginning creation of ${allTitles.length} Title items. This may take a moment...`);

    for (const title of allTitles) {
      const itemData = {
        name: title.name,
        type: "title",
        img: title.img,
        system: {
          prerequisites: { value: title.prerequisite },
          description: { value: title.description.replace(/\n\s+/g, ' ').trim() }, // Clean up whitespace
          // --- Boilerplate fields to ensure the item sheet opens ---
          source: { book: "Core Rulebook", page: "340", license: "", revision: 0 },
          _dsid: title.name.toLowerCase().replace(/\s+/g, '-'),
          story: "",
          echelon: 1
        }
      };
      await Item.create(itemData);
    }

    ui.notifications.info("Macro finished! All Title items have been created successfully.");

  } catch (error) {
    console.error("CREATE TITLES MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();




/*
=====================================================
==      CUSTOM LOOT DROPS (ALL-IN-ONE, ENGLISH)      ==
=====================================================
This macro creates all unique loot for Smilzo, Gianni,
Elthon, and Liora, plus shared loot. All item names,
descriptions, and mechanics have been translated into
English and adapted to the Draw Steel ruleset.

The "description-first" technique is used, with no
automation in the 'effects' array.
*/

(async () => {
  try {
    ui.notifications.info("Beginning creation of all custom loot in English...");

    const allItems = [
      // ===================================================================
      // ==           FOR SMILZO (CHAMPION OF DEATH)                      ==
      // ===================================================================
      {
        name: "Phylactery of the Broken Knight", type: "treasure", img: "icons/sundries/misc/phial-crystal-empty.webp",
        system: {
          category: "trinket", kind: "other", echelon: 2, quantity: 1,
          project: { prerequisites: "Bone dust from a war steed, a smoky quartz crystal, necromantic reagents", source: "Necromantic tomes or rituals of the Broken Knight", rollCharacteristic: ["reason", "presence"], goal: 180, yield: { amount: "1", display: "one phylactery" }},
          description: { value: `<p><em>A small case of smoky crystal and black iron, containing the swirling soul of a tormented steed.</em></p><hr>
          <h3>Ability: Summon Steed</h3>
          <p><strong>Type:</strong> Maneuver<br><strong>Frequency:</strong> Once per respite</p>
          <p><strong>Effect:</strong> For 1 hour, you summon a <strong>Skeletal Mount</strong> with the Undead and Spectral keywords. The mount gains temporary Stamina equal to your level, and its speed increases by 2 squares.</p>
          <p><strong>Champion's Bond:</strong> While mounted, you can use a triggered action to allow your mount to make an extra Strike.</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "phylactery-broken-knight"
        },
        effects: []
      },
      {
        name: "Psionic Blade of Silence", type: "treasure", img: "icons/weapons/swords/sword-guard-red.webp",
        system: {
          category: "leveled", kind: "weapon", echelon: 2, quantity: 1,
          project: { prerequisites: "A high-quality blade, a psionic crystal shard, engraver's tools", source: "Techniques of mental forging or psionic texts", rollCharacteristic: ["intuition", "reason"], goal: 150, yield: { amount: "1", display: "one blade" }},
          description: { value: `<p><em>This black steel weapon emits a silent, mental vibration.</em></p><hr>
          <p><strong>Passive Effect:</strong> This weapon deals an extra <strong>+1d8 damage</strong> on strikes with the "Weapon" keyword.</p>
          <p><strong>Additional Effect:</strong> When you hit a creature with an ability that has the "Magic" keyword, it must make a <strong>Reason or Presence test (threshold 6)</strong> or take a **bane** on all its power rolls for abilities with the "Magic" keyword until the end of its next turn.</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "psionic-blade-of-silence"
        },
        effects: []
      },

      // ===================================================================
      // ==              FOR GIANNI (INVESTIGATOR)                        ==
      // ===================================================================
      {
        name: "The Last Word", type: "treasure", img: "icons/weapons/firearms/revolver-worn-black.webp",
        system: {
          category: "trinket", kind: "weapon", echelon: 2, quantity: 1,
          project: { prerequisites: "Precision revolver parts, dust from a Vecna rune, gunsmith's tools", source: "Schematics stolen from a Caronite gunsmith", rollCharacteristic: ["agility", "reason"], goal: 200, yield: { amount: "1", display: "one revolver" }},
          description: { value: `<p><em>A compact revolver in matte black metal. It was made to end conversations. Requires Silent Bullets.</em></p><hr>
          <h3>Ability: Truth Roulette</h3>
          <p><strong>Type:</strong> Maneuver<br><strong>Resource:</strong> 1 Heroic Resource</p>
          <p><strong>Effect:</strong> During a negotiation, make a <strong>Power Roll + Presence</strong>. Instead of the normal tiers, roll 1d6:</p>
          <ul><li><strong>1:</strong> The gun fires. If the target is helpless, it is an automatic critical hit.</li>
          <li><strong>2-6:</strong> The hammer clicks on an empty chamber. The target gains the <strong>Frightened</strong> condition (save ends). You can spend <strong>1 additional Heroic Resource</strong> to make the Frightened condition last until the end of the negotiation, with no save permitted.</li></ul>`},
          source: { book: "Caronite Legacy" }, _dsid: "the-last-word"
        },
        effects: []
      },
      {
        name: "Vryss's Ciphered Journal (Project)", type: "project", img: "icons/sundries/books/book-worn-brown.webp",
        system: {
          type: "research",
          prerequisites: "Knowledge of arcane symbols or numerical logic.", projectSource: "Recovered from Warden Vryss.",
          rollCharacteristic: ["reason"], goal: 75, yield: { amount: "1", display: "Crucial Information" },
          description: { value: `<p><em>A book bound in stretched human skin.</em></p><hr><p>This research project has two phases. The first half of the progress (up to 38 points) represents unlocking the mechanism. The second half represents deciphering the code.</p><p><strong>Reward on Completion:</strong> The journal reveals information about Vecna's plans, the logistics of the N-Shards, and a link to the cult that killed Gianni's mentor.</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "project-vryss-journal"
        },
        effects: []
      },
      {
        name: "Cinder-Ash Cigar of Insight", type: "treasure", img: "icons/sundries/misc/cigar-brown.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Tobacco leaves dried with the ashes of a divinatory pyre", source: "Alchemical recipes or grimoires on divination", rollCharacteristic: ["intuition"], goal: 40, yield: { amount: "1", display: "one cigar" }},
          description: { value: `<p><em>A single dark cigar that smells of ash and repressed secrets. Lasts for 1 hour.</em></p><hr>
          <p><strong>Passive Effect (while lit):</strong> You gain an <strong>edge on Intuition tests</strong> to Search for clues.</p>
          <h3>Ability: Breath of Revelation</h3>
          <p><strong>Type:</strong> Maneuver<br><strong>Frequency:</strong> Once every 10 minutes</p>
          <p><strong>Effect:</strong> Make a <strong>Power Roll + Intuition</strong> and choose a target (creature or area).</p>
          <ul><li><strong>Tier 1 (11-):</strong> You learn a surface-level piece of information (e.g., a creature's dominant emotion).</li>
          <li><strong>Tier 2 (12-16):</strong> You learn a useful piece of information (e.g., a negotiation motivation, or you gain an <strong>edge</strong> on your next test to find traps/secrets in the area).</li>
          <li><strong>Tier 3 (17+):</strong> You learn a crucial piece of information (e.g., a negotiation pitfall, or you automatically find a hidden clue in the area).</li></ul>`},
          source: { book: "Caronite Legacy" }, _dsid: "cinder-ash-cigar"
        },
        effects: []
      },

      // ===================================================================
      // ==                FOR ELTHON (INVENTOR)                          ==
      // ===================================================================
      {
        name: "Schematic: Unstable Spark Generator", type: "treasure", img: "icons/sundries/scrolls/scroll-writing-brown.webp",
        system: {
          category: "trinket", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Precision gears, a quartz crystal, copper wiring", source: "Ratfolk engineering, gift of Chirr-Click", rollCharacteristic: ["reason"], goal: 120, yield: { amount: "1", display: "one generator" }},
          description: { value: `<p><em>A detailed schematic for a device that overcharges a weapon with electrical energy.</em></p><hr>
          <h3>Created Item's Ability: Chain Overcharge</h3>
          <p><strong>Type:</strong> Maneuver<br><strong>Frequency:</strong> Once per respite</p>
          <p><strong>Effect:</strong> You overcharge a weapon. Your next successful strike within 1 minute unleashes a bolt of chain lightning from the target. Make a <strong>Power Roll + Reason</strong>.</p>
          <ul><li><strong>Tier 1 (11-):</strong> The lightning hits the original target and one other enemy within 3 squares, dealing <strong>2d6 lightning damage</strong>.</li>
          <li><strong>Tier 2 (12-16):</strong> The lightning hits up to two additional enemies and deals <strong>3d6 lightning damage</strong>.</li>
          <li><strong>Tier 3 (17+):</strong> The lightning hits up to three additional enemies and deals <strong>4d6 lightning damage</strong>.</li></ul>
          <p><strong>Heroic Boost:</strong> You can spend <strong>1 Heroic Resource</strong> to have the lightning ignore partial cover.</p>`},
          source: { book: "Chirr-Click's Guild" }, _dsid: "schematic-spark-generator"
        },
        effects: []
      },
      {
        name: "Schematic: Fulminating Cage Trap", type: "treasure", img: "icons/sundries/scrolls/scroll-writing-brown.webp",
        system: {
          category: "trinket", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Metal plates, a galvanic capacitor, a pressure mechanism", source: "Guild defensive blueprints", rollCharacteristic: ["reason", "agility"], goal: 115, yield: { amount: "1", display: "one trap" }},
          description: { value: `<p><em>A schematic for a pressure-activated trap that creates a cage of crackling energy.</em></p><hr>
          <p><strong>Formula Effect:</strong> Allows you to craft a mechanical trap. A creature that triggers it takes <strong>3d10 lightning damage</strong> (Agility test for half) and is trapped in a 1x1 square cage of energy for 1 minute. Moving through the cage walls deals 1d10 lightning damage.</p>`},
          source: { book: "Chirr-Click's Guild" }, _dsid: "schematic-cage-trap"
        },
        effects: []
      },
      {
        name: "Overcharged Capacitor Bracer", type: "treasure", img: "icons/equipment/wrist/bracer-armored-spiked-steel.webp",
        system: {
          category: "trinket", kind: "other", echelon: 2, quantity: 1,
          project: { prerequisites: "A copper bracer, a perfect quartz crystal, galvanic wiring", source: "Experimental Ratfolk technology", rollCharacteristic: ["reason"], goal: 220, yield: { amount: "1", display: "one bracer" }},
          description: { value: `<p><em>A copper bracer with a crackling quartz crystal at its center.</em></p><hr>
          <h3>Ability: Absorb Energy</h3>
          <p><strong>Type:</strong> Triggered Action<br><strong>Trigger:</strong> You are about to take lightning damage.</p>
          <p><strong>Effect:</strong> Reduce the lightning damage you are about to take by 10. If you absorb at least 1 damage this way, the bracer becomes charged.</p><hr>
          <h3>Ability: Discharge</h3>
          <p><strong>Type:</strong> Maneuver<br><strong>Prerequisite:</strong> The bracer is charged.</p>
          <p><strong>Effect:</strong> Choose one of the following effects. The bracer's charge is consumed.</p>
          <p><strong>1. Empowered Strike:</strong> Make a <strong>Power Roll + Might</strong>. Your next weapon strike within 1 minute deals extra lightning damage.</p>
          <ul><li><strong>Tier 1 (11-):</strong> +1d10 damage.</li>
          <li><strong>Tier 2 (12-16):</strong> +2d10 damage.</li>
          <li><strong>Tier 3 (17+):</strong> +3d10 damage.</li></ul>
          <p><strong>2. Safe Overdrive:</strong> If you have an "Overdrive" ability, you can activate it without risking a critical failure and without it counting against its normal usage limit.</p>
          <p><strong>Heroic Boost:</strong> You can spend <strong>1 Heroic Resource</strong> to use both Discharge effects simultaneously.</p>`},
          source: { book: "Chirr-Click's Guild" }, _dsid: "overcharged-capacitor-bracer"
        },
        effects: []
      },

      // ===================================================================
      // ==                  FOR LIORA (WITCH)                            ==
      // ===================================================================
      {
        name: "The Twisted Fates Deck (Starter Set)", type: "treasure", img: "icons/sundries/gaming/playing-cards-black.webp",
        system: {
          category: "artifact", kind: "implement", echelon: 1, quantity: 1,
          project: { prerequisites: "Shapeshifter's hide, chaos-infused ink", source: "Forbidden divination rituals", rollCharacteristic: ["intuition", "presence"], goal: 250, yield: { amount: "3", display: "three cards" }},
          description: { value: `<p><em>Three thick cards made of a material like tanned insect hide.</em></p><hr>
          <h3>Ability: Draw of Fate</h3>
          <p><strong>Type:</strong> Main Action</p>
          <p><strong>Effect:</strong> Draw a random card from your assembled deck (see Journal Entry for rules). You reveal the card and make a choice:</p>
          <ul><li><strong>Accept Fate:</strong> Immediately use the ability granted by the card.</li>
          <li><strong>Refuse Fate:</strong> Do not use the ability, but gain <strong>1 Heroic Resource</strong>.</li></ul>
          <p>The card is consumed for the day in either case.</p><hr>
          <h4>Starter Cards (Granted Abilities)</h4>
          <p><strong>1. Mental Domination:</strong> Main Action. Make a <strong>Power Roll + Presence</strong> against a target. <strong>Tier 1:</strong> The target hesitates, taking a bane on its next action. <strong>Tier 2:</strong> The target obeys a one-word command. <strong>Tier 3:</strong> The target obeys a short phrase until the start of your next turn.</p>
          <p><strong>2. Unexpected Shock:</strong> Main Action. Make a <strong>Power Roll + Intuition</strong>. <strong>Tier 1:</strong> 2d6 lightning damage. <strong>Tier 2:</strong> 3d6 damage. <strong>Tier 3:</strong> 4d6 damage.</p>
          <p><strong>3. Void's Embrace:</strong> Main Action. Make a <strong>Power Roll + Intuition</strong> against a target. <strong>Tier 1:</strong> 1d8 void damage. <strong>Tier 2:</strong> 2d8 void damage. <strong>Tier 3:</strong> 2d8 void damage and the target is <strong>Slowed</strong> (save ends).</p>`},
          source: { book: "Chirr-Click's Guild" }, _dsid: "twisted-fates-deck"
        },
        effects: []
      },
      {
        name: "Aether-Weaver's Focus", type: "treasure", img: "icons/creatures/insects/spider-mandibles-black.webp",
        system: {
          category: "trinket", kind: "implement", echelon: 2, quantity: 1,
          project: { prerequisites: "The dessicated body of an ethereal spider, a focusing quartz", source: "Shamanistic fetish crafting", rollCharacteristic: ["intuition"], goal: 180, yield: { amount: "1", display: "one focus" }},
          description: { value: `<p><em>A fetish in the shape of a dessicated spider.</em></p><hr>
          <p><strong>Passive Effect:</strong> Your familiar gains an <strong>edge on Stealth and Perception tests</strong>.</p>
          <h3>Ability: Interwoven Vision</h3>
          <p><strong>Type:</strong> Maneuver<br><strong>Frequency:</strong> Once per respite</p>
          <p><strong>Effect:</strong> When you use a divination ability, make a <strong>Power Roll + Intuition</strong>.</p>
          <ul><li><strong>Tier 1 (11-):</strong> You gain the basic information you sought.</li>
          <li><strong>Tier 2 (12-16):</strong> You gain a useful, unexpected additional detail.</li>
          <li><strong>Tier 3 (17+):</strong> You gain a crucial detail or a clear vision of a possible future related to your query.</li></ul>
          <p><strong>Heroic Boost:</strong> You can spend <strong>1 Heroic Resource</strong> to ask the GM one "yes or no" question after the vision, which must be answered truthfully.</p>`},
          source: { book: "Chirr-Click's Guild" }, _dsid: "aether-weaver-focus"
        },
        effects: []
      },

       // ===================================================================
      // ==               SHARED LOOT                                     ==
      // ===================================================================
      {
        name: "Vial of Terror Essence", type: "treasure", img: "icons/consumables/potions/potion-bottle-skull-green.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: Math.floor(Math.random() * 4) + 1,
          project: { prerequisites: "Distilled fear essence (e.g., ectoplasm), a crystal vial", source: "Caronite alchemical formulas", rollCharacteristic: ["intuition"], goal: 35, yield: { amount: "1d3", display: "1d3 vials" }},
          description: { value: `<p>When applied to a weapon, the next creature hit must make a <strong>Presence test</strong> or become <strong>Frightened</strong> until the end of its next turn.</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "vial-of-terror-essence"
        },
        effects: []
      },
      {
        name: "Caronite Soul-Key", type: "treasure", img: "icons/sundries/misc/key-bone-skull.webp",
        system: {
          category: "trinket", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "The hand bone of a hangman, grave dust", source: "Rituals of soul-binding", rollCharacteristic: ["reason", "presence"], goal: 90, yield: { amount: "1", display: "one key" }},
          description: { value: `<p><em>A key made of blackened bone.</em></p><hr><p>Provides an <strong>edge on Agility tests</strong> to pick locks of a necromantic origin.</p><p>Once per respite, you can use this key to immediately end a fear effect on yourself.</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "caronite-soul-key"
        },
        effects: []
      },
      {
        name: "Scroll of Void Warp", type: "treasure", img: "icons/sundries/scrolls/scroll-worn-tan.webp",
        system: {
          category: "consumable", kind: "implement", echelon: 2, quantity: 1,
          project: { prerequisites: "Blank parchment, void-infused ink", source: "Occult texts", rollCharacteristic: ["reason"], goal: 60, yield: { amount: "1", display: "one scroll" }},
          description: { value: `<p>This scroll allows you to use an ability that deals <strong>psychic damage equal to twice your highest characteristic</strong> and makes the target <strong>Confused</strong> (save ends).</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "scroll-of-void-warp"
        },
        effects: []
      },
      {
        name: "Potion of Silent Concentration", type: "treasure", img: "icons/consumables/potions/potion-bottle-circle-blue.webp",
        system: {
          category: "consumable", kind: "other", echelon: 2, quantity: 1,
          project: { prerequisites: "Crystal dust, silent water", source: "Advanced alchemical formulas", rollCharacteristic: ["intuition"], goal: 70, yield: { amount: "1", display: "one potion" }},
          description: { value: `<p>For 10 minutes, you gain an <strong>edge on tests to resist auditory mental effects and sound-based illusions</strong>.</p><p>Additionally, once during this duration, you can use an ability with the "Magic" keyword as if it were a free action.</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "potion-silent-concentration"
        },
        effects: []
      },
      {
        name: "Silent Bullets", type: "treasure", img: "icons/weapons/ammunition/bullet-cartridge-shell-gray.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 6,
          project: { prerequisites: "Lead, alchemically treated gunpowder", source: "Schematics for special ammunition", rollCharacteristic: ["agility"], goal: 25, yield: { amount: "6", display: "6 bullets" }},
          description: { value: `<p>Special ammunition for the "The Last Word" revolver.</p>`},
          source: { book: "Caronite Legacy" }, _dsid: "silent-bullets"
        },
        effects: []
      },
      {
        name: "Spark Bombs", type: "treasure", img: "icons/consumables/bombs/bomb-grenade-unlit-brass.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: Math.floor(Math.random() * 4) + 2,
          project: { prerequisites: "A glass container, galvanic powder, volatile reagents", source: "Basic Ratfolk engineering", rollCharacteristic: ["agility"], goal: 30, yield: { amount: "1d4", display: "1d4 bombs" }},
          description: { value: `<p>As a main action, you can throw this bomb at a point within 6 squares. It explodes in a <strong>burst 1</strong> area, dealing <strong>2d6 lightning damage</strong> and making targets <strong>Dazzled</strong> for 1 round.</p>`},
          source: { book: "Chirr-Click's Guild" }, _dsid: "spark-bombs"
        },
        effects: []
      },
      {
        name: "Galvanic Capacitor", type: "treasure", img: "icons/sundries/misc/jar-corked-blue.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "A glass jar, copper electrodes, conductive fluid", source: "Ratfolk alchemy", rollCharacteristic: ["reason"], goal: 45, yield: { amount: "1", display: "one capacitor" }},
          description: { value: `<p><em>A glass jar with metal parts in a bluish liquid. Single use.</em></p><hr>
          <p>If applied to an inactive/broken construct or mechanical object, it recovers <strong>2d8+5 Stamina</strong>.</p>
          <p>If used on an enemy construct, it must make a <strong>Might test (threshold 6)</strong> or be <strong>Stunned</strong> for 1 round.</p>`},
          source: { book: "Chirr-Click's Guild" }, _dsid: "galvanic-capacitor"
        },
        effects: []
      }
    ];

    for (const item of allItems) {
        await Item.create(item);
    }
    
    ui.notifications.info("Macro finished! All custom loot has been created in English.");

  } catch (error) {
    console.error("CUSTOM LOOT MACRO (ENGLISH) | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();


