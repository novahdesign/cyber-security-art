
let percents; // percentages not vuln

let r = 20; // set red value
let g = 5; // set green value
let b = 30; // set blue value
let y = 10; // start at the top

function preload() {
  // load data from file
  // temps = loadTable("data.csv", "csv", "header");
    // percents = loadTable("LOG4SHELL.csv", "csv", "header");
    percents = loadTable("CVE.csv", "csv", "header");

}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  
  for (let row = 0; row < percents.getRowCount(); row++) {
    // print PercentNotVuln values in console just for fun lol 
    print(percents.getString(row,1))
    
    // draw some lines for each percent
    // stroke(percents.getString(row,1))
    
    // set the colour slay based on x and y (x is row, 0. y is row, 1)
    stroke(r + r * 0.1 * percents.getString(row, 1), g * 0.1 * percents.getString(row,1), b *   0.5 *    percents.getString(row, 0));
   
    // set how thick the line shall be
    strokeWeight(5)
    
    // create the actual line
    line(0, y, width, height);
        line(height, y, 0, width);

        // line(0, y+5, width, y);
        //     line(0, y+10, width, y);
        //         line(0, y+400, 200, y+200);
    
    // print text
        if (percents.getString(row, 0) % 2 == 0) {
        textSize(20);
        fill(255, 255, 255);
        text(percents.getString(row, 0), 1, y)
      }
    



    // increment y per row
    y+=20

  }

}
