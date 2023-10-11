console.log("Start waren für 3 Sekunden");

setTimeout(() => {
    console.log("Erledigt, Du hast 3 Sekunden verschwendet.");
}, 3000);

let i= 10;
let time= new Date();   
let interval = setInterval(() => {
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
    console.log(i--);
    if (i === 0) {
        clearInterval(interval);
    }

}, 1000);
