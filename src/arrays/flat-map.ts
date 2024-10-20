(() => {
  //flatMap() method is used to map each element using a mapping function, then flatten the result into a new array.

  const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
  ];

  const result = users.map((user) => user.attributes).flat();
  console.log(result);
})();
