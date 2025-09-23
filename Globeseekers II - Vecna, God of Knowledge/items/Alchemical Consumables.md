
```ds-ab
name: Alchemic Acid
cost: 1 Consumable
flavor: A fragile vial of a bubbly corrosive liquid.
keywords: Alchemy, Volatile, Ranged
type: Maneuver
distance: Ranged
target: Free Strike
prerequisites: Nitric salts and powdered copper
source: Texts or lore on alchemy in any language
characteristic: Reason, or Intuition
goal: 45 (recipe yields 1d3)
effects:
- Effect: As a maneuver, you make a ranged free strike using a vial of Alchemic Acid. The strike deals an extra 1 damage and adds the following effects to the tier outcomes of the power roll
- roll: Power Roll + Characteristic
  11 or lower: The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends)
  12-16: The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends)
  17+: The target and each adjacent enemy takes 5 corruption damage at the end of their turns (save ends)
```

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