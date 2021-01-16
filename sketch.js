
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var launcher1;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1100,250,30);
	mango3=new Mango(1000,150,30);
	mango4=new Mango(900,200,30);
	mango5=new Mango(1200,200,30);

	tree=new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	
	stone = new Stone(220,330);

	launcher1 = new Launcher(stone.body,{x:230,y:400})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  launcher1.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	launcher1.fly();
}
