const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var ball;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1200,20);
    ground2 = new Ground(1010,300,300,20)
    ground3 = new Ground(610,450,300,20)
    ball = new Ball(150,350,80,80);
    Slingshot = new SlingShot(ball.body,{x:150,y:350})
   box1 = new Box (610,440,70,70)
   box2 = new Box (520,440,70,70) 
   box3 = new Box (700,440,70,70)
   box4 = new Box (570,305,70,70)
   box5 = new Box (640,305,70,70)
   box6 = new Box (610,150,70,70)
   
   box7 = new Box (1010,280,70,70)
   box8 = new Box (975,280,70,70)
   box9 = new Box (1045,280,70,70)
  
   box10 = new Box (975,100,70,70)
   box11 = new Box (1045,100,70,70)

   box12= new Box (1010,10,70,70)
   
   /*
   box13= new Box (900,100,70,70)
   box14= new Box (900,100,70,70)
   box15= new Box (900,100,70,70)
   box16= new Box (900,100,70,70)
   box17= new Box (900,100,70,70)
   box18= new Box (900,100,70,70)
   box19= new Box (900,100,70,70)
   box20= new Box (900,100,70,70)
   */

}    

function draw(){
        background("grey");
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();
    ball.display();
    Slingshot.display();
    box1.display();
   box2.display();
   box3.display();
   
   box4.display();
   box5.display();
  
   box6.display();
    
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   /*
  
   box13.display();
   box14.display(); 
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   */
  
   
}

function mouseDragged(){

      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}

    //function mouseDragged(){
           // Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
             //if (gameState!==="launched"){
       //}
    //}

    function mouseReleased(){
        Slingshot.fly();
        gameState = "launched";
    }

