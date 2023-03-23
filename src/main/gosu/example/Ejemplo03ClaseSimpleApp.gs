package example

class Ejemplo03ClaseSimpleApp {
  static function main(args: String[]) : void {
    var objeto = new Ejemplo03ClaseSimple();
    print(objeto)
    objeto.setBar("OtroValor")
    print(objeto.getBar())
  }

}