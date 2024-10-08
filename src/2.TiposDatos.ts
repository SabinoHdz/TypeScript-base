(() => {
  const a = 10;
  const nombre: string = "Pedro";

  let b;

  b = 10;
  b = 3.14556;
  b = "Hola";
  b = true;
  b = {};
  b = [];
  b = () => {};

  function hello(msg: string): void {
    console.log(msg);
  }
})();
