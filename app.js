let health = 100
document.getElementById('header').innerHTML = `HEALTH: ${health}`
let dead = false

let attacks = {
  slap: {
    damage: 1
  },
  punch: {
    damage : 5 
  },
  kick: {
    damage: 10
  }
}

function attack(type){
  let dam = attacks[type]
  console.log('slap')
  health -= dam.damage;
  document.getElementById('header').innerHTML = `HEALTH: ${health}`
  checkHealth()
}

function checkHealth(){
   if(health<=0) {   
     health = 0 
     document.getElementById('header').innerHTML = `HEALTH: ${health}`
     dead=true
     deathMessage()
   }
}

function deathMessage(){
  document.getElementById('death').innerHTML = `<img src="https://images.unsplash.com/photo-1528194663420-bfa489364cb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80" alt="" > 
  <h1>DEATH</h1>`

  document.getElementById('new').classList.remove('hidden')
  document.getElementById('attack').classList.add('hidden')
  blood()  
}


let c = Sketch.create({autoclear: false})
function blood(){
  
  if(dead){
     document.getElementById('sketch-0').classList.remove('hidden')
     drops = [],
  dropCount = 75,
  Drop = function() {
    this.x = random(0,c.width);
    this.radius = random(2.5,5);
    this.y = -this.radius - random(10,50);
    this.vy = this.radius/3;
    this.r = ~~random(240,255);
    this.g = ~~random(0,20);
    this.b = ~~random(0,20);
  };
c.update = function() {
var d = drops.length;
while(d < dropCount) {
  var drop = new Drop();
  drops.push(drop);
  d++;
}
while(d--) {
  var drop = drops[d];
  drop.y += drop.vy;
  if(drop.y - drop.radius > c.height) {
    drops.splice(d,1);
  }
}
}
c.draw = function() {
var d = drops.length;
while(d--) {
  var drop = drops[d];
  c.beginPath();
  c.fillStyle = 'rgba('+drop.r+','+drop.g+','+drop.b+',.8)';
  c.arc(drop.x,drop.y,drop.radius,0,TWO_PI);
  c.fill();
}
}
  }else{
    var canvas = document.getElementById('sketch-0')
    canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
  canvas.sketch('actions', [])
  }
  
}

function newGame(){
  health = 100
  document.getElementById('header').innerHTML = `HEALTH: ${health}`
  document.getElementById('death').innerHTML = `<img src="./pictures/boxer.png" alt="" class=" img-fluid">`
  document.getElementById('new').classList.add('hidden')
  document.getElementById('attack').classList.remove('hidden')
  dead = false
  blood()
}
