### **Loot Post-Combattimento: Resti dei Caroniti**

Dopo che il silenzio è calato nella Cripta-Sussurrante e i resti dei Caroniti e del loro leader Vryss giacciono inerti, vi prendete un momento per esaminare ciò che hanno lasciato. L'equipaggiamento di questi soldati d'élite di Vecna è funzionale, sinistro e chiaramente progettato per il controllo e l'interrogatorio.

#### **Dalle Guardie Caronite (2-3 soldati)**

Oltre alle loro armature e armi standard (spade lunghe, balestre leggere), trovate:

- **1d4 Fiale di "Essenza del Terrore" (Olio Alchemico - Livello 3, Non Comune)**
    
    - **Descrizione:** Un olio nero e denso contenuto in una fiala di vetro scuro. Se applicato a un'arma tagliente o perforante (un'azione di Interagire), l'arma infligge 1d4 danni mentali aggiuntivi al prossimo colpo andato a segno. La vittima deve superare un **TS su Volontà CD 17** o diventare **Spaventata 1**.
        
    - **JSON:**
        
        Generated json
        
              `[   {     "name": "Essenza del Terrore",     "type": "consumable",     "img": "icons/consumables/potions/potion-bottle-corked-black.webp",     "system": {       "description": { "value": "<p>Questo olio nero e denso, se applicato a un'arma (1 Azione), infligge <strong>1d4 danni mentali</strong> aggiuntivi al prossimo colpo. La vittima deve superare un <strong>TS su Volontà CD 17</strong> o diventare <strong>Spaventata 1</strong>.</p>" },       "level": { "value": 3 },       "price": { "value": { "gp": 12 } },       "rarity": "uncommon",       "traits": { "value": ["alchemical", "consumable", "poison", "injury", "mental", "fear"], "rarity": "uncommon" },       "usage": { "value": "held-in-one-hand" },       "stackGroup": "essence-of-terror"     }   } ]`
            
        
        IGNORE_WHEN_COPYING_START
        

- - Use code [with caution](https://support.google.com/legal/answer/13505487). Json
        
        IGNORE_WHEN_COPYING_END
        
- **Manette da Inquisitore (Oggetto Comune - Livello 1)**
    
    - **Descrizione:** Un set di manette di ferro freddo, incise con piccoli e inquietanti simboli a forma di occhio. Sono di fattura eccezionale e difficili da scassinare.
        
    - **Meccaniche:** Aumentano la **CD per Scappare o Scassinare di +2** (portando la CD totale a 19 per Scappare e 19 per Thievery).
        
- **Razioni Caronite (Oggetto Comune)**
    
    - **Descrizione:** Un blocco di cibo secco, grigio e insapore, pressato in una forma compatta. Nutriente, ma incredibilmente deprimente da mangiare. Non ci sono informazioni sugli ingredienti. Forse è meglio così. (Fornisce nutrimento per un giorno, come le razioni standard).
        
- **Monete:** Un totale di **8 monete d'oro e 15 monete d'argento**, coniate con il simbolo di un teschio con una mano ossuta sulla bocca.
    

#### **Dal Custode Psionico Vryss (Loot del Boss)**

Oltre alla sua spada da duello e all'armatura, Vryss possedeva oggetti unici, legati al suo ruolo.

- **Lama Psionica del Silenzio (Runa d'Arma Potenziante - Striking, Minore - Livello 4)**
    
    - **Descrizione:** Questa runa, quando incisa su un'arma, fa sì che la lama emetta un ronzio subsonico quasi impercettibile. L'arma sembra tagliare l'aria senza produrre quasi alcun suono.
        
    - **Meccaniche:** È una Runa Striking standard, ma con un effetto aggiuntivo. Quando colpisci una creatura in grado di lanciare incantesimi con componente verbale, essa deve superare un **TS su Volontà CD 18** o avere difficoltà a formulare le parole. La sua prossima azione che richiede un incantesimo con componente verbale ha il 20% di probabilità di fallire, sprecando l'azione. L'effetto dura fino alla fine del suo prossimo turno.
        
- **Diario Cifrato di Vryss (Oggetto di Trama)**
    
    - **Descrizione:** Un piccolo libro rilegato in pelle umana tesa, chiuso da un complesso meccanismo a ingranaggi. Le pagine sono piene di una scrittura precisa e fitta, in un codice che mescola simboli arcani e una logica numerica aliena.
        
    - **Meccaniche:** Decifrarlo è una sfida. Richiede una prova di **Società o Occultismo (CD 25)** e diversi giorni di lavoro, oppure l'uso di un incantesimo come Comprehend Language seguito da una prova di **Occultismo (CD 22)**. Contiene informazioni vitali sulle operazioni di Vecna, sui Faith Babies e forse sui piani per il **Progetto Titanforge**.
        
- **Occhio-Focus Viola (Oggetto Unico - Livello 5, Raro)**
    
    - **Descrizione:** L'occhio viola pulsante di Vryss, ora inerte e freddo. È un N-Shard grezzo, incastonato in un complesso apparato tecno-magico.
        
    - **Meccaniche:** Un personaggio con poteri psionici latenti o addestrato in Occultismo può provare a sintonizzarsi con esso.
        
        - **Attivazione:** 10 minuti di concentrazione (Interagire).
            
        - **Effetto:** Una volta al giorno, puoi usarlo per lanciare l'incantesimo Telekinetic Projectile (Trucchetto di 3° Rango) come se fossi un incantatore di livello 5.
            
        - **Corruzione:** Ogni volta che usi l'occhio, devi superare un **TS su Volontà CD 20**. Con un fallimento, subisci 1d6 danni mentali e sei tormentato da sussurri indecifrabili per un'ora. Con un fallimento critico, sei anche Stupefatto 1 per un'ora.
            

---

### **Ricompensa dei Ratfolk: Doni dei Tessitori del Silenzio**

Dopo averli salvati dall'assalto dei Caroniti, Chirr-Click e i suoi Ratfolk vi considerano non più semplici soci in affari, ma potenti e imprevedibili alleati. Per dimostrare la loro gratitudine (e per assicurarsi che ve ne andiate il prima possibile), vi offrono alcuni dei loro tesori più ingegnosi, un misto di tecnologia recuperata e alchimia a tema elettrico.

**Testo di Chirr-Click:**

> "Avete fatto... più del silenzio," squittisce Chirr-Click, le sue lenti che ruotano per esaminarvi. "Avete fatto... rumore. Rumore buono. Contro i Fantocci di Ossa. La transazione è onorata. E... un bonus. Per i buoni vicini. Prendete. Utili, sì-sì. Per i tunnel bui."

- **Tridente Elettrificato di Chirr-Click (Runa d'Arma - Shock, Minore - Livello 8)**
    
    - **Descrizione:** Chirr-Click, con un cenno, ordina a uno dei suoi di consegnarvi una pietra runica identica a quella incisa sul suo tridente. "Per le cose che strisciano nel buio," dice.
        
    - **Meccaniche:** Una Runa Shock standard.
        
- **1d4+1 Bombe a Scintilla (Oggetto Alchemico - Livello 1, Comune)**
    
    - **Descrizione:** Piccole sfere di vetro piene di filamenti metallici e un liquido volatile. "Scuotere bene. Lanciare forte. Via gli occhi!"
        
    - **Meccaniche:** Come le [Bottiglie Fulminanti Minori (Lesser Bottled Lightning)](https://www.google.com/url?sa=E&q=https%3A%2F%2F2e.aonprd.com%2FEquipment.aspx%3FID%3D77). Infliggono 1d4 danni da elettricità e 1 danno da schizzo da elettricità, e la creatura colpita è Abbagliata per 1 round (TS base su Riflessi CD 15).
        
- **Esca per Ragni Eterei (Oggetto Alchemico - Livello 3, Non Comune)**
    
    - **Descrizione:** Un pezzo di cristallo poroso imbevuto di una sostanza che odora di ozono e... vuoto. "Per i nostri amici," spiega Chirr-Click. "A loro piace l'odore. Forse anche ad altri."
        
    - **Meccaniche:** Se lasciata a terra, questa esca attira qualsiasi Ragno Etereo entro 120 piedi, che si avvicinerà per investigare (non necessariamente in modo amichevole). Più interessante, il suo odore extradimensionale può essere usato per distrarre altre creature che cacciano usando sensi insoliti (come i Vermi del Midolfo o le Bestie Scavatrici del Vuoto), concedendo un **bonus di circostanza di +2 alle prove di Furtività** per evitarle. L'odore dura 10 minuti.
        
- **Schema: Trappola a Rete Elettrificata (Formula - Livello 4)**
    
    - **Descrizione:** Un pezzo di pelle conciata con sopra disegnato, in modo sorprendentemente dettagliato, lo schema per una trappola a rete potenziata con tecnologia a scintilla. "Nostro brevetto. Molto efficace."
        
    - **Meccaniche:** Una formula per creare una trappola meccanica.
        
        - **Trappola a Rete Elettrificata (Livello 4):** CD di Creazione 19. Quando una creatura entra nel quadretto, una rete cade dall'alto e le infligge 2d12 danni da elettricità (TS base su Riflessi CD 20). Con un fallimento, la creatura è anche Intrappolata nella rete (CD per Scappare 20).
            
- **Componenti Vari:** Una borsa contenente **20 pezzi d'oro**, **fili di rame**, **piccoli ingranaggi recuperati**, e alcuni **cristalli di quarzo grezzi**, utili per Elthon.
    

Questo loot offre ai giocatori un mix di ricompense immediate, oggetti di trama (il diario), strumenti situazionali (l'esca, l'occhio) e potenziamenti a lungo termine (le rune, la formula), riflettendo le peculiarità delle fazioni che hanno appena incontrato e sconfitto.