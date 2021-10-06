canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["1.jfif","2.jfif","3.jfif","4.jfif"];
randomnum = Math.floor(Math.random()*4);
console.log(randomnum);
roverwidth = 100;
roverheight = 90;
roverx = 10;
rovery = 10;
bg = nasa_mars_images_array[randomnum];
rover = "rover.png";
function uploadBackground() {
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roimg,roverx,rovery,roverwidth,roverheight);
}
function add() {
    bgimg = new Image();
    bgimg.onload=uploadBackground;
    bgimg.source=bg;
    roimg = new Image();
    roimg.onload=uploadrover;
    roimg.source=rover;
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    if(keyPressed == '40') {
        down();
        console.log("down");
    }
    if(keyPressed == '37') {
        left();
        console.log("left");
    }
    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}
function up() {
  if(rovery>=0){
     rovery = rovery - 10;
     console.log("when up arrow is pressed - x = "+ roverx +" | y = "+ rovery);
     uploadBackground();
     uploadrover();
  }
}
function down() {
  if(rovery<=500){
       rovery = rovery + 10;
       console.log("when down arrow is pressed - x = "+ roverx +" | y = "+ rovery);
       uploadBackground();
       uploadrover();
    }
}
function left() {
  if(roverx>=0){
       roverx = roverx - 10;
       console.log("when left arrow is pressed - x = "+ roverx +" | y = "+ rovery);
       uploadBackground();
       uploadrover();
    }
}
function right() {
  if(rovery<=700){
       roverx = roverx + 10;
       console.log("when right is pressed - x ="+ roverx +" | y = "+ rovery);
       uploadBackground();
       uploadrover();
    }
}