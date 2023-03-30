package example.ejercicios.unidad03

class Persona {
  var nombre : String
  var edad : Integer

  construct(nom: String = "", ed: Integer = 0) {
    this.nombre = nom
    this.edad = ed
  }

  function imprimirDatos() {
    print( "Nombre: " + this.nombre + ", Edad: " + this.edad)
  }
}