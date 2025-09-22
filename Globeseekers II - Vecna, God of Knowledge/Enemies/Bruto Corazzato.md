
~~~ds-statblock
name: Bruto Corazzato
level: 2
roles:
  - Elite Brute
ancestry:
  - Human
  - Humanoid
ev: "19"
stamina: "80"
immunities:
  - psychic 2
speed: 5
size: 2M
stability: 3
free_strike: 4
might: 5
agility: 2
reason: 1
intuition: 2
presence: 2
traits:
  - name: Armatura Improvvisata
    effects:
      - effect: This creature has damage immunity 2.
abilities:
  - name: Grande Mazza
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
      - roll: Power Roll + 3
        t1: 8 damage
        t2: 12 damage
        t3: 15 damage
~~~
