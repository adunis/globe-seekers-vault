
~~~ds-statblock
name: Gigante d'Ossa
level: 4
roles:
  - Elite Brute
ancestry:
  - Undead
  - Giant
  - Zombie
ev: "22"
stamina: "250"
immunities:
  - Corruption 6
speed: 6
size: 2M
stability: 4
free_strike: 5
might: 6
agility: 2
reason: 1
intuition: 2
presence: 2
traits:
  - name: Trample
    effects:
      - effect: This creature can move through spaces occupied by smaller creatures. Any creature whose space it moves through takes 5 damage.
abilities:
  - name: Grande Schianto
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Melee
      - Strike
      - Area
    type: Main action
    distance: 1 burst
    target: Each enemy in the area
    effects:
      - roll: Power Roll + 4
        t1: 10 damage
        t2: 15 damage; push 1
        t3: 20 damage; push 2
~~~
