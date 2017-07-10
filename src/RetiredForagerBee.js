class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.job = 'gamble';
    this.age = 40;
    this.canFly = false;
    this.color = 'grey';
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
