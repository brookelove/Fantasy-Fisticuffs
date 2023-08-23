const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
// creates the black background for the game
context.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.2;
class Sprite {
  //nesting the constructor like this promotes cleaner syntax
  constructor({ position, velocity }) {
    // models the position of the sprites on the screen
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }
  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, 50, 150, this.height);
  }
  update() {
    this.draw();
    this.position.y += this.velocity.y;

    // establishes the gravity
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 10,
  },
});

player.draw();

const enemy = new Sprite({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

enemy.draw();
console.log(player);

function animate() {
  //the ability to animate the objects frame by frame
  window.requestAnimationFrame(animate);
  //   context.clearRect(0, 0, canvas.width, canvas.height); // removes the paint effect of the code
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height); // removes the paint effect of the code
  player.update();
  enemy.update();
}
animate();
