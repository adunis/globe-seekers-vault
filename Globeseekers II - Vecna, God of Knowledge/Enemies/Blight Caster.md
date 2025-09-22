name: Blight Caster
level: 1
roles:
  - Horde
  - Artillery
ancestry:
  - Undead
  - Humanoid
ev: "3"
stamina: "10"
immunities:
  - Poison 3
  - Corruption 3
weakness:
  - Holy 3
speed: 5
size: 1M
stability: 1
free_strike: 2
might: 0
agility: 1
reason: 2
intuition: 1
presence: 0
traits:
  - name: Lingering Miasma
    effects:
      - effect: When the Blight Caster is reduced to 0 Stamina, its space and each adjacent square become difficult terrain until the end of the next round. Any enemy who enters this area takes 2 poison damage.
abilities:
  - name: Blight Orb
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Area
      - Ranged
      - Necromancy
    type: Main action
    distance: 2 cube within 8
    target: Each enemy in the area
    effects:
      - roll: Power Roll + 2
        t1: 2 corruption damage.
        t2: 3 corruption damage; the area is difficult terrain until the end of the Blight Caster's next turn.
        t3: 4 corruption damage; p<1> slowed (save ends).