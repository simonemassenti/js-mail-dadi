//numero massimo di facce dei dadi
const nMax = 6;

//Bottone Gioca
const playBtn = document.getElementById("play");
const replayBtn = document.getElementById("replay");

//Dichiarazione vettori che conterranno gli elementi img
let dicesUserElem = [];
let dicesPcElem = [];
//Placeholders
let placeHolderElemUser = document.getElementById(`dadoU`);
let placeHolderElemPc = document.getElementById(`dadoPc`);
const millisec = 200;

const result = document.getElementById("risultato");

//Inserisci ogni elemento img in un vettore
for (let i = 0; i < nMax; i++) {
    dicesUserElem[i] = document.getElementById(`dado${i + 1}`);
    dicesPcElem[i] = document.getElementById(`dado${i + 1}pc`);
}

//Event listener
playBtn.addEventListener("click", function () {
    
    playBtn.classList.add("d-none");

    //Numero casuale
    const userNumber = Math.floor(Math.random() * nMax) + 1;
    console.log("User: ", userNumber);
    const pcNumber = Math.floor(Math.random() * nMax) + 1;
    console.log("Pc: ", pcNumber);

    //Nascondi il placeholder
    placeHolderElemUser.classList.add("d-none");

    //Scorri le immagini presenti in dicesUserElem una ogni millisec ms
    for (let i = 0; i < nMax; i++) {
        //Mostra dado
        setTimeout(function timer() {
            dicesUserElem[i].classList.remove("d-none");
        }, i * millisec);

        //Nascondi dado precedente e ultimo
        setTimeout(function timer() {
            if (i > 0) {
                dicesUserElem[i - 1].classList.add("d-none");
                if (i === nMax - 1) {
                    dicesUserElem[i].classList.add("d-none");
                }
            }
        }, i * millisec);

    }

    //Nascondi il placeholder
    placeHolderElemPc.classList.add("d-none");

    //Scorri le immagini presenti in dicesPcElem una ogni millisec ms
    for (let i = 0; i < nMax; i++) {
        //Mostra dado
        setTimeout(function timer() {
            dicesPcElem[i].classList.remove("d-none");
        }, i * millisec);

        //Nascondi dado precedente e ultimo
        setTimeout(function timer() {
            if (i > 0) {
                dicesPcElem[i - 1].classList.add("d-none");
                if (i === nMax - 1) {
                    dicesPcElem[i].classList.add("d-none");
                }
            }

        }, i * millisec);

    }

    //aspetta nMax*1.2 * millisec ms prima di visualizzare il risultato
    setTimeout(function timer() {
        //Mostra le immagini dei dadi vincenti
        dicesUserElem[userNumber - 1].classList.remove("d-none");
        dicesUserElem[userNumber - 1].classList.add("d-in-block");
        dicesPcElem[pcNumber - 1].classList.remove("d-none");
        dicesPcElem[pcNumber - 1].classList.add("d-in-block");

        //Scrive il messaggio
        if (pcNumber > userNumber) {
            result.innerHTML = "Ha vinto il Pc!"
        } else if (pcNumber === userNumber) {
            result.innerHTML = "Parità!"
        } else {
            result.innerHTML = "Complimenti, hai vinto!"
        }

    }, nMax * 1.2 * millisec);

});

replayBtn.addEventListener("click", function () {
    location.reload()
});




