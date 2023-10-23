# EMAIL

### Problema

**Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.**

### Dati
Vettore con gli indirizzi email
INPUT: email inserita dall'utente
Flag

### Soluzione
- Inizializzo un flag a false
- Con un ciclo for scorro il vettore,
- SE l'email inserita dall'utente è uguale a un email presente all'interno del vettore cambio il flag a true.
- SE il flag è true avviso che l'email è corretta
- ALTRIMENTI avviso che l'email è errata.