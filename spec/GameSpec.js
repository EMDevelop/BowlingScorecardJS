describe("BowlingScorecard", function () {
  beforeEach(function () {
    game = new Game();
  });

  it("Sums 1 score", function () {
    expect(
      game.score([
        [1, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    ).toBe(1);
  });

  it("Sums 2 scores", function () {
    expect(
      game.score([
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    ).toBe(2);
  });

  it("Sums 3 scores from 2 frames", function () {
    expect(
      game.score([
        [1, 1],
        [1, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    ).toBe(3);
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

  it("sums a strike", function () {
    expect(
      game.score([
        [10],
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
    ).toBe(30);
  });

  it("2 consecutive strikes", function () {
    expect(
      game.score([
        [10],
        [10],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(49);
  });

  // To be refactored into input error messages
  // it("Sums 1 score", function () {
  //   expect(game.score([[1]])).toBe(1);
  // });

  // it("Sums 2 scores", function () {
  //   expect(game.score([[1, 1]])).toBe(2);
  // });

  // it("Sums 3 scores from 2 frames", function () {
  //   expect(game.score([[1, 1], [1]])).toBe(3);
  // });
});
