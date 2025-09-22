
~~~ds-statblock
name: Abominio di Carne
level: 1
roles:
  - Horde Brute
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
might: 3
agility: 1
reason: 1
intuition: 1
presence: 1
traits:
  - name: Horde
    effects:
      - effect: While adjacent to two or more other Abomini di Carne, this creature gains +2 to its power rolls.
abilities:
  - name: Schianto
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Melee
      - Strike
    type: Main action
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 5 damage
        t2: 8 damage
        t3: 10 damage
~~~
