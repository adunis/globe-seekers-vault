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
  - name: Tiro di Sbarramento
    icon: 🗡
    type: Main action
    keywords:
      - Ranged
      - Strike
      - Weapon
    distance: Ranged 10
    target: One enemy
    effects:
      - roll: Power Roll + 1
        t1: 3 damage
        t2: 5 damage; the target is weakened until the end of its next turn.
        t3: 7 damage; the target is weakened (save ends).
  - name: Prendere la Mira
    icon: 🌀
    type: Maneuver
    distance: Self
    target: Self
    effects:
      - effect: This creature gains an edge on its next ranged strike this turn.
  - name: Passo Indietro e Tiro
    icon: ❗️
    type: Triggered action
    trigger: An enemy willingly ends its move in a square adjacent to this creature.
    distance: Self
    target: The triggering enemy
    effects:
      - effect: This creature can immediately shift 1 square away from the target and then make a ranged free strike against it. This free strike deals half damage.
~~~

