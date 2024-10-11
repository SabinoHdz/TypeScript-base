(() => {
  const hero: [string, number, boolean] = ["Dr Strange", 100, true];
  hero[2] = false;
  hero[1] = 60;
  hero[0] = "Dr Strange";
  console.log(hero);
  //destructuring
  const [name, life, isAvenger] = hero;
  console.log(name, life, isAvenger);

  const person: [string, string, number] = ["Tony", "Stark", 45];
  console.log(person);
  const [firstName, lastName, age] = person;
  console.log(firstName, lastName, age);
})();
