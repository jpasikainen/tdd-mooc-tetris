import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Moving tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(Tetromino.T_SHAPE);
  });

  describe("dont clip", () => {
    beforeEach(() => {
      for (let i = 0; i < 10; i++) {
        board.moveDown();
      }
      board.drop(Tetromino.T_SHAPE);
      board.moveDown();
      board.moveDown();
    });
    it("when moving left", () => {
      board.moveRight();
      board.moveRight();
      board.moveDown();
      board.moveLeft();
      expect(board.toString()).to.equalShape(
        `..........
         ..........
         ..........
         ......T...
         ....TTTT..
         ...TTT....`
      );
    });
    it("when moving left", () => {
      board.moveLeft();
      board.moveLeft();
      board.moveDown();
      board.moveRight();
      expect(board.toString()).to.equalShape(
        `..........
         ..........
         ..........
         ..T.......
         .TTTT.....
         ...TTT....`
      );
    });
  })

  describe("a falling tetrominoe", () => {    
    it("can be moved left", () => {
      board.moveLeft();
      expect(board.toString()).to.equalShape(
        `...T......
         ..TTT.....
         ..........
         ..........
         ..........
         ..........`
      );
    });
    it("can be moved right", () => {
      board.moveRight();
      expect(board.toString()).to.equalShape(
        `.....T....
         ....TTT...
         ..........
         ..........
         ..........
         ..........`
      );
    });
    it("can be moved down", () => {
      board.moveDown();
      expect(board.toString()).to.equalShape(
        `..........
         ....T.....
         ...TTT....
         ..........
         ..........
         ..........`
      );
    });
    it("stops on left border", () => {
      board.moveLeft();
      board.moveLeft();
      board.moveLeft();
      board.moveLeft();
      board.moveLeft();
      expect(board.toString()).to.equalShape(
        `.T........
         TTT.......
         ..........
         ..........
         ..........
         ..........`
      );
    });
    it("stops on right border", () => {
      board.moveRight();
      board.moveRight();
      board.moveRight();
      board.moveRight();
      board.moveRight();
      expect(board.toString()).to.equalShape(
        `........T.
         .......TTT
         ..........
         ..........
         ..........
         ..........`
      );
    });
    it("stop on the bottom", () => {
      for (let i = 0; i < 12; i++) {
        board.moveDown();
      }
      expect(board.toString()).to.equalShape(
        `..........
         ..........
         ..........
         ..........
         ....T.....
         ...TTT....`
      );
    });
  });
});
