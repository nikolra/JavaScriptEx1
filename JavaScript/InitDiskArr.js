
const radius = 7
const small_int = 0.001
const initial_velocity = {x:1, y:1}
const top_disk = new Disk(50, radius, radius, 'pink', initial_velocity)
const button_disk = new Disk(50, canvas.height - radius, radius, 'blue', initial_velocity)
const right_disk = new Disk(canvas.width - radius, 50, radius, 'green', initial_velocity)
const left_disk = new Disk(radius, 100, radius, 'purple', initial_velocity)
const disks = [button_disk, top_disk, right_disk, left_disk]

function init_array() {
    for( let i = 0; i < disks.length ; i++)
        disks.pop()
    disks.push(button_disk, top_disk, right_disk, left_disk)
}

function init_velocity(){

    top_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    button_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    right_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}
    left_disk.velocity = {x:Math.random() * 2, y:Math.random() * 2}

}

function draw_initial_disks_location() {
    init_velocity()
    top_disk.y = radius + small_int
    top_disk.x = Math.random() * (canvas.width - 2 * radius) + radius
    button_disk.y = canvas.height - radius + small_int
    button_disk.x = Math.random() * (canvas.width - 2 * radius) + radius
    right_disk.x = canvas.width - radius + small_int
    right_disk.y = Math.random() * (canvas.height - 2 * radius) + radius
    left_disk.x = radius + small_int
    left_disk.y = Math.random() * (canvas.height - 2 * radius) + radius
    init_array()
    draw_disks_array()
}



draw_initial_disks_location()

