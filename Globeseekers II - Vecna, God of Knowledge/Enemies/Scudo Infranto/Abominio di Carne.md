
![[Unstoppable_Abomination.jpg]]


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
  - name: Afferra e Sbatacchi
    icon: 🗡
    type: Main action
    keywords:
      - Melee
      - Strike
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 4 damage
        t2: 6 damage; push 1
        t3: 8 damage; push 2 and the target is prone
  - name: Spinta Brutale
    icon: 🌀
    type: Maneuver
    keywords:
      - Melee
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: Push 1
        t2: Push 2
        t3: Push 2; the target is slowed (save ends).
  - name: Risposta Cadaverica
    icon: ❗️
    type: Triggered action
    trigger: An adjacent horde ally is damaged by an enemy's melee strike.
    distance: Melee 1
    target: The triggering enemy
    effects:
      - effect: This creature makes a free strike against the target.
~~~
