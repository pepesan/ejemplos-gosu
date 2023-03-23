package example


public class Ejemplo18ClaseApp {


  static function main(args: String[]) : void {
    var str = example.Ejemplo18Plantilla.renderToString({"Joe", "John", "Josh"} )
    print( str)

    // render directly to writer (potentially more efficient for large strings)
    var writer = new java.io.StringWriter()
    example.Ejemplo18Plantilla.render(writer, {"Joe", "John", "Josh"})
    print( writer )
  }

}