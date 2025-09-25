![[desert_ogre__by_viktory15_dgx6fez-pre.jpg]]


~~~ds-statblock
name: Bruto Corazzato
level: 2
roles:
  - Elite Brute
ancestry:
  - Human
  - Humanoid
ev: "19"
stamina: "80"
immunities:
  - psychic 2
speed: 5
size: 2M
stability: 3
free_strike: 4
might: 5
agility: 2
reason: 1
intuition: 2
presence: 2
traits:
  - name: Armatura Improvvisata
    effects:
      - effect: This creature has damage immunity 2.
abilities:
  - name: Grande Mazza
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
      - roll: Power Roll + 3
        t1: 8 damage
        t2: 12 damage
        t3: 15 damage
  - name: Schianto Travolgente
    icon: 🗡
    type: Main action
    keywords:
      - Melee
      - Area
      - Strike
    distance: 2-line burst
    target: Each enemy in the area
    effects:
      - roll: Power Roll + 3
        t1: 6 damage; push 1.
        t2: 8 damage; push 2.
        t3: 10 damage; push 2 and each target is prone.
  - name: Spallata
    icon: 🌀
    type: Maneuver
    keywords:
      - Melee
    distance: Self
    target: Self
    effects:
      - effect: The brute shifts up to 2 squares. If it ends this movement adjacent to an enemy, it can push that enemy 1 square.
  - name: Ritorsione Pesante
    icon: ❗️
    type: Triggered action
    trigger: An adjacent enemy hits this creature with a melee strike.
    distance: Melee 1
    target: The triggering enemy
    effects:
      - roll: Power Roll + 3
        t1: Push 1.
        t2: Push 1.
        t3: Push 2.
~~~


