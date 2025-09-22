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





