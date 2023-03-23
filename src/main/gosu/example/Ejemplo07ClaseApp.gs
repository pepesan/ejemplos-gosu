package example


public class Ejemplo07ClaseApp {
  static function main(args: String[]) : void {
    var objeto = new Ejemplo07Clase()
    objeto.Bar = "hola"
    print(objeto.Bar)
    print(objeto.sololectura)
  }
}