const output= document.querySelector("#output");
const btn= document.querySelector(".btn").addEventListener("click" , () => {
    output.innerHTML= `<h3>Browsername: ${navigator.userAgent}<h3><br>
    <h3>Betriebsystem-Architektur: ${navigator.platform}<h3><br>
    <h3>Browser version: ${navigator.appVersion}<h3><br>
    <h3>Window Auflösung: ${window.screen.width} * ${window.screen.height}<h3><br>
    <h3>Innenhöhe und -breite des Dokuments: ${window.innerHeight} * ${window.innerWidth}<h3><br>
    <h3>colorDepth: ${window.screen.colorDepth}<h3><br>
    <h3>pixelDepth: ${window.screen.pixelDepth}<h3><br>`
})