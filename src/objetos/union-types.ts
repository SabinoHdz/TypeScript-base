(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getNombre?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Flash";
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);
  myCustomVariable = 50;
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);
  myCustomVariable = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable);
})();
