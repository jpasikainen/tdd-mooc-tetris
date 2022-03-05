export class Randomizer {
  data;
  currentPosition;

  constructor() {
    this.data = [];
  }

  add(tetromino, amount) {
    for (let i = 0; i < amount; i++) this.data.push(tetromino);
    this.currentPosition -= 1;
  }

  next() {

  }
}