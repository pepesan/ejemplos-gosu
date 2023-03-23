package example

uses org.junit.Assert
uses org.junit.Test

class FooTest {

  @Test
  function makeAFoo() {
    print("newing a Foo")
    var foo = new Foo()
    Assert.assertNotNull(foo)
    var cadena = "eureka"
    print(foo.doSomething(cadena))
    Assert.assertEquals(42, foo.MeaningOfLife)
  }

  @Test
  function testMain() : void {
    var cadena = "Hola"
    Main.main({cadena})
  }

}