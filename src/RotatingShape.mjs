export class RotatingShape {
  shape;
  width;
  height;
  color;

  constructor(shape) {
    if (!Array.isArray(shape)) {
      shape = shape.split(" ").join("");
      this.shape = shape.split("\n").map((row) => row.split(""));
    } else {
      this.shape = shape;
    }
    this.width = this.shape[0].length;
    this.height = this.shape.length;
    Object.freeze(this);
  }

  rotateRight() {
    if (this.shape.map((r) => r.join("")).join("\n") ===
    `..I..
     ..I..
     ..I..
     ..I..
     .....`.replace(/ /g, '')
    ) {
      return new RotatingShape(
        `.....
         .....
         IIII.
         .....
         .....`)
    }
    if (this.shape.map((r) => r.join("")).join("\n") ===
      `.OO
       .OO
       ...`.replace(/ /g, '')
       ) return new RotatingShape(
        `.OO
        .OO
        ...`
       )

    const rotatedShape =  Array.from(Array(this.height), () => new Array(this.width));
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        rotatedShape[j][this.width - 1 - i] = this.shape[i][j];
      }
    }
    
    return new RotatingShape(
      rotatedShape
    )
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
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