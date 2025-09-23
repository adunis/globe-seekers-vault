/*
=====================================================
==          CREATE ALCHEMICAL ITEMS MACRO          ==
=====================================================
This macro creates all unique alchemical items from the
"Alchemical Consumables Powered by Draw Steel" PDF,
organizing them into a dedicated folder.
*/

(async () => {
  try {
    // Define the folder name
    const folderName = "Alchemical Items";
    let folder = game.folders.find(f => f.name === folderName && f.type === "Item");

    // Create the folder if it doesn't exist
    if (!folder) {
      folder = await Folder.create({ name: folderName, type: "Item", parent: null });
      ui.notifications.info(`Created folder: ${folderName}`);
    }

    const allAlchemicalItems = [
      {
        name: "Alchemic Acid", type: "treasure", img: "icons/consumables/potions/potion-bottle-corked-labeled-green.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "Nitric salts and powdered copper", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A fragile vial of a bubbly corrosive liquid.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike using a vial of Alchemic Acid. The strike deals an extra <strong>1 damage</strong> [[/damage 1]] and adds the following effects to the tier outcomes of the power roll:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends). [[/damage 5 corruption]]</dd>
              <dt><strong>Tier 2:</strong></dt><dd>The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends). [[/damage 5 corruption]]</dd>
              <dt><strong>Tier 3:</strong></dt><dd>The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends). [[/damage 5 corruption]]</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "alchemic-acid"
        }
      },
      {
        name: "Alchemic Fire", type: "treasure", img: "icons/consumables/potions/potion-bottle-liquid-orange.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "Soot from a crux of fire, ooze jelly", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A glowing glass vial that is nearly too hot to handle.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike using a vial of Alchemic Fire. The strike deals an extra <strong>1 fire damage</strong> [[/damage 1 fire]] and adds the following effects to the tier outcomes of the power roll:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>The target and each adjacent enemy takes 5 fire damage at the end of their turns (save ends). [[/damage 5 fire]]</dd>
              <dt><strong>Tier 2:</strong></dt><dd>The target and each adjacent enemy takes 5 fire damage at the end of their turns (save ends). [[/damage 5 fire]]</dd>
              <dt><strong>Tier 3:</strong></dt><dd>The target and each adjacent enemy takes 5 fire damage at the end of their turns (save ends). [[/damage 5 fire]]</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "alchemic-fire"
        }
      },
      {
        name: "Alchemic Frost", type: "treasure", img: "icons/consumables/potions/potion-bottle-liquid-blue.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "Supercooled water from an essence of tides", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A ceramic bottle that is cool to the touch and ices over around the seal.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike using a vial of Alchemic Frost. The strike deals an extra <strong>1 cold damage</strong> [[/damage 1 cold]] and adds the following effects to the tier outcomes of the power roll:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>The target and each adjacent enemy is slowed (save ends).</dd>
              <dt><strong>Tier 2:</strong></dt><dd>The target and each adjacent enemy is slowed (save ends).</dd>
              <dt><strong>Tier 3:</strong></dt><dd>The target and each adjacent enemy is slowed (save ends).</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "alchemic-frost"
        }
      },
      {
        name: "Alchemic Silver", type: "treasure", img: "icons/consumables/oils/oil-flask-corked-brown.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "A vial of stable molten silver", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>This glistening oil coats a weapon giving it a polished silver finish.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you coat your weapon in this oil. Until the end of the encounter your weapon abilities deal additional holy damage equal to your highest characteristic to undead and twice as much to lycanthropes.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "alchemic-silver"
        }
      },
      {
        name: "Antivenom", type: "treasure", img: "icons/consumables/potions/potion-bottle-round-green.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Venom glands, a solvent", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A thick, pungent liquid that bolsters your gut and cures you from harm.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you can drink this potion. Until the end of the current encounter you gain poison immunity 5.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "antivenom"
        }
      },
      {
        name: "Royal Water", type: "treasure", img: "icons/consumables/potions/potion-bottle-square-blue.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "A variety of common acids", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A fuming clear liquid that turns a vibrant gold tone when used.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you can pour the royal water over a metal object or mechanism. The next power roll made to damage or sabotage the object automatically obtains a tier 3 outcome.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "royal-water"
        }
      },
      {
        name: "Beast Repellent", type: "treasure", img: "icons/magic/symbols/bouquet-red-green.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "A bouquet of dried lavender and marigolds, peppermint oil", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A bundle of herbs that create an abrasive smoke when burned.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you can ignite the beast repellent. Creatures with the Animal keyword within 5 squares are frightened of you (save ends).</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "beast-repellent"
        }
      },
      {
        name: "Blast Slag (Fire)", type: "treasure", img: "icons/consumables/powder/powder-pouch-red.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "6 oz. of crushed flint, copper slag, orpiment", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A pouch of volatile explosive granules that crackle under pressure.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you can pour out the blast slag over a 3-cube area within 1 square that lasts until the end of the encounter. The first time a creature moves through a square of the area they take <strong>5 fire damage</strong> [[/damage 5 fire]] and are slowed (EoT).</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "blast-slag-fire"
        }
      },
      {
        name: "Blast Slag (Cold)", type: "treasure", img: "icons/consumables/powder/powder-pouch-blue.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "6 oz. of crushed flint, copper slag, chalcanthite", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A pouch of volatile explosive granules that crackle under pressure.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you can pour out the blast slag over a 3-cube area within 1 square that lasts until the end of the encounter. The first time a creature moves through a square of the area they take <strong>5 cold damage</strong> [[/damage 5 cold]] and are slowed (EoT).</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "blast-slag-cold"
        }
      },
      {
        name: "Blast Slag (Lightning)", type: "treasure", img: "icons/consumables/powder/powder-pouch-yellow.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "6 oz. of crushed flint, copper slag, torbernite", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A pouch of volatile explosive granules that crackle under pressure.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you can pour out the blast slag over a 3-cube area within 1 square that lasts until the end of the encounter. The first time a creature moves through a square of the area they take <strong>5 lightning damage</strong> [[/damage 5 lightning]] and are slowed (EoT).</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "blast-slag-lightning"
        }
      },
      {
        name: "Blinding Banger", type: "treasure", img: "icons/consumables/bombs/bomb-powder-yellow.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "6 oz. of zinc, flint flakes, silver fulminate", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A sealed ceramic sphere that shatters into a flash of light and sound.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike using a blinding banger. The strike deals an extra <strong>1 sonic damage</strong> [[/damage 1 sonic]] and adds the following effects to the tier outcomes of the power roll:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>All creatures are concealed from the target and each adjacent enemy (EoT).</dd>
              <dt><strong>Tier 2:</strong></dt><dd>All creatures are concealed from the target and each adjacent enemy (EoT).</dd>
              <dt><strong>Tier 3:</strong></dt><dd>All creatures are concealed from the target and each adjacent enemy (EoT).</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "blinding-banger"
        }
      },
      {
        name: "Bloodsolvent Poison", type: "treasure", img: "icons/consumables/potions/potion-bottle-skull-black.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Thallium salts, cephalopod ink", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>An inky black bile that seeps into wound, preventing it from healing.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you coat your weapon in this oil. Until the end of the encounter your weapon abilities deal additional poison damage to creatures that can bleed equal to your highest characteristic. You may end the effect early and add the following effect to the tier outcomes of your next strike:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>5 poison damage and weakened (save ends). [[/damage 5 poison]]</dd>
              <dt><strong>Tier 2:</strong></dt><dd>5 poison damage and weakened (save ends). [[/damage 5 poison]]</dd>
              <dt><strong>Tier 3:</strong></dt><dd>5 poison damage and weakened (save ends). [[/damage 5 poison]]</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "bloodsolvent-poison"
        }
      },
      {
        name: "Clarity Salts", type: "treasure", img: "icons/consumables/powder/powder-pouch-white.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Ammonium carbonate", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A sealed ampule of potently pungent silvery powder.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you break the ampule and breath in deeply. You can end one effect that is ended by a saving throw or that ends at the end of your turn.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "clarity-salts"
        }
      },
      {
        name: "Clearwater Scoby", type: "treasure", img: "icons/creatures/slime/blob-transparent-blue.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Clarified ooze jelly, fermenting yeasts", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A glob of clear jelly that gathers impurity into an easily removed film.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you place a clearwater scoby into an amount of liquid up to one square in volume. Any mundane impurities, poisons, diseases, or other negative effects present in the liquid are neutralized.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "clearwater-scoby"
        }
      },
      {
        name: "Creationist’s Clay", type: "treasure", img: "icons/tools/smithing/clay-brown.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Natural red clay, powdered silver", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A glob of clay with silver specks molded into the form of a specific creature.</em></p><hr>
            <p><strong>Effect:</strong> As a free triggered action when you use an ability that summons a creature, you mash the creationist’s clay in your hand discharging it. One summoned creature gains temporary stamina equal to three times your highest characteristic and has an edge on their first attack.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "creationists-clay"
        }
      },
      {
        name: "Dusting Silver", type: "treasure", img: "icons/consumables/powder/powder-pouch-silver.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Powdered silver, volcanic sand", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A pouch of powdered silver with grains finer than sand.</em></p><hr>
            <p><strong>Effect:</strong> As a free triggered action when you use an ability allows a creature to spend a recovery, you cast the dusting silver into the air discharging it. The target additionally gains temporary stamina equal to three times your highest characteristic.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "dusting-silver"
        }
      },
      {
        name: "Emergency Escape Cloud", type: "treasure", img: "icons/magic/movement/trail-smoke-blue.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "6 oz. of zinc, silver fulminate, powdered silver", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 30, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A ceramic vial of compressed powder that shatters into a puff of smoke.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver or as a triggered action when you take damage, you throw the vial into the ground releasing a 1-burst cloud. Creatures outside of the area are concealed from creatures inside the area. Additionally, you may shift up to your speed and spend a recovery.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "emergency-escape-cloud"
        }
      },
      {
        name: "Ghosttouch Oil", type: "treasure", img: "icons/consumables/oils/oil-flask-glowing-green.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "A liter of undead blood", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A sickly radiant substance that glows and eerie green.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you coat your weapon in this oil. Until the end of the encounter your weapon abilities deal additional damage to undead equal to your highest characteristic. Additionally, creatures with a Phasing trait you damage with a weapon ability lose that trait (EoT).</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "ghosttouch-oil"
        }
      },
      {
        name: "Herbal Preparations", type: "treasure", img: "icons/environment/wilderness/herbs-bundle.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "A variety of medicinal herbs, lemongrass oil", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A specialty package of rejuvenating herbs that bolsters natural healing.</em></p><hr>
            <p><strong>Effect:</strong> At the end of a respite, consuming these Herbal Preparations provide an additional recovery that remains until it is used or until the start of your next respite. A character can only benefit from this once per respite.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "herbal-preparations"
        }
      },
      {
        name: "Lockbreaker Putty", type: "treasure", img: "icons/commodities/materials/clay-red.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Powdered chalk, linseed oil, hydrogen peroxide, yeast", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 30, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A malleable two toned substance that rapidly expands when kneaded.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you mix the lockbreaker putty together and press it into the hole of a mundane lock. The putty expands destroying the lock.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "lockbreaker-putty"
        }
      },
      {
        name: "Slippery Salve", type: "treasure", img: "icons/consumables/potions/potion-bottle-round-pink.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "A liter of oil, aloe vera", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 30, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A slick gel with a surprisingly pleasant aroma.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you pour the oil over yourself. Until the end of the encounter you cannot be grabbed or restrained by mundane means. If you were grabbed you automatically escape the grab.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "slippery-salve"
        }
      },
      {
        name: "Smoking Rod", type: "treasure", img: "icons/tools/hand/rod-light-red.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Compressed charcoal, phosphorus, zinc", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 30, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A chalky black baton that exudes dark smoke when cracked.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you break the smoking rod in half and toss the pieces away. Create two 3-cubes within distance of your ranged free strike that provide concealment to any creatures inside the area and remains until the end of the next round.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "smoking-rod"
        }
      },
      {
        name: "Superior Adhesive", type: "treasure", img: "icons/commodities/materials/liquid-potter-clay-brown.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Mucus from a mimic", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A gray paste with the consistency of wet clay seems slick at first, then sticky.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you apply this oil to two objects and press them together. If they remain attached by the end of the next round they are adhered together permanently. Only attaining success with a reward on a might test or applying Superior Solvent can separate the items.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "superior-adhesive"
        }
      },
      {
        name: "Superior Solvent", type: "treasure", img: "icons/consumables/potions/potion-bottle-fluid-blue.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "Acetone", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 15, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A cloudy solution that eats away at and dissolves adhesives.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you apply this oil to yourself or an object affected by an adhesive. The adhesion ends.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "superior-solvent"
        }
      },
      {
        name: "Tangleroot Propagant", type: "treasure", img: "icons/magic/nature/root-vine-grasp-brown.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A burlap pouch of dirt and roots that grows grasping vines when watered.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike with the tangleroot propagant. The strike deals an extra <strong>1 damage</strong> [[/damage 1]] and adds the following effects to the tier outcomes of the power roll:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>The target and each adjacent enemy is restrained (EoT) and then slowed (EoT).</dd>
              <dt><strong>Tier 2:</strong></dt><dd>The target and each adjacent enemy is restrained (EoT) and then slowed (EoT).</dd>
              <dt><strong>Tier 3:</strong></dt><dd>The target and each adjacent enemy is restrained (EoT) and then slowed (EoT).</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "tangleroot-propagant"
        }
      },
      {
        name: "Thunderdrop", type: "treasure", img: "icons/magic/air/weather-lightning-strike.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 1, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A large glass bauble with a dark swirl within it.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike with the thunderdrop. The strike deals an extra <strong>1 sonic damage</strong> [[/damage 1 sonic]] and adds the following effects to the tier outcomes of the power roll:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>Each adjacent enemy takes sonic damage equal to your highest characteristic [[/damage @actor.system.characteristics.highest sonic]] and is pushed 1 away from the target.</dd>
              <dt><strong>Tier 2:</strong></dt><dd>Each adjacent enemy takes sonic damage equal to your highest characteristic [[/damage @actor.system.characteristics.highest sonic]] and is pushed 2 away from the target.</dd>
              <dt><strong>Tier 3:</strong></dt><dd>Each adjacent enemy takes sonic damage equal to your highest characteristic [[/damage @actor.system.characteristics.highest sonic]] and is pushed 3 away from the target.</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "thunderdrop"
        }
      },
      {
        name: "Tracking Powder", type: "treasure", img: "icons/consumables/powder/powder-pouch-brown.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 30, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A pouch of fine sparkling dust that makes subtle signs clear.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you toss the tracking powder into the air and watch how it coats the ground. You automatically obtain a tier 3 outcome on your next test to track a creature who has passed through the area previously. Additionally, you have a double edge on tests to track creatures who pass through the area after placing the powder until your next victory.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "tracking-powder"
        }
      },
      {
        name: "Voiding Stone", type: "treasure", img: "icons/commodities/gems/gem-square-black.webp",
        system: {
          category: "consumable", kind: "other", echelon: 1, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 45, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A smooth onyx black stone with a mirror finish that reflects Equinox.</em></p><hr>
            <p><strong>Effect:</strong> As a free triggered action when you use an ability summons an area, object, or fixture that persists (such as Behold the Mystery), you discharge the voiding stone which shatters into dull pieces. While an enemy is within one square of the area, object, or fixture they have a bane on all power rolls.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "voiding-stone"
        }
      },
      // Echelon 2 Consumables
      {
        name: "Flash Petal", type: "treasure", img: "icons/magic/light/explosion-shatter-yellow.webp",
        system: {
          category: "consumable", kind: "other", echelon: 2, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 90, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A petal with branching scorch lines across it’s delicate surface.</em></p><hr>
            <p><strong>Effect:</strong> As a free triggered action when you use an ability that deals lightning damage, you discharge the flash petal which ignites into in a blinding flash. All creatures are hidden to one target of your ability (save ends).</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "flash-petal"
        }
      },
      {
        name: "Fleshing Ointment", type: "treasure", img: "icons/consumables/potions/potion-bottle-red.webp",
        system: {
          category: "consumable", kind: "other", echelon: 2, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 30, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A rank and goopy substance that dries into flakes after use.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, apply the fleshing ointment to a creature that has been turned to stone. After one minute the creature unpetrifies.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "fleshing-ointment"
        }
      },
      {
        name: "Ignition Oil", type: "treasure", img: "icons/consumables/oils/oil-flask-orange.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 2, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 90, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A blubbery oil that makes a surface slippery and flammable.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike using a vial of ignition oil. The strike deals an extra <strong>1 damage</strong> [[/damage 1]] and creates a cube area centered on the target that lasts until the end of the encounter. The first time in a combat round an enemy enters or starts their turn in the area they are prone and gain fire weakness 5 (EoT).</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "ignition-oil"
        }
      },
      {
        name: "Jolt Jar", type: "treasure", img: "icons/magic/lightning/bolt-strike-blue-white.webp",
        system: {
          category: "consumable", kind: "weapon", echelon: 2, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 90, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>Arcing bursts of lightning shine within this breakable glass jar.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you make a ranged free strike using a vial of Jolt Jar. The strike deals an extra <strong>1 lightning damage</strong> [[/damage 1 lightning]] and adds the following effects to the tier outcomes of the power roll:</p>
            <dl>
              <dt><strong>Tier 1:</strong></dt><dd>The target and each adjacent enemy is dazed (EoT).</dd>
              <dt><strong>Tier 2:</strong></dt><dd>The target and each adjacent enemy is dazed (EoT).</dd>
              <dt><strong>Tier 3:</strong></dt><dd>The target and each adjacent enemy is dazed (EoT).</dd>
            </dl>`},
          source: { book: "Alchemical Consumables" }, _dsid: "jolt-jar"
        }
      },
      {
        name: "Oxidized Bark", type: "treasure", img: "icons/environment/wilderness/tree-hollow.webp",
        system: {
          category: "consumable", kind: "other", echelon: 2, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 90, yield: { amount: "1d3", display: "recipe yields 1d3" }},
          description: { value: `
            <p><em>A rusted piece of corroded metal resembling tree bark.</em></p><hr>
            <p><strong>Effect:</strong> As a free triggered action when you use an ability with a burst distance, you discharge the oxidized bark crumbling it to dust in your hand. The area of your ability’s burst is increased by 1 square.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "oxidized-bark"
        }
      },
      // Echelon 3 Consumables
      {
        name: "Elixir of False Life", type: "treasure", img: "icons/consumables/potions/potion-bottle-dark-green.webp",
        system: {
          category: "consumable", kind: "other", echelon: 3, quantity: 1,
          project: { prerequisites: "Powder from a Silvering Stone", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 180, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A flask of sickly green liquid with the scent of embalming fluid.</em></p><hr>
            <p><strong>Effect:</strong> As a maneuver, you apply the potion to a creature that has died since your last respite. The soulless corpse reanimates under your control. It gains stamina equal to six times your highest characteristic, plus the creature’s level. The creature retains its characteristics and any traits, but it has no abilities except for one signature action of your choice, if it had any. It uses your free strikes and follows your commands to the best of its ability. On your turn in combat it can take an action, maneuver, and move action in any order. The creature cannot regain stamina and when reduced to 0 stamina it dies permanently.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "elixir-of-false-life"
        }
      },
      // Echelon 4 Consumables
      {
        name: "Elixir of True Life", type: "treasure", img: "icons/consumables/potions/potion-bottle-liquid-gold.webp",
        system: {
          category: "consumable", kind: "other", echelon: 4, quantity: 1,
          project: { prerequisites: "Powder from The Gold Stone artifact", source: "A research project while in possession of The Gold Stone", rollCharacteristic: ["reason", "intuition"], goal: 360, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A dark golden potion with red swirls that silently calls out to the undead.</em></p><hr>
            <h3>Resurrecting Effect:</h3>
            <p>You must first acquire the bodily remains, with any part or the whole not intact recreated in clay, of any creature who has died throughout history, and a significant possession of the deceased. At the start of a respite as a respite activity, you apply the potion to the clay supplemented body of the creature. Over the course of the respite the effigy transmutes into living flesh precisely resembling the creature in the prime of their life with no flaw or blemish. If the creature’s soul is willing, wherever it may be, they can return into the body resurrecting with full stamina and recoveries at the end of the respite. If the soul is unwilling the body is brought to life soulless with the memories of the creature’s life but also with the knowledge that they are a new creature.</p>
            <h3>Restoring Effect:</h3>
            <p>As a maneuver you can drink the Elixir of True Life. Your stamina and recoveries are fully restored, you lose any permanent damage weakness you have, lost limbs are restored, any negative effects affecting you including curses are removed. Over the course of a day your body reverts in age to its prime and you stop aging for 28 years.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "elixir-of-true-life"
        }
      },
      // Artifact
      {
        name: "The Gold Stone", type: "treasure", img: "icons/commodities/gems/gem-facet-diamond-red.webp",
        system: {
          category: "artifact", kind: "implement", echelon: 3, quantity: 1,
          project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>An unassuming glass-like red stone that can be infinitely chiseled away without loosing mass, substance, or potency.</em></p><hr>
            <p>The secret obsession of all alchemical artists and philosophers, The Gold Stone stands in legend as the greatest alchemical substance in the mundane world. While evidence of its existence is not concrete enough for reasoned minds to entertain, the promise of The Gold Stone makes unreasonable even the most studied of sages.</p>
            <h3>The True Source:</h3>
            <p>While in possession of The Gold Stone you do not need source texts to craft alchemy items and you can freely grind powder from the stone that replaces any prerequisite items with the exception of the Elixir of True Resurrection.</p>
            <h3>Transmute Form:</h3>
            <p>By pressing The Gold Stone against an amount of raw material up to one square in volume for one minute you can transmute the material into any other single substance of your choice.</p>
            <h3>Uncleave the Soul:</h3>
            <p>While in possession of The Gold Stone you can undertake a forbidden knowledge research project to learn the recipe for the Elixir of True Resurrection.</p>
            <h3>Unveil the Inward Eye:</h3>
            <p>While wielding The Gold Stone as an implement abilities with the psionic keyword have an edge. Additionally, you automatically obtain a tier 3 result to recall knowledge with any of your lore skills.</p>
            <h3>The Weight:</h3>
            <p>The Gold Stone is too great substance for anyone to own happily. By virtue of possessing it you will go down in legends as one of the greatest alchemist to ever live... If you allow the worlds to know you possess it. You gain an immutable desire to keep The Gold Stone secret from anyone but your closest of allies. After a year of possessing The Gold Stone you grow suspicious of anyone who knows of its existence.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "the-gold-stone"
        }
      },
      // Trinket
      {
        name: "Silvering Stone", type: "treasure", img: "icons/commodities/gems/gem-facet-diamond-white.webp",
        system: {
          category: "trinket", kind: "implement", echelon: 3, quantity: 1,
          project: { prerequisites: "***", source: "Texts or lore on alchemy in any language", rollCharacteristic: ["reason", "intuition"], goal: 450, yield: { amount: "1", display: "" }},
          description: { value: `
            <p><em>A striking crystal clear white stone that, despite its potent applications, falls short of the singular true stone.</em></p><hr>
            <p><strong>Effect:</strong> While wielding the Silvering Stone as an implement, abilities with the psionic keyword have an edge. Additionally, the Silvering Stone has 8 charges which can be spent on the effects below. When there are no remaining charges the Silvering Stone is destroyed.</p>
            <h3>Lesser Transmutation (1 Charge):</h3>
            <p>By pressing the Silvering Stone against an amount of raw material up to one square in volume for one minute you can transmute the material into another single substance of lesser value.</p>
            <h3>Transmutable Source (2 Charge):</h3>
            <p>You can grind powder from the stone that replaces any prerequisite items needed to craft a consumable with the Alchemy keyword.</p>`},
          source: { book: "Alchemical Consumables" }, _dsid: "silvering-stone"
        }
      },
    ];

    ui.notifications.info(`Beginning creation of ${allAlchemicalItems.length} Alchemical Items. This may take a moment...`);

    for (const item of allAlchemicalItems) {
      await Item.create({ ...item, folder: folder.id });
    }

    ui.notifications.info("Macro finished! All Alchemical Items have been created successfully.");

  } catch (error) {
    console.error("CREATE ALCHEMICAL ITEMS MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();