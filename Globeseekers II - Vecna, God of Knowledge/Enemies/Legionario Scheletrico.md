
~~~ds-statblock
name: Legionario Scheletrico
level: 1
roles:
  - Horde Artillery
ancestry:
  - Undead
  - Skeleton
ev: "16"
stamina: "30"
immunities:
  - Corruption 2
speed: 5
size: 1M
stability: 1
free_strike: 3
might: 2
agility: 2
reason: 1
intuition: 1
presence: 1
traits:
  - name: Horde
    effects:
      - effect: While adjacent to two or more other Legionari Scheletrici, this creature gains +2 to its power rolls.
abilities:
  - name: Arco Corto
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Ranged
      - Strike
      - Weapon
    type: Main action
    distance: Ranged 10
    target: One enemy
    effects:
      - roll: Power Roll + 1
        t1: 4 damage
        t2: 6 damage
        t3: 8 damage
~~~
