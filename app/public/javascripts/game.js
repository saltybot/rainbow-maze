const canvas = document.getElementById("game_canvas");
const ctx = canvas.getContext('2d');

var maze = new Image(800, 600);
//maze.src = "images/maze.png";
//maze.addEventListener('load', function() {
//    ctx.drawImage(maze, 100, 50);
//});
maze.onload = function() {
    ctx.drawImage(maze, 0, 0);
}
maze.src = 'images/maze2.png';
//maze.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
//maze.src = 'file:///C:/Users/pants/develop/rainbow-maze/maze.png';

//window.addEventListener('load', (event) => {
//    ctx.drawImage(maze, 10, 10);
//    ctx.beginPath();
//    ctx.moveTo(30, 96);
//    ctx.lineTo(70, 66);
//    ctx.lineTo(103, 76);
//    ctx.lineTo(170, 15);
//    ctx.stroke();
//});


var guard = document.getElementById("guard");
guard.style.position = "absolute";
guard.style.top = "370px";
guard.style.left = "620px";
var x = parseInt(guard.style.left);
var xOffset = 0;
var step = 0.5;

function gameLoop() {
    if (Math.abs(xOffset) >= 30) {
        step = -step;
    }
    xOffset += step;
    guard.style.left = x + xOffset + "px";

    window.requestAnimationFrame(gameLoop);
}

//window.requestAnimationFrame(gameLoop);
window.addEventListener('load', (event) => {
    var guard = document.getElementById("guard");
    var x = parseInt(guard.style.left);
    var xOffset = 0;
    var step = 1;
    gameLoop();
});