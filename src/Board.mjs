import { RotatingShape } from "./RotatingShape.mjs";

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
    this.tick();
  }

  draw() {
    this.board = Array.from(Array(this.height), () => new Array(this.width).fill("."));
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.board[i][j] = this.landed[i][j];
      }
    }
  }

  moveBlockDown() {
    const prevBoard = this.board;
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] !== ".") {
          if (i + this.fallingBlockPos[0] < this.height && this.landed[this.fallingBlockPos[0]+i][this.fallingBlockPos[1]+j] === ".") {
            this.board[this.fallingBlockPos[0]+i][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
          } else if (!this.bottom) {
            this.board = prevBoard;
            return false;
          }
        }
      }
    }
    this.fallingBlockPos[0] += 1;
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
    this.draw();

    if (!this.moveBlockDown()) {
      this.addLanded();
      this.fallingBlock = null;
      this.fallingBlockPos = null;
      this.draw();
    }
  }

  moveLeft() {
    this.draw();
    this.fallingBlockPos[0] -= 1; // hack?
    this.fallingBlockPos[1] -= 1;
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        this.board[this.fallingBlockPos[0]+i][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
      }
    }
  }

  moveRight() {
    this.draw();
    this.fallingBlockPos[0] -= 1; // hack?
    this.fallingBlockPos[1] += 1;
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        this.board[this.fallingBlockPos[0]+i][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
      }
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
