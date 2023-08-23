const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
// creates the black background for the game
context.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor(position) {
    // models the position of the sprites on the screen
    this.position = position;
  }
  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, 50, 150);
  }
}

const player = new Sprite({
  x: 0,
  y: 0,
});

player.draw();

const enemy = new Sprite({
  x: 400,
  y: 100,
});

enemy.draw();
console.log(player);

function animate() {
  //the ability to animate the objects frame by frame
  window.requestAnimationFrame(animate);
  console.log("START");
}
animate();
