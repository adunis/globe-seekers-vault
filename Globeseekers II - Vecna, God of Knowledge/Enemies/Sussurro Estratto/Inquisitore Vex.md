
![[puyffgo1p3oe1.jpeg]]

~~~ds-statblock
name: Inquisitore Vex
level: 4
roles:
  - Horde Hexer
  - Boss
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
  - name: Inquisizione Mentale
    icon: 🗡
    type: Main action
    keywords:
      - Ranged
      - Strike
      - Psionic
    distance: Ranged 10
    target: One enemy
    effects:
      - roll: Power Roll + 3
        t1: 8 psychic damage.
        t2: 12 psychic damage; the target is frightened 1 (save ends).
        t3: 15 psychic damage; the target is frightened 2 (save ends).
  - name: Fluttuare tra i Muri
    icon: 🌀
    type: Maneuver
    keywords:
      - Move
    distance: Self
    target: Self
    effects:
      - effect: The Inquisitor shifts up to its speed. It can move through walls and other solid objects during this movement. It must end its move in an unoccupied space it could normally occupy.
  - name: Tocco Gelido della Paura
    icon: ❗️
    type: Triggered action
    trigger: An enemy willingly moves into a square adjacent to the Inquisitor.
    distance: Melee 1
    target: The triggering enemy
    effects:
      - effect: The target takes 5 psychic damage and is weakened until the end of its next turn.
  - name: Evocare Echi Tormentati
    icon: ☠️
    cost: Villain Action 1
    keywords:
      - Summoning
      - Area
    type: "-"
    distance: 10 burst
    target: Up to three unoccupied squares in the area
    effects:
      - effect: An incorporeal spectral minion (Horde Brute, Level 2) appears in each target square.
  - name: Raccolto di Segreti
    icon: ☠️
    cost: Villain Action 2
    keywords:
      - Area
      - Psionic
    type: "-"
    distance: 10 burst
    target: Each enemy in the area
    effects:
      - effect: Each target must make a hard intuition test. On a failure, they are stunned until the end of their next turn as Vex learns one of their tactical weaknesses. On a success, they take 8 psychic damage.
  - name: Giudizio del Wraith
    icon: ☠️
    cost: Villain Action 3
    keywords:
      - Melee
      - Strike
      - Psionic
      - Necrotic
    type: "-"
    distance: Melee 1
    target: One enemy
    effects:
      - effect: Vex phases into the target's body. The target is restrained and takes 15 necrotic damage. At the start of the target's next turn, they take an additional 15 psychic damage and Vex reappears in an adjacent unoccupied square.
~~~

