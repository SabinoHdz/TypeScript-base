(() => {
  const fullName = (firstName: string, ...args: string[]): string => {
    return `${firstName} ${args.join(" ")}`;
  };

  const name = fullName("Tony", "Stark", "Ironman", "Avenger");
  console.log({ name });

  const greet = (name: string) => `Hello ${name}`;
})();
