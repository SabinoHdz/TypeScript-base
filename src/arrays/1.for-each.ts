(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // traditional for loop
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  // for of loop
  for (const number of numbers) {
    console.log(number);
  }
  //for in loop
  for (const index in numbers) {
    console.log(numbers[index]);
  }

  // forEach loop
  numbers.forEach((num: number, index: number, arr: number[]) =>
    console.log(`numero: ${num}, index: ${index}, array:${arr}`)
  );

  //content of the array
  let logArrayElements = (number: number, index: number, arr: number[]) =>
    console.log(`a[${index}] = ${number}`);

  numbers.forEach(logArrayElements);
})();
