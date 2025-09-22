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
  - name: Mad Mags
    creatures:
      - name: Mad Mags
        max_stamina: 100
        amount: 1
        image: 
        isHero: false
    has_taken_turn: false
    is_squad: false
  - name: Guerrieri delle Dune
    creatures:
      - name: Guerriero delle Dune
        max_stamina: 30
        amount: 8
        image: 
        isHero: false
        squad_role: minion
    has_taken_turn: false
    is_squad: true
  - name: Cecchini delle Rocce
    creatures:
      - name: Cecchino delle Rocce
        max_stamina: 30
        amount: 4
        image: 
        isHero: false
        squad_role: minion
    has_taken_turn: false
    is_squad: true
  - name: Bruti Corazzati
    creatures:
      - name: Bruto Corazzato
        max_stamina: 80
        amount: 2
        image: 
        isHero: false
    has_taken_turn: false
    is_squad: false
villain_power:
  value: 5
malice:
  value: 0
```



