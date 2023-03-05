package example


public class  Ejemplo05ClaseApp{

  static function main(args: String[]) : void {
    var objeto = new Ejemplo05Clase();

    var c = new Ejemplo05Clase({"joe", "john", "jack"})
    c.printNames("* ")
    print( c.Names )

  }
}