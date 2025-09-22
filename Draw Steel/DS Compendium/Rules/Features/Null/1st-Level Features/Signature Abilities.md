---
action_type: feature
class: 'null'
feature_type: trait
file_basename: Signature Abilities
file_dpath: Null/1st-Level Features
item_id: signature-abilities
item_index: '04'
item_name: Signature Abilities
level: 1
scc:
- mcdm.heroes.v1:feature.trait.null.1st-level-feature:signature-abilities
scdc:
- 1.1.1:11.1.6.1:04
source: mcdm.heroes.v1
type: feature/trait/null/1st-level-feature
---

```ds-feature
type: feature
feature_type: trait
name: Signature Abilities
metadata:
  action_type: feature
  class: "null"
  feature_type: trait
  file_basename: Signature Abilities
  file_dpath: Null/1st-Level Features
  item_id: signature-abilities
  item_index: "04"
  item_name: Signature Abilities
  level: 1
  scc:
    - mcdm.heroes.v1:feature.trait.null.1st-level-feature:signature-abilities
  scdc:
    - 1.1.1:11.1.6.1:04
  source: mcdm.heroes.v1
  type: feature/trait/null/1st-level-feature
effects:
  - effect: Choose two signature abilities from the following options. Signature
      abilities can be used at will. (*Quick Build:* Faster Than the Eye,
      Inertial Step.)
    features:
      - type: feature
        feature_type: ability
        name: Dance of Blows
        flavor: You strike everywhere at once, tricking an enemy into moving out of
          position.
        keywords:
          - Area
          - Psionic
          - Weapon
        usage: Main action
        distance: 1 burst
        target: Each enemy in the area
        effects:
          - roll: Power Roll + Agility
            tier1: 3 damage
            tier2: 4 damage
            tier3: 5 damage
          - name: Effect
            effect: >-
              You can slide one adjacent enemy up to a number of squares equal
              to your Intuition score.

              ###### Faster Than the Eye

              *You strike so quickly that your hands become a blur.*

              | **Melee, Psionic, Strike, Weapon** |                 **Main
              action** |

              | ---------------------------------- |
              ------------------------------: |

              | **📏 Melee 1**                     | **🎯 Two creatures or
              objects** |
          - roll: Power Roll + Agility
            tier1: 4 damage
            tier2: 5 damage
            tier3: 7 damage
          - name: Effect
            effect: >-
              You can deal damage equal to your Agility score to one creature or
              object adjacent to you.

              ###### Inertial Step

              *You flit about the battlefield and take an opportunistic strike.*

              | **Melee, Psionic, Strike, Weapon** |               **Main
              action** |

              | ---------------------------------- |
              ----------------------------: |

              | **📏 Melee 1**                     | **🎯 One creature or
              object** |
          - roll: Power Roll + Agility
            tier1: 5 + A damage
            tier2: 7 + A damage
            tier3: 10 + A damage
          - name: Effect
            effect: >-
              You can shift up to half your speed before or after you make this
              strike.

              ###### Joint Lock

              *You contort your enemy's body into a stance they struggle to
              escape from.*

              | **Melee, Psionic, Strike, Weapon** |               **Main
              action** |

              | ---------------------------------- |
              ----------------------------: |

              | **📏 Melee 1**                     | **🎯 One creature or
              object** |
          - effect: >-
              ###### Kinetic Strike


              *Your opponent staggers. They cannot ignore you.*

              | **Melee, Psionic, Strike, Weapon** |               **Main
              action** |

              | ---------------------------------- |
              ----------------------------: |

              | **📏 Melee 1**                     | **🎯 One creature or
              object** |
            roll: Power Roll + Agility
            tier1: 4 + A damage; A < WEAK, grabbed
            tier2: 7 + A damage; A < AVERAGE, grabbed
            tier3: 9 + A damage; A < STRONG, grabbed
          - effect: >-
              ###### Magnetic Strike


              *The force of your blow extends past the limits of your body,
              pulling your enemy closer.*

              | **Melee, Psionic, Strike, Weapon** |     **Main action** |

              | ---------------------------------- | ------------------: |

              | **📏 Melee 2**                     | **🎯 One creature** |
            roll: Power Roll + Agility
            tier1: 4 + A damage; taunted (EoT)
            tier2: 5 + A damage; taunted (EoT), slide 1
            tier3: 6 + A damage; taunted (EoT), slide 2
          - effect: >-
              ###### Phase Inversion Strike


              *You step momentarily out of phase as you pull an enemy through
              you.*

              | **Melee, Psionic, Strike, Weapon** |               **Main
              action** |

              | ---------------------------------- |
              ----------------------------: |

              | **📏 Melee 1**                     | **🎯 One creature or
              object** |
            roll: Power Roll + Agility
            tier1: 5 + A psychic damage; vertical pull 1
            tier2: 8 + A psychic damage; vertical pull 2
            tier3: 11 + A psychic damage; vertical pull 3
          - roll: Power Roll + Agility
            tier1: 4 + A damage; push 2
            tier2: 6 + A damage; push 4
            tier3: 8 + A damage; push 6
          - name: Effect
            effect: >-
              Before the push is resolved, you teleport the target to a square
              adjacent to you and opposite the one they started in. If the
              target can't be teleported this way, you can't push them.

              ###### Pressure Points

              *You strike at key nerve clusters to leave your foe staggered.*

              | **Melee, Psionic, Strike, Weapon** |               **Main
              action** |

              | ---------------------------------- |
              ----------------------------: |

              | **📏 Melee 1**                     | **🎯 One creature or
              object** |
          - roll: Power Roll + Agility
            tier1: 4 + A damage; A < WEAK, weakened (save ends)
            tier2: 7 + A damage; A < AVERAGE, weakened (save ends)
            tier3: 9 + A damage; A < STRONG, weakened (save ends)
```