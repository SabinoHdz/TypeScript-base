(() => {
  //metodo every
  //El método every() comprueba si todos los elementos del array
  //cumplen con la condición implementada por la función proporcionada.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even = numbers.every((number) => number % 2 === 0);
  console.log("Array original: ", numbers);
  console.log("Every aplicado: ", even);
  //Ejemplo 2
  const isBelowThreshold = (currentValue: number) => currentValue < 40;

  const array1: number[] = [1, 30, 39, 29, 10, 13];

  console.log(array1.every(isBelowThreshold));
  // Expected output: true
})();
