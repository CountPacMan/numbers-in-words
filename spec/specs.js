describe('getWords', function() {
  it("returns single digit number", function() {
    expect(getWords(1)).to.equal("one");
  });

  it("returns a teen number", function() {
    expect(getWords(13)).to.equal("thirteen");
  });

  it("returns two digit number w/o singles digit", function() {
    expect(getWords(30)).to.equal("thirty");
  });

  it("returns two digit number", function() {
    expect(getWords(34)).to.equal("thirty four");
  });
});
