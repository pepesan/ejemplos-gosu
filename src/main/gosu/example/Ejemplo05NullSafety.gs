package example


class Ejemplo05NullSafety {
  static function dameNull(): String{
    return null
  }
  static function main(args: String[]) : void {
    var aList: List<String> = null
    if(aList?.get(0)?.isEmpty()) {
      print("The first string is empty")
    }

    // elvis operator
    var myString = dameNull() ?: "default"
    print(myString)
  }
}