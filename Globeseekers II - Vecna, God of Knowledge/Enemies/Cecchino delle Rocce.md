
~~~ds-statblock
name: Cecchino delle Rocce
level: 1
roles:
  - Minion Artillery
ancestry:
  - Goblin
  - Humanoid
ev: "17"
stamina: "30"
immunities:
  - psychic 2
speed: 5
size: 1S
stability: 1
free_strike: 3
might: 1
agility: 4
reason: 2
intuition: 3
presence: 1
traits:
  - name: Sniper's Perch
    effects:
      - effect: If this creature is in a high position, it gains +2 to its power rolls.
abilities:
  - name: Arco Corto
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Ranged
      - Strike
      - Weapon
    type: Main action
    distance: Ranged 15
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 5 damage
        t2: 8 damage
        t3: 10 damage
~~~
