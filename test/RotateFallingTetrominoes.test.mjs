import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Rotating tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(Tetromino.T_SHAPE);
  });

  describe("when free space", () => {
    it("rotate left", () => {
      board.rotateLeft();
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
      );
    });
    it("rotate right", () => {
      board.rotateRight();
      expect(board.toString()).to.equalShape(
        `....T.....
         ....TT....
         ....T.....
         ..........
         ..........
         ..........`
      );
    });
    it("rotate left and right", () => {
      board.rotateRight();
      board.rotateLeft();
      board.rotateLeft();
      board.rotateLeft();
      board.rotateLeft();
      expect(board.toString()).to.equalShape(
        `....T.....
         ....TT....
         ....T.....
         ..........
         ..........
         ..........`
      );
    });
    it("land when rotated", () => {
      board.moveDown();
      board.moveDown();
      board.moveDown();
      board.moveDown();
      board.moveDown();
      board.drop(Tetromino.T_SHAPE);
      board.moveLeft();
      board.rotateRight();
      board.moveDown();
      board.moveDown();
      board.moveDown();
      expect(board.toString()).to.equalShape(
        `..........
         ..........
         ...T......
         ...TT.....
         ...TT.....
         ...TTT....`
      );
    })
  });
  describe("when no free space", () => {
    beforeEach(() => {
      board.moveLeft();
      for (let i = 0; i < 5; i++) {
        board.moveDown();
      }
      board.drop(Tetromino.T_SHAPE);
      board.moveLeft();
      for (let i = 0; i < 4; i++) {
        board.moveDown();
      }
      board.drop(Tetromino.T_SHAPE);
      board.rotateRight();
      board.moveLeft();
      board.moveLeft();
      board.moveLeft();
      board.moveLeft();
      board.moveDown();
      board.moveDown();
    });
    
    it("do not rotate left", () => {
      board.rotateLeft();
      expect(board.toString()).to.equalShape(
        `..........
         ..........
         T..T......
         TTTTT.....
         T..T......
         ..TTT.....`
      );
    });

    it("do not rotate right", () => {
      board.rotateLeft();
      expect(board.toString()).to.equalShape(
        `..........
         ..........
         T..T......
         TTTTT.....
         T..T......
         ..TTT.....`
      );
    });

    xit("wall kick if possible", () => {
      board.moveDown();
      board.rotateLeft();
      expect(board.toString()).to.equalShape(
        `..........
         ..........
         ...T......
         .TTTT.....
         TTTT......
         ..TTT.....`
      );
    });
  });
});
  