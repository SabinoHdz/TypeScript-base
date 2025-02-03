(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };
  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 2000.3445,
  };

  const { nick, poder, vision } = avengers;
  console.log(nick);
  console.log(poder.toFixed(2));
  console.log(vision.toUpperCase());

  const printAvenger = ({ ironman, ...rest }: Avengers): void => {
    //destructuring in function parameters and renaming the variable
    //const { vision,activo,ironman}: Avengers
    //console.log(vision, activo, ironman);

    console.log(ironman);
    console.log(rest);
  };

  printAvenger(avengers);

  const avengersArr: string[] = ["Thor", "Ironman", "Spiderman"];
  const [thor, ironman, spiderman] = avengersArr;

  const hasAvenger = avengersArr.includes("Thor");
  console.log({ hasAvenger });

  console.log(thor);
  console.log(ironman);
  console.log(spiderman);
})();
