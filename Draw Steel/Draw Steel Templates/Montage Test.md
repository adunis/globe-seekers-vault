

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




## Creating a Montage Test

1.  **Determine Difficulty:** The Director sets the montage test difficulty (Easy, Moderate, or Hard).
2.  **Set Success & Failure Limits:** Use the table below, adjusting for party size:

    **Montage Test Difficulty**
    | Difficulty | Success Limit (5 heroes) | Failure Limit (5 heroes) |
    | :--- | :--- | :--- |
    | Easy | 5 | 5 |
    | Moderate | 6 | 4 |
    | Hard | 7 | 3 |

    *   **For 4 or fewer heroes:** Decrease both limits by 1 per hero fewer than five (minimum 2).
    *   **For 6 or more heroes:** Increase both limits by 1 per hero more than five.
    *   The Director can reveal these limits or keep them secret.
3.  **Set Duration:** A montage test typically lasts **2 montage test rounds**. The Director can extend this for a more grueling challenge.
4.  **Set the Scene:** The Director describes the overall scenario and the various challenges or obstacles the heroes might face.

## Running a Montage Test

A montage test proceeds in rounds:

1.  **Hero Turns:** In each round, players take turns. On their turn, a hero can:
    *   Make an **individual test** using a skill.
    *   **Assist** another hero's test (see Assist a Test rules).
    *   Use an **item, ability, or other option** to influence the outcome (e.g., magic fan for automatic successes).
    *   **Choose to do nothing**.
2.  **Individual Test Rules:**
    *   The Director sets the difficulty for each individual test, which can vary.
    *   Standard test rules apply (automatic successes, edge/bane, individual rewards/consequences like Malice or Hero Tokens).
    *   **Outcome Impact:** Individual test successes/failures relate to the overall goal, but usually don't halt the story (e.g., failing to cross a river means a rival gains time, not being stuck).
3.  **Restrictions:**
    *   **One Action Per Round:** Once a hero acts, they cannot act again in that round until all other heroes have acted.
    *   **No Same Skill Twice (per character):** A character cannot use the same skill more than once in a montage test (Director's discretion to lift for prolonged/limited-skill tests).
    *   **New Challenges:** Generally, heroes should attempt to overcome new obstacles with each test. The Director can adjust this if repeated challenges make sense (e.g., fighting fire in a burning building).
4.  **Introducing New Challenges:** The Director can introduce new complications or challenges during the montage test.
5.  **Tracking Progress:** Track total successes and failures earned by the heroes.
6.  **Round End:** A round ends once every hero has taken a turn. A new round begins until the test ends.

## Ending the Montage Test

The montage test ends when:
*   The **success limit** is reached.
*   The **failure limit** is reached.
*   The **round limit** (typically 2 rounds) is reached.

## Montage Test Outcomes

*   **Total Success:** Achieved if the heroes hit the success limit before the failure limit or time runs out.
    *   **Reward:** 1 Victory (Easy/Moderate difficulty), 2 Victories (Hard difficulty).
    *   **Effect:** Goal achieved without complication.
*   **Partial Success:** Achieved if the failure limit or time runs out, BUT heroes have at least two more successes than failures (Successes >= Failures + 2).
    *   **Reward:** 1 Victory (Hard/Moderate difficulty).
    *   **Effect:** Goal achieved, but with a complication or cost.
*   **Total Failure:** Achieved if the failure limit or time runs out, AND heroes do *not* have at least two more successes than failures (Successes < Failures + 2).
    *   **Reward:** None.
    *   **Effect:** Goal not achieved, leading to new interesting challenges.


