"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    beaglebone: { adaptor: "chip" }
  },

  devices: {
    led: { driver: "led", pin: "XIO-PO" }
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();
