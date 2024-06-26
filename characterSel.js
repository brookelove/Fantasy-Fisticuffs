let storageEventListener = (event) => {
  const leftPlayer = localStorage.getItem("player_one");
  const rightPlayer = localStorage.getItem("player_two");
  let buttonEl = document.getElementById("buttonEl");
  if (leftPlayer && rightPlayer) {
    buttonEl.classList.remove("disabled");
    buttonEl.classList.add("clickMe");
  }
};
window.addEventListener("storage", storageEventListener);

document.addEventListener("DOMContentLoaded", function () {
  const leftTeamChar = leftTeam;
  const rightTeamChar = rightTeam;

  let chooseYourPlayer = (character, teamSide, div) => {
    let leftPEl = document.getElementById("leftPlayerName");
    let rightPEl = document.getElementById("rightPlayerName");

    const elementsWithSameTeam = document.querySelectorAll(`.${teamSide}`);
    elementsWithSameTeam.forEach((element) => {
      element.classList.remove("active_player");
    });
    //click on that div and then add in the active state for the button
    div.classList.add("active_player");
    if (teamSide.includes("left")) {
      leftPEl.textContent = character.character_name;
      localStorage.setItem("player_one", character.character_name);
    } else {
      rightPEl.textContent = character.character_name;
      localStorage.setItem("player_two", character.character_name);
    }
    storageEventListener();
  };

  let createCharacterEl = (character, teamSide) => {
    const characterEl = document.createElement("div");
    characterEl.dataset.char = character.character_name;
    characterEl.addEventListener("click", () => {
      chooseYourPlayer(character, teamSide, characterEl);
    });
    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = 250;
    canvas.height = 270;
    const context = canvas.getContext("2d");
    characterEl.appendChild(canvas);

    const characterImage = new Image();
    characterImage.src = character.imgSrc;
    console.log(characterImage);
    characterImage.onload = function () {
      context.drawImage(characterImage, 0, 0, canvas.width, canvas.height);
    };

    const charName = document.createElement("p");
    charName.textContent = character.character_name;
    characterEl;
    characterEl.appendChild(charName);

    return { characterEl, context };
  };

  let populateCharacterBoxes = (
    teamChar,
    teamSelector,
    teamSide,
    initialPositions
  ) => {
    const characterBox = document.querySelector(`.${teamSelector} section`);

    teamChar.forEach((character, index) => {
      const { characterEl, context } = createCharacterEl(character, teamSide);
      characterEl.classList.add(teamSide);
      characterEl.style.left = initialPositions[index].x + "px";
      characterEl.style.top = initialPositions[index].y + "px";
      characterBox.appendChild(characterEl);
      new Standby({ ...character, context });
    });
  };

  const leftTeamInitialPositions = [
    { x: 50, y: 50 },
    { x: 200, y: 50 },
    { x: 350, y: 50 },
    { x: 500, y: 50 },
  ];
  const rightTeamInitialPositions = [
    { x: 50, y: 300 },
    { x: 200, y: 300 },
    { x: 350, y: 300 },
    { x: 500, y: 300 },
  ];

  populateCharacterBoxes(
    leftTeamChar,
    'choosenChar[data-char="char1"]',
    "leftTeam",
    leftTeamInitialPositions
  );
  populateCharacterBoxes(
    rightTeamChar,
    'choosenChar[data-char="char2"]',
    "rightTeam",
    rightTeamInitialPositions
  );
});
let buttonEl = document.getElementById("buttonEl");
buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Button clicked!");
  if (buttonEl.classList.contains("clickMe")) {
    window.location.assign("game.html");
  }
});
