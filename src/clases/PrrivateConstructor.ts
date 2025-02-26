(()=>{
    class Apocalipsis{
        static instance:Apocalipsis;
        private constructor(public name:string){
        }
        static callApocalipsis():Apocalipsis{
            if (!Apocalipsis.instance) {
                Apocalipsis.instance= new Apocalipsis("Soy Apocalipsis... el unico!!!");
            }
            return Apocalipsis.instance;
        }
    }
    // const apocalipsis = new Apocalipsis("En Sabah Nur");
    // console.log(apocalipsis);

    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis2);
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis3);
})()