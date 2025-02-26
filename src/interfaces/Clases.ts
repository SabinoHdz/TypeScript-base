(()=>{
    interface Xmen{
        name:string;
    
        realname:string;
        mutantPower(id:number):string;
    }

    class Mutant implements Xmen{
      public name:string;
      public realname:string;
        public mutantPower(id:number):string{
            return 'Mutant Power';
        }
    }
})()