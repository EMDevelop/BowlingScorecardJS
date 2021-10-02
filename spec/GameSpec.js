describe("BowlingScorecard", function () {
  const game = new Game();

  it("Sums 1 score", function () {
    expect(game.score([[1]])).toBe(1);
  });

  it("Sums 2 scores", function () {
    expect(game.score([[1, 1]])).toBe(2);
  });

  it("Sums 3 scores from 2 frames", function () {
    expect(game.score([[1, 1], [1]])).toBe(3);
  });

  it("Sums a full game with 10 frames", function () {
    expect(
      game.score([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(20);
  });
});
