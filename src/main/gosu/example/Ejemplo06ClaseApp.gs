package example


public class Ejemplo06ClaseApp {

  static function main(args: String[]) : void {
    var objeto = new Ejemplo06Clase();
    var listado = {"joe", "john", "jack"}
    var c = new Ejemplo06Clase(listado)
    c.printNames("* ")
    print( c.names )
    c.names=listado
    print(c.names)
    print(c)
    c.publica = ""

  }
}