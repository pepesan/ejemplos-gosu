package example


class Ejemplo05NullSafety {
  static function dameNull(): String{
    return null
  }
  static function main(args: String[]) : void {
    var aList: List<String> = null
    if(aList != null){
      print("es distinta a null")
      aList.get(0)
    }
    // print(aList.get(0))
    // comprobamos que el objeto aList no es null
    // antes de intentar ejecutar el .get(0)
    print(aList?.get(0))


    // elvis operator
    var myString = dameNull() ?: "default"
    print(myString)
  }
}