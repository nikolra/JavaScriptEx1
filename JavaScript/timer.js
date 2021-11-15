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

function restartClicked(){
    console.log("restart event");
    counter = 0;
    timer_id = null ;
    curr_time_display.innerHTML = "Not initialize";
    isAnimating = false;
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawInitialDisksLocation()
}

function startClicked() {
    console.log("Start event");

    if (!isAnimating) {
        if (!timer_id) {
            counter = document.getElementById('TimeInput').value;
            timer_id = window.setInterval(timer_tick, 1000);
        }
        if (counter !== 0) {
            enabled = true;
            isAnimating = true;
            animate();
        }
    }
}

function PauseClicked() {
    console.log("Pause event");
    isAnimating = false;
    enabled = false ;
    context.clearRect(0, 0, canvas.width, canvas.height) // clears the previous screen. only the last drawn disk is shown
    disks.forEach((disk) => {
        disk.draw()
        disk.update()
    })
}

function timer_tick() {
    if(!enabled) return;
    if(counter === 0)
    {
        PauseClicked();
    }
    else {
        counter--;
        console.log(counter);
        curr_time_display.innerHTML = counter;
    }
}
window.addEventListener('beforeunload',ev => {
    if(isAnimating === true)
    {
        return ev.returnValue = 'Are you sure you want to leave?' ;
    }
});