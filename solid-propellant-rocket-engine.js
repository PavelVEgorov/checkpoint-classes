const rocketEngine = require('./rocket-engine');

class solidPropellantRocketEngine extends rocketEngine {
  constructor(name, pecificImpulse, rocketPropellant) {
    super(pecificImpulse, rocketPropellant);
    this.name = name;
  }
}

module.exports = solidPropellantRocketEngine;
