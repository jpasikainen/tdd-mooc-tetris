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
    const prevBoard = this.board;
    this.draw();
    this.fallingBlockPos[1] -= 1;
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] !== "." && j + this.fallingBlockPos[1] >= 0 && this.landed[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] === ".") {
          this.board[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
        } else if (j + this.fallingBlockPos[1] < 0 || this.landed[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] !== ".") {
          this.board = prevBoard;
          return;
        }
      }
    }
  }

  thrower() {
    throw this.fallingBlockPos[0]
  }

  moveRight() {
    const prevBoard = this.board;
    this.draw();
    this.fallingBlockPos[1] += 1;
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] !== "." && j + this.fallingBlockPos[1] < this.width && this.landed[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] === ".") {
          this.board[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
        } else if (j + this.fallingBlockPos[1] >= this.width || this.landed[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] !== ".") {
          this.board = prevBoard;
          return;
        }
      }
    }
  }

  moveDown() {
    this.tick();
  }

  rotateLeft() {
    const prevBoard = this.board;
    this.draw();
    this.fallingBlock = this.fallingBlock.rotateLeft();
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] !== "." && this.fallingBlockPos[1]+j > 0 && this.fallingBlockPos[1]+j < this.width) {
          this.board[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
        } else if (j + this.fallingBlockPos[1] >= this.width || this.landed[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] !== ".") {
          this.board = prevBoard;
          return;
        }
      }
    }
  }

  rotateRight() {
    const prevBoard = this.board;
    this.draw();
    this.fallingBlock = this.fallingBlock.rotateRight();
    for (let i = 0; i < this.fallingBlock.height; i++) {
      for (let j = 0; j < this.fallingBlock.width; j++) {
        if (this.fallingBlock.shape[i][j] !== "." && this.fallingBlockPos[1]+j > 0 && this.fallingBlockPos[1]+j < this.width) {
          this.board[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] = this.fallingBlock.shape[i][j];
        } else if (j + this.fallingBlockPos[1] >= this.width || this.landed[this.fallingBlockPos[0]+i-1][this.fallingBlockPos[1]+j] !== ".") {
          this.board = prevBoard;
          return;
        }
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
