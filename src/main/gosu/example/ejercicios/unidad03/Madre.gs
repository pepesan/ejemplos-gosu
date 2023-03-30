package example.ejercicios.unidad03


class Madre {
  var nombre : String
  var edad : Integer
  var nacionalidadad: String;

  construct(nom: String  = "", ed: Integer = 0, nac: String = "") {
    this.nombre = nom
    this.edad = ed
    this.nacionalidadad = nac;
  }

  function imprimirDatos() {
    print("Nombre: " + this.nombre + ", Edad: " + this.edad)
  }
}