document.addEventListener("DOMContentLoaded", function () {
  const leftTeamChar = leftTeam;
  const rightTeamChar = rightTeam;

  let chooseYourPlayer = (character, teamSide, div) => {
    let leftPEl = document.getElementById("leftPlayerName");
    let rightPEl = document.getElementById("rightPlayerName");
    //then put the
    const elementsWithSameTeam = document.querySelectorAll(`.${teamSide}`);
    elementsWithSameTeam.forEach((element) => {
      element.classList.remove("active_player");
    });
    //click on that div and then add in the active state for the button
    div.classList.add("active_player");
    if (teamSide.includes("left")) {
      //leftside gets name -> document
      leftPEl.textContent = character.character_name;
    } else {
      //right side gets name
      rightPEl.textContent = character.character_name;
    }
  };

  let createCharacterEl = (character, teamSide) => {
    const characterEl = document.createElement("div");
    characterEl.dataset.char = character.character_name;
    characterEl.addEventListener("click", () => {
      chooseYourPlayer(character, teamSide, characterEl);
    });
    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 250;
    const context = canvas.getContext("2d");
    characterEl.appendChild(canvas);

    const characterImage = new Image();
    characterImage.src = character.imgSrc;
    characterImage.onload = function () {
      context.drawImage(characterImage, 0, 0, canvas.width, canvas.height);
    };

    const charName = document.createElement("p");
    charName.textContent = character.character_name;
    characterEl;
    characterEl.appendChild(charName);
    return { characterEl, context };
  };

  //   let animateChar = (character) => {
  //     let player = new Standby({
  //       position: {
  //         x: 0,
  //         y: 0,
  //       },
  //       velocity: {
  //         x: 0,
  //         y: 0,
  //       },
  //       offset: {
  //         x: 0,
  //         y: 0,
  //       },
  //       imgSrc: character.imgSrc,
  //       framesMax: character.framesMax,
  //       scale: character.scale,
  //       offset: {
  //         x: 0,
  //         y: 0,
  //       },
  //       sprites: {
  //         idle: {
  //           imgSrc: character.sprites.idle.imgSrc,
  //           framesMax: character.sprites.idle.framesMax,
  //         },
  //       },
  //     });
  //     player.draw(character.context);
  //     player.animate();
  //     player.update(character.context);
  //   };

  let populateCharacterBoxes = (teamChar, teamSelector, teamSide) => {
    const characterBox = document.querySelector(`.${teamSelector} section`);

    teamChar.forEach((character) => {
      const { characterEl, context } = createCharacterEl(character, teamSide);
      characterEl.classList.add(teamSide);
      characterBox.appendChild(characterEl);
      new Standby({ ...character, context });
    });
  };

  populateCharacterBoxes(
    leftTeamChar,
    'choosenChar[data-char="char1"]',
    "leftTeam"
  );
  populateCharacterBoxes(
    rightTeamChar,
    'choosenChar[data-char="char2"]',
    "rightTeam"
  );
  window.addEventListener("storage", function (event) {
    if (event.key === "player_one" && event.key === "player_two") {
      console.log(`${event.key} has changed in local storage.`);
    }
  });
});
