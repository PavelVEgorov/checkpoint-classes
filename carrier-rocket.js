const solidPropellantRocketEngine = require('./solid-propellant-rocket-engine');

class carrierRocket extends solidPropellantRocketEngine {
  constructor(name, pecificImpulse, rocketPropellant, rocket, stages) {
    super(name, pecificImpulse, rocketPropellant);
    this.rocket = rocket;
    this.stages = stages;
  }
}

module.exports = carrierRocket;
