

```ds-initiative
heroes:
  - name: Frodo Baggins
    max_stamina: 80
    image: images/frodo.png
    conditions: []
    isHero: true
    has_taken_turn: false
    current_stamina: 80
    temp_stamina: 0
  - name: Samwise Gamgee
    max_stamina: 90
    image: images/sam.png
    conditions: []
    isHero: true
    has_taken_turn: false
    current_stamina: 90
    temp_stamina: 0
enemy_groups:
  - name: Mordor Forces
    creatures:
      - name: Orc
        max_stamina: 40
        amount: 4
        image: images/orc.png
        isHero: false
        instances:
          - id: 1
            current_stamina: 40
            temp_stamina: 0
            conditions: []
          - id: 2
            current_stamina: 40
            temp_stamina: 0
            conditions: []
          - id: 3
            current_stamina: 40
            temp_stamina: 0
            conditions: []
          - id: 4
            current_stamina: 40
            temp_stamina: 0
            conditions: []
      - name: Troll
        max_stamina: 150
        amount: 1
        image: images/troll.png
        isHero: false
        instances:
          - id: 1
            current_stamina: 150
            temp_stamina: 0
            conditions: []
    has_taken_turn: false
    is_squad: false
    selectedInstanceKey: 0-2
villain_power:
  value: 5
malice:
  value: 0
```


