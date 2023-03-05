package example


class Ejemplo04NullSafety {
  static function main(args: String[]) : void {
    var aList: List<String> = null
    if(aList?.get(0)?.isEmpty()) {
      print("The first string is empty")
    }
  }
}