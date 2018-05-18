var cant;
var radio;
var n, m;
var lasLineas = [];
var x, y;

function setup() {

  createCanvas(1280, 720);
  n = 50;
  m = 50;
  x = width / n;
  y = height / m;

  for (var i = 0; i<n; i++)
  {
    //lasLineas [i] = [];
    for (var j = 0; j<n; j++)
    {
      lasLineas.push(new lineas(i*x, y*j)) ;
    }
  }
}

function draw() {

  background(204);


  for (var i = 0; i < lasLineas.length; i++)
  {

    if (dist(lasLineas[i].x, lasLineas[i].y, mouseX, mouseY)< 50)
    {
      lasLineas[i].followMe();
    }

    lasLineas[i].dibuja();
  }
}

function lineas(x, y) {

  this.x = x;
  this.y = y;
  this.radio = 10;
  this.ang =radians( 0 );
  // console.log('x '+x + 'y '+y);

  this.dibuja = function () {
    push();
    translate(this.x, this.y);
    rotate(this.ang);
    line(0, 0, this.radio, 0);
    pop();
  }

  this.followMe = function () {
    this.ang = radians(rotationX);//(atan2(mouseY - this.y, mouseX - this.x)+PI);
    /*text('aqui estamos', 10, 50);
     text('angulo '+this.ang, 10, 100);*/
  }
}