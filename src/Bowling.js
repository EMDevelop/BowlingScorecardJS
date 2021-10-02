class Bowling {
  score(scores_list) {
    const first = scores_list[0].reduce(
      (firstScore, secondScore) => firstScore + secondScore
    );
    const second = scores_list[1] ? scores_list[1][0] : null;
    return second ? first + second : first;
  }
}
