describe("Test", () => {
  for (let i = 0; i < 10; i++) {
    it(`wait${i}`, (done) => {
      setTimeout(done, 1000);
    });
  }
});
