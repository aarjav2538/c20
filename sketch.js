var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(400,400,50,80);
  fixedRect.shapeColor="yellow";
  movingRect.velocityY=1;
  fixedRect.velocityY=-1;
}

function draw() {
  background(0,0,0);
  //movingRect.y=World.mouseY;
 // movingRect.x=World.mouseX;
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="red";
    
  }
  else{
    movingRect.shapeColor="blue";
    
  }
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
  && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=movingRect.velocityX*(-1);
  }
  if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.velocityY=movingRect.velocityY*(-1);
  fixedRect.velocityY=fixedRect.velocityY*(-1);
}
  drawSprites();
}