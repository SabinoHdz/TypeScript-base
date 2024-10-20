(() => {
  // concat: used to merge two or more arrays
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const result = array1.concat(array2);

  console.log("result", result); // [1, 2, 3, 4, 5, 6]
  console.log("array1", array1); // [1, 2, 3]
  console.log("array2", array2); // [4, 5, 6]

  const elements = [10, 15, 20];
  const otherElements = [21, 34, 89];

  let result1 = [...elements, ...otherElements];
  console.log("result1", result1); // [10, 15, 20, 21, 34, 89]

  let result2 = [...elements, 21, 34, 89];
  console.log("result2", result2); // [10, 15, 20, 21, 34, 89]

  let result3: (string | number)[] = [10, 15, 20, ..."elements"];
  console.log("result3", result3); // [10, 15, 20, "e", "l", "e", "m", "e", "n", "t", "s"]
})();
