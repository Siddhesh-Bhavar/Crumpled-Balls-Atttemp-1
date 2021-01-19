
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	boxPosition=width/2+100
	boxY=610;
	
	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("white");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("white");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color("white");
	 
 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
  
	paper1 = new Paper(100,100,30);
	ground = new Ground(600,670,1200,20)

	
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  //paper1.velocityY=6;
  
  keyPressed();

  
  paper1.display(); 
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:8,y:-8})
	}
}

