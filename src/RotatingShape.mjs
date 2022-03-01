export class RotatingShape {
  shape;
  width;
  height;

  constructor(shape) {
    if (!Array.isArray(shape)) {
      shape = shape.split(" ").join("");
      this.shape = shape.split("\n").map((row) => row.split(""));
    } else {
      this.shape = shape;
    }
    this.width = this.shape[0].length;
    this.height = this.shape.length;
    Object.freeze(this.shape);
    Object.freeze(this.width);
    Object.freeze(this.height);
  }

  // source https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript
  rotateRight() {
    const rotatedShape = this.shape;
    return new RotatingShape(
        rotatedShape[0].map((_, index) => rotatedShape.map(row => row[index]).reverse())
      )
  }

  rotateLeft() {
    const rotatedShape = this.shape;
    return new RotatingShape(
        rotatedShape[0].map((_, index) => rotatedShape.map(row => row[row.length - 1 - index]))
      )
  }

  toString() {
    let drawn = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        drawn += this.shape[i][j].toString();
      }
      drawn += "\n";
    }
    return drawn;
  }
}