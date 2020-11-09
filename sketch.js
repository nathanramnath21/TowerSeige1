const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
var slingshot, ball;


function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
    world = engine.world;
  ground= new Ground(2000, 800, 4000, 40);
  stand1= new Ground(700,500,270,10);
  stand2= new Ground(1200,300,200,10);

  block1 = new Block(600,475,30,40);  
  block2 = new Block(630,475,30,40);
  block3 = new Block(660,475,30,40);
  block4 = new Block(690,475,30,40);
  block5 = new Block(720,475,30,40);
  block6 = new Block(750,475,30,40);
  block7 = new Block(780,475,30,40);
  block8 = new Block(810,475,30,40);

  ball = Bodies.circle(100,400,20);
  World.add(world,ball);

  slingshot= new SlingShot(this.ball, {x: 100, y:395})

}

function draw() {
  background(81, 50, 35); 

  drawSprites();
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  slingshot.display();
  ellipse(ball.position.x,ball.position.y,20);
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
