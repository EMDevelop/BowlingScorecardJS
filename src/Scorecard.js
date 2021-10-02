class Scorecard {
  sumScores(frames) {
    const first = frames[0].reduce(
      (firstScore, secondScore) => firstScore + secondScore
    );
    const second = frames[1] ? frames[1][0] : null;
    return second ? first + second : first;
  }
}
