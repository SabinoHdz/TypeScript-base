(() => {
  type Avenger = {
    name: string;
    weapon: string;
    power: number;
  };

  const ironman: Avenger = {
    name: "Tony Stark",
    weapon: "Iron Suit",
    power: 1000,
  };

  const captainAmerica: Avenger = {
    name: "Steve Rogers",
    weapon: "Shield",
    power: 800,
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
    power: 1500,
  };

  const avengers: Avenger[] = [ironman, captainAmerica, thor];

  for (const key in thor) {
    console.log(thor[key]);
  }

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon, avenger.power);
  }
})();
