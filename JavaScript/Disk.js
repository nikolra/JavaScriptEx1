const canvas = document.getElementById("DiskCanvas");
const context = canvas.getContext("2d");

class Disk{
    constructor(x, y, radius, color, velocity) {
        this.x=x
        this.y=y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw(){
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2,false)
        context.fillStyle = this.color
        context.fill()
    }

    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }


}


