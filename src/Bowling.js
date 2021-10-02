class Bowling {
  score(scores_list) {
    const scorecard = new Scorecard();
    const score = scorecard.sumScores(scores_list);
    return score;
  }
}
