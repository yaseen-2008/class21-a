var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 car = createSprite(100,200,30,30);
 car.shapecolor = "red"

 wall = createSprite(1000,200,20,100);
 wall.shapecolor = "red"

 car.velocityX=3;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if(isTouching(fixedRect,wall)){
  car.velocityX= 0;
   
     
   }
 bounceOff(car,wall);
  drawSprites();
}
 