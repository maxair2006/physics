  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  var engine, world;
  var object, ground,object1;
  function setup(){
   createCanvas(400,400);
   engine = Engine.create()
   world = engine.world;
   var b_option={restitution:1}
   object = Bodies.circle(200,200,20,b_option);
   object1 = Bodies.circle(230,0,20,b_option);
   World.add(world,object);
   World.add(world,object1);
   var g_option={isStatic:true}
  ground = Bodies.rectangle(200,350,400,20,g_option);
   World.add(world,ground);
  }
  function draw(){
  background(0);
  Engine.update(engine)
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20);
  ellipse(object1.position.x,object1.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  }