
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
~~~
