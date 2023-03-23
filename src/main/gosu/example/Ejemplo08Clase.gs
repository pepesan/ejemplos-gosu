package example


public class Ejemplo08Clase{

  var _names : List<String> // a private class var

  // A public constructor
  construct( listado: List<String> = {}) {
    _names = listado;
  }

  function printNames( prefix : String = "> ") {
    for( n in _names ) {
      print( prefix + n )
    }
  }

  function dameArgumentos(suffix: String = "> ", prefix: String = " .") : void {
    for( n in _names ) {
      print( prefix + n + suffix )
    }
  }

}