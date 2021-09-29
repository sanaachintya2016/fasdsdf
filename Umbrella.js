class Umbrella{
    constructor(x,y){
        var options = {
            'isStatic': true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    this.body = Bodies.circle(x,y,290,options);
    this.image = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");

    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        animation(this.image, 0, 0, 290);
        pop();
      
    }
    }