//COVID19 Game
//Created by: Neeti Suggula on 1/1/2021
/*Objective of the game:
People all over the world are getting infected with covid-19.
In this game you will protect the people and keep them from getting infected.
Steps:
- use your mouse to move the bottle up and down
- Press the space bar to inject the shot from the bottle
- Don’t loose all the people or the game is over
*/
//Variables
var PLAY = 1;
var END = 2;
var START = 0;
var PAUSE = 3;
var gameState = START;
var ground, backgroundImage;
var vbottle, vbottleImage;
var greyVirus, greyImageVirus;
var pinkVirus, pinkImageVirus;
var blueVirus, blueImageVirus;
var yellowVirus, yellowImageVirus;
var redB, blueB, greenB, pinkB;
var shot, arrowImage, arrowGroup;
var score = 0,
  deaths = 0;
var dieSound, sirenSound;
var person1,
  Person1Img,
  person2,
  Person2Img,
  person3,
  Person3Img,
  person4,
  Person4Img,
  person5,
  Person5Img,
  person6,
  Person6Img,
  person7,
  Person7Img,
  person8,
  Person8Img;
var man1, man1Img;
var ambulance1,
  ambulance2,
  ambulance3,
  ambulance4,
  ambulance5,
  ambulance6,
  ambulance7,
  ambulance8,
  ambulanceImg;
var awareness, awarenessImg;
var destruction = 0;
var restartImg;
var readMe, readMeImg;
var pauseImg, playImg, pauseButton, playButton ;
var one = 0,
  two = 0,
  three = 0,
  four = 0,
  five = 0,
  six = 0,
  seven = 0,
  eight = 0;

//let INTERVAL = 500
//let intervall = setInterval (function (){
//   requestAnimationFrame (draw)
//}, INTERVAL)
//This function is used to load images
function preload() {
  //Loads games images
  vbottleImage = loadImage("vaccinebottle.png");
  greyImageVirus = loadImage("coronavirus.png");
  pinkImageVirus = loadImage("coronavirus2.png");
  blueImageVirus = loadImage("coronavirus3.png");
  yellowImageVirus = loadImage("coronavirus4.png");

  //Loads my sound
  arrowImage = loadImage("vaccine.png");
  dieSound = loadSound("die.mp3");
  sirenSound = loadSound("siren3s.mp3");

  //Loads peoples image
  Person1Img = loadImage("Person1.png");
  Person2Img = loadImage("Person2.png");
  Person3Img = loadImage("Person3.png");
  Person4Img = loadImage("Person4.png");
  Person5Img = loadImage("Person5.png");
  Person6Img = loadImage("Person6.png");
  Person7Img = loadImage("Person7.png");
  Person8Img = loadImage("Person8.png");

  //Loads exrtas
  backgroundImage = loadImage("WorldMap.jpg");
  ambulanceImg = loadImage("Ambulance.png");
  awarenessImg = loadImage("Gameover.png");
  arrowImage = loadImage("vaccine.png");
  restartImg = loadImage("ResetIcon.png");
  readMeImg = loadImage("README..png");
  pauseImg = loadImage("PauseButton.png");
  playImg = loadImage("PlayButton.png");
}
//This function creates all the sprites
function setup() {
  //Creates the canvas
  createCanvas(windowWidth, windowHeight);

  //Creates the ground sprite
  ground = createSprite(0, 0, width, height + 350);
  ground.addImage("ground", backgroundImage);
  ground.x = ground.width / 2;
  ground.scale = 1.7;

  //Creates people sprite
  person1 = createSprite(width - 30, 30, 50, 50);
  person1.addImage("person1", Person1Img);

  person2 = createSprite(width - 30, 130, 50, 50);
  person2.addImage(Person2Img);

  person3 = createSprite(width - 30, 260, 50, 50);
  person3.addImage(Person3Img);

  person4 = createSprite(width - 30, 370, 50, 50);
  person4.addImage(Person4Img);

  person5 = createSprite(width - 30, 480, 50, 50);
  person5.addImage(Person5Img);

  person6 = createSprite(width - 30, 590, 50, 50);
  person6.addImage(Person6Img);

  person7 = createSprite(width - 30, 700, 50, 50);
  person7.addImage(Person7Img);

  person8 = createSprite(width - 30, 790, 50, 50);
  person8.addImage(Person8Img);

  //Creates the bottle sprite
  vbottle = createSprite(width - 90, 200, 50, 50);
  vbottle.addImage("vbottle", vbottleImage);
  vbottle.scale = 0.13;
  //score = 0;

  //Creates restart button
  restart = createSprite(width / 2, height / 8);
  restart.addImage("restart", restartImg);
  restart.scale = 0.05;

  //Creates awareness images
  awareness = createSprite(width / 2, height / 2);
  awareness.addImage("awareness", awarenessImg);
  awareness.scale = 0.7;

  //Creates README Image
  readMe = createSprite(width/2, height/2);
  readMe.scale = 1.5;
  readMe.addImage("readMe", readMeImg);

  pauseButton = createSprite(60, 30, 10, 10);
  pauseButton.addImage("pauseButton", pauseImg);
  pauseButton.scale = 0.1;

  playButton = createSprite(130, 30, 10, 10);
  playButton.addImage("playButton", playImg);
  playButton.scale = 0.07;

  //Creates group
  virusGroup = new Group();
  greyV = new Group();
  pinkV = new Group();
  blueV = new Group();
  yellowV = new Group();
  shotGroup = new Group();

  //all objects invisible except - readme
  //
  ground.visible = false;
  restart.visible = false;
  person1.visible = false;
  person2.visible = false;
  person3.visible = false;
  person4.visible = false;
  person5.visible = false;
  person6.visible = false;
  person7.visible = false;
  person8.visible = false;
  //  ambulance.visible = false;

  //  ambulance.visible = false;
}
//function keyDown(e) {
//  if (e.keyCode == 80) pauseGame();
////}
//readMe.visible=true;
//setTimeout(draw, 10000);
//holds Gamestate END and GameState PLAY
function draw() {
  background(0);

  if (gameState === START) {
    //new code added
    readMe.visible = true;
    ground.visible = false;
    restart.visible = false;
    person1.visible = false;
    person2.visible = false;
    person3.visible = false;
    person4.visible = false;
    person5.visible = false;
    person6.visible = false;
    person7.visible = false;
    person8.visible = false;
    vbottle.visible = false;
    //ambulance.visible = false;
    //shotGroup.visible = false;
    //virusGroup.visible = false;
    shotGroup.setVisibleEach(false);
    virusGroup.setVisibleEach(false);
    greyV.setVisibleEach(false);
    pinkV.setVisibleEach(false);
    blueV.setVisibleEach(false);
    yellowV.setVisibleEach(false);

    virusGroup.setVelocityEach(0, 0);
    shotGroup.setVelocityEach(0, 0);
    greyV.setVelocityEach(0, 0);
    pinkV.setVelocityEach(0, 0);
    blueV.setVelocityEach(0, 0);
    yellowV.setVelocityEach(0, 0);
    //ambulance.visible = false;
    if (touches.length > 0 || keyDown("space")) {
    if (mousePressedOver(readMe)) {
      readMe.visible = false;
      gameState = PLAY;
    }
    touches =[]
  }
}
 /* if (mousePressedOver(playButton)) {
    pauseButton.visible = true;
    playButton.visible = false;
    gameState = PLAY;
  }*/

  //Resumes game when paused
  if (touches.length > 0 || mousePressedOver(playButton)) {
    pauseButton.visible = true;
    playButton.visible = false;
    gameState = PLAY;
    touches=[];
  }
  //Game state play
  if (gameState === PLAY) {
    
    /*if (mousePressedOver(pauseButton)) {
      pauseButton.visible = false;
      playButton.visible = true;
      gameState = PAUSE;
    }*/

    //Pauses Game
   if (touches.length > 0 || mousePressedOver(pauseButton)) {
      pauseButton.visible = false;
      playButton.visible = true;
      gameState = PAUSE;
      touches=[];
    }

    //GameState pause makes all objects stop
    if (gameState === PAUSE) {
      virusGroup.setVelocityEach(0, 0);
      shotGroup.setVelocityEach(0, 0);
      greyV.setVelocityEach(0, 0);
      pinkV.setVelocityEach(0, 0);
      blueV.setVelocityEach(0, 0); 
      yellowV.setVelocityEach(0, 0);
      ground.velocityX = 0;
    } else {
      ground.velocityX = -4;
      if (ground.x < 0) {
        ground.x = ground.width / 2;
      }
    }
    //new code added
    ground.visible = true;
    restart.visible = true;
    person1.visible = true;
    person2.visible = true;
    person3.visible = true;
    person4.visible = true;
    person5.visible = true;
    person6.visible = true;
    person7.visible = true;
    person8.visible = true;
    vbottle.visible = true;
    //ambulance.visible = true;
    //shotGroup.visible = true;
    //virusGroup.visible = true;

    shotGroup.setVisibleEach(true);
    virusGroup.setVisibleEach(true);
    //ambulance.visible = true;

    //Background in motion

    //Druring the game the images should not be seen
    awareness.visible = false;
    restart.visible = false;
    readMe.visible =false;

    //Moves the bottle with the mouse

    function updateLog(y) {
      vbottle.y = y;
    }
    //this will add a litener to the document
    //touch move captures your movement
    //it helps us understand that the touch has been started
    //updateLog updates the postion
    document.addEventListener(
      "touchstart",
      function (e) {
        updateLog(e.changedTouches[0].pageY);
      },
      false
    );
    document.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
        updateLog(e.targetTouches[0].pageY);
      },
      false
    );

    //Moves the bottle with the mouse
    vbottle.y = mouseY;

    //Shot generation
    if (touches.length > 0 || keyDown("space")) {
      createshot();
      shot.y = vbottle.y;
      touches = [];
    }

    //generates virus at random
    var select_virus = Math.round(random(1, 4));

    //Insterts virus every 30 pixels
    if (World.frameCount % 30 == 0) {
      if (select_virus == 1) {
        greyVirusFn();
      } else if (select_virus == 2) {
        pinkVirusFn();
      } else if (select_virus == 3) {
        blueVirusFn();
      } else if (select_virus == 4) {
        yellowVirusFn();
      }
    }

    //This is what happens when the virus touches the person
    /*If the virus group touces the person the life time will be come zero causeing it to disapear.
  An ambulance is also generated and the deaths score increaces.*/

    if (virusGroup.isTouching(person1)) {
      person1.lifetime = 0;
      ambulance1 = createSprite(width - 30, person1.y, 50, 50);
      ambulance1.addImage(ambulanceImg);
      ambulance1.velocityX = -10;
      ambulance1.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;

      one = 1;
    }

    if (virusGroup.isTouching(person2)) {
      person2.lifetime = 0;
      ambulance2 = createSprite(width - 30, person2.y, 50, 50);
      ambulance2.addImage(ambulanceImg);
      ambulance2.velocityX = -10;
      ambulance2.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;
      two = 2;
    }

    if (virusGroup.isTouching(person3)) {
      person3.lifetime = 0;
      ambulance3 = createSprite(width - 30, person3.y, 50, 50);
      ambulance3.addImage(ambulanceImg);
      ambulance3.velocityX = -10;
      ambulance3.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;
      three = 3;
    }
    if (virusGroup.isTouching(person4)) {
      person4.lifetime = 0;
      ambulance4 = createSprite(width - 30, person4.y, 50, 50);
      ambulance4.addImage(ambulanceImg);
      ambulance4.velocityX = -10;
      ambulance4.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;
      four = 4;
    }
    if (virusGroup.isTouching(person5)) {
      person5.lifetime = 0;
      ambulance5 = createSprite(width - 30, person5.y, 50, 50);
      ambulance5.addImage(ambulanceImg);
      ambulance5.velocityX = -10;
      ambulance5.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;
      five = 5;
    }
    if (virusGroup.isTouching(person6)) {
      person6.lifetime = 0;
      ambulance6 = createSprite(width - 30, person6.y, 50, 50);
      ambulance6.addImage(ambulanceImg);
      ambulance6.velocityX = -10;
      ambulance6.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;
      six = 6;
    }
    if (virusGroup.isTouching(person7)) {
      person7.lifetime = 0;
      ambulance7 = createSprite(width - 30, person7.y, 50, 50);
      ambulance7.addImage(ambulanceImg);
      ambulance7.velocityX = -10;
      ambulance7.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;
      seven = 7;
    }
    if (virusGroup.isTouching(person8)) {
      person8.lifetime = 0;
      ambulance8 = createSprite(width - 30, person8.y, 50, 50);
      ambulance8.addImage(ambulanceImg);
      ambulance8.velocityX = -10;
      ambulance8.scale = 0.04;
      sirenSound.play();
      destruction = destruction + 1;
      deaths = deaths + 1;
      eight = 8;
    }

   /* if (gameState === PAUSE) {
      if (one > 0) ambulance1.velocityX = 0;
      if (two > 0) ambulance2.velocityX = 0;
      if (three > 0) ambulance3.velocityX = 0;
      if (four > 0) ambulance4.velocityX = 0;
      if (five > 0) ambulance5.velocityX = 0;
      if (six > 0) ambulance6.velocityX = 0;
      if (seven > 0) ambulance7.velocityX = 0;
      if (eight > 0) ambulance8.velocityX = 0;
    }*/

    if (destruction === 9) {
      console.log(destruction);
      gameState = END;
    }
    //if(person1.lifetime==0 && person2.lifetime==0 && person3.lifetime==0 && person4.lifetime==0 && person5.lifetime==0 && person6.lifetime==0 && person7.lifetime==0 && person8.lifetime==0){
    //gameState = END;
    //}
    //if(person1.lifetime==0 || person2.lifetime==0 || person3.lifetime==0 || person4.lifetime==0 || person5.lifetime==0 || person6.lifetime==0 || person7.lifetime==0 || person8.lifetime==0){
    // gameState = END;
    //}

    //If the Shot is touching the virus then both shot and virus gets destroyed
    if (shotGroup.isTouching(greyV)) {
      greyV.destroyEach();
      shotGroup.destroyEach();
      score = score + 1;
      dieSound.play();
    }
    if (shotGroup.isTouching(pinkV)) {
      pinkV.destroyEach();
      shotGroup.destroyEach();
      score = score + 1;
      dieSound.play();
    }

    if (shotGroup.isTouching(blueV)) {
      blueV.destroyEach();
      shotGroup.destroyEach();
      score = score + 1;
      dieSound.play();
    }

    if (shotGroup.isTouching(yellowV)) {
      yellowV.destroyEach();
      shotGroup.destroyEach();
      score = score + 1;
      dieSound.play();
    }
  }

  //Gamestate end; what happens when the game ends
  if (gameState === END) {
    restart.visible = true;
    awareness.visible = true;
    vbottle.lifetime = 0;
    shotGroup.destroyEach();
    virusGroup.destroyEach();
    ambulance1.lifetime = 0;
    ambulance2.lifetime = 0;
    ambulance3.lifetime = 0;
   // ambulance4.lifetime = 0;
    ambulance5.lifetime = 0;
    ambulance6.lifetime = 0;
    ambulance7.lifetime = 0;
    ambulance8.lifetime = 0;
    ground.lifetime = 0;
    person1.lifetime = 0;
    person2.lifetime = 0;
    person3.lifetime = 0;
    person4.lifetime = 0;
    person5.lifetime = 0;
    person6.lifetime = 0;
    person7.lifetime = 0;
    person8.lifetime = 0;
  }
  //what happens when restart image is pressed
  if (mousePressedOver(restart)) {
    reset();
  }

  //Draws the sprites
  drawSprites();
  //Score design
  fill("gold");
  stroke("black");
  textSize(20);
  text("Vaccines Given : " + score, 230, 30);
  fill("gold");
  stroke("black");
  textSize(20);
  text("Number of Infected : " + deaths, 600, 30);
  //text("NeeTi", 600, 30);
}
//what happens when restart image is pressed
//if (mousePressedOver(restart)) {
//  reset();
//  }
// Reset function to restart the game

let paused;
function gamePaused() {
  clearInterval(intervall);
  paused = true;
}
//const pause = document.getElementById('PauseButton').addEventListener('click', gamePaused)
function reset() {
  gameState = PLAY;
  restart.visible = false;
  awareness.visible = false;
  score = 0;
  deaths = 0;
  location.reload();
}

//pauses the game
//function pauseGame() {
//gamePaused = !gamePaused;
//if (!gamePaused) loop();
//}

//function loop() {
//if (gamePaused) return;
// draw();
// window.requestAnimationFrame(loop, canvas);
//Pres play}

//Creates shot when space is pressed
function createshot() {
  shot = createSprite(width - 130, 200, 10, 20);
  shot.lifetime = 150;
  shot.scale = 0.1;
  shot.velocityX = -6;
  shot.addImage("shot", arrowImage);
  shotGroup.add(shot);
}

//These functions Print at random, generates speed, and size
function greyVirusFn() {
  //var greyVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  var greyVirus = createSprite(0, Math.round(random(20, 800)), 10, 10);
  greyVirus.addImage(greyImageVirus);
  greyVirus.velocityX = 10;
  greyVirus.lifetime = width;
  greyVirus.scale = 0.06;
  greyV.add(greyVirus);
  virusGroup.add(greyVirus);
}

function pinkVirusFn() {
  //var pinkVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  var pinkVirus = createSprite(0, Math.round(random(20, 800)), 10, 10);
  pinkVirus.addImage(pinkImageVirus);
  pinkVirus.velocityX = 10;
  pinkVirus.lifetime = width;
  pinkVirus.scale = 0.06;
  pinkV.add(pinkVirus);
  virusGroup.add(pinkVirus);
}

function blueVirusFn() {
  //var blueVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  var blueVirus = createSprite(0, Math.round(random(20, 800)), 10, 10);
  blueVirus.addImage(blueImageVirus);
  blueVirus.velocityX = 10;
  blueVirus.lifetime = width;
  blueVirus.scale = 0.13;
  blueV.add(blueVirus);
  virusGroup.add(blueVirus);
}

function yellowVirusFn() {
  //var yellowVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  var yellowVirus = createSprite(0, Math.round(random(20, 800)), 10, 10);
  yellowVirus.addImage(yellowImageVirus);
  yellowVirus.velocityX = 10;
  yellowVirus.lifetime = width;
  yellowVirus.scale = 0.05;
  yellowV.add(yellowVirus);
  virusGroup.add(yellowVirus);
}
