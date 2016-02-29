"use strict";

var index = lib("../");

var Adaptor = lib("adaptor");

describe("index", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(index.adaptors).to.be.eql(["chip"]);
    });
  });

  describe("#dependencies", function() {
    it("is an array of supplied dependencies", function() {
      expect(index.dependencies).to.be.eql(["cylon-gpio", "cylon-i2c"]);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(index.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
