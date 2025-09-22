
~~~ds-statblock
name: Inquisitore Vex
level: 4
roles:
  - Horde Hexer
ancestry:
  - Undead
  - Wraith
ev: "22"
stamina: "120"
immunities:
  - Corruption 8
  - psychic 8
speed: 7
size: 1M
stability: 3
free_strike: 5
might: 2
agility: 4
reason: 3
intuition: 5
presence: 4
traits:
  - name: Incorporeal
    effects:
      - effect: This creature can move through other creatures and objects as if they were difficult terrain. It takes 5 force damage if it ends its turn inside an object.
abilities:
  - name: Draining Touch
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Melee
      - Strike
      - Necrotic
    type: Main action
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 3
        t1: 10 necrotic damage, and the target can't regain stamina until the end of its next turn.
        t2: 15 necrotic damage, and the target can't regain stamina until the end of its next turn.
        t3: 20 necrotic damage, and the target can't regain stamina until the end of its next turn.
~~~
