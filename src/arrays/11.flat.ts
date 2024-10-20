(() => {
  // flat: Flattens an array up to the specified depth.

  const numbers = [1, 2, 3, [14, 15, 17, 10]];
  let flatNumbers = numbers.flat();
  console.log("flatNumbers", flatNumbers); // [1, 2, 3, 14, 15, 17, 10]

  const numbers2 = [1, 2, 3, [14, 15, 17, 10, [20, 30, 40]]];
  let flatNumbers2 = numbers2.flat();
  console.log("flatNumbers2", flatNumbers2); // [1, 2, 3, 14, 15, 17, 10, [20, 30, 40]]

  let flatNumbers3 = numbers2.flat(2);
  console.log("flatNumbers3", flatNumbers3); // [1, 2, 3, 14, 15, 17, 10, 20, 30, 40]

  const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]],
    [7, 8, 9],
  ];

  let flatMatriz = matriz.flat(3);

  console.log("flatMatriz", flatMatriz); // [1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9]
})();
