class Frame {
  constructor(attributes) {
    this.frameNumber = attributes["frameNumber"];
    this.currentFrame = attributes["currentFrame"];
    this.followingFrameOne = attributes["followingFrameOne"];
    this.followingFrameTwo = attributes["followingFrameTwo"];
    this.total_score = 0;
  }

  calculateFrameTotal() {
    this.total_score += this.currentFrame.reduce(
      (firstScore, secondScore) => firstScore + secondScore,
      0
    );
  }
}
