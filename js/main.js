// ****aggiungo emailUsers/prompt/variabile vuota****
let emailUsers = ["flavia@gmail.com", "marco@gmail.com", "gino@gmail.com"]
let person = prompt("Per favore inserisci la tua email")
let logIn = false 
// let input = document.getElementById("input").value

// ***apro ciclo for per richiamare i valori dell'array***
for (let c = 0; c < emailUsers.length; c++) {
// ***creo variabile che conterrà gli users dell'array***
    
    const user = emailUsers[c];
    
// ***creo condizione dentro FOR per determinare se true****
    if (user == person) {
        logIn = true
        console.log(logIn)
        // console.log("Credenziali valide")
        // alert("Credenziali valide");
    }
}

// ***creo condizione con Alert fuori FOR per avere il risultato alla fine del ciclo****
if (logIn == false) {
    alert("Credenziali errate!!!")
}
else {
    alert("Credenziali corrette")
}

