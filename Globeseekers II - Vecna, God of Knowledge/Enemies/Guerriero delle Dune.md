
~~~ds-statblock
name: Guerriero delle Dune
level: 1
roles:
  - Minion Harrier
ancestry:
  - Human
  - Humanoid
ev: "17"
stamina: "30"
immunities:
  - psychic 2
speed: 6
size: 1M
stability: 1
free_strike: 3
might: 2
agility: 3
reason: 2
intuition: 2
presence: 2
traits:
  - name: Skirmisher
    effects:
      - effect: This creature can shift 1 square as a free action after it makes a melee attack.
abilities:
  - name: Scimitarra
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
        t1: 5 damage
        t2: 8 damage
        t3: 10 damage
~~~
