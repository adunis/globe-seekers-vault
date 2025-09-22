
~~~ds-statblock
name: Servitore Chirurgico
level: 1
roles:
  - Brute
  - Minion
ancestry:
  - Undead
  - Zombie
ev: "16"
stamina: "40"
immunities:
  - Corruption 2
speed: 4
size: 1M
stability: 1
free_strike: 3
might: 2
agility: 1
reason: 1
intuition: 1
presence: 1
traits:
  - name: Horde
    effects:
      - effect: While adjacent to two or more other Servitori Chirurgici, this creature gains +2 to its power rolls.
abilities:
  - name: Bisturi Arrugginito
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
      - roll: Power Roll + 1
        t1: 4 damage
        t2: 6 damage
        t3: 8 damage
~~~
