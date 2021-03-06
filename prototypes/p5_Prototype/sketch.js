// SURVIVAL MACHINES
// p5 prototype
// August Luhrs
// Sep. 2020

// based on Shiffman's Nature of Code Evolution Ecosystem:
// https://github.com/nature-of-code/noc-examples-p5.js/tree/master/chp09_ga/NOC_9_05_EvolutionEcosystem

let ecosystem;

function setup() {

  // createCanvas(windowWidth, windowHeight);
  ecosystem = new Ecosystem(25);
  // ecosystem = Ecosystem(25);
  createCanvas(ecosystem.width,ecosystem.height);
  ecosystem.name();
}

function draw() {
  background(200);
  
  ecosystem.run();
}