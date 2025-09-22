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
  - name: Morte Invisibile
    effects:
      - effect: Lo Soul-Sniper può tentare di Nascondersi come manovra anche se è solo leggermente oscurato da cenere o ombre.
abilities:
  - name: Dardo Trapassa-Anima
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
  - name: Tiro Immobilizzante
    icon: 🗡
    keywords:
      - Ranged
      - Strike
      - Weapon
      - Necromancy
    type: Main action
    distance: Ranged 12
    target: One creature
    effects:
      - roll: Power Roll + 2
        t1: 5 corruption damage.
        t2: 7 corruption damage; the target is slowed until the end of its next turn.
        t3: 9 corruption damage; the target is slowed (save ends).
  - name: Sguardo del Lich
    icon: 🌀
    keywords:
      - Psionic
    type: Maneuver
    distance: Self
    target: Self
    effects:
      - effect: Lo Soul-Sniper ottiene un edge sul suo prossimo tiro per colpire. Se non si muove prima di effettuare quel colpo, ottiene anche un bonus di +2 ai danni.
  - name: Tiro di Ritiro
    icon: ❗️
    keywords:
      - Ranged
      - Strike
    type: Triggered action
    trigger: An enemy willingly ends its move within 5 squares of the Soul Sniper.
    distance: Ranged 12
    target: The triggering enemy
    effects:
      - effect: Lo Soul-Sniper effettua un free strike a distanza contro il bersaglio che infligge metà del danno. Può quindi spostarsi (shift) fino a 2 quadretti.
~~~


