
~~~ds-statblock
name: Supervisore Cygnus
level: 4
roles:
  - Leader
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
      - Weapon
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
~~~
