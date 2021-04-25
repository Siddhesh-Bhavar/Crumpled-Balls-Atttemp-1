
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var dustbinObj,paperObject,groundObject,engine;
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	paperObject = new Paper(40,40,40);
	dustbinObj= new Dustbin(1000,450)
	groundObject = new Ground(600,400)
	
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background("silver");
  

  
  

  
  paperObject.display(); 
  dustbinObj.display();
  groundObject.display();
  
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

