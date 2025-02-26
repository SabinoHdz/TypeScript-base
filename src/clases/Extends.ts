(() => {
  class Avenger {
    constructor(protected name: string, protected realName: string) {
      console.log("Constructor Avenger llamado");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      super.getFullName();
      console.log("Constructor Xmen llamdo");
    }
    get fullName():string {
      return `${this.name} - ${this.realName}`;	
    }
    set fulllName(name: string) {
        this.name=name;
    }
  }

  const wolwerine = new Xmen("Wolverine", "Logan", true);
//   console.log(wolwerine);
//   console.log(wolwerine.fullName);
wolwerine.fulllName="Cambio";
//console.log(wolwerine.fullName);
  
  
  
})();
