lines = [];
let bgColor;
let strokeColor;



function setup() {
  createCanvas(400, 400);
  bgColor = color(255,68,0);
  strokeColor = color(58, 255, 0);
  
  let index = 0
  
  for( let i=0; i<50; i++){
    for (let j=0; j<50; j++){
      
   let x1 = 10*(i+1)
   let y1 = 10*(j+1)
   let x2 = 10*(i+1)
   let y2 = 10*(j+1)
   
   lines[index] = new Line (x1, y1, x2, y2)
   index++;
    
    }
  }
}

function draw() {
  background(bgColor);
  
  for (let i = 0; i<lines.length; i++){
        
    
     lines[i].show();
     
     lines[i].move();
     
    
    }

  }

function mousePressed(){
    strokeColor = color(random(255), random(255), random(255));
    bgColor = color(random(255), random(255), random(255));
   
  }

  class Line {
    
    constructor(x1, y1, x2, y2){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
    
    show(){
      line (this.x1, this.y1, this.x2, this.y2);
      stroke(strokeColor);
      strokeWeight (4)
      
      }
      
   move(){
      
     this.x1 = this.x1 + random(-1,1);
     this.y1 = this.y1 + random(-1,1);
     this.x2 = this.x2 + random(-1,1);
     this.y2 = this.y2 + random(-1,1);
    
      
    
    }
  
  
}