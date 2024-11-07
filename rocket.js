const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rocketImg = new Image();
rocketImg.src = "images/rocketImg.png"

let gameover = false;
let cnt = 10;

let rocket = {
    x:400,
    y:300
};

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "green";
    ctx.fillRect(0, 350, canvas.width, canvas.height)
    ctx.drawImage(rocketImg, rocket.x, rocket.y)

}

function update(){

    ctx.font = "50px serif";
    ctx.fillText("Countdown: " + cnt, 200, 50);
   
    if(cnt <= 0) {
     if(rocket.y < -500 ){
        cancelAnimationFrame(gameloop)
        clearInterval(countdown)
        gameover = true;
    }
    else{}
    rocket.y -= 1;
}
}

function time() {
    countdown = setInterval(printcountdown, 1000);
}

function gameloop(){
    draw();
    update();
    if (gameover == false) {
    requestAnimationFrame(gameloop);
    }
}

function printcountdown() {

    cnt -= 1;
    if (cnt <= 0) {
        clearInterval(countdown)
        }
} 

document.getElementById("btnStart").onclick = function(){
    time();
    gameloop();
    rocket.x = 400;
    rocket.y = 300;
    gameover = false;
    cnt = 10;
}
