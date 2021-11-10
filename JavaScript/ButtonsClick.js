//const canvas = document.getElementById("DiskCanvas");
//const context = canvas.getContext("2d");

const radius = 10
const initialVelocity = {x:1, y:1}
const topDisk = new Disk(50, radius, radius, 'pink', initialVelocity)
const buttonDisk = new Disk(50, canvas.height -radius, 10, 'blue', initialVelocity)
const rightDisk = new Disk(canvas.width - radius, 50, 10, 'black', initialVelocity)
const leftDisk = new Disk(radius, 100, 10, 'purple', initialVelocity)

const disks = [buttonDisk, topDisk, rightDisk, leftDisk]

function initVelocity(){

    topDisk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    buttonDisk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    rightDisk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    leftDisk.velocity = {x:Math.random() * 2, y:Math.random() * 2}

}

//Todo: call when the HTML is loaded need to draw the disks
function drawInitialDisksLocation() {
    initVelocity()

    topDisk.y = radius
    topDisk.x = Math.random() * (canvas.width - 2 * radius) + radius
    buttonDisk.y = canvas.height - radius
    buttonDisk.x = Math.random() * (canvas.width - 2 * radius) + radius
    rightDisk.x = canvas.width - radius
    rightDisk.y = Math.random() * (canvas.height - 2 * radius) + radius
    leftDisk.x = radius
    leftDisk.y = Math.random() * (canvas.height - 2 * radius) + radius
    disks.forEach(disk => {
        disk.draw()
    })
}
function startClicked () {
    animate()
}

drawInitialDisksLocation()
//startClicked()