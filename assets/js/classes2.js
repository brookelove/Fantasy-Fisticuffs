class Sprite2 {
  constructor({
    position,
    imgSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
  }) {
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imgSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 6;
    this.offset = offset;
  }
  draw() {
    context.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  animate() {
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
    this.framesElapsed++;
    // if (this.framesElapsed % this.framesHold === 0) {
    //   if (this.framesCurrent < this.framesMax - 1) {
    //     this.framesCurrent++;
    //   } else {
    //     this.framesCurrent = 0;
    //   }
    // }
    this.animate();
  }
}
class Fighter2 extends Sprite2 {
  constructor({
    position,
    velocity,
    color = "red",
    imgSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined },
  }) {
    super({
      position,
      imgSrc,
      scale,
      framesMax,
      offset,
    });
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.color = color;
    this.isAttacking;
    this.health = 100;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 6;
    this.sprites = sprites;

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }
  update() {
    this.draw();
    this.animate();

    //attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

    //draw attack box
    // context.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // );

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height - 95) {
      this.velocity.y = 0;
      this.position.y = 331;
    } else {
      this.velocity.y += gravity;
    }
  }
  attack() {
    this.switchSprite("attack1");
    this.isAttacking = true;
    // setTimeout(() => {
    //   this.isAttacking = false;
    // }, 1000);
  }

  damage() {
    this.switchSprite("damage");
    this.health -= 10;
  }
  switchSprite(sprite) {
    //overriding all other animations with the attack animation
    if (
      this.image === this.sprites.attack1.image &&
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    )
      return;

    //overriding all other animations with the hit animation
    if (
      this.image === this.sprites.damage.image &&
      this.framesCurrent < this.sprites.damage.framesMax - 1
    )
      return;
    switch (sprite) {
      case "idle": {
        if (this.image != this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          //   this.framesCurrent = 0;
        }
        break;
      }
      case "run": {
        if (this.image != this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          //   this.framesCurrent = 0;
        }
        // this.image = this.sprites.run.image;
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
          //           this.framesCurrent = 0;
        }
        break;
      }
      case "attack1": {
        if (this.image != this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framesMax = this.sprites.attack1.framesMax;
          this.framesCurrent = 0;
          //         }
          break;
        }
      }
      case "damage": {
        if (this.image != this.sprites.damage.image) {
          this.image = this.sprites.damage.image;
          this.framesMax = this.sprites.damage.framesMax;
          this.framesCurrent = 0;
          //         }
          break;
        }
      }
    }
  }
}