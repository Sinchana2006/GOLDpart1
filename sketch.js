const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine, myWorld;
var block1;
var night, gate;

function preload() {
    char = loadImage("sprites/bear.png");
    groundImg = loadImage("sprites/ground.png");
    bgImg = loadImage("sprites/night.jpg");
    gateImg = loadImage("sprites/gate.png");
}

function setup() {
    createCanvas(3000, 1400);

    myEngine = engine.create();
    myWorld = myEngine.world;
    block1 = new Block(150,150);
    block2 = new Block(250,300);
    block3 = new Block(760,322);
    block4 = new Block(356,549);
    block5 = new Block(610,400);
    bear = bodies.circle(100,600,150);
    world.add(myWorld,bear);
    ground = bodies.rectangle(748,680,1500,5,{isStatic:true});
    world.add(myWorld,ground);
    imageMode(CENTER);
    ellipseMode(RADIUS);

      gate = createSprite(1104,391,10,20);
    gate.addImage(gateImg);
    gate.scale = 500;
    
    }   

function draw(){
    
    background(bgImg);
    bgImg.scale = 1000;

    engine.update(myEngine);
    Matter.Body.setVelocity(block1.body,{x:random(3,-3),y:0});
   // Matter.Body.setVelocity(block2.body,{x:random(3,-2),y:0});
    //Matter.Body.setVelocity(block3.body,{x:random(2,-3),y:random(-1,0)});
   // block1.display();
    //block2.display();
    //block3.display();
  //  block4.display();
  //  block5.display();
    image(groundImg,ground.position.x, ground.position.y, 1500,100);
    fill("white");
    text('x:'+mouseX+',y:'+mouseY,mouseX,mouseY);
    image(char, bear.position.x, bear.position.y, 270,250);

   // fill("white");
   // textSize(50);
   // text("Score :",1142,70);

  
}

//function keyPressed(){
    //if(keyCode === 38){
       // Matter.Body.setVelocity(bear,{x:0,y:-13});
        //block4.destroy();
  //  }

   
   // if(keyCode === 39){
   //     Matter.Body.setVelocity(bear,{x:10,y:0});
   // }

   // if(keyCode === 37 ){
    //    Matter.Body.setVelocity(bear,{x:-10,y:0});
  //  }


