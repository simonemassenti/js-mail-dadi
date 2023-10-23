const emails = ["pippo@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "pluto@gmail.com", "paperinick@gmail.com", "paperina@gmail.com", "minnie@gmail.com"];

const userEmail = prompt("Inserisci l'email");

let flag = false;

for (let i = 0; i < emails.length; i++){
    if(userEmail === emails[i]) {
        flag = true;
    }
}

if (flag){
    alert("La tua email è corretta")
} else {
    alert ("L'email è errata!")
}