const g_state = {
    canvas: document.getElementById("DiskCanvas"),
    context: document.getElementById("DiskCanvas").getContext("2d"),
    curr_time_display: document.querySelector("#CurrentTime"),

    is_animating: false,
    radius: 7,
    small_int: 0.001,
    initial_velocity: {x:1, y:1},

    timer_id: null,
    enabled: true,
    counter: null,
    time_left: 0
}