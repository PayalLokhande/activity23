const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var object
var ground1
var box1
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
 ground1=new ground(400,380,800,20)
box1=new box(300,200,20,50)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
ground1.display()
box1.display()
}
