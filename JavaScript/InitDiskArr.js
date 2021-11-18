
function init_velocity(){

    g_state.top_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    g_state.button_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    g_state.right_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    g_state.left_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}

}

function init_location() {
    g_state.top_disk.y = g_state.radius + g_state.small_int
    g_state.top_disk.x = Math.random() * (g_state.canvas.width - 2 * g_state.radius) + g_state.radius
    g_state.button_disk.y = g_state.canvas.height - g_state.radius + g_state.small_int
    g_state.button_disk.x = Math.random() * (g_state.canvas.width - 2 * g_state.radius) + g_state.radius
    g_state.right_disk.x = g_state.canvas.width - g_state.radius + g_state.small_int
    g_state.right_disk.y = Math.random() * (g_state.canvas.height - 2 * g_state.radius) + g_state.radius
    g_state.left_disk.x = g_state.radius + g_state.small_int
    g_state.left_disk.y = Math.random() * (g_state.canvas.height - 2 * g_state.radius) + g_state.radius
}

function draw_initial_disks_location() {
    init_velocity()
    init_location()
    g_state.disks = [g_state.button_disk, g_state.top_disk, g_state.right_disk, g_state.left_disk]
    draw_disks_array()
}

draw_initial_disks_location()

