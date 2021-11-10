//const canvas = document.getElementById("DiskCanvas");
//const context = canvas.getContext("2d");




//need to create the 4 disks

function animate() {
    requestAnimationFrame(this.animate) //similar to setInterval. call as soon as it can
    context.clearRect(0, 0, canvas.width, canvas.height) // clears the previous screen. only the last drawn disk is shown
    disks.forEach(disk => {
        disk.draw()
        disk.update()
    })
}

function spawnEnemies() {
    setInterval( () => {

    }, 1000)
}

window.addEventListener('click', animate)//happens every time we click on the mouse