![[bonelord__the_elder_scrolls__by_romandubina_dakzrby-375w-2x.jpg]]


~~~ds-statblock
name: Barone delle Ossa
level: 1
roles:
  - Leader
ancestry:
  - Undead
ev: "17"
stamina: "50"
immunities:
  - Corruption 4
speed: 5
size: 1M
stability: 2
free_strike: 4
might: 3
agility: 2
reason: 2
intuition: 2
presence: 3
traits:
  - name: Aura di Disperazione
    effects:
      - effect: I nemici entro 3 caselle da questo personaggio subiscono -1 a tutti i tiri.
abilities:
  - name: Spada Lunga Spettrale
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Melee
      - Strike
      - Weapon
      - Necrotic
    type: Main action
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 6 necrotic damage
        t2: 10 necrotic damage
        t3: 12 necrotic damage
  - name: Comando Spettrale
    icon: 🗡
    type: Main action
    keywords:
      - Ranged
    distance: Ranged 10
    target: One undead ally
    effects:
      - effect: The target can immediately shift up to its speed and then make a free strike.
  - name: Tocco Gelido
    icon: 🌀
    type: Maneuver
    keywords:
      - Melee
      - Necrotic
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: The target is slowed (save ends).
        t2: The target is slowed and weakened (save ends).
        t3: The target is restrained (save ends).
  - name: Guardia del Barone
    icon: ❗️
    type: Triggered action
    trigger: An enemy damages an adjacent undead ally with a melee strike.
    distance: Melee 1
    target: The triggering enemy
    effects:
      - effect: The Bone Baron makes a free strike against the target.
  - name: Rinforzi Scheletrici
    icon: ☠️
    cost: Villain Action 1
    type: "-"
    keywords:
      - Area
    distance: 5 burst
    target: Two unoccupied squares in the area
    effects:
      - effect: Two Skeleton minions rise from the ground in the target squares.
  - name: Volontà Infrangibile
    icon: ☠️
    cost: Villain Action 2
    type: "-"
    keywords:
      - Area
    distance: 5 burst
    target: Each undead ally in the area
    effects:
      - effect: Each target gains 10 temporary stamina.
  - name: Miasma della Tomba
    icon: ☠️
    cost: Villain Action 3
    type: "-"
    keywords:
      - Area
      - Zone
    distance: 2 burst within 10
    target: Each enemy in the area
    effects:
      - effect: The area becomes difficult terrain until the end of the encounter. Any enemy that starts its turn in the area takes 3 necrotic damage and is weakened until the start of its next turn.
~~~


