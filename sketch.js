var ball, bin1, bin2, bin3,ground,groundObject,ballObject,binObject,binimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
binimage = loadImage("bin.png");	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	//bin1 = createSprite(700, 680, 70, 10);
     //bin2 = createSprite(740, 620, 10, 100);
	 //bin3 = createSprite(660, 650, 10, 70);
	ball = new BallClass(200, 680, 30 );
	ground = new Ground(400, 690, 800, 10);
	bin1 = new Bin(700, 680, 70, 10);
	bin2 = new Bin(740, 630, 10, 100);
bin3 = new Bin (660, 630, 10, 100);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
 // drawSprites();
 image(binimage,650,580,100,125);
 
 
}

 function keyPressed(){
	 if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body, ball.body.position,{x:65, y:-65});

	 }
 }
 
