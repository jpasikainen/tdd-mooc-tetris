import { RotatingShape } from "./RotatingShape.mjs";

export class Board {
  width;
  height;
  board;
  boardOnSamePosition;
  falling;
  prevBoard;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(Array(this.height), () => new Array(this.width).fill("."));
    this.boardOnSamePosition = 0;
    this.falling = false;
    this.prevBoard = null;
  }

  hasFalling() {
    return this.falling;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw "already falling";
    }
    this.falling = true;
    this.boardOnSamePosition = 0;
    
    if (block instanceof RotatingShape) {
      const middle = Math.floor(this.width / 2) - Math.floor(block.width / 2) - 1
      
      for (let i = 0; i < block.height; i++) {
        for (let j = 0; j < block.width; j++) {
          this.board[i][j + middle] = block.shape[i][j];
        }
      }
    } else {
      this.board[0][Math.floor(this.width / 2)] = block.color;
    }
  }

  tick() {
    for (let i = 0; i < this.width; i++) {
      for (let j = this.height - 1; j > 0; j--) {
        if (this.board[j][i] === "." && this.board[j-1][i] !== ".") {
          this.board[j][i] = this.board[j-1][i];
          this.board[j-1][i] = ".";
        }
        if (this.board[j][i] !== "." && this.board[j-1][i] !== ".") {
          break;
        }
      }
    }
    if (this.prevBoard && JSON.stringify(this.prevBoard) === JSON.stringify(this.board)) {
      this.boardOnSamePosition += 1;
      if (this.boardOnSamePosition === 2) {
        this.falling = false;
      }
    }
    this.prevBoard = this.board;
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
