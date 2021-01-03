var helicopterIMG, helicopterSprite, packageIMG, packageSprite;
var packageBody,ground, leftdrop, rightdrop, middledrop;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {isStatic:true});
	World.add(world, packageBody);	
	
	leftdrop= new Zone(310,595,20,100);
	rightdrop= new Zone(490,595,20,100);
	middledrop= new Zone(width/2,635,200,20);
	ground= new Ground(width/2,655,width,10);
	
	Engine.run(engine);  
}

function draw() {
  background("#A9A9A9");
  
  leftdrop.display();
  rightdrop.display();
  middledrop.display();
  ground.display();

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}