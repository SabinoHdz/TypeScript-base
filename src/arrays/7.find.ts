(() => {
  //El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
  const numbers: number[] = [5, 23, 45, 78, 99];
  const findNumber = numbers.find((number: number) => number > 50);
  console.log("Array original: ", numbers);
  console.log("Find aplicado: ", findNumber);
})();
