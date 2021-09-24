var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <= width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <= width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var i = 75; i <= width; i=i+50){
    plinkos.push(new Plinko(i,275));
  }
  
  //crea la cuarta fila de objetos plinko
  for (var i = 50; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,375));
  }

}
 


function draw() {
  background("black");
  text("Score:\n"+score+"\n\n :)", width/2,30);
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  //crea los objetos partícula
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    score=score+5;
  }


  //muestra las partículas 
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();
  }
}
