

~~~ds-ab
name: 'Montage: Escape from the Iron Keep'
type: Extended Action
flavor: "With the spy in tow, every shadow is a threat and every sound a warning. Freedom is close, but the keep's walls have one last, deadly price."
effects:
  - name: Goal & Parameters
    effect: |
      **Goal:** Escape the keep with the spy.
      This is a **Moderate** montage, requiring **5 Successes** before **3 Failures** are accumulated. The montage lasts for **2 rounds**.

  - name: Potential Challenges
    effect: |
      On their turn, a character can attempt one of the following challenges.
      - **Scale the Outer Wall:** Climb a treacherous section of the keep's wall. (Athletics + Agility, Easy)
      - **Bypass the Sentry Post:** Sneak past a tower with distracted guards. (Stealth + Intuition, Easy)
      - **Disable Courtyard Traps:** Identify and disarm pressure plates and tripwires. (Thievery + Reason, Hard)
      - **Create a Diversion:** Cause a commotion on the other side of the keep to draw patrols away. (Deception + Presence, Medium)
      - **Navigate Secret Tunnels:** Find and navigate a hidden, crumbling passage. (Survival + Intuition, Medium)
      - **Calm the Spy's Nerves:** Keep the anxious spy from panicking and giving you away. (Persuasion + Presence, Easy)
      - **Forge a Hall Pass:** Create a believable document to move through a checkpoint. (Subterfuge + Reason, Hard)

  - name: Player Turn Actions
    effect: |
      On their turn, a character can either **Take an Action** against a challenge from the list above or **Assist** an ally.
      - **Action**: Make a skill test as described in the challenge.
      - **Assist**: Make a roll with a different but relevant skill; any bonus applies to the character they assist.

  - name: Total Success
    effect: The party and the spy escape the keep without incident, disappearing into the night.

  - name: Partial Success
    effect: |
      The time limit (2 rounds) is reached with at least two more successes than failures. 
      The party escapes, but with complications (e.g., an alarm is raised, a chase begins, the spy is injured).

  - name: Total Failure
    effect: |
      The failure limit is reached, or the time limit expires without enough successes.
      The party is discovered, leading to a direct confrontation or capture.
~~~



```ds-counter
max_value: 5
current_value: 0
min_value: 0
name: Successes
value_height: 3
name_height: 1
```

```ds-counter
max_value: 3
current_value: 0
min_value: 0
name: Failures
value_height: 3
name_height: 1
```

```ds-counter
max_value: 2
current_value: 0
min_value: 0
name: Round
value_height: 3
name_height: 1
```


Montage Test Difficulty
Difficulty Success Limit Failure Limit
Easy 5 5
Moderate 6 4
Hard 7 3

For larger or smaller groups, the Director can make the following
adjustments to keep montage tests achievable but challenging:
¥ For four or fewer heroes, decrease the success limit and failure limits
by 1 (to a minimum of 2) for every hero fewer than five. For example,
if a group has only three heroes, an easy montage test has a success
limit and failure limit of 3.
¥ For six or more heroes, increase the success and failure limits by 1 for
every hero more than five

