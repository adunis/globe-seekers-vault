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
  - name: Barone delle Ossa
    creatures:
      - name: Barone delle Ossa
        max_stamina: 50
        amount: 1
        image: 
        isHero: false
    has_taken_turn: false
    is_squad: false
  - name: Legionari Scheletrici
    creatures:
      - name: Legionario Scheletrico
        max_stamina: 30
        amount: 12
        image: 
        isHero: false
        squad_role: minion
    has_taken_turn: false
    is_squad: true
  - name: Abomini di Carne
    creatures:
      - name: Abominio di Carne
        max_stamina: 40
        amount: 8
        image: 
        isHero: false
        squad_role: minion
    has_taken_turn: false
    is_squad: true
  - name: Gigante d'Ossa
    creatures:
      - name: Gigante d'Ossa
        max_stamina: 250
        amount: 1
        image: 
        isHero: false
    has_taken_turn: false
    is_squad: false
villain_power:
  value: 5
malice:
  value: 0
```