import { RotatingShape } from "./RotatingShape.mjs";
import { Shapes } from "./Shapes.mjs";

export class Tetromino {
  static T_SHAPE = new RotatingShape(Shapes.T_SHAPE);

  static I_SHAPE = new RotatingShape(Shapes.I_SHAPE[0]);

  static O_SHAPE = new RotatingShape(Shapes.O_SHAPE);
}
