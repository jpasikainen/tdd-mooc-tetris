export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(Array(width), () => Array(height));
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        this.board[i][j] = ".";
      }
    }
  }

  drop(block) {
    this.board[0][Math.floor(this.width / 2)] = "X";
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
