<!-- Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no; -->
- aggiungo vue al js;
-creo al interno del data() il mio oggetto tooDOList;
-al interno di ogni oggetto inserisco 2 proprietà, text: "testo" e done: valore booleano;

<!-- MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. -->
-al inteno del main creo un ul;
-creo li con il ciclo v-for="(item, index) in toDOList" nel quale inserisco un tag span e come elemento {{item}};
-creo un metodo che al click sul span mi restituisce il valore opposto della proprietà done;
<!-- 
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista. -->
- aggiungo  li un icona fratello di p;
-creo un metodo deleteItem che mi rimuove l'item dalla lista, per fare ciò richiamerò nella funzione l'indice e userò splice.

<!-- 
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. -->
- nel data() creo una nuova variabile newItem vuota;
-creo nel mio html un input e un button al esterno del ciclo;
-con v-model colleggo l'input con newItem;
- creo una funzione addItem che pusha nel toDOList l'array {newItem e done: false};
-creo una funzione cleanNewItem per svuotare newitem;
-richiamo la funione cleanNewItem in addItem;
-richiamo la funzine addItem nel iput @keyup.enter="addItem()" e nel button con @cick;  

Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente
