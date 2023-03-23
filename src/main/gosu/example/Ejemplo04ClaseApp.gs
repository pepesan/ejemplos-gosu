package example

public class Ejemplo04ClaseApp {
  static function main(args: String[]) : void {
    var objeto = new Ejemplo04Clase();
    print(objeto)
    objeto.setBar("OtroValor")
    print(objeto.getBar())
    print(objeto.myExposedValue)
    print(objeto.conSoloLectura)
  }
}