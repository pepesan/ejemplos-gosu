package example.ejercicios.unidad03

uses org.junit.Assert
uses org.junit.Test

class MadreTest {

  @Test
  function checkMadreConstructor() {
    var madre = new Madre()
    Assert.assertNotNull(madre)
    madre.imprimirDatos()
  }

}