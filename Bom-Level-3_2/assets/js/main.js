const min= document.querySelector("#minutes");
const time= document.querySelector("#time");
let interval;
let timeInSeconds;

const startMinCountdown =() =>{    
    timeInSeconds = min.value * 60;
        interval = setInterval(() => {
            if (timeInSeconds <= 0) {
                clearInterval(interval);
                time.innerText = '00:00';
                return;
            }
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            time.innerText = ` ${minutes}:${seconds}`;
            timeInSeconds--;
            }, 1000);

}

const pauseMinCountdown= () => {
    clearInterval(interval);
}

const restartMinCountdown = () =>{
    clearInterval(interval);
    startMinCountdown(timeInSeconds / 60);
}

// Ich habe mir von dieser Seite Hilfe geholt.
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript