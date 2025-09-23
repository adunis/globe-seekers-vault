/*
=====================================================
==         CREATE TREASURE: IL CUORE NERO          ==
=====================================================
This macro creates the "Il Cuore Nero" artifact treasure
item. It includes its complete crafting recipe data and
places all of its complex usage rules and tier effects
directly into the description for easy reference.
*/

(async () => {
  try {
    const itemData = {
      name: "Il Cuore Nero",
      type: "treasure",
      img: "icons/magic/unholy/heart-black-red.webp", // Placeholder image
      system: {
        category: "artifact",
        kind: "other",
        echelon: "3",
        keywords: ["Magic", "Artifact", "Necrotic"],
        quantity: 1,
        project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
        description: {
          value: `
            <p><em>Un organo pulsante, simile all'ossidiana, che irradia un'aura di terrore.</em></p>
            <hr>
            <h3>Abilità: Drenaggio Vitale</h3>
            <p><strong>Tipo:</strong> Azione Principale<br><strong>Frequenza:</strong> Una volta per riposo</p>
            <p><strong>Effetto:</strong> Puoi scegliere come bersaglio una creatura entro 5 caselle. Effettua un Tiro Potenza + Presenza.</p>
            <ul>
              <li><strong>Successo di Tier 2:</strong> Il bersaglio subisce 2d8 danni necrotici, e tu recuperi stamina pari al danno inflitto. [[/damage 2d8 necrotic]]</li>
              <li><strong>Successo di Tier 3:</strong> Il bersaglio subisce 3d8 danni necrotici, e tu recuperi stamina pari al danno inflitto. [[/damage 3d8 necrotic]]</li>
            </ul>
            <hr>
            <h3>Effetto Passivo: Aura di Terrore</h3>
            <p>Le creature entro 3 caselle da te subiscono un malus ai test di Presenza.</p>
            <hr>
            <h3>Maledizione del Cuore Nero</h3>
            <p>Mentre sei sintonizzato con Il Cuore Nero, non puoi recuperare stamina da abilità di cura non generate da Il Cuore Nero.</p>
          `,
          director: ""
        },
        source: { book: "Custom Campaign", page: "", license: "", revision: 1 },
        _dsid: "il-cuore-nero"
      }
    };
    
    await Item.create(itemData, { renderSheet: true });

    ui.notifications.info(`Successfully created the item: ${itemData.name}`);

  } catch (error) {
    console.error("IL CUORE NERO MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();
