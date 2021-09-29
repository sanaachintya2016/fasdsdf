class Drops{
constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
this.body = Bodies.circle(x,y,5,options);
World.add(world,this.body);
}
display(){
    var angle = this.body.angle;

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("blue");
    ellipseMode(CENTER);
    ellipse( 0, 0, 5);
    pop();
  
}
updatePosition(){
    if(this.body.position.y> 750){
    Matter.Body.setPosition(this.body,{x:random(0,600)},100)
    }
}
}