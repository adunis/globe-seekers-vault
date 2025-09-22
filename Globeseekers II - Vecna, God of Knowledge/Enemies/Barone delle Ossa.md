
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
~~~
