class Frame {
  constructor(attributes) {
    this.frameNumber = attributes["frameNumber"];
    this.currentFrame = attributes["currentFrame"];
    this.followingFrameOne = attributes["followingFrameOne"];
    this.followingFrameTwo = attributes["followingFrameTwo"];
    this.frameTotal = 0;
  }

  calculateFrameTotal() {
    if (this.currentFrame) {
      this.frameTotal += this.currentFrame.reduce(
        (firstScore, secondScore) => firstScore + secondScore,
        0
      );
    }
  }
}
