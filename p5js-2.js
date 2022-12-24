
let percents; // percentages not vuln

let r = 200; // set red value
let g = 10; // set green value
let b = 300; // set blue value
let y = 10; // start at the top

function preload() {
  // load data from file
  // temps = loadTable("data.csv", "csv", "header");
    percents = loadTable("LOG4SHELL.csv", "csv", "header");

}

function setup() {
  createCanvas(400, 400);
  background(10);
  
  for (let row = 0; row < percents.getRowCount(); row++) {
    // print PercentNotVuln values in console just for fun lol 
    print(percents.getString(row,1))
    
    // draw some lines for each percent
    // stroke(percents.getString(row,1))
    stroke(r + r * percents.getString(row, 1), g, b *            percents.getString(row, 1));
    strokeWeight(1)
    line(0, y, width, 100);
    
    y+=1

  }

}
