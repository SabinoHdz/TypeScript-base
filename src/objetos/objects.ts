(() => {
  //object literal

  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getNombre?: () => string;
  } = {
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
  let superman: {
    name: string;
    age?: number;
    powers: number[];
    getNombre?: () => string;
  } = {
    name: "Clark Kent",
    age: 60,
    powers: [1, 2],
  };
})();
