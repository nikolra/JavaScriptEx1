const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

class Disk{
    constructor(x,y,radius,color) {
        this.x=x
        this.y=y
        this.radius = radius
        this.color = color
    }

    draw(){
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        context.fill()
    }
}

const disk = new Disk(100,100,30,'pink')
disk.draw()