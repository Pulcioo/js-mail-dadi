// genero numero random per l'utente
const numberUser = Math.floor(Math.random() * 6) + 1;

console.log(numberUser)

// genero numero random per il computer
const numberComputer = Math.floor(Math.random() * 6) + 1;

console.log(numberComputer)

// stampo entrambi i numeri in document 
document.getElementById('n-user').innerHTML = "Hai totalizzato " + numberUser;

document.getElementById('n-computer').innerHTML = "Il computer ha totalizzato " + numberComputer;