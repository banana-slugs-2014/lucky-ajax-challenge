describe("Die", function() {

  it("should have a .initialize function", function() {
    expect(Die.initialize).toBeDefined();
  });

  it("should have a .roll function", function() {
    expect(Die.rollDie).toBeDefined();
  });
  it("should have an .updateDie function", function() {
    expect(Die.updateDie).toBeDefined();
  });
  it("should have a .dieAjaxRequest function", function() {
    expect(Die.dieAjaxRequest).toBeDefined();
  });

  describe("roll die", function(){
    it("should be between 1 and 6", function(){
      expect(Die.rollDie()).toBeGreaterThan(0);
      expect(Die.rollDie()).toBeLessThan(7);
    });
  });

  describe("update die", function(){

  })
});

