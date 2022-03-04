import { RotatingShape } from "./RotatingShape.mjs";
import { Shapes } from "./Shapes.mjs";

export class Tetromino {
  static T_SHAPE = [
    new RotatingShape(Shapes.T_SHAPE[0]),
    new RotatingShape(Shapes.T_SHAPE[1]),
    new RotatingShape(Shapes.T_SHAPE[2]),
    new RotatingShape(Shapes.T_SHAPE[3]),
  ];

  static I_SHAPE = [
    new RotatingShape(Shapes.I_SHAPE[0]),
    new RotatingShape(Shapes.I_SHAPE[1]),
    new RotatingShape(Shapes.I_SHAPE[2]),
    new RotatingShape(Shapes.I_SHAPE[3])
  ];

  static O_SHAPE = [
    new RotatingShape(Shapes.O_SHAPE[0]),
    new RotatingShape(Shapes.O_SHAPE[1]),
    new RotatingShape(Shapes.O_SHAPE[2]),
    new RotatingShape(Shapes.O_SHAPE[3]),
  ];
}
