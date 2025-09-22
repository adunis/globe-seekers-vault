~~~ds-statblock
name: Soul-Sniper
level: 1
roles:
  - Platoon
  - Artillery
ancestry:
  - Undead
  - Humanoid
ev: "6"
stamina: "25"
weakness:
  - Holy 3
speed: 5
size: 1M
stability: 1
free_strike: 3
might: 0
agility: 2
reason: 1
intuition: 1
presence: 0
traits:
  - name: Unseen Death
    effects:
      - effect: The Soul-Sniper can attempt to Hide as a maneuver even if they are only lightly obscured by ashfall or shadows.
abilities:
  - name: Soul-Piercing Bolt
    icon: 🗡
    cost: Signature Ability
    keywords:
      - Ranged
      - Strike
      - Weapon
      - Necromancy
    type: Main action
    distance: Ranged 12
    target: One creature or object
    effects:
      - roll: Power Roll + 2
        t1: 7 corruption damage.
        t2: 10 corruption damage.
        t3: 11 corruption damage; the target cannot regain Stamina until the end of its next turn.
      - effect: This ability ignores cover.
  - name: Gaze of the Lich
    icon: 🌀
    keywords:
      - Psionic
    type: Maneuver
    distance: Self
    target: Self
    effects:
      - effect: The Soul-Sniper gains an edge on their next strike. If they do not move before making that strike, they also gain a +2 damage bonus.
~~~

