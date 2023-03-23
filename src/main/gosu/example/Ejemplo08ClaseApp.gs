package example


public class Ejemplo08ClaseApp{
  static function main(args: String[]) : void {
    var listado = {"joe", "john", "jack"}
    var objeto = new Ejemplo08Clase(listado)
    objeto.printNames()
    objeto.printNames(".- ")
    objeto.dameArgumentos()
    objeto.dameArgumentos(:suffix= ",")
    objeto.dameArgumentos(:suffix= ",", :prefix = "> ")
  }
}