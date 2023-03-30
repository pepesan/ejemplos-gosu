package example

class Ejemplo02Estructuras {
  static function main(args: String[]) : void {
    var cadena1 = "hola"
    var cadena2 = "hola"

    print("condicionales")
    // condicionales
    // if
    if (cadena1 == cadena2){
      print("ambas son iguales")
    }

    // if idénticos
    if (cadena1 === cadena2){
      print("ambas son idénticos")
    }

    // if distintos
    cadena1 = ""
    if (cadena1 != cadena2){
      print("ambas son diferentes")
    }
    // if-else
    cadena1 = "hola"
    if (cadena1 == cadena2){
      print("ambas son iguales")
    }else{
      print("son distintas")
    }

    var val1 = 1;
    var val2 = 2;
    var val3 = 3;

    if(val1 > val3 and val1 > val2){
      print("val1 es mayor")
    } else if (val2 > val1 and val2 > val3){
      print("val2 es mayor")
    } else {
      print("val3 es mayor")
    }

    // comparación números
    var i = 0;
    var j = 1;
    // menor que
    if (i<j){
      print("i<j")
    }
    // mayor que
    if (i>j){
      print("i>j")
    }


    i = 3;
    switch (i){
      case 0:
        print("zero")
        break
      case 1:
        print("one")
        break

      default:
        print("default")
    }

    print("Bucles")
    var list = { "one", "two", "three" } // Creates a java.lang.List<String>
    // foreach
    for ( num in list ) {
      print( num )
    }
    // foreach con index
    for ( num in list index k ) {
      print ( "${k} : ${num}" ) // i is an int, and num is still of type String
    }
    // foreach con iterador
    for ( num in list iterator iter ) {
      iter.remove()
    }
    print(list)
    // foreach con rango
    for ( var k in 0..5 ) {   // Range from 0 through 5
      print ( k ) // Prints 0-5
    }
    print("---")
    // Range from 0 up to 5 (exclusive)
    for ( k in 0..|5 ) {
      print ( k ) // Prints 0-4
    }
    print("---")
    // Range from 0 up to 5 (ambos exclusive)
    for ( k in 0|..|5 ) {
      print ( k ) // Prints 1-4
    }
    print("---")
    // while
    i = 0;
    while (i<5){
      print(i)
      i++;
    }
    print("---")
    // do while
    i = 0;
    do {
      print(i)
      i++;
    }while (i<5)


  }
}