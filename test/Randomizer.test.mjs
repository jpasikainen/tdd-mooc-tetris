import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import { Randomizer } from "../src/Randomizer.mjs";

describe("Shuffle bag", () => {
  let randomizer;
  beforeEach(() => {
    randomizer = new Randomizer();
  });
  it("takes tetrominoes", () => {
    expect(randomizer.data.length).to.equal(0);
    randomizer.add(Tetromino.I_SHAPE, 1);
    expect(randomizer.data.length).to.equal(1);
  })
  it("returns a tetromino", () => {
    randomizer.add(Tetromino.I_SHAPE, 1);
    const tetromino = randomizer.next();
    expect(tetromino).to.equal(Tetromino.I_SHAPE);
  })
  it("doesnt empty", () => {
    randomizer.add(Tetromino.I_SHAPE, 1);
    randomizer.next();
    expect(randomizer.next()).to.equal(Tetromino.I_SHAPE);
  })
  it("returns I shape most likely when it's dominant", () => {
    randomizer.add(Tetromino.T_SHAPE, 1);
    randomizer.add(Tetromino.I_SHAPE, 100000);
    expect(randomizer.next()).to.equal(Tetromino.I_SHAPE);
  })
  it("returns T shape most likely when it's dominant after 1000 picks", () => {
    randomizer.add(Tetromino.I_SHAPE, 1);
    randomizer.add(Tetromino.T_SHAPE, 100000);
    for (let i = 0; i < 1000; i++) randomizer.next();
    expect(randomizer.next()).to.equal(Tetromino.T_SHAPE);
  })
});