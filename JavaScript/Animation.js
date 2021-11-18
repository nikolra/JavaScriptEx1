
function animate() {
    if(g_state.is_animating) {
        if(g_state.disks.length === 1) {
            g_state.is_animating = false
            g_state.curr_time_display.innerHTML = 'GAME OVER' + ', Time left to run the game :'
                + g_state.time_left + ' seconds.' + ' The winning disk is: ' + g_state.disks[0].color;
            g_state.counter = 0
            pause_clicked()
        }
        draw_disks_array()
        coalition_between_disks()
        coalition_with_wall()
    }
    else{
       g_state.is_animating = false
    }
}

function coalition_between_disks() {
    g_state.disks.forEach((disk, index) => {
        g_state.disks.forEach((inner_disk, inner_index) => {
            const distance = Math.hypot(inner_disk.x - disk.x, inner_disk.y - disk.y)
            if (disk !== inner_disk) {
                if (distance - inner_disk.radius - disk.radius < 1) {
                    if (absolute(disk.velocity.x - disk.velocity.y) > absolute(inner_disk.velocity.x - inner_disk.velocity.y)) {
                        g_state.canvas_div.style.borderColor = disk.color
                        g_state.disks.splice(index, 1)
                        inner_disk.velocity.x = 0 - inner_disk.velocity.x
                        inner_disk.velocity.y = 0 - inner_disk.velocity.y
                    }
                    else {
                        g_state.canvas_div.style.borderColor = inner_disk.color
                        g_state.disks.splice(inner_index, 1)
                        disk.velocity.x = 0 - disk.velocity.x
                        disk.velocity.y = 0 - disk.velocity.y
                    }
                }
            }
        })
    })

}

function absolute(x) {
    return x < 0 ? -x : x
}

function coalition_with_wall() {
    g_state.disks.forEach( (disk) => {
        if(disk.y <= g_state.radius || disk.y >= g_state.canvas.height - g_state.radius + g_state.small_int)
            disk.velocity.y = -disk.velocity.y
        if(disk.x <= g_state.radius || disk.x >= g_state.canvas.width - g_state.radius + g_state.small_int)
            disk.velocity.x =  -disk.velocity.x
    })
}

function draw_disks_array() {
    g_state.context.clearRect(0, 0, g_state.canvas.width, g_state.canvas.height)
    g_state.disks.forEach((disk) => {
        disk.draw()
        disk.update()
    })
}