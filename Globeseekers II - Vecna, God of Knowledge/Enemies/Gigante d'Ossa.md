~~~ds-statblock
name: Gigante d'Ossa
level: 4
roles:
  - Elite Brute
  - Boss
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
  - name: Lancio di Ossa
    icon: 🗡
    type: Main action
    keywords:
      - Ranged
      - Strike
    distance: Ranged 8
    target: One enemy
    effects:
      - roll: Power Roll + 4
        t1: 12 damage
        t2: 18 damage
        t3: 25 damage; the target is restrained by bone shards (save ends).
  - name: Spazzata Terrificante
    icon: 🌀
    type: Maneuver
    keywords:
      - Melee
      - Area
    distance: 2-line burst
    target: Each enemy in the area
    effects:
      - roll: Power Roll + 4
        t1: Push 1.
        t2: Push 2.
        t3: Push 3; each target is frightened 1 (save ends).
  - name: Caduta d'Ossa
    icon: ❗️
    type: Triggered action
    trigger: This creature takes damage from an enemy.
    distance: 1 burst
    target: Each enemy in the area
    effects:
      - effect: Each target takes 5 damage.
  - name: Richiamo dei Caduti
    icon: ☠️
    cost: Villain Action 1
    keywords:
      - Summoning
    type: "-"
    distance: Ranged 10
    target: Up to four unoccupied squares
    effects:
      - effect: A Legionario Scheletrico rises from the ground in each target square.
  - name: Scossa Sismica
    icon: ☠️
    cost: Villain Action 2
    keywords:
      - Area
      - Zone
    type: "-"
    distance: 3 burst
    target: Each enemy in the area
    effects:
      - effect: Each target must make a hard agility test or be knocked prone. The area becomes difficult terrain until the end of the encounter.
  - name: Ruggito della Tomba
    icon: ☠️
    cost: Villain Action 3
    keywords:
      - Area
      - Aura
    type: "-"
    distance: 5 burst
    target: Each enemy in the area
    effects:
      - effect: Each target is frightened 2 (save ends). Until the end of the encounter, while in the aura, enemies are weakened.
~~~

