
function animate() {

    if(isAnimating) {
        if(disks.length === 1) {
            isAnimating = false
            let time_left = counter ;
            curr_time_disply.innerHTML = 'GAME OVER' + ', Time left to run the game :' + time_left + 'seconds' ;
            counter = 0
            showSumMsg(time_left);
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

    if(disks.length === 1) {
        curr_time_disply.innerHTML = 'Game ended'
        let time_left = counter ;
        counter = 0
        showSumMsg(time_left);
    }

}

function coalitionBetweenDisks() {
    disks.forEach((disk, index) => {
        disks.forEach((innerDisk, innerIndex) => {//checks coalition between tow disks
            //need to check that it is not the same disk!!!!
            const distance = Math.hypot(innerDisk.x - disk.x, innerDisk.y - disk.y)
            if (disk !== innerDisk) {
                if (distance - innerDisk.radius - disk.radius < 1) { //two disks collide
                    //TODO: add reaction of the remaining disk
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