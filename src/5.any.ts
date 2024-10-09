(() => {
  let avengers: any = 10;
  let exists;
  let power;

  avengers = "Nick Fury";
  //casting : as string
  //   console.log(avengers.charAt(0));
  console.log((avengers as string).charAt(0));

  console.log(avengers.charAt(0));
  avengers = 150.555555;
  //casting : <number>
  console.log(<number>avengers.toFixed(2));
  console.log(avengers);
})();
