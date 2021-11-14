const start_btn = document.querySelector("#StartButton")
start_btn.addEventListener("click",startClicked)

const pause_btn = document.querySelector("#PauseButton")
pause_btn.addEventListener("click",PauseClicked)

const restart_btn = document.querySelector("#ResetButton")
restart_btn.addEventListener("click",restartClicked)

let curr_time_disply = document.querySelector("#CurrentTime");

let timer_id = null ;
let enabled = true ;
let counter = null ;

function restartClicked(){
    console.log("restart event");
    counter = 0;
    timer_id = null ;
    curr_time_disply.innerHTML = counter;
    drawInitialDisksLocation()
    startClicked();
}


function startClicked() {
    console.log("Start event");
    if( !timer_id)
    {
        counter = document.getElementById('TimeInput').value ;
        timer_id = window.setInterval(timer_tick,100);
    }
    enabled = true ;
    isAnimating = true;
    animate();
}

function PauseClicked() {
    console.log("Pause event");
    isAnimating = false;
    enabled = false ;
}

function timer_tick()
{
    if(!enabled) return;
    if(counter === 0)
    {
        PauseClicked();
    }
    else {
        counter--;
        console.log(counter);
        curr_time_disply.innerHTML = counter;
    }
}