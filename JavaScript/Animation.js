let is_animating = false

function animate() {
    if(is_animating) {
        if(disks.length === 1) {
            is_animating = false
            curr_time_display.innerHTML = 'GAME OVER' + ', Time left to run the game :' + time_left + ' seconds' ;
            counter = 0
            PauseClicked()
        }
        draw_disks_array()
        coalitionBetweenDisks()
        coalitionWithWall()
    }
    else{
       is_animating = false
    }
}

function coalitionBetweenDisks() {
    disks.forEach((disk, index) => {
        disks.forEach((innerDisk, innerIndex) => {//checks coalition between tow disks
            const distance = Math.hypot(innerDisk.x - disk.x, innerDisk.y - disk.y)
            if (disk !== innerDisk) {
                if (distance - innerDisk.radius - disk.radius < 1) { //two disks collide
                    if (absolute(disk.velocity.x - disk.velocity.y) > absolute(innerDisk.velocity.x - innerDisk.velocity.y)) {
                        disks.splice(index, 1)// removes a single disk at index in the array
                        innerDisk.velocity.x = 0 - innerDisk.velocity.x
                        innerDisk.velocity.y = 0 - innerDisk.velocity.y
                    }
                    else disks.splice(innerIndex, 1)
                }
            }
        })
    })

}

function absolute(x) {
    return x < 0 ? -x : x
}

function coalitionWithWall() {
    disks.forEach( (disk) => {
        if(disk.y <= radius || disk.y >= canvas.height - radius)
            disk.velocity.y = -disk.velocity.y
        if(disk.x <= radius || disk.x >= canvas.width - radius)
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