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

  it("returns hundredth digit number in words", function() {
    expect(getWords(127)).to.equal("one hundred twenty seven");
  });

  it("returns thousandth digit number in words", function() {
    expect(getWords(1513)).to.equal("one thousand five hundred thirteen");
  });

  it("returns ten thousandth digit number in words", function() {
    expect(getWords(11513)).to.equal("eleven thousand five hundred thirteen");
  });

  it("returns thirty thousandth digit number in words", function() {
    expect(getWords(31513)).to.equal("thirty one thousand five hundred thirteen");
  });

  it("returns thirty thousand in words", function() {
    expect(getWords(30000)).to.equal("thirty thousand");
  });

  it("returns thirty thousand seven hundred seventy seven in words", function() {
    expect(getWords(30777)).to.equal("thirty thousand seven hundred seventy seven");
  });

});
