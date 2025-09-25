~~~ds-statblock
name: Agente in Borghese
level: 1
roles:
  - Minion Ambusher
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
intuition: 3
presence: 2
traits:
  - name: Sneak Attack
    effects:
      - effect: If this creature hits a target that is surprised or flanked, it deals an extra 5 damage.
abilities:
  - name: Daga Nascosta
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
  - name: Colpo ai Reni
    icon: 🗡
    type: Main action
    keywords:
      - Melee
      - Strike
      - Weapon
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 4 damage
        t2: 6 damage; the target is weakened (save ends).
        t3: 8 damage; the target is weakened (save ends).
  - name: Sparire tra la Folla
    icon: 🌀
    type: Maneuver
    keywords:
      - Psionic
    distance: Self
    target: Self
    effects:
      - effect: This creature shifts up to 3 squares and can then attempt to Hide.
  - name: Sfruttare l'Apertura
    icon: ❗️
    type: Triggered action
    trigger: An ally hits an enemy adjacent to this creature.
    distance: Self
    target: Self
    effects:
      - effect: This creature can immediately shift 1 square.
~~~
