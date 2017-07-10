class ForagerBee extends Bee{
  constructor () {
    super();
    this.job = 'find pollen';
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
  }
  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
