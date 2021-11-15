
function animate() {

    if(isAnimating) {
        if(disks.length === 1) {
            isAnimating = false
            let time_left = counter ;
            curr_time_display.innerHTML = 'GAME OVER' + ', Time left to run the game :' + time_left + 'seconds' ;
            counter = 0
            PauseClicked()
        }
        requestAnimationFrame(animate)
        context.clearRect(0, 0, canvas.width, canvas.height) // clears the previous screen. only the last drawn disk is shown
        disks.forEach((disk) => {
            disk.draw()
            disk.update()
        })
        coalitionBetweenDisks()
        coalitionWithWall()
    }
    else{
        cancelAnimationFrame(animate)
        isAnimating = false
    }
}

function coalitionBetweenDisks() {
    disks.forEach((disk, index) => {
        disks.forEach((innerDisk, innerIndex) => {//checks coalition between tow disks
            //need to check that it is not the same disk!!!!
            const distance = Math.hypot(innerDisk.x - disk.x, innerDisk.y - disk.y)
            if (disk !== innerDisk) {
                if (distance - innerDisk.radius - disk.radius < 1) { //two disks collide
                    //TODO: update the if statement
                    if (calcAverage(disk.velocity.x, disk.velocity.y) > calcAverage(innerDisk.velocity.x, innerDisk.velocity.y)){
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

function calcAverage(x, y) {
    return(x + y) / 2
}

function coalitionWithWall() {
    disks.forEach( (disk) => {
        if(disk.y <= radius || disk.y >= canvas.height - radius)
            disk.velocity.y = -disk.velocity.y
        if(disk.x <= radius || disk.x >= canvas.width - radius)
            disk.velocity.x =  -disk.velocity.x
    })
}