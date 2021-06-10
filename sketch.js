var fixedBox , movingBox

function setup() {


  createCanvas(800,400);

  fixedBox=createSprite(400, 200, 50, 50);

  movingBox=createSprite(200,200,80,80);

  fixedBox.debug=true;
  movingBox.debug=true;

  movingBox.velocityX= 3;

}

function draw() {
  background(255,255,255);  
  
  //movingBox.x=mouseX;
  //movingBox.y=mouseY;

  if (touch(fixedBox,movingBox)){

    fixedBox.shapeColor="red";
    movingBox.shapeColor="red";
  
  }
  else {
    fixedBox.shapeColor="green";
    movingBox.shapeColor="green";
  }

  drawSprites();


}

