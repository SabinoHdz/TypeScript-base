(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    // constructor(name: string, team: string, realName?: string)
    // constructor(name: string, team: string, realName?: string) {
    //   this.name = name;
    //   this.team = team;
    //   this.realName = realName;
    // }

    //forma corta
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio() {
      return `${this.name} (${this.team})`;
    }
    static getAvgAge() {
      return this.name;
    }
  }

  const antman: Avenger = new Avenger("Atnman", "Captain");
  console.log(antman);
  antman.realName = "Scott Lang";
  console.log(antman);
  console.log(Avenger.avgAge);

  console.log(antman.bio());

  console.log(Avenger.getAvgAge());
})();
