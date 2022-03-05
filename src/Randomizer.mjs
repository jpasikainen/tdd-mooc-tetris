export class Randomizer {
  data;
  currentPosition;

  constructor() {
    this.data = [];
    this.currentPosition = -1;
  }

  add(tetromino, amount) {
    for (let i = 0; i < amount; i++) this.data.push(tetromino);
    this.currentPosition -= 1;
  }

  next() {
    if (this.currentPosition < 1) {
      this.currentPosition = this.data.length - 1;
      return this.data[0];
    }
    const rand = Math.floor(Math.random() * this.data.length)
    const item = this.data[rand];
    this.data[rand] = this.data[this.currentPosition];
    this.data[this.currentPosition] = item;
    this.currentPosition--;
    return item;
  }
}