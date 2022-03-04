import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Line clears when", () => {
  let board;
  beforeEach(() => {
    board = new Board(4, 2);
    board.drop(Tetromino.I_SHAPE[0])
    board.moveDown();
    expect(board.toString()).to.equalShape(
      `....
       IIII`
    );
  });
  it("complete line after tick", () => {
    board.tick();
    expect(board.toString()).to.equalShape(
      `....
       ....`
    );
  });
});