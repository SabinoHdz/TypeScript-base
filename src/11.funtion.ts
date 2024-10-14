(() => {
  const hero: string = "Ironman";

  function getHeroName(): string {
    return hero;
  }

  const activeHero = () => {
    return getHeroName();
  };
  console.log(typeof activeHero());
})();
