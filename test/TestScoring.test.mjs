import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Score } from "../src/Score.mjs";

describe("Score when", () => {
  let score;
  beforeEach(() => {
    score = new Score();
  });
  it("line is cleared", () => {
    score.linesCleared(1);
    expect(score.score).to.equal(40)
  });
  it("multiple lines are cleared", () => {
    score.linesCleared(1);
    score.linesCleared(4);
    expect(score.score).to.equal(1240)
  });
  it("level is increased", () => {
    score.linesCleared(4);
    score.linesCleared(4);
    score.linesCleared(4);
    expect(score.score).to.equal(3600)
  });
});