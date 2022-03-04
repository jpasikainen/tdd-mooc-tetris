export class Board {
  width;
  height;
  board;
  fallingBlock;
  fallingBlockPos;
  landed;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(Array(this.height), () => new Array(this.width).fill("."));
    this.fallingBlock = null;
    this.fallingBlockPos = null;
    this.landed = Array.from(Array(this.height), () => new Array(this.width).fill("."));
  }

  hasFalling() {
    return this.fallingBlock !== null;
  }

  drop(block) {
    if (this.hasFalling()) throw "already falling";
    this.fallingBlock = block;
    let middle = Math.floor(this.width / 2) - Math.floor(block.width / 2);
    if (block.width > 1) middle -= 1;
    this.fallingBlockPos = [0, middle];
    //this.tick();
    this.renderBlock();
  }

  draw() {
    this.board = Array.from(Array(this.height), () => new Array(this.width).fill("."));
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.board[i][j] = this.landed[i][j];
      }
    }
  }

  renderBlock() {
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] === ".") continue;
        this.board[this.fallingBlockPos[0]+i][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
      }
    }
  }

  collides() {
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] === ".") continue;
        if (this.fallingBlockPos[0]+i >= this.height || this.fallingBlockPos[1]+j < 0 || this.fallingBlockPos[1]+j >= this.width
          || this.landed[this.fallingBlockPos[0]+i][this.fallingBlockPos[1]+j] !== "."
        ) {
          return true;
        }
      }
    }
    return false;
  }

  moveBlock() {
    const prevBoard = this.board;
    this.draw();
    if (this.collides()) {
      this.board = prevBoard;
      return false;
    }
    this.renderBlock();
    return true;
  }

  addLanded() {
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] !== ".") {
          this.landed[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
        }
      }
    }
  }

  tick() {
    if (this.fallingBlock === null) return;
    
    this.fallingBlockPos[0] += 1;
    if (!this.moveBlock()) {
      this.addLanded();
      this.fallingBlock = null;
      this.fallingBlockPos = null;
      this.draw();
    }
  }

  moveLeft() {
    this.fallingBlockPos[1] -= 1;
    return this.moveBlock();
  }

  moveRight() {
    this.fallingBlockPos[1] += 1;
    return this.moveBlock();
  }

  moveDown() {
    this.tick();
  }

  rotateLeft() {
    this.fallingBlock = this.fallingBlock.rotateLeft();
    if (!this.moveBlock()) {
      if (this.moveRight()) this.fallingBlock = this.fallingBlock.rotateLeft();
    }
  }

  rotateRight() {
    this.fallingBlock = this.fallingBlock.rotateRight();
    if (!this.moveBlock()) {
      if (this.moveLeft()) this.fallingBlock = this.fallingBlock.rotateRight();
    }
  }

  toString() {
    let drawn = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        drawn += this.board[i][j].toString();
      }
      drawn += "\n";
    }
    return drawn;
  }
}
