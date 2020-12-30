
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 
var division = []
var particles = []
var plinkos = []
var divisionHeight = 300;
var particle
var score = 0 
var gameState = "play"
var turn = 5

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(400, 800, 800, 20)
  for (var k=0; k <=innerWidth; k= k+80){
		division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  

  for (var j = 40; j <= width; j = j + 50)
	{
		plinkos.push(new Plinko(j, 75));
  }
  

	for (var j = 15; j <= width - 10; j = j + 50)
	{
		plinkos.push(new Plinko(j, 175));
  }

  for (var w = 40; w <= width; w = w + 50)
	{
		plinkos.push(new Plinko(w, 275));
  }
  

	for (var w = 15; w <= width - 10; w = w + 50)
	{
		plinkos.push(new Plinko(w, 375));
  }


 
  Engine.run(engine);
}

function draw() {
  background("black");  
  ground.display();
  noStroke();
  
  //if(frameCount % 60 === 0){
  //  particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
 // }


  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
 
  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

//  for(var l = 0; l < particles.length; l++){
  //  particles[l].display();
 // }
  fill(255);
  textSize(30);
  text("Score: " + score, 30, 30);
  text("Turns: " + turn, 600, 30);
  textSize(30);
  textSize(23)

  if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
        if (particle.body.position.x < 300) 
        {
        score = score + 500;      
        particle = null;
                               
        }


        else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
        {
        score = score + 100;
        particle=null;
       

        }
        else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
        {
        score = score + 200;
        particle=null;
        

         }      
              
        }
  
      }

  fill("white")
  text(" 500 ", 10, 550);
  text(" 500 ", 90, 550);
  text(" 500 ", 170, 550);
  text(" 500 ", 250, 550);
  text(" 100 ", 330, 550);
  text(" 100 ", 410, 550);
  text(" 100 ", 490, 550);
  text(" 200 ", 570, 550);
  text(" 200 ", 650, 550);
  text(" 200 ", 730, 550);


  if(gameState === "end"){
    textSize(80);
    fill(20, 255, 200);
    text("Game Over", 190, 250);
   

  
   }

   if(turn <= 0){
     gameState = "end"
   }
}




function mouseClicked(){
  if(gameState!=="end"){
  particle = new Particle(mouseX, 20, 10);
  turn = turn -1
}
}