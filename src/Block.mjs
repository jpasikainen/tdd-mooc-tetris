export class Block {
  color;
  width;
  height;
  shape;

  constructor(color) {
    this.color = color;
    this.width = 1;
    this.height = 1;
    this.shape = [[this.color]];
  }
}
