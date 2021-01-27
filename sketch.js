
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world ;
var chain ;
var ground , bob1 , bob2 , bob3 , bob4 ;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600 , 100 , 800 , 30);
	bob1 = new Bob(585 , 500 , 40 );
	bob2 = new Bob(665, 500 , 40);
	bob3 = new Bob(505,500 , 40);
	bob4 = new Bob(745,500 ,40);


chain1 = new Chain (ground.body,bob3.body,-bobDiameter*2 , 0);


	
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  ground.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 chain1.display();

}



