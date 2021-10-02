describe("BowlingScorecard", function () {
  const game = new Game();

  it("Sums 1 score", function () {
    expect(game.score([[1]])).toBe(1);
  });

  it("Sums 2 scores", function () {
    expect(game.score([[1, 1]])).toBe(2);
  });
});
