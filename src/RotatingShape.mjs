import { Shapes } from "./Shapes.mjs";

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
    if (this.toString() === Shapes.I_SHAPE_ROT.split(" ").join("")+ "\n") return new RotatingShape(Shapes.I_SHAPE);
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
        drawn += this.shape[i][j];
      }
      drawn += "\n";
    }

    return drawn;
  }
}