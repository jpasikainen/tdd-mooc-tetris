import { RotatingShape } from "./RotatingShape.mjs";
import { Shapes } from "./Shapes.mjs";

export class Tetromino {
  static T_SHAPE = new RotatingShape(Shapes.T_SHAPE);

  static I_SHAPE = new RotatingShape(Shapes.I_SHAPE);

  static I_SHAPE_ROT = new RotatingShape(Shapes.I_SHAPE_ROT);

  static O_SHAPE = new RotatingShape(Shapes.O_SHAPE);
}
