//Create variables here
var database,dogImage,dogImage1,dog,foods,foodsStock
function preload()
{
  //load images here
  dogImage=loadImage("Dog.png")
  dogImage1=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  dog=createSprite(250,300,50,50)
  dog.addImage(dogImage)
  dog.scale=0.15
  foodsStock=database.ref('food')
  foodsStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW)){
  writeStock(foods)
  dog.addImage(dogImage1)
}
  drawSprites();
  //add styles here
fill(255,255,255)
text("food remaining: "+foods,170,200)
textSize(20)
text("press up arrow to feed the dog ",120,10,300,20)
}

function readStock(data){
  foods=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}


