(() => {
  //El método reduce() ejecuta una función reductora sobre cada elemento de un array,
  // devolviendo como resultado un único valor.
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let sum = numbers.reduce((acc: number, number: number) => acc + number, 0);

  console.log("Array original: ", numbers);
  console.log("Reduce aplicado: ", sum);
})();
