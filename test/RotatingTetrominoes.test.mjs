
import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import { Shapes } from "../src/Shapes.mjs";

function distinctOrientations(shape) {
  const distinct = new Set();
  let goingRight = shape;
  let goingLeft = shape;
  for (let i = 0; i < 10; i++) {
    distinct.add(goingRight.toString());
    goingRight = goingRight.rotateRight();
    distinct.add(goingLeft.toString());
    goingLeft = goingLeft.rotateLeft();
  }
  return distinct;
}

describe("The T shape", () => {
  const shape = Tetromino.T_SHAPE[0];

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(Shapes.T_SHAPE[0]);
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(Shapes.T_SHAPE[1]);
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(Shapes.T_SHAPE[3]);
  });

  it("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(4);
  });
});



describe("The I shape", () => {
  const shape = Tetromino.I_SHAPE[0];

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(Shapes.I_SHAPE[0]);
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(Shapes.I_SHAPE[1]);
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(Shapes.I_SHAPE[1]);
  });

  it("has 2 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(2);
  });
});



describe("The O shape", () => {
  const shape = Tetromino.O_SHAPE[0];

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(Shapes.O_SHAPE[0]);
  });

  it("cannot be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(Shapes.O_SHAPE[0]);
  });

  it("cannot be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(Shapes.O_SHAPE[0]);
  });

  it("has 1 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(1);
  });
});

