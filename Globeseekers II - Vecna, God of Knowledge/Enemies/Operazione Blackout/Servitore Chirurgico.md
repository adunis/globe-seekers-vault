~~~ds-statblock
name: Servitore Chirurgico
level: 1
roles:
  - Brute
  - Minion
ancestry:
  - Undead
  - Zombie
ev: "16"
stamina: "40"
immunities:
  - Corruption 2
speed: 4
size: 1M
stability: 1
free_strike: 3
might: 2
agility: 1
reason: 1
intuition: 1
presence: 1
traits:
  - name: Horde
    effects:
      - effect: While adjacent to two or more other Servitori Chirurgici, this creature gains +2 to its power rolls.
abilities:
  - name: Bisturi Arrugginito
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
      - roll: Power Roll + 1
        t1: 4 damage
        t2: 6 damage
        t3: 8 damage
  - name: Incisione Infetta
    icon: 🗡
    type: Main action
    keywords:
      - Melee
      - Strike
      - Weapon
    distance: Melee 1
    target: One enemy
    effects:
      - roll: Power Roll + 1
        t1: 3 damage.
        t2: 4 damage; the target is weakened until the end of its next turn.
        t3: 6 damage; the target is weakened (save ends).
  - name: Passo Inesorabile
    icon: 🌀
    type: Maneuver
    keywords:
      - Move
    distance: Self
    target: Self
    effects:
      - effect: This creature shifts up to 2 squares, ignoring difficult terrain during this movement.
  - name: Intralcio Cadaverico
    icon: ❗️
    type: Triggered action
    trigger: An adjacent minion ally is targeted by a melee strike.
    distance: Self
    target: Self
    effects:
      - effect: The triggering strike takes a bane. This creature then takes 2 damage that can't be reduced.
~~~


