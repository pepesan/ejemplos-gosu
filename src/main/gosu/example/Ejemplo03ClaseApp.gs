package example

public class Ejemplo03ClaseApp {
  static function main(args: String[]) : void {
    var objeto = new Ejemplo03Clase();
    print(objeto)
    objeto.setBar("OtroValor")
    print(objeto.getBar())
    print(objeto.myExposedValue)
    print(objeto.conSoloLectura)
  }
}