const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    piso = new Piso(600,height,1200,20);
    hammer = new Hammer(10,100);

    hule = new Hule(400,300,120,1200);

    hierro = new Hierro(700,300,120,170);

    piedra = new Piedra(900,300,50,80);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    piso.display(); //cafe
    hammer.display(); //naranja
    hule.display(); //azul
    hierro.display(); //NEGRO
    piedra.display(); //rojo

    
 
}