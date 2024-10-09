(() => {
  //define string
  const batman: string = "batman";
  const robin: string = "robin";
  const joker: string = `joker`;

  console.log(batman.toLocaleLowerCase());
  console.log(batman.toUpperCase());
  console.log(batman.concat(robin, joker));
  console.log(batman + robin + joker);
  console.log(`Los héroes son: ${batman} y ${robin.toString()}`);
  console.log(joker.trim());

  console.log(batman[10]?.toUpperCase() || "No esta definido");
})();
