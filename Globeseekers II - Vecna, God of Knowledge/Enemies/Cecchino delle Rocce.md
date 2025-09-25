
![[l1kh0zjgosh31.jpg]]


![[1000_F_439895892_xmo5FyhT01YmdQPqnnominjcUoeufuxT.jpg]]


~~~ds-statblock
name: Cecchino delle Rocce
level: 1
roles:
  - Minion Artillery
ancestry:
  - Goblin
  - Humanoid
ev: "17"
stamina: "30"
immunities:
  - psychic 2
speed: 5
size: 1S
stability: 1
free_strike: 3
might: 1
agility: 4
reason: 2
intuition: 3
presence: 1
traits:
  - name: Sniper's Perch
    effects:
      - effect: If this creature is in a high position, it gains +2 to its power rolls.
abilities:
  - name: Arco Corto
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Ranged
      - Strike
      - Weapon
    type: Main action
    distance: Ranged 15
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 5 damage
        t2: 8 damage
        t3: 10 damage
  - name: Tiro Immobilizzante
    icon: 🗡
    type: Main action
    keywords:
      - Ranged
      - Strike
      - Weapon
    distance: Ranged 15
    target: One enemy
    effects:
      - roll: Power Roll + 2
        t1: 4 damage
        t2: 6 damage; the target is slowed until the end of its next turn.
        t3: 8 damage; the target is slowed (save ends).
  - name: Prendere la Mira
    icon: 🌀
    type: Maneuver
    distance: Self
    target: Self
    effects:
      - effect: This creature gains an edge on its next ranged strike this turn.
  - name: Tuffo al Riparo
    icon: ❗️
    type: Triggered action
    trigger: This creature is targeted by a ranged strike.
    distance: Self
    target: Self
    effects:
      - effect: This creature can immediately shift 1 square. It gains cover against the triggering strike.
~~~


