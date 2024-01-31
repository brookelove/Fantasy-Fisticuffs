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
  // animate() {
  //   const animateFrame = () => {
  //     this.draw(this.context);
  //     this.update(this.context);
  //     if (!this.animationStopped) {
  //       // Add a condition to stop recursion
  //       requestAnimationFrame(animateFrame);
  //     }
  //     this.animate(); // Add this line to ensure continuous animation
  //   };

  //   animateFrame();
  // }
  update() {
    this.draw();
    this.framesElapsed++;
    this.animate();
  }
}
class Standby extends Sprite2 {
  constructor({
    position = { x: 0, y: 0 },
    velocity,
    color = "red",
    imgSrc,
    scale = 2,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    context,
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
    this.height = 50;
    this.context = context;
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
    this.animate();
  }
  animate() {
    const animateFrame = () => {
      this.draw(this.context);
      // this.animate();
      this.update(this.context);
      if (!this.animationStopped) {
        // Add a condition to stop recursion
        requestAnimationFrame(animateFrame);
      }
    };

    animateFrame();
  }
  draw(context) {
    context.clearRect(
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.sprites.idle.image.width / this.framesMax) * this.scale,
      this.sprites.idle.image.height * this.scale
    );
    const horizontalScale = (this.isLeftTeam ? -1 : 1) * this.scale;
    // context.scale(-1, 1);
    context.drawImage(
      this.image,
      this.framesCurrent * (this.sprites.idle.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }
  update(context) {
    // this.draw(context);
    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      this.framesCurrent = (this.framesCurrent + 1) % this.framesMax;
    }
    // this.animate();
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
    this.dead = false;

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }
  update() {
    this.draw();
    if (!this.dead) {
      this.animate();
    }

    //attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

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
  }

  damage() {
    this.health -= 10;
    console.log(this.health);
    if (this.health <= 0) {
      this.switchSprite("death");
    } else {
      this.switchSprite("damage");
    }
  }
  switchSprite(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1) {
        this.dead = true;
      }
      return;
    }
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
      case "death": {
        if (this.image != this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.framesMax;
          this.framesCurrent = 0;
          //         }
          break;
        }
      }
    }
  }
}
