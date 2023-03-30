package example.ejercicios.unidad03


class Hija extends Madre {
  var cuarto: String

  construct(
      nom: String  = "",
      ed: Integer = 0,
      nac: String = "",
      cuar: String = ""
      ){
    super(nom, ed, nac)
    this.cuarto = cuar
  }
  function estudiar(): void {
      print("Estoy estudiando")
  }
  /*
  @Override
  function imprimirDatos() {
    print("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Cuarto: " + this.cuarto)
  }
  */

}
