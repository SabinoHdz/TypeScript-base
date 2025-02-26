(() => {
  const getSaludo = (name: string, lastname?: string): string => {
    return `Hola ${name} ${lastname || ""}`;
  };
  const saludo = getSaludo("Juan", "Perez");
  console.log(saludo);

  //obtener el diana de la semana

  const getDay = (day: number): string => {
    const dias: string[] = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];

    return dias[day] ?? "Dia no valido";
  };
  console.log(getDay(1));

  enum Dias {
    Domingo = 0,
    Lunes = 1,
    Martes = 2,
    Miercoles = 3,
    Jueves = 4,
    Viernes = 5,
    Sabado = 6,
  }
  const getDayEnum = (day: Dias): string => Dias[day] ?? "Dia no valido";
  console.log(getDayEnum(Dias.Jueves));
})();
