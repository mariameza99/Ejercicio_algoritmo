const p1 = {x:170, y:100}
const p2 = {x:270, y:200}
const p3 = {x:270, y:100}
const p4 = {x:170, y:200}
const p5 = {x:160, y:150}
const p6 = {x:290, y:150}
const p7 = {x:220, y:80}
const p8 = {x:220, y:220}
function setup() {
 createCanvas(windowWidth,windowHeight);
}

function draw() {
  rect(140, 65, 170, 170);
  rect(565, 65, 170, 170);
  rect(965, 65, 170, 170);
  text('EcuPP', 200, 35);
  ecuPP(p1, p2);
  ecuPP(p3, p4);
  ecuPP(p5, p6);
  ecuPP(p7, p8);
  //stroke("green")

  text('Dda', 640, 35);
  dda(600,100,700,200);
  dda(600,200,700,100);
  dda(580,150,720,150);
  dda(650,80,650,220);


  text('Bresenham', 1020, 35);
  bresenham(1000,100,1100,200);
  bresenham(1000,200,1100,100);
  bresenham(980,150,1120,150);
  bresenham(1050,80,1050,220);
}

function ecuPP(p1,p2) {

	const dx = p2.x - p1.x;
	const dy = p2.y - p1.y;
	let stepX = 1;
	let stepY = 1;

	if(dx == 0) {
		if(dy < 0) {
			stepY = -stepY;
		}

	let x = p1.x;
	let y = p1.y;

	while(y != p2.y){
		point(x,y);
		y += stepY;
	}

  } else {
  	const m = dy / dx;

  	const b = p1.y - m * p1.x;

  	if(dx < 0) stepX = -stepX;
  	let x = p1.x;
  	let y = p1.y;

  	while (x != p2.x) {
  		point(x,y);
  		x += stepX;
  		y = m * x + b;
  	}
  }
  noLoop();
}


function dda(x1, y1, x2, y2){
	let x = x1
	let y = y1
	let dx = x2 - x1
	let dy = y2 - y1
	let m = dy / dx
  let stepX = 1
  let stepY = 1

  if(dx == 0) {
		if(dy < 0) { stepY = -stepY }

  	while(y != y2){
  		point(x,y)
  		y += stepY
  	}
  } else if(dy == 0) {
		if(dx < 0) { stepX = -stepX }

  	while(x != x2){
  		point(x,y)
  		x += stepX
  	}
  } else {
    while(x <= x2) {
      point(x,y)
      x++
      y = y+m
    }
  }
}


function bresenham(x1,y1,x2,y2) {
  let x = x1
	let y = y1
	let dx = x2 - x1
	let dy = y2 - y1
  let m = dy / dx

  let ddx = 2*dx
  let ddy = 2*dy
  let dy2dx2 = ddy-ddx
  let dx2dy2 = ddx-ddy


  if( m < 1) {
    let p = ddy - dx

    for (k=0; k < dx; k++) {
      if(p < 0) {
        x++
        if(m != 0) {
          y--
        }
        p+=ddy
        point(x,y)
      } else {
        x++
        y++
        p+=dy2dx2
        point(x,y)
      }
    }
  } else if( m >= 1) {
    let p = ddx -dy
    for (k=0; k < dy; k++) {
      if(p < 0) {
        y++
        p+=ddx
        point(x,y)
      } else {
        x++
        y++
        p+=dx2dy2
        point(x,y)
      }
    }
  }

}











