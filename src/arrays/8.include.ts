(() => {
  //El método includes() determina si una matriz incluye un determinado elemento,
  //devuelve true o false según corresponda.
  const pets = ["cat", "dog", "bat"];
  const hasDog = pets.includes("dog");
  console.log(hasDog); // true
  const hasFish = pets.includes("fish");
  console.log(hasFish); // false

  const numbers = [1, 2, 3, 4, 5];
  const hasThree = numbers.includes(3);
  console.log(hasThree); // true
  const hasTen = numbers.includes(10);
  console.log(hasTen); // false

  const permission = ["read", "write", "execute"];
  const hasWrite = permission.includes("write");
  console.log(hasWrite); // true
  const hasDelete = permission.includes("delete");
  console.log(hasDelete); // false

  const boolean = [true, false, true, false];
  const hasTrue = boolean.includes(true);
  console.log(hasTrue); // true
  const hasFalse = boolean.includes(false);
  console.log(hasFalse); // true

  const fullName = "Juan Perez";
  const hasJuan = fullName.includes("Juan");
  console.log(hasJuan); // true
  const hasMaria = fullName.includes("Maria");
  console.log(hasMaria); // false
})();
