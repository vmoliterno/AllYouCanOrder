


/**
 * Questa funzione viene chiamata cliccando sul bottone "Inserisci".
 * Crea un nuovo tavolo e gli conferisce un nome
 */
 function inserisciTavolo()
 {
     var tableName = document.getElementById("tableName").value;
 
     console.log(tableName);
 
     fetch("../api/v1/tavolos", {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify( { nome: tableName } ),
     })
     .then((resp) => {
         console.log(resp);
         return;
     })
     .catch( error => {  console.error(error) }   ); 
 
 };