(()=>{
    abstract class Mutante{
        constructor(public nombre:string, public nombreReal:string){}
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return "Mundo Salvado";
        }
    }
    class Villan extends Mutante{
        conquistarMundo(){
            return "Mundo Conquistado";
        }
    }

    let wolwerine = new Xmen("Wolverine","Logan");
    let magneto = new Villan("Magneto","Magnus");
    console.log(wolwerine.salvarMundo());
    console.log(magneto.conquistarMundo());
    
    const printName =(person:Mutante)=>{
        console.log(person.nombre);
    }

    printName(wolwerine);
    printName(magneto);
})()