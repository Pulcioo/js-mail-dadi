console.log('JS OK')

// chiedere all'utente la propria mail
const mailUser = prompt('Inserisci la tua e-mail qui sotto!')

console.log(mailUser)

// lista mail registrate
const mailWithAccess = ["davide.pulci@gmail.com", "francesco.totti@gmail.com", "diego.maradona@gmail.com", "cristiano.ronaldo@gmail.com"]

console.log(mailWithAccess)

// controllare che la mail inserita sia nella lista di chi può accedere oppure no
let verified = false;

for (let i = 0; i < mailWithAccess.length; i++) {
    if (mailUser == mailWithAccess[i]) {
        verified = true;
    } if (verified == true) {
        document.getElementById('your-email').innerHTML = "Accesso consentito ✔︎";
    } else {
        document.getElementById('your-email').innerHTML = "Accesso negato ✘";
    }
}
