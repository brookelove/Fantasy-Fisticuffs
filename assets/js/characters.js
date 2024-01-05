let leftTeam = [
  {
    character_name: "MartialHero",
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
        imageSrc:
          "gameAssets/MartialHero/Sprites/Take_Hit-white-silhouette.png",
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
      death: {
        imageSrc: "gameAssets/MartialHero/Sprites/Death.png",
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
  },
  {
    character_name: "FantasyWarrior",
    imgSrc: "gameAssets/HeroKnight/Sprites/Idle.png",
    framesMax: 11,
    scale: 2,
    offset: {
      x: 130,
      y: 95,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/HeroKnight/Sprites/Idle.png",
        framesMax: 11,
      },
      run: {
        imageSrc: "gameAssets/HeroKnight/Sprites/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/HeroKnight/Sprites/TakeHit.png",
        framesMax: 4,
      },
      jump: {
        imageSrc: "gameAssets/HeroKnight/Sprites/Jump.png",
        framesMax: 3,
      },
      fall: {
        imageSrc: "gameAssets/HeroKnight/Sprites/Fall.png",
        framesMax: 3,
      },
      attack1: {
        imageSrc: "gameAssets/HeroKnight/Sprites/Attack1.png",
        framesMax: 7,
      },
      death: {
        imageSrc: "gameAssets/HeroKnight/Sprites/Death.png",
        framesMax: 11,
      },
    },
    // double check the attacj box measurements
    attackBox: {
      offset: {
        x: 110,
        y: 60,
      },
      width: 140,
      height: 50,
    },
  },
  {
    character_name: "FantasyWarrior",
    imgSrc: "gameAssets/FantasyWarrior/Sprites/Idle.png",
    framesMax: 10,
    scale: 2,
    offset: {
      x: 130,
      y: 95,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/FantasyWarrior/Sprites/Idle.png",
        framesMax: 10,
      },
      run: {
        imageSrc: "gameAssets/FantasyWarrior/Sprites/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/FantasyWarrior/Sprites/TakeHit.png",
        framesMax: 3,
      },
      jump: {
        imageSrc: "gameAssets/FantasyWarrior/Sprites/Jump.png",
        framesMax: 3,
      },
      fall: {
        imageSrc: "gameAssets/FantasyWarrior/Sprites/Fall.png",
        framesMax: 3,
      },
      attack1: {
        imageSrc: "gameAssets/FantasyWarrior/Sprites/Attack1.png",
        framesMax: 7,
      },
      death: {
        imageSrc: "gameAssets/FantasyWarrior/Sprites/Death.png",
        framesMax: 7,
      },
    },
    // double check the attacj box measurements
    attackBox: {
      offset: {
        x: 110,
        y: 60,
      },
      width: 140,
      height: 50,
    },
  },
  {
    character_name: "Huntress",
    imgSrc: "gameAssets/Huntress/Sprites/Idle.png",
    framesMax: 8,
    scale: 2,
    offset: {
      x: 130,
      y: 95,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/Huntress/Sprites/Idle.png",
        framesMax: 8,
      },
      run: {
        imageSrc: "gameAssets/Huntress/Sprites/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/Huntress/Sprites/TakeHit.png",
        framesMax: 3,
      },
      jump: {
        imageSrc: "gameAssets/Huntress/Sprites/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "gameAssets/Huntress/Sprites/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "gameAssets/Huntress/Sprites/Attack1.png",
        framesMax: 5,
      },
      death: {
        imageSrc: "gameAssets/Huntress/Sprites/Death.png",
        framesMax: 7,
      },
    },
    // double check the attacj box measurements
    attackBox: {
      offset: {
        x: 110,
        y: 60,
      },
      width: 140,
      height: 50,
    },
  },
];
let rightTeam = [
  {
    character_name: "MartialHero2",
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
      death: {
        imageSrc: "gameAssets/MartialHero2/Sprites/Death.png",
        framesMax: 7,
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
  },
  {
    character_name: "Wizard",
    imgSrc: "gameAssets/Wizard/Sprites/Idle.png",
    framesMax: 6,
    scale: 2,
    offset: {
      x: 130,
      y: 106,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/Wizard/Sprites/Idle.png",
        framesMax: 6,
      },
      run: {
        imageSrc: "gameAssets/Wizard/Sprites/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/Wizard/Sprites/Hit.png",
        framesMax: 4,
      },
      jump: {
        imageSrc: "gameAssets/Wizard/Sprites/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "gameAssets/Wizard/Sprites/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "gameAssets/Wizard/Sprites/Attack1.png",
        framesMax: 8,
      },
      death: {
        imageSrc: "gameAssets/Wizard/Sprites/Death.png",
        framesMax: 7,
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
  },
  {
    character_name: "EvilWizard",
    imgSrc: "gameAssets/EvilWizard2/Sprites/Idle.png",
    framesMax: 8,
    scale: 2,
    offset: {
      x: 130,
      y: 106,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/EvilWizard2/Sprites/Idle.png",
        framesMax: 8,
      },
      run: {
        imageSrc: "gameAssets/EvilWizard2/Sprites/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/EvilWizard2/Sprites/Take_Hit.png",
        framesMax: 3,
      },
      jump: {
        imageSrc: "gameAssets/EvilWizard2/Sprites/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "gameAssets/EvilWizard2/Sprites/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "gameAssets/EvilWizard/Sprites/Attack1.png",
        framesMax: 8,
      },
      death: {
        imageSrc: "gameAssets/EvilWizard2/Sprites/Death.png",
        framesMax: 7,
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
  },
  {
    character_name: "MedievalWarrior",
    imgSrc: "gameAssets/MedievalWarrior/Sprites/Idle.png",
    framesMax: 6,
    scale: 2,
    offset: {
      x: 130,
      y: 106,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/MedievalWarrior/Sprites/Idle.png",
        framesMax: 6,
      },
      run: {
        imageSrc: "gameAssets/MedievalWarrior/Sprites/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/MedievalWarrior/Sprites/Hit.png",
        framesMax: 3,
      },
      jump: {
        imageSrc: "gameAssets/MedievalWarrior/Sprites/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "gameAssets/MedievalWarrior/Sprites/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "gameAssets/MedievalWarrior/Sprites/Attack1.png",
        framesMax: 4,
      },
      death: {
        imageSrc: "gameAssets/MedievalWarrior/Sprites/Death.png",
        framesMax: 9,
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
  },
];
