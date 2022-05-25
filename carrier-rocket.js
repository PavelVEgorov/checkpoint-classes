class carrierRocket {
  constructor(stages) {
    this.stages = [...stages];
  }
  detachStage() {
    this.stages = this.stages.slice(1);
   };

}


module.exports = carrierRocket;
