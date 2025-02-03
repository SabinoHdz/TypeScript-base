(() => {
  const nombre: string = "Samuel";
  const heroe = {
    a: 1,
  };
  heroe.a = 2;

  const getNombre = (): string => {
    return nombre;
  };

  console.log(getNombre());

  //   function getNombre() {
  //     console.log("Hola Mundo");
  //   }
})();
