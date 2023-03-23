package example

class Ejemplo03ClaseSimple {
  private var _bar = "value";
  // A public constructor
  construct(  ) {
    _bar = ""
  }


  public function setBar( value: String ): void {
    _bar = value;
  }
  public function  getBar(): String {
    return _bar;
  }

  public function toString() : String {
    return "Ejemplo03ClaseSimple{_bar:"+_bar+"}";
  }

}