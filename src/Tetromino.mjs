import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new RotatingShape(
    `.T.
     TTT
     ...`
  );

  static I_SHAPE = new RotatingShape(
    `.....
     .....
     IIII.
     .....
     .....`
  );

  static I_SHAPE_ROT = new RotatingShape(
    `..I..
     ..I..
     ..I..
     ..I..
     .....`
  );

  static O_SHAPE = new RotatingShape(
    `.OO
     .OO
     ...`
  );
}
