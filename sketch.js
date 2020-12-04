var bob1,base
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var base =createSprite (20,10,200,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  base.display();
  drawSprites();
 
}



