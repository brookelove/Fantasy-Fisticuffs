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
      offset: offset,
      width: 100,
      height: 50,
    };
    this.context = context;
    this.framesCurrent = 8;
    this.framesElapsed = 0;
    this.framesHold = 10;

    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height / this.framesMax;
    };
  }
  drawAnimated() {
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

  update() {
    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
    this.drawAnimated();
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height - 80) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }

  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 100);
  }
}
