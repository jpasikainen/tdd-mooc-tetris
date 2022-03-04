import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Line clears when", () => {
  let board;
  it("complete line after tick", () => {
    board = new Board(4, 2);
    board.drop(Tetromino.I_SHAPE[0])
    board.moveDown();
    expect(board.toString()).to.equalShape(
      `....
       IIII`
    );
    board.tick();
    expect(board.toString()).to.equalShape(
      `....
       ....`
    );
  });
  it("even when full line not in the bottom", () => {
    board = new Board(5,4);
    board.drop(Tetromino.O_SHAPE[0]);
    board.moveLeft();
    board.moveDown();
    board.moveDown();
    expect(board.toString()).to.equalShape(
      `.....
       .....
       OO...
       OO...`
    );
    board.tick();
    board.drop(Tetromino.T_SHAPE[0]);
    board.moveRight();
    board.moveRight();
    board.moveDown();
    board.moveDown();
    board.tick();
    expect(board.toString()).to.equalShape(
      `.....
       .....
       .....
       OO.T.`
    );
  });
  it("full line and drop blocks above down", () => {
    board = new Board(5,4);
    board.drop(Tetromino.O_SHAPE[0]);
    board.moveLeft();
    board.moveDown();
    board.moveDown();
    board.tick();
    board.drop(Tetromino.T_SHAPE[2]);
    board.moveRight();
    board.moveRight();
    board.moveDown();
    board.moveDown();
    expect(board.toString()).to.equalShape(
      `.....
       .....
       OO.T.
       OOTTT`
    );
    board.tick();
    expect(board.toString()).to.equalShape(
      `.....
       .....
       .....
       OO.T.`
    );
  });
});