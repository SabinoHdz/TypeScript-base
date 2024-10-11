(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.push(13);
  console.log(numbers);

  const numbers2: (number | string | boolean)[] = [1, 2, 3, 5, 6, 7, 8, "9"];
  console.log(numbers2);
  numbers2.push("10");
  numbers2.push(12);
  numbers2.push(true);

  const villians: string[] = ["Omega Red", "Red Skull", "Joker"];
  console.log(villians);
  villians.findIndex((v) => v === "Joker");
  numbers.filter((n) => n > 5);
})();
