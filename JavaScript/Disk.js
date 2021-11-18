
class Disk {

    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw(){
        g_state.context.beginPath()
        g_state.context.arc(this.x,this.y,this.radius,0,Math.PI * 2,false)
        g_state.context.fillStyle = this.color
        g_state.context.fill()
    }

    update(){
        this.draw()
        this.x = this.x + this.velocity.x > g_state.canvas.width - g_state.radius ?
            g_state.canvas.width - g_state.radius + g_state.small_int : this.x + this.velocity.x
        this.y = this.y + this.velocity.y > g_state.canvas.height - g_state.radius ?
            g_state.canvas.height - g_state.radius + g_state.small_int : this.y + this.velocity.y
    }

}

g_state.top_disk = new Disk(50, g_state.radius, g_state.radius, 'pink', g_state.initial_velocity);
g_state.button_disk = new Disk(50, g_state.canvas.height - g_state.radius, g_state.radius, 'blue', g_state.initial_velocity);
g_state.right_disk = new Disk(g_state.canvas.width - g_state.radius, 50, g_state.radius, 'green', g_state.initial_velocity);
g_state.left_disk = new Disk(g_state.radius, 100, g_state.radius, 'purple', g_state.initial_velocity);
g_state.disks = [g_state.button_disk, g_state.top_disk, g_state.right_disk, g_state.left_disk];

