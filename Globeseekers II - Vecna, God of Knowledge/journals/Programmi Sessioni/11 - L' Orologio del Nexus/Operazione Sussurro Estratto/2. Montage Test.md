
~~~ds-ab
name: 'Montage: Fuga da Protonecropoli'
type: Extended Action
flavor: "Con Echo al seguito, ogni ombra è una minaccia e ogni suono un allarme. La libertà è vicina, ma le mura di Protonecropoli hanno un ultimo, mortale prezzo da pagare."
effects:
  - name: Goal & Parameters
    effect: |
      **Goal:** Fuggire da Protonecropoli con Echo.
      Questo è un montaggio **Moderato**, che richiede **6 Successi** prima di accumulare **3 Fallimenti**. Il montaggio dura **3 round**.

  - name: Potential Challenges
    effect: |
      Nel proprio turno, un personaggio può tentare una delle seguenti sfide.
      - **Saltare tra i tetti:** Eseguire un balzo pericoloso tra due edifici. (Agility + Athletics)
      - **Scivolare lungo un tetto spiovente:** Scendere rapidamente da una posizione elevata. (Agility + Acrobatics)
      - **Mimetizzarsi tra la folla:** Sfruttare un gruppo di passanti per nascondersi. (Intuition + Stealth)
      - **Creare un diversivo:** Attirare l'attenzione delle guardie in un'altra direzione. (Reason + Subterfuge)
      - **Navigare nelle fogne:** Trovare un percorso sicuro attraverso i tunnel sotterranei. (Intuition + Survival)

  - name: Player Turn Actions
    effect: |
      Nel proprio turno, un personaggio può **Eseguire un'Azione** contro una sfida dall'elenco precedente o **Assistere** un alleato.
      - **Azione**: Eseguire un test di abilità come descritto nella sfida.
      - **Assist**: Eseguire un tiro con un'abilità diversa ma pertinente; ogni bonus si applica al personaggio che assistono.
    roll: Power Roll + una caratteristica appropriata
    '11 or lower': 'Si segna un **Fallimento**. Il GM introduce una complicazione (es. "Una pattuglia torna indietro", "Echo inciampa, facendo un forte rumore", "Una porta chiusa blocca il percorso").'
    '12-16': 'Si segna un **Successo**'
    '17+': Si segnano due **Successi**.
    crit: '(Nat 19-20): Si segnano due **Successi** e si crea un vantaggio per il turno del personaggio successivo.'

  - name: Total Success
    effect: Il gruppo ed Echo fuggono dalla città senza incidenti, scomparendo nella notte.

  - name: Partial Success
    effect: |
      Il limite di tempo (3 round) viene raggiunto con almeno due successi in più rispetto ai fallimenti. 
      Il gruppo fugge, ma con complicazioni (es. viene dato l'allarme, inizia un inseguimento, Echo è ferito).

  - name: Total Failure
    effect: |
      Si raggiunge il limite di fallimenti, o il tempo scade senza abbastanza successi.
      Il gruppo viene scoperto, portando a uno scontro diretto o alla cattura.
~~~

```ds-counter
max_value: 6
current_value: 0
min_value: 0
name: Successes
value_height: 3
name_height: 1
```

```ds-counter
max_value: 3
current_value: 0
min_value: 0
name: Failures
value_height: 3
name_height: 1
```

```ds-counter
max_value: 3
current_value: 0
min_value: 0
name: Round
value_height: 3
name_height: 1
```
