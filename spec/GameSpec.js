describe("BowlingScorecard", function () {
  const bowling = new Bowling();

  it("Sums 1 score", function () {
    expect(bowling.score([[1]])).toBe(1);
  });

  it("Sums 2 scores", function () {
    expect(bowling.score([[1, 1]])).toBe(2);
  });
});
