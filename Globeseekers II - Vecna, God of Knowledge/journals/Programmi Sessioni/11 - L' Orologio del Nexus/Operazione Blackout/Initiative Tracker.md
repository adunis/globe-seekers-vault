
```ds-initiative
heroes:
  - name: Player 1
    max_stamina: 100
    image:
    conditions: []
    isHero: true
    has_taken_turn: false
    current_stamina: 100
    temp_stamina: 0
  - name: Player 2
    max_stamina: 100
    image:
    conditions: []
    isHero: true
    has_taken_turn: false
    current_stamina: 100
    temp_stamina: 0
enemy_groups:
  - name: Supervisore Cygnus
    creatures:
      - name: Supervisore Cygnus
        max_stamina: 150
        amount: 1
        image:
        isHero: false
        instances:
          - id: 1
            current_stamina: 150
            temp_stamina: 0
            conditions: []
    has_taken_turn: false
    is_squad: false
  - name: Guardiani d'Ossa d'Elite
    creatures:
      - name: Guardiano d'Ossa
        max_stamina: 60
        amount: 4
        image:
        isHero: false
        instances:
          - id: 1
            current_stamina: 60
            temp_stamina: 0
            conditions: []
          - id: 2
            current_stamina: 60
            temp_stamina: 0
            conditions: []
          - id: 3
            current_stamina: 60
            temp_stamina: 0
            conditions: []
          - id: 4
            current_stamina: 60
            temp_stamina: 0
            conditions: []
    has_taken_turn: false
    is_squad: false
  - name: Servitori Chirurgici
    creatures:
      - name: Servitore Chirurgico
        max_stamina: 40
        amount: 8
        image:
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
          - id: 5
            current_stamina: 40
            temp_stamina: 0
            conditions: []
          - id: 6
            current_stamina: 40
            temp_stamina: 0
            conditions: []
          - id: 7
            current_stamina: 40
            temp_stamina: 0
            conditions: []
          - id: 8
            current_stamina: 40
            temp_stamina: 0
            conditions: []
    has_taken_turn: false
    is_squad: false
    selectedInstanceKey: 0-8
  - name: Orror di Carne Ricucita
    creatures:
      - name: Orror di Carne Ricucita
        max_stamina: 200
        amount: 1
        image:
        isHero: false
        instances:
          - id: 1
            current_stamina: 200
            temp_stamina: 0
            conditions: []
    has_taken_turn: false
    is_squad: false
villain_power:
  value: 5
malice:
  value: 0
```


