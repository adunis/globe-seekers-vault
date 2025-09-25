~~~ds-statblock
name: Mad Mags
level: 3
roles:
  - Leader
  - Boss
ancestry:
  - Human
  - Humanoid
ev: "20"
stamina: "100"
immunities:
  - psychic 4
speed: 6
size: 1M
stability: 3
free_strike: 5
might: 4
agility: 3
reason: 2
intuition: 3
presence: 4
traits:
  - name: Inspiring Presence
    effects:
      - effect: Allies within 5 squares of this creature gain +1 to their power rolls.
abilities:
  - name: Ascia da Guerra
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
  - name: Furia Incitata
    icon: 🗡
    type: Main action
    keywords:
      - Ranged
      - Psionic
    distance: Ranged 10
    target: Up to two allies
    effects:
      - effect: The targets gain an edge and +3 damage on their next melee strike before the start of Mad Mags' next turn.
  - name: Urlo di Adunata
    icon: 🌀
    type: Maneuver
    keywords:
      - Area
      - Psionic
    distance: 5 burst
    target: Each ally in the area
    effects:
      - effect: Each target can end one frightened condition on itself or gain 5 temporary stamina.
  - name: Vendetta per i Caduti!
    icon: ❗️
    type: Triggered action
    trigger: An ally within 5 squares is reduced to 0 stamina.
    distance: Self
    target: Self
    effects:
      - effect: Mad Mags gains an edge on all her strikes until the end of her next turn.
  - name: Accerchiateli!
    icon: ☠️
    cost: Villain Action 1
    keywords:
      - Area
    type: "-"
    distance: 10 burst
    target: Each ally in the area
    effects:
      - effect: Each target can immediately shift up to their speed. After this movement, if a target is adjacent to an enemy, they can make a free strike against that enemy.
  - name: Spezzate il Loro Spirito!
    icon: ☠️
    cost: Villain Action 2
    keywords:
      - Area
      - Psionic
    type: "-"
    distance: 10 burst
    target: Each enemy in the area
    effects:
      - effect: Each target must make a hard intuition test. On a failure, they are dazed (save ends). On a success, they are weakened until the end of their next turn.
  - name: Ammucchiata!
    icon: ☠️
    cost: Villain Action 3
    keywords:
      - Ranged
      - Strike
    type: "-"
    distance: Ranged 10
    target: One enemy
    effects:
      - effect: Mad Mags chooses a target. Up to four allies within range of the target can immediately move up to their speed towards the target. After this movement, each of those allies adjacent to the target makes a free strike against it.
~~~


