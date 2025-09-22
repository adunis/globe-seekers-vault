
~~~ds-statblock
name: Mad Mags
level: 3
roles:
  - Leader
ancestry:
  - Human
  - Humanoid
ev: "20"
stamina: "100"
immunities:
  - psychic 4
speed: 6
size: 1M
stability: 3
free_strike: 5
might: 4
agility: 3
reason: 2
intuition: 3
presence: 4
traits:
  - name: Inspiring Presence
    effects:
      - effect: Allies within 5 squares of this creature gain +1 to their power rolls.
abilities:
  - name: Ascia da Guerra
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Melee
      - Strike
      - Weapon
    type: Main action
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 3
        t1: 8 damage
        t2: 12 damage
        t3: 15 damage
~~~

