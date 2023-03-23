package example

uses java.lang.Runnable

public class Ejemplo10Clase implements Runnable{

  //A delegate, exposed as the Impl property
  delegate _runnable represents Runnable

  property get Impl (): Runnable {
    return _runnable
  }

  property set Impl( r : Runnable ) {
    _runnable = r
  }
}