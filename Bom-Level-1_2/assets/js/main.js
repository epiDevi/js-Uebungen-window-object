const zeit = document.querySelector(".zeit");
i= 100;
const btn = document.querySelector("#btn").addEventListener("click", ()=>{
    let interval = setInterval(() => {
        zeit.innerHTML= `${i--}%`;
        if (i ===-1) {
            clearInterval(interval)
        }
    }, 150)
})