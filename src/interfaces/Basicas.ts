(()=>{
  //object literal
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getNombre?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  flash = {
    name: "clark kent",
    age: 60,
    powers: ["Super fuerza"],
    getNombre() {
      return this.name;
    },
  };
})()