~~~ds-statblock
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
  - name: Corrupting Ray
    icon: 🗡
    type: Main action
    keywords:
      - Ranged
      - Strike
      - Necromancy
    distance: Ranged 8
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 4 corruption damage.
        t2: 6 corruption damage; the target has corruption weakness 2 until the end of its next turn.
        t3: 8 corruption damage; the target has corruption weakness 2 (save ends).
  - name: Miasma Cloud
    icon: 🌀
    type: Maneuver
    keywords:
      - Magic
      - Zone
    distance: Self
    target: Self
    effects:
      - effect: The Blight Caster creates a 1-burst cloud of noxious gas centered on itself. The cloud lasts until the start of its next turn. The area within the cloud is lightly obscured.
  - name: Spore Puff
    icon: ❗️
    type: Triggered action
    trigger: The Blight Caster is targeted by a ranged strike.
    distance: Self
    target: Self
    effects:
      - effect: The triggering strike takes a bane.
~~~

