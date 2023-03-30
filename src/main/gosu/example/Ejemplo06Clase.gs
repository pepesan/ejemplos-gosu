package example

// como el import
uses java.util.List


public class Ejemplo06Clase {

  public var publica: String  = "";

  private var _names : List<String> // a private class var

  // A public constructor
  construct(  ) {
    _names = new LinkedList<String>();
  }

  // A public constructor
  construct( nam : List<String> ) {
    _names = nam
  }

  // A public function
  function printNames( prefix : String ) {
    for( n in _names ) {
      print( prefix + n )
    }
  }

  // A public property getter
  property get names() : List<String> {
    return _names
  }

  // A public property setter
  property set names(nam: List<String> ) : void {
    _names= nam
  }
  @Override
  function  toString(): String   {
      return "Ejemplo06Clase{" +
          "_names=" + _names +
          '}';
  }
}