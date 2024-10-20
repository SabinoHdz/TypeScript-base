(() => {
  //metodo some
  //El método some() comprueba si al menos un elemento del array
  //cumple con la condición implementada por la función proporcionada.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even = numbers.some((number: number) => number % 2 === 0);
  console.log("Array original: ", numbers);
  console.log("Some aplicado: ", even);
})();
