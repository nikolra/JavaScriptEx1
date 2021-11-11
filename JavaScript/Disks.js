
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
        disks.forEach(innerDisk => {//checks coalition between tow disks
            //need to check that it is not the same disk!!!!
            const distance = Math.hypot(innerDisk.x - disk.x, innerDisk.y - disk.y)
            if (disk !== innerDisk) {
                if (distance - innerDisk.radius - disk.radius < 1) { //tow disks collide
                    setTimeout(() => {// removes flash on the screen when a disk is removed
                        //TODO: decide which disk to remove
                        //TODO: add reaction of the remaining disk
                        disks.splice(index, 1)// removes a single disk at index in the array
                    })
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