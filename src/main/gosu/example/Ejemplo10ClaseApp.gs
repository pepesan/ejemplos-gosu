package example


public class Ejemplo10ClaseApp {
  static function main(args: String[]) : void {
    var x = new Ejemplo10Clase()
    x.Impl = new Runnable() {
      function run() {
        print("Hello, Delegation")
      }
    }
    x.run() // prints "Hello, Delegation"
  }

}