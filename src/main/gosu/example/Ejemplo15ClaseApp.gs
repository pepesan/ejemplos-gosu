package example


public class Ejemplo15ClaseApp {


  static function main(args: String[]) : void {
    // usando el enhancement de la clase List
    var lstOfStrings : List<String> = {"a", "b", "c"}
    var valoresDevueltos = lstOfStrings.firstAndLast()
    print(valoresDevueltos)

    var arrOfStrings = lstOfStrings.toTypedArray() //returns a String[]

    var lstOfObjs : List<Object> = lstOfStrings //type variables are covariant in Gosu, see generics
    var arrOfObjs = lstOfObjs.toTypedArray() //returns an Object[]
  }

}