package example

// como el import
uses java.util.List


public class Ejemplo06Clase {

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

  // A public property getter
  property get Names() : List<String> {
    return _names
  }

  // A public property setter
  property set Names(names: List<String> ) : void {
    _names= names
  }
  @Override
  function  toString(): String   {
      return "Ejemplo06Clase{" +
          "_names=" + _names +
          '}';
  }
}