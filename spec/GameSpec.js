describe("BowlingScorecard", function () {
  const game = new Game();

  it("Sums 1 score", function () {
    expect(game.score([1])).toBe(1);
  });
});
