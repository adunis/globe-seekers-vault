


#### **HOUSERULE! Sliding and Rolling Objects on Slopes**

This rule determines how an object moves after landing on a sloped surface.

1. **Gain Momentum:** The object gains **1 Momentum Point for every 2 full squares it fell**.
    
2. **Determine Slide Distance:** The base Slide Distance is equal to its Momentum Points. This is modified by object type (rollers move farther) and slope steepness (steeper slopes double the distance).
    
3. **Resolve Movement:** The object moves down the slope, spending its Slide Distance. Difficult terrain costs double. The movement stops when Slide Distance is 0 or it collides with a significant obstacle.
    
4. **Collision Damage:** If it hits a creature, the creature takes **1 damage for every point of Slide Distance remaining**.
    

#### **HOUSERULE! Structural Integrity & Breaking Points**

This framework governs attempts to move or topple objects that are **attached** to the ground or another larger structure (e.g., a tree, a stone pillar, a statue on a plinth). These objects cannot be force moved normally.

- **System Activation:** This system activates whenever an ability applies a push or pull to an Attached Object. A slide cannot sunder an attached object; the forced movement simply fails.
    
- **Defining an Attached Object:** An Attached Object is any object that is rooted to the ground or is part of a larger structure. The Director determines if an object qualifies.
    
- **Breaking Point:** Every Attached Object has a **Breaking Point**, which is a value representing the force needed to snap it from its anchor. The Breaking Point is equal to the object's **Stamina**.
    
    - Example: A 1-square thick wooden tree (Size 1M) has 3 Stamina, so its Breaking Point is 3.
        
    - Example: A 1-square thick stone pillar (Size 1M) has 6 Stamina, so its Breaking Point is 6.
        

When you use an ability that applies a push X or pull X to an Attached Object, follow these steps:

1. **Determine Force Value:** The number of squares of the push or pull is the **Force Value**. (e.g., a push 10 has a Force Value of 10).
    
2. **Deal Initial Damage:** The object takes the normal damage from your ability, if any.
    
3. **Compare Force to Breaking Point:**
    
    - **If Force Value is LESS than the Breaking Point:** The object is **not sundered**.
        
        - It does not move.
            
        - The object takes additional damage equal to the **Force Value**, representing the strain on its structure. Its Stamina (and thus its Breaking Point) is reduced for future attempts.
            
    - **If Force Value is EQUAL TO OR GREATER than the Breaking Point:** The object is **sundered**. It breaks free from its anchor point. Now, determine its final movement:
        
        - **For Movers (e.g., Trees, large crystals):** The object is uprooted and is now pushed or pulled. The distance it travels is equal to the **original forced movement value MINUS the object's Size**. It then moves as a normal free object.
            
        - **For Topplers (e.g., Pillars, Statues):** The object does not get pushed or pulled horizontally. Instead, it **falls**. The character who sundered it chooses the direction it falls. It topples in a straight line, occupying a number of squares equal to its height. Any creature in those squares is subject to the **Falling Object Damage** rules. The "Squares Fallen" for the damage calculation is **half the object's height** (rounded down).
            

**Example Application:**

- **Pushing a Tree:** A hero uses an ability that applies push 10 to a Size 1M tree (Breaking Point 3). The Force Value is 10. Since 10 > 3, the tree is **sundered**. It is now pushed a distance of 10 (from the ability) - 1 (the tree's size) = **9 squares**.
    
- **Toppling a Pillar:** A hero uses an ability that applies push 10 to a 10-square-high stone pillar (Size 1M, Breaking Point 6). The Force Value is 10. Since 10 > 6, the pillar is **sundered**. The hero decides it will fall north. It topples, covering the 10 squares to the north. Any creature in its path takes falling object damage as if it fell 5 squares: **(2 x 5) x 1 = 10 damage**.
    
- **Failed Push:** A hero uses an ability that applies push 4 to the same 10-square-high stone pillar (Breaking Point 6). The Force Value is 4. Since 4 < 6, the pillar is **not sundered**. It does not move or fall. It takes damage from the initial ability, plus an additional 4 damage from the failed push. Its Stamina is now reduced, making it easier to break on the next attempt.
    

#### **HOUSERULE! Pinning**

This rule creates a new **Pinned** condition for when a creature is trapped beneath a significantly larger creature or object.

- **Triggering Pinning:** A creature becomes pinned when a creature or object **two or more sizes larger** than them ends its movement occupying their space.
    
- **The Pinned Condition:** A pinned creature is **restrained**, **prone**, has **no line of effect** to creatures not adjacent to them, and all creatures have **cover** against them.
    
- **Escaping a Pin:** A pinned creature or their allies can free them using standard game actions:
    
    - **Force:** Use the **Knockback maneuver** on the pinning creature/object to push it off.
        
    - **Destruction:** Use a **main action** to make a strike against a pinning object, attempting to destroy one square of it to create an opening.
        
    - **Wriggling Free:** The pinned creature can use their **move action** to make a **Hard Agility test** to crawl out from underneath. Relevant skills (e.g., Gymnastics) can be applied.
