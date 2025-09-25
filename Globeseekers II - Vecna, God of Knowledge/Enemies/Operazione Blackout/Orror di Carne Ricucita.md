![[Orror di Carne Ricucita.png]]


~~~ds-statblock
name: Orror di Carne Ricucita
level: 4
roles:
  - Horde Defender
ancestry:
  - Undead
  - Flesh Golem
ev: "22"
stamina: "200"
immunities:
  - Corruption 6
  - psychic 4
speed: 5
size: 2M
stability: 4
free_strike: 5
might: 5
agility: 2
reason: 1
intuition: 2
presence: 1
traits:
  - name: Undulating Mass
    effects:
      - effect: This creature can move through spaces occupied by other creatures.
abilities:
  - name: Schianto di Carne
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Melee
      - Strike
    type: Main action
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 4
        t1: 10 damage
        t2: 15 damage; push 1
        t3: 20 damage; push 2
  - name: Inglobare
    icon: 🗡
    type: Main action
    keywords:
      - Melee
      - Strike
    distance: Melee 1
    target: One enemy of size 1M or smaller
    effects:
      - roll: Power Roll + 4
        t1: 8 damage
        t2: 10 damage; the target is grabbed.
        t3: 12 damage; the target is pulled into this creature's space and grabbed. While grabbed, the target is weakened and takes 5 corruption damage at the start of its turn.
  - name: Massa Deforme
    icon: 🌀
    type: Maneuver
    keywords:
      - Move
    distance: Self
    target: Self
    effects:
      - effect: The creature shifts up to 2 squares. The squares it leaves become difficult terrain until the end of its next turn.
  - name: Intercettare
    icon: ❗️
    type: Triggered action
    trigger: An enemy willingly moves into a square adjacent to an ally of this creature within 3 squares.
    distance: Self
    target: The triggering enemy
    effects:
      - effect: This creature can immediately shift up to 2 squares. If it ends this movement adjacent to the triggering enemy, the enemy is slowed until the end of its next turn.
~~~

