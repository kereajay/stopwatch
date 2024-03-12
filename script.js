let display = document.getElementById('display');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let timer = null;
let isrunning = false;
let starttime = 0;
let elapsedtime = 0;
let body = document.querySelector('body');
start.addEventListener('click', () => {

    if (!isrunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isrunning = true;
    }
    // start.style.color = "white";
    const direction = "to right"; 
    const color1 = "rgb(255,95,109)";
    const color2 = "rgb(255, 195, 113)";

   
    const gradientString = `linear-gradient(${direction}, ${color1}, ${color2})`;
    body.style.backgroundImage=gradientString;


    //  body.style.background="linear"
})
stop.addEventListener('click', () => {
    clearInterval(timer);
    isrunning = false;
    // stop.style.color = "white";
    const direction = "to right"; 
    const color1 = "rgb(191, 240, 152)";
    const color2 = "rgb(111, 214, 255)";

   
    const gradientString = `linear-gradient(${direction}, ${color1}, ${color2})`;
    body.style.backgroundImage=gradientString;


})
reset.addEventListener('click', () => {
    clearInterval(timer);
    isrunning = false;
    starttime = 0;
    elapsedtime = 0;
    display.innerText = "00:00:00:00"
    // reset.style.color = "white";
    const direction = "to right"; 
    const color1 = "rgb(161, 196, 2532)";
    const color2 = "rgb(194, 233, 251)";

   
    const gradientString = `linear-gradient(${direction}, ${color1}, ${color2})`;
    body.style.backgroundImage=gradientString;

})
function update() {
    elapsedtime = Date.now() - starttime;
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedtime / 1000 % 60);
    let miliseconds = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");
    display.innerText = `${hours}:${minutes}:${seconds}:${miliseconds}`;
} 