package example

class Ejemplo02Loops {
  static function main(args: String[]) : void {
    var list = { "one", "two", "three" } // Creates a java.lang.List<String>
    for ( num in list ) {
      print( num )
    }
    for ( num in list index i ) {
      print ( "${i} : ${num}" ) // i is an int, and num is still of type String
    }
    for ( num in list iterator iter ) {
      iter.remove()
    }
    print(list)

    for ( i in 0..5 ) {   // Range from 0 through 5
      print ( i ) // Prints 0-5
    }
    print("---")
    // Range from 0 up to 5
    for ( i in 0..|5 ) {
      print ( i ) // Prints 0-4
    }
    print("---")
    for ( i in 0|..|5 ) {
      print ( i ) // Prints 1-4
    }
    print("---")
  }
}