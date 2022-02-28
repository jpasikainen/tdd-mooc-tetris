export class Board {
  width;
  height;
  board;
  falling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(Array(this.height), () => new Array(this.width).fill("."));
    this.falling = false;
  }

  drop(block) {
    if (this.falling) {
      throw "already falling";
    }

    this.board[0][Math.floor(this.width / 2)] = block.color;
    this.falling = true;
  }

  tick() {
    const prevBoard = this.board;
    for (let i = 0; i < this.width; i++) {
      for (let j = this.height - 1; j > 0; j--) {
        if (this.board[j][i] === "." && this.board[j-1][i] !== ".") {
          this.board[j][i] = this.board[j-1][i];
          this.board[j-1][i] = ".";
        }
      }
    }
    /*if (this.board === prevBoard) {
      this.falling = false;
    }*/
  }

  hasFalling() {
    return this.falling;
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
