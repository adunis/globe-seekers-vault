~~~ds-statblock
name: Supervisore Cygnus
level: 4
roles:
  - Leader
  - Boss
ancestry:
  - Undead
  - Tecno-Lich
ev: "22"
stamina: "150"
immunities:
  - Corruption 8
  - psychic 8
speed: 6
size: 1M
stability: 3
free_strike: 6
might: 3
agility: 4
reason: 5
intuition: 4
presence: 3
traits:
  - name: End Effect
    effects:
      - effect: At the end of each of their turns, Cygnus can take 8 damage to
          end one effect on them that can be ended by a saving throw. This
          damage can't be reduced in any way.
  - name: Supernatural Insight
    effects:
      - effect: Cygnus ignores concealment if it's granted by a supernatural
          effect
abilities:
  - name: Fulmine Psichico
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Magic
      - Melee
      - Strike
      - Lightning
      - Psionic
    type: Main action
    distance: Melee 2
    target: Two enemies or objects
    effects:
      - roll: Power Roll + 3
        t1: 10 lightning/psychic damage; pull 1
        t2: 15 lightning/psychic damage; pull 2
        t3: 20 lightning/psychic damage; pull 3
      - effect: Any target who is adjacent to Cygnus after the power roll is
          resolved takes 5 corruption damage.
        name: Effect
      - effect: This ability targets one additional target.
        cost: 2 Malice
  - name: Shock di Sistema
    icon: 🗡
    type: Main action
    keywords:
      - Area
      - Ranged
      - Psionic
      - Lightning
    distance: 5 burst within 10
    target: Each enemy in the area
    effects:
      - roll: Power Roll + 3
        t1: 5 psychic/lightning damage.
        t2: 8 damage, and each target is dazed until the end of its next turn.
        t3: 10 damage, and each target is dazed (save ends).
  - name: Salto Statico
    icon: 🌀
    type: Maneuver
    keywords:
      - Move
      - Teleport
      - Lightning
    distance: Self
    target: Self
    effects:
      - effect: Cygnus teleports up to 5 squares. Each enemy adjacent to the starting or ending square takes 3 lightning damage.
  - name: Ritorsione Ad Arco
    icon: ❗️
    type: Triggered action
    trigger: An ally within 10 squares is damaged by an enemy.
    distance: Ranged 10
    target: The triggering enemy
    effects:
      - effect: The target takes 5 lightning damage and is weakened until the end of its next turn.
  - name: Sovraccaricare i Servitori
    icon: ☠️
    cost: Villain Action 1
    keywords:
      - Area
    type: "-"
    distance: 10 burst
    target: Up to three construct or undead allies in the area
    effects:
      - effect: Each target can immediately shift up to its speed and gains an edge on its next strike this round.
  - name: Sovraccarico Psichico
    icon: ☠️
    cost: Villain Action 2
    keywords:
      - Area
      - Psionic
    type: "-"
    distance: 5 burst
    target: Each enemy in the area
    effects:
      - effect: Each target takes 10 psychic damage and is stunned until the end of its next turn.
  - name: Assalto a Sfasamento
    icon: ☠️
    cost: Villain Action 3
    keywords:
      - Teleport
      - Strike
    type: "-"
    distance: Self
    target: Self
    effects:
      - effect: Cygnus teleports up to 10 squares. During this teleport, he can make up to three Fulmine Psichico strikes against different targets. These strikes do not pull the targets.
~~~


