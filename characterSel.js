document.addEventListener("DOMContentLoaded", function () {
  const leftTeamChar = leftTeam;
  const rightTeamChar = rightTeam;

  let createCharacterEl = (character) => {
    const characterEl = document.createElement("div");
    characterEl.classList.add("character");
    characterEl.dataset.char = character.character_name;

    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = 250;
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

  let populateCharacterBoxes = (teamChar, teamSelector) => {
    const characterBox = document.querySelector(`.${teamSelector} section`);

    teamChar.forEach((character) => {
      const { characterEl, context } = createCharacterEl(character);
      characterBox.appendChild(characterEl);
      new Standby({ ...character, context }); // Pass both character and context
    });
  };

  populateCharacterBoxes(leftTeamChar, 'choosenChar[data-char="char1"]');
  populateCharacterBoxes(rightTeamChar, 'choosenChar[data-char="char2"]');
});
