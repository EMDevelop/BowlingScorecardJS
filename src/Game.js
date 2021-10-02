class Game {
  constructor() {
    this.frames = [];
    this.MAX_FRAMES = 10;
    this.userScores;
    this.frameLoop = 0;
  }

  score(userScores) {
    this.userScores = userScores;
    while (this.frameLoop < this.MAX_FRAMES) {
      this._loopFrames();
    }
    let totalScore = 0;
    userScores.forEach((frame) => {
      let frameTotal = frame.reduce(
        (firstScore, secondScore) => firstScore + secondScore,
        0
      );
      totalScore += frameTotal;
    });
    return totalScore;
  }

  _loopFrames() {
    this._createFrames(this.frameLoop);
    // this._sumFrames();
    this.frameLoop++;
  }

  _createFrames() {
    let frame = this._createFrameInstance(this.frameLoop);
    this.frames.push(frame);
  }

  _createFrameInstance() {
    return new Frame({
      frameNumber: this.frameLoop + 1,
      currentFrame: this.userScores[this.frameLoop + 1],
      followingFrameOne: this.userScores[this.frameLoop + 2],
      followingFrameTwo: this.userScores[this.frameLoop + 3],
    });
  }
}
