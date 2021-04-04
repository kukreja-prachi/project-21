var bullet , wall;
var speed , weight , thickness


function setup() {
  createCanvas(1600,400);
   speed=random(55,90);
   weight=random(400,1500);
   thickness=random(22,83);

   bullet=createSprite(500, 200, 50, 50);
   bullet.velocityX = 5;
   wall=createSprite(1200,200,60,height/2)
   
  
}

function draw() {
  background("black");  
  
 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

   if(damage>10){
     wall.shapeColor = color(25 , 0 ,0);
   }

   if(damage<10){
     wall.shapeColor = color(0 , 25 ,0);
   }
 }


  


  drawSprites();


  hasCollided(bullet , wall);

  function hasCollided(lbullet , lwall){
    bulletRightEdge=lbullet.x+bullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
  }
}