
~~~ds-statblock
name: Guardiano d'Ossa d'Elite
level: 2
roles:
  - Platoon Defender
ancestry:
  - Undead
  - Skeleton
ev: "18"
stamina: "60"
immunities:
  - Corruption 4
  - psychic 2
speed: 5
size: 1M
stability: 2
free_strike: 4
might: 3
agility: 2
reason: 1
intuition: 2
presence: 1
traits:
  - name: Shield Wall
    effects:
      - effect: While adjacent to another Guardiano d'Ossa, this creature gains +2 stability.
abilities:
  - name: Spada d'Ossa
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
      - roll: Power Roll + 2
        t1: 6 damage
        t2: 10 damage
        t3: 12 damage
~~~
