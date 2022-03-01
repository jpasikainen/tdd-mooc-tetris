import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor() {
    Object.freeze(this);
  }

  static T_SHAPE = new RotatingShape(
    `.T.
     TTT
     ...`
  );
}
