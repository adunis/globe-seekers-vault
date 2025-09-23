/*
=====================================================
==         CREATE TREASURE: LA PIAGA LUNARE        ==
=====================================================
This macro creates the "La Piaga Lunare" artifact treasure
item. It includes its complete crafting recipe data and
places all of its complex usage rules and tier effects
directly into the description for easy reference.
*/

(async () => {
  try {
    const itemData = {
      name: "La Piaga Lunare",
      type: "treasure",
      img: "icons/weapons/swords/sword-broad-glowing-blue.webp", // Placeholder image
      system: {
        category: "artifact",
        kind: "weapon",
        echelon: "3",
        keywords: ["Magic", "Artifact", "Weapon", "Silver", "Necrotic"],
        quantity: 1,
        project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
        description: {
          value: `
            <p><em>Un antico artefatto Netherese, un tempo brandito per uccidere i licantropi, ora intriso degli echi di una guerra divina.</em></p>
            <hr>
            <h3>Abilità: Anatema Licantropo</h3>
            <p>Questa arma infligge 2d6 danni necrotici aggiuntivi alle creature con la parola chiave Licantropo.</p>
            <hr>
            <h3>Abilità: Abbraccio della Luce Lunare</h3>
            <p>Una volta per riposo, come manovra, puoi far sì che l'arma emetta luce fioca in un raggio di 10 caselle. Mentre è attiva, ottieni un vantaggio ai test di Intuizione per rilevare licantropi nascosti.</p>
            <hr>
            <h3>Abilità: Echi della Grande Discesa</h3>
            <p>Quando colpisci una creatura con quest'arma, puoi scegliere di infliggere 1d8 danni psichici aggiuntivi. Se lo fai, subisci 1d4 danni psichici mentre gli echi della guerra divina riverberano attraverso di te.</p>
            <hr>
            <h3>Maledizione del Ragno Nero</h3>
            <p>Mentre sei sintonizzato con La Piaga Lunare, occasionalmente senti sussurri e una sottile attrazione verso antiche rovine Netheresi.</p>
          `,
          director: ""
        },
        source: { book: "Custom Campaign", page: "", license: "", revision: 1 },
        _dsid: "la-piaga-lunare"
      }
    };
    
    await Item.create(itemData, { renderSheet: true });

    ui.notifications.info(`Successfully created the item: ${itemData.name}`);

  } catch (error) {
    console.error("LA PIAGA LUNARE MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();
