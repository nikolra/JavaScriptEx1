const start_btn = document.querySelector("#StartButton")
start_btn.addEventListener("click",start_clicked)

const pause_btn = document.querySelector("#PauseButton")
pause_btn.addEventListener("click",pause_clicked)

const restart_btn = document.querySelector("#ResetButton")
restart_btn.addEventListener("click",restart_clicked)

const curr_time_display = document.querySelector("#CurrentTime");

let timer_id = null ;
let enabled = true ;
let counter = null ;
let time_left = 0;

window.addEventListener('beforeunload',ev => {
    if(isAnimating === true)
        return ev.returnValue = 'Are you sure you want to leave?' ;
});

function reset_mode(){
    clearInterval(timer_id)
    isAnimating = false;
}

function pause_clicked() {
    isAnimating = false;
    enabled = false;
}

function interval() {
    timer_tick();
    animate();
}

function restart_clicked(){
    reset_mode()
    counter = 0
    time_left = 0
    timer_id = null
    enabled = false
    curr_time_display.innerHTML = "Not initialize"
    draw_initial_disks_location()
}

function start_clicked() {
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
        reset_mode()
    }
}

function timer_tick() {
    if(!enabled) return;
    if(counter === 0)
    {
        pause_clicked();
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