package example

public class Ejemplo04Clase {
  private var _bar = "value";

  public var myValue: String as myExposedValue;

  var soloLectura: String as readonly conSoloLectura = "Value";

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
    return "Ejemplo04Clase{_bar:"+_bar+"}";
  }
}