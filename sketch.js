const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world,engine;
var rain;
var man;
var maxDrops = 100;
var rain = []
function preload(){
    
}

function setup(){
   createCanvas(600,750)
   engine = Engine.create();
   world = engine.world;
   
    if(frameCount%20===0){
    rain = new Drops(random(0,600),100)
    }
  man = new Umbrella(300,500)
}

function draw(){
background("black");
Engine.update(engine);

  rain.display();
  //rain.updatePosition();
  man.display();
  drawSprites();
}   

