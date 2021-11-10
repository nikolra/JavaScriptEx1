//const canvas = document.getElementById("DiskCanvas");
//const context = canvas.getContext("2d");



const velocity = {
    x: 1,
    y: 1
}


const velocity2 = {
    x: -1,
    y: -1
}
const topDisk = new Disk(50, 10, 10, 'pink', velocity)
const buttonDisk = new Disk(50, canvas.height -10, 10, 'blue', velocity2)
const rightDisk = new Disk(canvas.width - 10, 50, 10, 'black', velocity2)
const leftDisk = new Disk(10, 100, 10, 'purple', velocity2)

const disks = [buttonDisk, topDisk, rightDisk, leftDisk]


//when the HTML is loaded need to draw the disks
function drawInitialDisksLocation() {
    topDisk.y = 10
    //topDisk.x = Random
    buttonDisk.y = canvas.height - 10
    //buttonDisk.x = Random
    rightDisk.x = canvas.width - 10
    //rightDisk.y = Random
    leftDisk.x = 10
    //leftDisk.y = Random
    disks.forEach(disk => {
        disk.draw()
    })
}
function startClicked () {
    animate()
}

drawInitialDisksLocation()
//startClicked()