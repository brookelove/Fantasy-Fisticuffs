class Sprite {
  constructor({ context, position, imageSrc, width, height }) {
    this.context = context;
    this.position = position;
    this.height = height || 150;
    this.width = width || 50;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  draw() {
    this.context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
  }
}
class AnimatedSprite {
  constructor({ context, position, imageSrc, scale = 1, framesMax = 1 }) {
    this.context = context;
    this.position = position;
    this.height = 50;
    this.width = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
  }
  draw() {
    this.context.drawImage(
      this.image,
      (this.framesCurrent * this.image.width) / this.framesMax,
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }
  update() {
    this.draw();
    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }
}

class Fighter extends AnimatedSprite {
  constructor({
    position,
    velocity,
    color = "red",
    offset,
    imageSrc,
    scale = 1,
    framesMax = 1,
    context,
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined },
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
    });
    this.velocity = velocity;
    this.lastKey;
    this.color = color;
    this.isAttacking;
    this.health = 100;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.context = context;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.sprites = sprites;

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
    console.log(sprites);
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height / this.framesMax;
    };
  }
  drawHorizontalAnimated() {
    this.context.drawImage(
      this.image,
      0,
      this.framesCurrent * this.height,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width * this.scale,
      this.height * this.scale
    );
  }
  animateFrames() {
    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update() {
    this.draw();
    this.animateFrames();
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

    this.context.fillRect(
      this.attackBox.position.x,
      this.attackBox.position.y,
      this.attackBox.width,
      this.attackBox.height
    );
    this.position.x += this.velocity.x;

    if (
      this.position.y + this.height + this.velocity.y >=
      canvas.height - 200
    ) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
    this.position.y += this.velocity.y;
  }

  attack() {
    console.log("attack");
    this.switchSprite("attack1");
    this.isAttacking = true;
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 100);
  }
  switchSprite(sprite) {
    if (
      this.image === this.sprites.attack1.image &&
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    )
      return;
    switch (sprite) {
      case "idle": {
        if (this.image != this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          this.framesCurrent = 0;
        }
        break;
      }
      case "run": {
        if (this.image != this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.framesCurrent = 0;
        }
        break;
      }
      case "jump": {
        if (this.image != this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.framesMax;
          this.framesCurrent = 0;
        }
        break;
      }
      case "fall": {
        if (this.image != this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.framesMax;
          this.framesCurrent = 0;
        }
        break;
      }
      case "attack1": {
        if (this.image != this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framesMax = this.sprites.attack1.framesMax;
          this.framesCurrent = 0;
        }
        break;
      }
    }
  }
}
