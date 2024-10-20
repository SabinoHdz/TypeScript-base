(() => {
  const letters = ["a", "b", "c", "d", "e"];
  let newMap = letters.map((letter: string) => letter.toUpperCase());

  console.log("Array original: ", letters);
  console.log("Map aplicado: ", newMap);
  //traditional for loop

  let newArray: string[] = [];
  for (let i = 0; i < letters.length; i++) {
    let value = letters[i].toUpperCase();
    newArray.push(value);
  }
  console.log("Array original: ", letters);
  console.log("Map aplicado: ", newArray);
})();
