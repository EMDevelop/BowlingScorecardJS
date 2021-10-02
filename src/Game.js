class Game {
  constructor() {
    this.frames = [];
  }

  score(scores_list) {
    let totalScore = 0;
    scores_list.forEach((frame) => {
      let frameTotal = frame.reduce(
        (firstScore, secondScore) => firstScore + secondScore,
        0
      );
      totalScore += frameTotal;
    });
    return totalScore;
  }

  //   _createFrames(frames) {
  //     frames.forEach((frame) => {
  //       this.frames.push(new Frame())
  //     });
  //   }
}
