import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Line clears when", () => {
  let board;
  beforeEach(() => {
    board = new Board(2, 4);
    board.drop(new Tetromino.I_SHAPE[0])
    board.moveDown();
    expect(board.toString()).to.equalShape(
      `....
       TTTT`
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