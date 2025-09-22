




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


~~~ds-ab
name: 'Montage: Escape from the Iron Keep'
type: Extended Action
flavor: "With the spy in tow, every shadow is a threat and every sound a warning. Freedom is close, but the keep's walls have one last, deadly price."
effects:
  - name: Goal & Parameters
    effect: |
      **Goal:** Escape the keep with the spy.
      This is a **Moderate** montage, requiring **5 Successes** before **3 Failures** are accumulated. The montage lasts for **2 rounds**.

  - name: Player Turn Actions
    effect: |
      On their turn, a character can either **Take an Action** or **Assist**.
      - **Action**: Make a skill test (e.g., Stealth, Athletics, Deception) against a challenge presented by the GM.
      - **Assist**: Make a roll with a different skill; any bonus applies to the character they assist.
    roll: Power Roll + an appropriate characteristic
    '11 or lower': 'You mark one **Failure**. The GM introduces a complication (e.g., "A patrol doubles back," "The spy stumbles, making a loud noise," "A locked door blocks the path").'
    '12-16': You mark one **Success**.
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

