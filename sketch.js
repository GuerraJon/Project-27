
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobDiameter


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob (200,200,20);
	bobObject2 = new Bob (200,220,20);
	bobObject3 = new Bob (200,240,20);
	bobObject4 = new Bob (200,260,20);
	bobObject5 = new Bob (200,280,20);

	roof = new Roof (280,240,80,15);

	rope1 = new Rope (
		bobObject1.body, roof.body, -bobDiameter*2,0)

	rope2 = new Rope (
		bobObject2.body, roof.body, -bobDiameter*2,0)

	rope3 = new Rope (
		bobObject3.body, roof.body, -bobDiameter*2,0)

	rope4 = new Rope (
		bobObject4.body, roof.body, -bobDiameter*2,0)

	rope5 = new Rope (
		bobObject5.body, roof.body, -bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  
  Engine.update(engine);

  drawSprites();
 
  bobObject1.display ();
  bobObject1.display ();
  bobObject3.display ();
  bobObject4.display ();
  bobObject5.display ();

  roof.display ();

  rope1.display ();
  rope2.display ();
  rope3.display ();
  rope4.display ();
  rope5.display ();
}



