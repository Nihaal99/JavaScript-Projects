const time = document.querySelector(".watch>div");
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;
//Event listener
//While clicking on start_btn start function runs
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

//function for updating the timer
function timer() {
    seconds++;

    //Format time
    let secs = Math.floor((seconds % 3600) % 60);
    let mins = Math.floor((seconds % 3600) / 60);
    let hour = Math.floor(seconds / 3600);

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hour < 10) hour = '0' + hour;

    time.innerText = `${hour}:${mins}:${secs}`;
}

function start() {
    if (interval) {
        return
    }
    // stores a reference to the interval(ie.Interval ID) that is created when the setInterval function is called
    interval = setInterval(timer, 1000);
}
function stop() {
    //By passing interval id stored in interval to clear interval function the setInterval function stops
    clearInterval(interval);
    interval = null;
}
function reset() {
    stop();
    seconds = 0;
    time.innerText = '00:00:00';
}
