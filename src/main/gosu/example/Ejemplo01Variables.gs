package example

class Ejemplo01Variables {
  static function main(args: String[]) : void {
    var foo = "Foo" // a String
    print(foo)
    var one = 1     // a Number
    print(one)
    var guess : String = null  // Must declare the type because it can't be inferred
    print(guess)

    // operators
    one++;
    print(one)
    one--;
    print(one)
      // == === !=
    // <,  >, >=, <=
  }
}