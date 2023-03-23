package example


public class Ejemplo16ClaseApp {


  static function main(args: String[]) : void {
    var s1 = "I'm a String"
    var s2 = 'I\'m also a String!'

    s1 = "Hello"
    s2 = "World!"
    print ( s1 + " " + s2 )  // prints "Hello World!"
    print ( "${s1} ${s2}" )  // prints "Hello World!"


    var bool = "true".toBoolean()
    var integ = "42".toInt()
    var dubble = "42.2".toDouble()
    var date = "01/25/2012".toDate()

    /*
    Here is a short sample of additional enhancements on String:

    repeat(n:int) - Repeat the String n times
    chomp() - Removes a trailing newline from the end of the String, if present
    chop() - Remove the last character from the String
    elide(len:int) - Cap the String at a fixed length and replace the last three characters with '...' to denote truncation
    rightPad(w:int), leftPad(w:int), center(w:int) - Format the string with additional whitespace
    notBlank() - Returns true if the string is not null and contains at least one non-whitespace character
     */
  }

}