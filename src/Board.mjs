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
    this.board = this.board.reverse();
    this.board.push(new Array(this.width).fill("."));
    this.board = this.board.reverse();
    this.board.pop();
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
