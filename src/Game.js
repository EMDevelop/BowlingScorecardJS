class Game {
  score(scores_list) {
    return scores_list[0].reduce((firstScore, secondScore) => firstScore + secondScore);
  }
}
