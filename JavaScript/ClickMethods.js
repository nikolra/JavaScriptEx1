g_state.start_btn = document.querySelector("#StartButton");
g_state.pause_btn = document.querySelector("#PauseButton");
g_state.restart_btn = document.querySelector("#ResetButton");

g_state.start_btn.addEventListener("click",start_clicked)
g_state.pause_btn.addEventListener("click",pause_clicked)
g_state.restart_btn.addEventListener("click",restart_clicked)

window.addEventListener('beforeunload',ev => {
    if(g_state.is_animating === true)
        return ev.returnValue = 'Are you sure you want to leave?' ;
});

function reset_mode(){
    clearInterval(g_state.timer_id)
    g_state.is_animating = false;
}

function pause_clicked() {
    g_state.is_animating = false;
    g_state.enabled = false;
}

function interval() {
    timer_tick();
    animate();
}

function restart_clicked(){
    reset_mode()
    g_state.counter = 0
    g_state.time_left = 0
    g_state.timer_id = null
    g_state.enabled = false
    g_state.curr_time_display.innerHTML = "Not initialize"
    draw_initial_disks_location()
}

function start_clicked() {
    if (!g_state.is_animating) {
        if (!g_state.timer_id) {
            g_state.counter = document.getElementById('TimeInput').value * 100;
            g_state.time_left = document.getElementById('TimeInput').value;
            g_state.curr_time_display.innerHTML = g_state.time_left;
            g_state.timer_id = window.setInterval(interval, 10);
        }
        if (g_state.counter !== 0) {
            g_state.enabled = true;
            g_state.is_animating = true;
            animate();
        }
    }
    if(g_state.counter === 0 || g_state.disks.length === 1) {
        reset_mode()
    }
}

function timer_tick() {
    if(!g_state.enabled) return;
    if(g_state.counter === 0)
    {
        pause_clicked();
        g_state.curr_time_display.innerHTML = 'Sorry, time is up!'
        clearInterval()
    }
    else {
        g_state.counter--;
        if(g_state.counter % 100 === 0) {
            g_state.time_left --;
            g_state.curr_time_display.innerHTML = g_state.time_left;
        }
    }
}