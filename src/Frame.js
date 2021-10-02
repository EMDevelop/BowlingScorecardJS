class Frame {
  constructor(attributes) {
    this.frameNumber = attributes["frameNumber"];
    this.currentFrame = attributes["currentFrame"];
    this.followingFrameOne = attributes["followingFrameOne"];
    this.followingFrameTwo = attributes["followingFrameTwo"];
    this.frameTotal = 0;
  }

  calculateFrameTotal() {
    this._sumCurrentFrame();
    console.log(this.currentFrame);
    console.log(this._isStrike(this.currentFrame));
    this._isStrike(this.currentFrame) && this._handleStrike();
  }

  _sumCurrentFrame() {
    this.frameTotal += this.currentFrame.reduce(
      (firstScore, secondScore) => firstScore + secondScore,
      0
    );
  }

  _handleStrike() {
    this.frameTotal += this.followingFrameOne[0] + this.followingFrameOne[1];
  }

  _isStrike(frame) {
    return frame.length === 1;
  }
}
