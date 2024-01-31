let leftTeam = [
  {
    character_name: "Martial Hero",
    imgSrc: "gameAssets/MartialHero/Sprites/Idle.png",
    framesMax: 8,
    scale: 2,
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
      y: 90,
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
    character_name: "Hero Knight",
    imgSrc: "gameAssets/HeroKnight/Sprites/Idle.png",
    framesMax: 11,
    scale: 2,
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
      y: 75,
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
    attackBox: {
      offset: {
        x: 110,
        y: 60,
      },
      width: 60,
      height: 50,
    },
  },
  {
    character_name: "Fantasy Warrior",
    imgSrc: "gameAssets/FantasyWarrior/Sprites/Idle.png",
    framesMax: 10,
    scale: 2.5,
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 110,
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
        x: 40,
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
    scale: 2.6,
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
      y: 100,
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
      width: 80,
      height: 50,
    },
  },
];
let rightTeam = [
  {
    character_name: "Martial Hero2",
    imgSrc: "gameAssets/MartialHero2/Sprites/Idle.png",
    framesMax: 4,
    scale: 2,
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
      y: 100,
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
    imgSrc: "gameAssets/Wizard/Idle.png",
    framesMax: 6,
    scale: 1.3,
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
      y: 30,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/Wizard/Idle.png",
        framesMax: 6,
      },
      run: {
        imageSrc: "gameAssets/Wizard/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/Wizard/Hit.png",
        framesMax: 4,
      },
      jump: {
        imageSrc: "gameAssets/Wizard/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "gameAssets/Wizard/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "gameAssets/Wizard/Attack1.png",
        framesMax: 8,
      },
      death: {
        imageSrc: "gameAssets/Wizard/Death.png",
        framesMax: 7,
      },
    },
    attackBox: {
      offset: {
        x: -95,
        y: 60,
      },
      width: 70,
      height: 50,
    },
  },
  {
    character_name: "Evil Wizard",
    imgSrc: "gameAssets/EvilWizard2/Sprites/Idle.png",
    framesMax: 8,
    scale: 2,
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
      y: 180,
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
        imageSrc: "gameAssets/EvilWizard2/Sprites/TakeHit.png",
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
        imageSrc: "gameAssets/EvilWizard2/Sprites/Attack1.png",
        framesMax: 8,
      },
      death: {
        imageSrc: "gameAssets/EvilWizard2/Sprites/Death.png",
        framesMax: 7,
      },
    },
    attackBox: {
      offset: {
        x: -5,
        y: 60,
      },
      width: 20,
      height: 50,
    },
  },
  {
    character_name: "Medieval Warrior",
    imgSrc: "gameAssets/Medieval/Idle.png",
    framesMax: 6,
    scale: 1.5,
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
      y: 30,
    },
    sprites: {
      idle: {
        imageSrc: "gameAssets/Medieval/Idle.png",
        framesMax: 6,
      },
      run: {
        imageSrc: "gameAssets/Medieval/Run.png",
        framesMax: 8,
      },
      damage: {
        imageSrc: "gameAssets/Medieval/Hit.png",
        framesMax: 3,
      },
      jump: {
        imageSrc: "gameAssets/Medieval/Jump.png",
        framesMax: 2,
      },
      fall: {
        imageSrc: "gameAssets/Medieval/Fall.png",
        framesMax: 2,
      },
      attack1: {
        imageSrc: "gameAssets/Medieval/Attack1.png",
        framesMax: 4,
      },
      death: {
        imageSrc: "gameAssets/Medieval/Death.png",
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
