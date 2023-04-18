// ****aggiungo emailUsers array e creo prompt****
let emailUsers = ["flavia@gmail.com", "marco@gmail.com", "gino@gmail.com"]
let person = prompt("Per favore inserisci la tua email")
let ricerca = false 


// ***apro ciclo for per richiamare i valori dell'array***
for (let c = 0; c < emailUsers.length; c++) {
// ***creo variabile che conterrà gli users dell'array***
    
    const user = emailUsers[c];
    
// ***creo condizione per determinare se true o false****
    if (user == person) {
        ricerca = true
        console.log(ricerca)
        // console.log("Credenziali valide")
        // alert("Credenziali valide");
    }
}
if (ricerca == false) {
    alert("Credenziali errate!!!")
}
else {
    alert("Credenziali corrette")
}



