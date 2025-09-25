
![[d485f63b0f7dc3fcec402719b54a5eb8.jpg]]

~~~ds-statblock
name: Guerriero delle Dune
level: 1
roles:
  - Minion Harrier
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
intuition: 2
presence: 2
traits:
  - name: Skirmisher
    effects:
      - effect: This creature can shift 1 square as a free action after it makes a melee attack.
abilities:
  - name: Scimitarra
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
  - name: Tempesta di Sabbia
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
        t2: 6 damage; the target takes a bane on its next strike.
        t3: 8 damage; the target is blinded until the end of its next turn.
  - name: Passo Veloce
    icon: 🌀
    type: Maneuver
    keywords:
      - Move
    distance: Self
    target: Self
    effects:
      - effect: This creature shifts up to 3 squares. This movement does not provoke opportunity attacks.
  - name: Ritirata Coordinata
    icon: ❗️
    type: Triggered action
    trigger: An adjacent minion ally is targeted by a strike.
    distance: Self
    target: Self and the triggering ally
    effects:
      - effect: Both this creature and the triggering ally can immediately shift 1 square.
~~~







