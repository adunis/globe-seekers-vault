/*
=====================================================
==           CREATE TREASURE: N-SHARD            ==
=====================================================
This macro creates the "N-Shard" artifact treasure
item. It includes its complete crafting recipe data and
places all of its complex usage rules and tier effects
directly into the description for easy reference.
*/

(async () => {
  try {
    const itemData = {
      name: "N-Shard",
      type: "treasure",
      img: "icons/magic/unholy/orb-glowing-purple.webp", // Placeholder image
      system: {
        category: "artifact",
        kind: "other",
        echelon: "3",
        keywords: ["Magic", "Artifact", "Psionic", "Far Realm"],
        quantity: 1,
        project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
        description: {
          value: `
            <p><em>Un paradosso solidificato: un frammento di tecnologia arcana Netherese progettato per contenere e interfacciarsi con un'energia caotica ed extradimensionale proveniente dal Reame Remoto.</em></p>
            <hr>
            <h3>Abilità: Risonanza Psionica</h3>
            <p>Mentre sei sintonizzato con un N-Shard, ottieni un vantaggio a tutti i test di Ragione e Intuizione relativi alla psionica o al rilevamento di influenze mentali.</p>
            <hr>
            <h3>Abilità: Volontà Amplificata</h3>
            <p>Una volta per riposo, come azione principale, puoi manifestare un effetto psionico. Scegli uno:</p>
            <ul>
              <li>**Telecinesi:** Spingi o tira una creatura o un oggetto entro 10 caselle fino a 3 caselle.</li>
              <li>**Telepatia:** Stabilisci un collegamento telepatico con una creatura che puoi vedere per 1 minuto.</li>
              <li>**Pirocinesi:** Infliggi 2d6 danni da fuoco a una creatura entro 5 caselle.</li>
            </ul>
            <hr>
            <h3>Maledizione: Sussurri del Vuoto</h3>
            <p>Alla fine di ogni riposo, effettua un test di Presenza Difficile. In caso di fallimento, ottieni una condizione temporanea (es. Stordito, Spaventato) per 1 ora, mentre i sussurri del Reame Remoto erodono la tua sanità mentale.</p>
            <hr>
            <h3>Maledizione: Faro per l'Indesiderato</h3>
            <p>Mentre trasporti un N-Shard attivo, sei più facilmente rilevabile dalle creature del Reame Remoto. Queste creature ottengono un vantaggio ai test di Intuizione per localizzarti.</p>
          `,
          director: ""
        },
        source: { book: "Custom Campaign", page: "", license: "", revision: 1 },
        _dsid: "n-shard"
      }
    };
    
    await Item.create(itemData, { renderSheet: true });

    ui.notifications.info(`Successfully created the item: ${itemData.name}`);

  } catch (error) {
    console.error("N-SHARD MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();
