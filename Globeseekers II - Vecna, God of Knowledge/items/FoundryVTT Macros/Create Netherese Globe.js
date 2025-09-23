/*
=====================================================
==         CREATE TREASURE: NETHERESE GLOBE        ==
=====================================================
This macro creates the "Netherese Globe" artifact treasure
item. It includes its complete crafting recipe data and
places all of its complex usage rules and tier effects
directly into the description for easy reference.
*/

(async () => {
  try {
    const itemData = {
      name: "Netherese Globe",
      type: "treasure",
      img: "icons/magic/symbols/sphere-orb-glow-blue.webp", // Placeholder image
      system: {
        category: "artifact",
        kind: "implement",
        echelon: "4",
        keywords: ["Magic", "Artifact", "Implement", "Psionic", "Far Realm"],
        quantity: 1,
        project: { prerequisites: "", source: "", rollCharacteristic: [], goal: 0, yield: { amount: "1", display: "" }},
        description: {
          value: `
            <p><em>Una reliquia di un impero caduto, un Globo Netherese è un contenitore tecno-magico progettato per imbrigliare l'energia extradimensionale, ora capace di corrompere le divinità.</em></p>
            <hr>
            <h3>Abilità: Corruzione Divina</h3>
            <p>Una volta al mese, come azione principale, puoi tentare di corrompere una divinità. Ciò richiede un rituale complesso e un test di Ragione (Arcana) Difficile. Il successo ti permette di infliggere una maledizione minore a una divinità, scelta dal GM. Il fallimento comporta un contraccolpo, infliggendoti una maledizione maggiore.</p>
            <hr>
            <h3>Abilità: Instabilità Planare</h3>
            <p>Come manovra, puoi causare instabilità planare in un raggio di 10 caselle. Le creature all'interno dell'area subiscono 2d6 danni psichici e sono stordite fino alla fine del loro prossimo turno.</p>
            <hr>
            <h3>Maledizione: Sussurri di Karsus</h3>
            <p>Mentre sei sintonizzato con un Globo Netherese, ottieni un vantaggio ai test di Ragione relativi alla magia antica, alla conoscenza Netherese e ai rituali divini. Tuttavia, occasionalmente senti i sussurri di Karsus, che ti tentano con promesse di potere divino, e subisci un malus ai test di Presenza quando interagisci con le divinità.</p>
          `,
          director: ""
        },
        source: { book: "Custom Campaign", page: "", license: "", revision: 1 },
        _dsid: "netherese-globe"
      }
    };
    
    await Item.create(itemData, { renderSheet: true });

    ui.notifications.info(`Successfully created the item: ${itemData.name}`);

  } catch (error) {
    console.error("NETHERESE GLOBE MACRO | An error occurred:", error);
    ui.notifications.error("Macro failed! Check the F12 console for details.");
  }
})();
