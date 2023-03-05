package example

public class Ejemplo03Clase {
  private var _bar = "value";

  public var myValue: String as myExposedValue;

  var soloLectura: String as readonly conSoloLectura = "Value";

  public function setBar( value: String ): void {
      _bar = value;
  }
  public function  getBar(): String {
    return _bar;
  }

  public function toString() : String {
    return "Ejemplo03Clase{_bar:"+_bar+"}";
  }
}