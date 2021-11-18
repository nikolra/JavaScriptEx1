let is_animating = false

function animate() {
    if(is_animating) {
        if(disks.length === 1) {
            is_animating = false
            curr_time_display.innerHTML = 'GAME OVER' + ', Time left to run the game :' + time_left + ' seconds' ;
            counter = 0
            pause_clicked()
        }
        draw_disks_array()
        coalition_between_disks()
        coalition_with_wall()
    }
    else{
       is_animating = false
    }
}

function coalition_between_disks() {
    disks.forEach((disk, index) => {
        disks.forEach((inner_Disk, inner_index) => {
            const distance = Math.hypot(inner_Disk.x - disk.x, inner_Disk.y - disk.y)
            if (disk !== inner_Disk) {
                if (distance - inner_Disk.radius - disk.radius < 1) {
                    if (absolute(disk.velocity.x - disk.velocity.y) > absolute(inner_Disk.velocity.x - inner_Disk.velocity.y)) {
                        disks.splice(index, 1)
                        inner_Disk.velocity.x = 0 - inner_Disk.velocity.x
                        inner_Disk.velocity.y = 0 - inner_Disk.velocity.y
                    }
                    else {
                        disks.splice(inner_index, 1)
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
    disks.forEach( (disk) => {
        if(disk.y <= radius || disk.y >= canvas.height - radius + small_int)
            disk.velocity.y = -disk.velocity.y
        if(disk.x <= radius || disk.x >= canvas.width - radius + small_int)
            disk.velocity.x =  -disk.velocity.x
    })
}

function draw_disks_array() {
    context.clearRect(0, 0, canvas.width, canvas.height) // clears the previous screen. only the last drawn disk is shown
    disks.forEach((disk) => {
        disk.draw()
        disk.update()
    })
}