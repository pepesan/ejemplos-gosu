package example

public class Main {
  static function main(args: String[]){
    print("myargs: "+ args.length)
    for (c in args){
      print(c)
    }
  }
}