var starImg,bgImg;
var star, starBody;
var fada, fadaImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    fadaImg = loadAnimation("fairyImage1.png","fairyImage2.png");
}
function setup(){
    createCanvas(800, 750);
    fada = createSprite(400,620);
    fada.addAnimation("ahoi",fadaImg);
    fada.scale = 0.2;
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    engine = Engine.create();
	world = engine.world;
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	Engine.run(engine);
}
function draw(){
    background(bgImg);
    if(keyCode === LEFT_ARROW){
        fada.x -= 4;
    }
    if(keyCode === RIGHT_ARROW){
        fada.x += 4;
    }
    if(star.x > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody, true);
    }
    drawSprites();
}