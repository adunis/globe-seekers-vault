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
    has_taken_turn: false
    is_squad: false
  - name: Guarnigione
    creatures:
      - name: Guardiano d'Ossa d'Elite
        max_stamina: 60
        amount: 4
        image: 
        isHero: false
      - name: Servitore Chirurgico
        max_stamina: 40
        amount: 8
        image: 
        isHero: false
    has_taken_turn: false
    is_squad: true
  - name: Orror di Carne Ricucita
    creatures:
      - name: Orror di Carne Ricucita
        max_stamina: 200
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


