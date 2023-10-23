const nMax = 6;

const userNumber = Math.floor(Math.random() * nMax) + 1;
console.log("User: ", userNumber);
const pcNumber = Math.floor(Math.random() * nMax) + 1;
console.log("Pc: ", pcNumber);

if (pcNumber > userNumber) {
    console.log("Ha vinto il pc");
}else if (pcNumber === userNumber) {
    console.log("Pari!")
} else {
    console.log("Hai vinto");
}