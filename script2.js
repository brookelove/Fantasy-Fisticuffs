const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.7;

context.fillRect(0, 0, canvas.width, canvas.height);

const background = new Sprite2({
  position: {
    x: 0,
    y: 0,
  },
  imgSrc: "gameAssets/background.png",
});
const shop = new Sprite2({
  position: {
    x: 650,
    y: 185,
  },
  imgSrc: "gameAssets/shop.png",
  scale: 2.3,
  framesMax: 6,
});

const player = new Fighter2({
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
    y: 0,
  },
  imgSrc: "gameAssets/MartialHero/Sprites/Idle.png",
  framesMax: 8,
  scale: 2,
  offset: {
    x: 130,
    y: 95,
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
      framesMax: 4,
    },
    jump: {
      imageSrc: "gameAssets/MartialHero/Sprites/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "gameAssets/MartialHero/Sprites/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "gameAssets/MartialHero/Sprites/Attack1.png",
      framesMax: 6,
    },
  },
  attackBox: {
    offset: {
      x: 110,
      y: 60,
    },
    width: 140,
    height: 50,
  },
});
player.draw();
const enemy = new Fighter2({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: -50,
    y: 0,
  },
  imgSrc: "gameAssets/MartialHero2/Sprites/Idle.png",
  framesMax: 4,
  scale: 2,
  offset: {
    x: 130,
    y: 106,
  },
  sprites: {
    idle: {
      imageSrc: "gameAssets/MartialHero2/Sprites/Idle.png",
      framesMax: 4,
    },
    run: {
      imageSrc: "gameAssets/MartialHero2/Sprites/Run.png",
      framesMax: 8,
    },
    damage: {
      imageSrc: "gameAssets/MartialHero2/Sprites/Take_Hit.png",
      framesMax: 3,
    },
    jump: {
      imageSrc: "gameAssets/MartialHero2/Sprites/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "gameAssets/MartialHero2/Sprites/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "gameAssets/MartialHero2/Sprites/Attack1.png",
      framesMax: 4,
    },
  },
  attackBox: {
    offset: {
      x: -95,
      y: 60,
    },
    width: 120,
    height: 50,
  },
});
enemy.draw();

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

countdown();

function animate() {
  window.requestAnimationFrame(animate); //creates frame by
  //frame animateion
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //setting up background
  background.update();
  shop.update();
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  //player movement
  // player.image = player.sprites.idle.image;
  player.switchSprite("idle");
  // player.switchSprite(idle);
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
    player.switchSprite("run");
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
    player.switchSprite("run");
  }
  // if (player.velocity.y === 0) {
  //   player.velocity.y += gravity;
  // } else
  if (player.velocity.y < 0) {
    // player.image = player.sprites.jump.image;
    // player.framesMax = player.sprites.jump.framesMax;
    player.switchSprite("jump");
  } else if (player.velocity.y > 0) {
    player.switchSprite("fall");
  }

  if (keys.arrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
    enemy.switchSprite("run");
  } else if (keys.arrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 5;
    enemy.switchSprite("run");
  } else if (keys.arrowUp.pressed && enemy.lastKey === "ArrowUp") {
    enemy.velocity.y = -10;
  } else {
    enemy.switchSprite("idle");
  }

  if (enemy.velocity.y < 0) {
    // enemy.image = enemy.sprites.jump.image;
    // enemy.framesMax = enemy.sprites.jump.framesMax;
    enemy.switchSprite("jump");
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite("fall");
  }

  // detect for collision && enemy gets hit

  //player collision
  if (
    collision({ rect1: player, rect2: enemy }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.damage();
    player.isAttacking = false;
    // enemy.health -= 20;
    document.getElementById("enemyHealth").style.width = enemy.health + "%";
    // console.log("player HIT");
  }

  //if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false;
  }

  //enemy collision
  if (
    collision({ rect1: enemy, rect2: player }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    // player.health -= 20;
    player.damage(); //player gets hit
    document.getElementById("playerHealth").style.width = player.health + "%";
    enemy.isAttacking = false;
  }

  //if enemy misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false;
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
      //   player.lastKey = "w";
      player.velocity.y = -20;
      break;
    case " ":
      player.attack();
      console.log(player.isAttacking);
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
      console.log("hitting player");
      enemy.attack();
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
      keys.a.pressed = false;
      break;
  }

  //   enemy keys
  switch (event.key) {
    case "ArrowRight":
      keys.arrowRight.pressed = false;
      enemy.lastKey = "ArrowRight";
      break;
    case "ArrowLeft":
      keys.arrowLeft.pressed = false;
      lastKey = "ArrowLeft";
      break;
  }
});
