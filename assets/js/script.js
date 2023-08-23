const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
// creates the black background for the game
context.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.7;
class Sprite {
  //nesting the constructor like this promotes cleaner syntax
  constructor({ position, velocity, color = "red", offset }) {
    // models the position of the sprites on the screen
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
    this.width = 50;
    this.lastKey;
    this.color = color;
    this.isAttacking;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: offset,
      width: 100,
      height: 50,
    };
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);

    //attackBox
    if (this.isAttacking) {
      context.fillStyle = "blue";
      context.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
  }
  update() {
    this.draw();
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // establishes the gravity
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }
  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 100);
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
  offset: {
    x: 0,
    y: 0,
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
  color: "green",
  offset: {
    x: -50,
    y: 0,
  },
});

enemy.draw();
console.log(player);
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  arrowLeft: {
    pressed: false,
  },
  arrowRight: {
    pressed: false,
  },
  arrowUp: {
    pressed: false,
  },
  arrowDown: {
    pressed: false,
  },
};

let lastKey;
function rectangularCollision({ rect1, rect2 }) {
  return (
    rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x &&
    rect1.attackBox.position.x <= rect2.position.x + rect2.width &&
    rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y &&
    rect1.attackBox.position.y <= rect2.position.y + rect2.height
  );
}

function animate() {
  //the ability to animate the objects frame by frame
  window.requestAnimationFrame(animate);
  //   context.clearRect(0, 0, canvas.width, canvas.height); // removes the paint effect of the code
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height); // removes the paint effect of the code
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;
  //playme movement
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
  } else if (keys.w.pressed && player.lastKey === "w") {
    player.velocity.y = -20;
  }

  //enemy movement
  if (keys.arrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
  } else if (keys.arrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 5;
  } else if (keys.arrowUp.pressed && enemy.lastKey === "ArrowUp") {
    enemy.velocity.y = -20;
  }

  //collision detection
  if (
    rectangularCollision({ rect1: player, rect2: enemy }) &&
    player.isAttacking
  ) {
    player.isAttacking = false;
    console.log("player HIT");
  }
  if (
    rectangularCollision({ rect1: enemy, rect2: player }) &&
    enemy.isAttacking
  ) {
    enemy.isAttacking = false;
    console.log("enemy HIT");
  }
}
animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      player.lastKey = "d";
      break;
    case "a":
      keys.a.pressed = true;
      player.lastKey = "a";
      break;
    case "w":
      keys.w.pressed = true;
      player.lastKey = "w";
      break;
    case " ":
      player.isAttacking = true;
      break;
    case "ArrowRight":
      keys.arrowRight.pressed = true;
      enemy.lastKey = "ArrowRight";
      break;
    case "ArrowLeft":
      keys.arrowLeft.pressed = true;
      enemy.lastKey = "ArrowLeft";
      break;
    case "ArrowUp":
      keys.arrowUp.pressed = true;
      enemy.lastKey = "ArrowUp";
      break;
    case "ArrowDown":
      keys.arrowDown.pressed = false;
      enemy.isAttacking = true;
      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "w":
      keys.w.pressed = false;
      lastKey = "w";
      break;
  }

  //   enemy keys
  switch (event.key) {
    case "ArrowRight":
      keys.arrowRight.pressed = false;
      lastKey = "ArrowRight";
      break;
    case "ArrowLeft":
      keys.arrowLeft.pressed = false;
      lastKey = "ArrowLeft";
      break;
    case "ArrowUp":
      keys.arrowUp.pressed = false;
      lastKey = "ArrowUp";
      break;
  }
});
