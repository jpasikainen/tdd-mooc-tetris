export class Board {
  width;
  height;
  board;
  fallTicks;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(Array(this.height), () => new Array(this.width).fill("."));
    this.fallTicks = 0;
  }

  drop(block) {
    if (this.fallTicks !== 0) {
      throw "already falling";
    }
    this.fallTicks += 1;
    this.board[0][Math.floor(this.width / 2)] = block.color;
  }

  tick() {
    for (let i = 0; i < this.width; i++) {
      for (let j = this.height - 1; j > 0; j--) {
        if (this.board[j][i] === "." && this.board[j-1][i] !== ".") {
          this.board[j][i] = this.board[j-1][i];
          this.board[j-1][i] = ".";
        }
      }
    }
    this.fallTicks += 1;
    if (this.fallTicks === this.height) {
      this.fallTicks = 0;
    }
  }

  hasFalling() {
    return this.fallTicks === 0;
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
