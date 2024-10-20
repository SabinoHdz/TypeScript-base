//Filter
//Filter is used to filter the elements based on the condition.
//It returns the new array with the elements that satisfy the condition.
//The callback function should return true or false.

//traditional for loop
(() => {
  const names: string[] = ["John", "Paul", "George", "Ringo", "John"];
  let namesFiltered: string[] = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 4) {
      namesFiltered.push(names[i]);
    }
  }
  console.log("Array original: ", names);
  console.log("Filter aplicado: ", namesFiltered);

  const filterNames = names.filter((name: string) => name.length > 4);
  console.log("Filter aplicado: ", filterNames);
  console.log("Array original: ", names);

  //case with when the filter not found any element
  const filterNames2 = names.filter((name) => name.length > 10);
  console.log("Filter sin elementos encontrados: ", filterNames2);
})();
