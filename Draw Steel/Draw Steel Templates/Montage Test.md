

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
      - **Scale the Outer Wall:** Climb a treacherous section of the keep's wall. (Athletics + Agility, **Hard**)
      - **Bypass the Sentry Post:** Sneak past a tower with distracted guards. (Stealth + Intuition, **Moderate**)
      - **Disable Courtyard Traps:** Identify and disarm pressure plates and tripwires. (Thievery + Reason, **Hard**)
      - **Create a Diversion:** Cause a commotion on the other side of the keep to draw patrols away. (Deception + Presence, **Moderate**)
      - **Navigate Secret Tunnels:** Find and navigate a hidden, crumbling passage. (Survival + Intuition,
      - **Calm the Spy's Nerves:** Keep the anxious spy from panicking and giving you away. (Persuasion + Presence)
      - **Forge a Hall Pass:** Create a believable document to move through a checkpoint. (Subterfuge + Reason)

  - name: Player Turn Actions
    effect: |
      On their turn, a character can either **Take an Action** against a challenge from the list above or **Assist** an ally.
      - **Action**: Make a skill test as described in the challenge.
      - **Assist**: Make a roll with a different but relevant skill; any bonus applies to the character they assist.
    roll: Power Roll + an appropriate characteristic
    '11 or lower': 'You mark one **Failure**. If the roll was EasyThe GM introduces a complication (e.g., "A patrol doubles back," "The spy stumbles, making a loud noise," "A locked door blocks the path").'
    '12-16': 'You mark one **Success** (or two for a **Hard** challenge).'
    '17+': You mark two **Successes**.
    crit: '(Nat 19-20): You mark two **Successes** and create an advantage for the next character''s turn.'

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
