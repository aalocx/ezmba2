let osc, envelope;



function mousePressed() {
  userStartAudio();
}

function setup() {
  getAudioContext().suspend();
  
  createCanvas(640, 480);
  
  osc = new p5.SinOsc();
  osc.amp(0);
  osc.start();
  
  osc2 = new p5.SinOsc();
  osc2.amp(0);
  osc2.start();
  
  osc3 = new p5.SinOsc();
  osc3.amp(0);
  osc3.start();
  
  envelope = new p5.Env();
  envelope.setADSR(0.1, 0.1, 1, 1);
  envelope.setRange(1,0);
  
  envelope2 = new p5.Env();
  envelope2.setADSR(0.2, 0.1, 2, 4);
  envelope2.setRange(1,0);
  
  envelope3 = new p5.Env();
  envelope3.setADSR(0.05, 0.15, 3, 5);
  envelope3.setRange(1,0);
}

function draw() {
  background(255);
    let szavak = ['kattints','kattolj','kkkkkkkkkatt','nyomjad','kattogtasd gyorsan is' ];
let szo = random(szavak);
  
  if (mouseIsPressed) {
  let freq = map(mouseX, 0, width, 20, 800);
  osc.freq(freq);
  let amp = map(mouseY, 0, height, 0.01, 0.7);
  envelope.play(osc, 0, 0.1);
  fill(random(255),random(255),random(255));
  ellipse(mouseX+random(10),mouseY+random(10),20,20)
  } else {
    text(szo,mouseX,mouseY);
  }
   if (mouseIsPressed) {
  let freq = map(mouseX, 0, width, 600, 20);
  osc2.freq(freq);
  let amp = map(mouseY, 0, height, 0.01, 0.7);
  envelope2.play(osc2, 0, 0.1);
  fill(random(255),random(255),random(255));
  ellipse(mouseX+random(50),mouseY+random(50),20,20)
  } else {
text(szo,mouseX-random(50),mouseY-random(50));
  }
   if (mouseIsPressed) {
  let freq = map(mouseX, 0, width, 300, 80);
  osc3.freq(freq);
  let amp = map(mouseY, 0, height, 0.01, 0.7);
  envelope3.play(osc3, 0, 0.1);
  fill(random(255),random(255),random(255));
  ellipse(mouseX-random(50),mouseY-random(50),20,20)
  } else {
    text(szo,mouseX+random(50),mouseY+random(50));
  }
  
  
}