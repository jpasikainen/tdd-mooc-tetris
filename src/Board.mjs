export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board =`...\n...\n...\n`;
  }

  drop(block) {
    
  }

  toString() {
    return this.board;
  }
}
