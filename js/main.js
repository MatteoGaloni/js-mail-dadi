// ****aggiungo emailUsers array e creo prompt****
let emailUsers = ["flavia@gmail.com", "marco@gmail.com", "gino@gmail.com"]
let person = prompt("Per favore inserisci la tua email")


// ***apro ciclo for per richiamare i valori dell'array***
for (let c = 0; c < emailUsers.length; c++) {
// ***creo variabile che conterrà gli users dell'array***
    
    const user = emailUsers[c];
    
// ***creo condizione per stampare hai vinto****
    if (user == person) {
        console.log("Credenziali valide")
        alert("Credenziali valide");
    } else alert("Accesso negato");
   
}

