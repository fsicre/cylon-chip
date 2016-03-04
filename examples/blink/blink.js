"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    chip: { adaptor: "chip" }
  },

  devices: {
    led: { driver: "led", pin: "STATUS" }
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();
