const countdownDisplay=document.getElementById("countdown-timer");
const startButton=document.getElementById("start-button");
let countdown;

function startCountdown(){
    const startMinutes=document.getElementById('countdown-input').value;
    let time=startMinutes*60;

    countdown=setInterval(function(){
        let minutes=Math.floor(time/60);
        let seconds=time%60;

        //Logic for less than 10 seconds remaining
        seconds=seconds<10?'0'+seconds:seconds;

        countdownDisplay.innerHTML=`${minutes}:${seconds}`;
        time--;
        if(time<0){
            clearInterval(countdown);
        }

    },1000)
}
startButton.addEventListener('click',startCountdown);