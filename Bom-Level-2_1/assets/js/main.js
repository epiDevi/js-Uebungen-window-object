const meldung= document.querySelector(".message");
const count= document.querySelector("#count");
let i= 10;
let interval = setInterval(() => {
    i--;
    count.innerHTML= i;
    if (i === -1) {
        meldung.style.display = "none";
        clearInterval(interval);  
    }
}, 1000);