export class Score {
  level;
  clearsOnThisLevel;
  score;

  constructor() {
    this.level = 0;
    this.clearsOnThisLevel = 0;
    this.score = 0;
  }

  linesCleared(lines) {
    if (lines === 1) this.score += 40 * (this.level + 1);
    if (lines === 2) this.score += 100 * (this.level + 1);
    if (lines === 3) this.score += 900 * (this.level + 1);
    if (lines === 4) this.score += 3000 * (this.level + 1);
  }
}