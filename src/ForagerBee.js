const Bee = require("./Bee");

class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super();

    this.age = 10;
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    return this.treasureChest.push(treasure);
  }
}

module.exports = ForagerBee;
