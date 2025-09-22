
### **Understanding Items (Treasures)**

In *Draw Steel*, items with supernatural properties are called **Treasures**. They are rare, powerful, and central to a hero's progression. They are not typically purchased in shops but are found in dangerous locations, received as rewards from powerful NPCs, or crafted through significant effort during downtime.

There are four primary types of Treasures:

1.  **Consumables:** Single-use items like potions, scrolls, or alchemical bombs.
2.  **Trinkets:** Items with persistent, often utility-focused magical properties, like gloves that help you climb or a cloak that aids in stealth.
3.  **Leveled Treasures:** The most significant equipment. These are typically armor, weapons, and implements that grow in power as the hero gains levels.
4.  **Artifacts:** Unique, world-changing items with immense power that can define an entire campaign.

#### **The Data Model of an Item**

When I create or present a treasure for your campaign, I will use the following data structure:

*   **Name:** The item's evocative name (e.g., *Blade of Quintessence*).
*   **Flavor Text:** A short, descriptive sentence to set the mood.
*   **Keywords:** Tags that define the item's mechanics and type.
    *   **Supernatural Type:** `Magic` or `Psionic`.
    *   **Item Category:** `Potion`, `Light Armor`, `Heavy Weapon`, `Implement`, `Ring`, etc. This determines which kits or character types can use it effectively.
    *   **Body Slot (for wearables):** `Head`, `Neck`, `Arms`, `Hands`, `Waist`, `Feet`.
*   **Item Prerequisite (for crafting):** The rare, narrative component needed to begin crafting the item (e.g., "A ruby hardened in the fires of the City of Brass"). This serves as an adventure hook.
*   **Project Source (for crafting):** The "recipe" or knowledge needed, often in a specific language (e.g., "Texts or lore in Zaliac").
*   **Project Roll Characteristic (for crafting):** The primary characteristic used for the crafting project roll (e.g., `Might`, `Reason`, or `Intuition`).
*   **Project Goal (for crafting):** The number of project points required to complete the item.
*   **Effect / Leveled Benefits:** This is the core mechanical description.
    *   For **Consumables** and **Trinkets**, this is a single "Effect" block.
    *   For **Leveled Treasures**, this is broken down into benefits gained at **1st Level**, **5th Level**, and **9th Level**. The benefits are cumulative.

#### **Example Items**

Here are examples illustrating the different treasure types:

**1. Consumable (1st Echelon)**
*   **Name:** Healing Potion
*   **Keywords:** Magic, Potion
*   **Effect:** When you drink this potion as a maneuver, you regain Stamina equal to your recovery value without spending a Recovery.

**2. Trinket (2nd Echelon)**
*   **Name:** Gecko Gloves
*   **Keywords:** Hands, Magic
*   **Effect:** While you wear these gloves, your grip is all but impossible to break. You can’t be disarmed, you can’t lose your grip while climbing unless you are force moved, and any creature grabbed by you takes a bane on the test for the Escape Grab maneuver.

**3. Leveled Treasure (Armor)**
*   **Name:** Grand Scarab
*   **Keywords:** Magic, Medium Armor
*   **1st Level:** While you wear this armor, you gain a +6 bonus to Stamina and you can fly. If you don’t end your turn on the ground, you fall.
*   **5th Level:** The armor’s bonus to Stamina increases to +12. Additionally, you no longer need to end your turn on the ground to avoid falling.
*   **9th Level:** The armor’s bonus to Stamina increases to +21. Additionally, if you fly any distance before making a strike, that strike gains an edge.
