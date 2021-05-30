class BallClass{
    constructor(x, y, radius)
{
    
    var options = {
restitution:0.3,
density:0.6,
friction:0.8
    }
this.image=loadImage("ball.png");
this.body = Bodies.circle(x, y, radius, options);
this.width = radius;
this.height = radius;
World.add(world, this.body);

}
display(){
push();
translate(this.body.position.x, this.body.position.y);
rotate(this.body.angle);
imageMode(CENTER); 
image(this.image,0,0, this.width, this.height);
pop();    
}
}
