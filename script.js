const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.7;
console.log("hello world");
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
let player_one = localStorage.getItem("player_one");
player_one = leftTeam.filter((item) => item.character_name === player_one);
console.log(player_one[0]);
const player = new Fighter2(player_one[0]);
player.draw();
let player_two = localStorage.getItem("player_two");
player_two = rightTeam.filter((item) => item.character_name === player_two);
console.log(player_two[0]);
const enemy = new Fighter2(player_two[0]);
// const enemy = new Fighter2({
//   position: {
//     x: 400,
//     y: 100,
//   },
//   velocity: {
//     x: 0,
//     y: 0,
//   },
//   color: "blue",
//   offset: {
//     x: -50,
//     y: 0,
//   },
//   imgSrc: "gameAssets/MartialHero2/Sprites/Idle.png",
//   framesMax: 4,
//   scale: 2,
//   offset: {
//     x: 130,
//     y: 106,
//   },
//   sprites: {
//     idle: {
//       imageSrc: "gameAssets/MartialHero2/Sprites/Idle.png",
//       framesMax: 4,
//     },
//     run: {
//       imageSrc: "gameAssets/MartialHero2/Sprites/Run.png",
//       framesMax: 8,
//     },
//     damage: {
//       imageSrc: "gameAssets/MartialHero2/Sprites/Take_Hit.png",
//       framesMax: 3,
//     },
//     jump: {
//       imageSrc: "gameAssets/MartialHero2/Sprites/Jump.png",
//       framesMax: 2,
//     },
//     fall: {
//       imageSrc: "gameAssets/MartialHero2/Sprites/Fall.png",
//       framesMax: 2,
//     },
//     attack1: {
//       imageSrc: "gameAssets/MartialHero2/Sprites/Attack1.png",
//       framesMax: 4,
//     },
//     death: {
//       imageSrc: "gameAssets/MartialHero2/Sprites/Death.png",
//       framesMax: 7,
//     },
//   },
//   attackBox: {
//     offset: {
//       x: -95,
//       y: 60,
//     },
//     width: 120,
//     height: 50,
//   },
// });

// enemy.draw();

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

  context.fillStyle = "rgba(255,255,255, 0.15)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  //player movement
  player.switchSprite("idle");
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
    player.switchSprite("run");
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
    player.switchSprite("run");
  }

  if (player.velocity.y < 0) {
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
    console.log("inside of collision damage");
    enemy.damage();
    player.isAttacking = false;

    // animate the enemy bar
    gsap.to("#enemyHealth", {
      width: enemy.health + "%",
    });
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
    player.damage();
    gsap.to("#playerHealth", {
      width: player.health + "%",
    });
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
  if (!player.dead) {
    switch (event.key) {
      case "d":
        keys.d.pressed = true;
        console.log("d");
        player.lastKey = "d";
        break;
      case "a":
        keys.a.pressed = true;
        console.log("d");
        player.lastKey = "a";
        break;
      case "w":
        console.log("d");
        player.velocity.y = -20;
        break;
      case " ":
        player.attack();
        console.log(player.isAttacking);
        break;
    }
  }
  if (!enemy.dead) {
    switch (event.key) {
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
