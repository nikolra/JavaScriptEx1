
function animate() {
    if(isAnimating) {
        requestAnimationFrame(animate)
        context.clearRect(0, 0, canvas.width, canvas.height) // clears the previous screen. only the last drawn disk is shown
        disks.forEach((disk) => {
            disk.draw()
            disk.update()
        })
        coalitionBetweenDisks()
        coalitionWithWall()
    }
    else cancelAnimationFrame(animate)
}

function coalitionBetweenDisks() {
    disks.forEach((disk, index) => {
        disks.forEach((innerDisk, innerIndex) => {//checks coalition between tow disks
            //need to check that it is not the same disk!!!!
            const distance = Math.hypot(innerDisk.x - disk.x, innerDisk.y - disk.y)
            if (disk !== innerDisk) {
                if (distance - innerDisk.radius - disk.radius < 1) { //two disks collide
                    //setTimeout(() => {// removes flash on the screen when a disk is removed
                        //TODO: add reaction of the remaining disk
                        //TODO: update the if statement
                    if(disk.velocity > innerDisk.velocity)
                        disks.splice(index, 1)// removes a single disk at index in the array
                    else disks.splice(innerIndex, 1)
                    //})
                }
            }
        })
    })
}

function coalitionWithWall() {
    disks.forEach( (disk) => {
        if(disk.y <= radius || disk.y >= canvas.height - radius)
            disk.velocity.y = -disk.velocity.y
        if(disk.x <= radius || disk.x >= canvas.width - radius)
            disk.velocity.x =  -disk.velocity.x
    })
}