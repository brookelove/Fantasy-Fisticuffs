const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
// creates the black background for the game
context.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.7;
const background = new Sprite({
  context: context,
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "gameAssets/image.png",
  width: 1024,
  height: 576,
});
const shop = new AnimatedSprite({
  context: context,
  position: {
    x: 700,
    y: 170,
  },
  imageSrc: "gameAssets/shop.png",
  scale: 2.5,
  framesMax: 6,
});

const tree1 = new Sprite({
  context: context,
  position: {
    x: 250,
    y: 370,
  },
  width: 60,
  height: 120,
  imageSrc: "gameAssets/lamp.png",
});

const player = new Fighter({
  context: context,
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 157,
  },
  sprites: {
    idle: {
      imageSrc: "gameAssets/MartialHero/Sprites/Idle.png",
      framesMax: 8,
    },
    run: {
      imageSrc: "gameAssets/MartialHero/Sprites/Run.png",
      framesMax: 8,
    },
    damage: {
      imageSrc: "gameAssets/MartialHero/Sprites/Take_Hit-white-silhouette.png",
      framesMax: 3,
    },
    jump: {
      imageSrc: "gameAssets/MartialHero/Sprites/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "gameAssets/MartialHero/Sprites/Fall.png",
      framesMax: 2,
    },
  },
  imageSrc: "gameAssets/MartialHero/Sprites/Idle.png",
  framesMax: 8,
  scale: 2,
});

const enemy = new Fighter({
  context: context,
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
    x: 0,
    y: 0,
  },
  imageSrc: "gameAssets/meowKnight/Idle.png",
  framesMax: 6,
});

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
let gameOver = false;

function whoWins({ player, enemy, timerEl }) {
  if (gameOver) {
    return;
  }
  clearTimeout(timerEl);
  if (player.health === enemy.health) {
    console.log("tie");
  } else if (player.health > enemy.health) {
    console.log("player 1 wins");
  } else if (player.health < enemy.health) {
    console.log("player 2 wins");
  }
  gameOver = true;
}

let timeLeft = 60;
let timerEl;
function countdown() {
  if (timeLeft > 0) {
    // clearTimeout(timerEl);
    timerEl = setTimeout(countdown, 1000);
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
  }
  if (timeLeft === 0) {
    whoWins({ player, enemy, timerEl });
  }
}
countdown();
function animate() {
  //the ability to animate the objects frame by frame
  window.requestAnimationFrame(animate);
  //   context.clearRect(0, 0, canvas.width, canvas.height); // removes the paint effect of the code
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height); // removes the paint effect of the code

  background.update();
  tree1.update();
  shop.update();
  player.update();
  // enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;
  // player.position.y += player.velocity.y;

  //player movement

  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
    player.switchSprite("run");
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
    player.switchSprite("run");
  } else {
    player.switchSprite("idle");
  }
  if (player.velocity.y === 0) {
    player.velocity.y += gravity;
  } else if (player.velocity.y < 0) {
    player.image = player.sprites.jump.image;
    player.framesMax = player.sprites.jump.framesMax;
  } else if (player.velocity.y > 0) {
    player.switchSprite("fall");
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
    enemy.health -= 20;
    document.getElementById("enemyHealth").style.width = enemy.health + "%";
    console.log("player HIT");
  }
  if (
    rectangularCollision({ rect1: enemy, rect2: player }) &&
    enemy.isAttacking
  ) {
    enemy.isAttacking = false;
    player.health -= 20;
    document.getElementById("playerHealth").style.width = player.health + "%";
    console.log("enemy HIT");
  }

  if (enemy.health <= 0 || player.health <= 0) {
    whoWins({ player, enemy, timerEl });
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
      // keys.w.pressed = true;
      // player.lastKey = "w";
      player.velocity.y = -15;
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
      enemy.velocity.y = -20;
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
