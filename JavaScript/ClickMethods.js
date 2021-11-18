const start_btn = document.querySelector("#StartButton")
start_btn.addEventListener("click",startClicked)

const pause_btn = document.querySelector("#PauseButton")
pause_btn.addEventListener("click",PauseClicked)

const restart_btn = document.querySelector("#ResetButton")
restart_btn.addEventListener("click",restartClicked)

let curr_time_display = document.querySelector("#CurrentTime");

let timer_id = null ;
let enabled = true ;
let counter = null ;
let time_left = 0;
function restartClicked(){
    clearInterval(timer_id)
    console.log("Restart event");
    counter = 0;
    timer_id = null;
    time_left = 0;
    enabled = false;
    curr_time_display.innerHTML = "Not initialize";
    isAnimating = false;
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawInitialDisksLocation();
}

function startClicked() {
    console.log("Start event");

    if (!isAnimating) {
        if (!timer_id) {
            counter = document.getElementById('TimeInput').value * 100;
            time_left = document.getElementById('TimeInput').value;
            curr_time_display.innerHTML = time_left;
            timer_id = window.setInterval(interval, 10);
        }
        if (counter !== 0) {
            enabled = true;
            isAnimating = true;
            animate();
        }
    }
    if(counter === 0 || disks.length === 1) {
        clearInterval(timer_id)
        isAnimating = false
    }
}

function PauseClicked() {
    console.log("Pause event");
    isAnimating = false;
    enabled = false;
    /*context.clearRect(0, 0, canvas.width, canvas.height) // clears the previous screen. only the last drawn disk is shown
    disks.forEach((disk) => {
        disk.draw()
        disk.update()
    })*/
}

function timer_tick() {
    if(!enabled) return;
    if(counter === 0)
    {
        PauseClicked();
        curr_time_display.innerHTML = 'Sorry, time is up!'
        clearInterval()
    }
    else {
        counter--;
        console.log(counter);
        if(counter % 100 === 0) {
            time_left --;
            curr_time_display.innerHTML = time_left;
        }
    }
}

function interval() {
    timer_tick();
    animate();
}

window.addEventListener('beforeunload',ev => {
    if(isAnimating === true)
    {
        return ev.returnValue = 'Are you sure you want to leave?' ;
    }
});