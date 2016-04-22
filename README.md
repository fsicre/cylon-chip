# Cylon.js For C.H.I.P.

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT) using Node.js.

This module provides an adaptor for the C.H.I.P. $9 single-board Linux computer (http://getchip.com/). It uses the Chip-IO node module (https://github.com/sandeepmistry/node-chip-io) created by [@sandeepmistry](https://github.com/sandeepmistry), thank you!

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-chip.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-chip) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-chip/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-chip) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-chip/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-chip)

## How to Install

Installing Cylon.js on C.H.I.P. is easy, but must be done on the C.H.I.P. itself.

    $ npm install cylon cylon-chip cylon-gpio cylon-i2c

## How to Use

```javascript
var Cylon = require("cylon");

// Initialize the robot
Cylon.robot({
  connections: {
    chip: { adaptor: "chip" }
  },

  devices: {
    led: { driver: "led", pin: "XIO-PO" },
    button: { driver: "button", pin: "XIO-P1" }
  },

  work: function(my) {
    my.button.on('push', function() { my.led.toggle() });
  }
}).start();
```

The GPIO interface for the C.H.I.P currently supports pins `XIO-PO` thru `XIO-P7`. You can also use the `STATUS` pin for the built-in LED.

The I2C interface for the C.H.I.P currently supports I2C bus 1 using `TWI1-SCK` and `TWI1-SDA` only.

## How to Connect

You will likely want to connect your development machine to your C.H.I.P. while working on your code. You can do this easily, just by connecting to the C.H.I.P. over USB. Then, you can connect to the C.H.I.P. using Network-Over-USB, and upload driver or configuration changes.

### Credentials

By default, the C.H.I.P's login credentials are:

- **user:** `root`
- **pass:** `chip`

### Installing Node.js on the C.H.I.P.

Login to the C.H.I.P., and then run the following commands:

```
sudo apt-get update
sudo apt-get install curl git build-essentials
```

Now you are ready to install Node.js itself. You can either obtain the latest release from the official [Node.js downloads page](https://nodejs.org/en/download/) or use something like [Node Version Manager (nvm)](https://github.com/creationix/nvm).

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-chip/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-chip/blob/master/RELEASES.md
).

## License
Copyright (c) 2016 The Hybrid Group. Licensed under the Apache 2.0 license.
