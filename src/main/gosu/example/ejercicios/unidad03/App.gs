package example.ejercicios.unidad03


class App{
  static function main(args: String[]) : void {
    var persona = new Persona();
    print(persona)
    persona.imprimirDatos()

    var madre  = new Madre()
    madre.imprimirDatos()
    madre = new Madre("Montse")
    madre.imprimirDatos()
    madre = new Madre("Montse", 45)
    print(madre)
    madre = new Madre("Montse", 45, "Peruana")
    print(madre)
    madre = new Madre(:ed = 45)
    print(madre)
    madre.imprimirDatos()
    var hija = new Hija()
    hija.imprimirDatos()
    hija = new Hija("Montse")
    hija.imprimirDatos()
    hija = new Hija("Montse", 45)
    hija.imprimirDatos()
    hija = new Hija("Montse", 45, "Venezolana")
    hija.imprimirDatos()
    hija = new Hija("Montse", 45, "Venezolana", "Grado")
    hija.imprimirDatos()
  }
}