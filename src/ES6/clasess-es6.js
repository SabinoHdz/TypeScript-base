(() => {
  class Avengers {
    // name;
    // power;
    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  const hulk = new Avengers("Hulk", 9000);
  console.log(hulk);

  class FlyingAvenger extends Avengers {
    // flying;
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const falcon = new FlyingAvenger("Falcon", 500);
  console.log(falcon);
})();
