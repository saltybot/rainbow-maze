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