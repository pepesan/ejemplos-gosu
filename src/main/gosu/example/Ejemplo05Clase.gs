package example


public class Ejemplo05Clase{

  var _names : List<String> // a private class var

  // A public constructor
  construct(  ) {
    _names = new LinkedList<String>();
  }

  // A public constructor
  construct( names : List<String> ) {
    _names = names
  }

  // A public function
  function printNames( prefix : String ) {
    for( n in _names ) {
      print( prefix + n )
    }
  }

  // A public property getter, making 'Names' a read-only property
  property get Names() : List<String> {
    return _names
  }

}