function collision({ rect1, rect2 }) {
  return (
    rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x &&
    rect1.attackBox.position.x <= rect2.position.x + rect2.width &&
    rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y &&
    rect1.attackBox.position.y <= rect2.position.y + rect2.height
  );
}
let timeLeft = 60;
let timerEl;
let gameOver = false;
let displayResEl = document.getElementById("displayRes");
function whoWins({ player, enemy, timerEl }) {
  displayResEl.style.display = "flex";
  if (gameOver) {
    return;
  }
  clearTimeout(timerEl);

  if (player.health === enemy.health) {
    displayResEl.innerHTML = "Tie";
  } else if (player.health > enemy.health) {
    displayResEl.innerHTML = "Player 1 Wins";
  } else if (player.health < enemy.health) {
    displayResEl.innerHTML = "Player 2 Wins";
  }
  gameOver = true;
}
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
