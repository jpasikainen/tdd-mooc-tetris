export class Randomizer {
  data;

  constructor() {
    this.data = [];
  }

  add(tetromino) {
    this.data.push(tetromino);
  }
}