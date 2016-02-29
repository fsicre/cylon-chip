"use strict";

var Adaptor = require("./lib/adaptor");

module.exports = {
  adaptors: ["chip"],

  // Modules intended to be used with yours, e.g. ["cylon-gpio"]
  dependencies: ["cylon-gpio", "cylon-i2c"],

  adaptor: function(opts) {
    return new Adaptor(opts);
  }
};
