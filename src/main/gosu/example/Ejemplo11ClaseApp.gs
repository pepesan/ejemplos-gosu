package example

uses java.sql.*


public class Ejemplo11ClaseApp {

  static function main(args: String[]) : void {
    var DRIVER_NAME: String  = "com.mysql.cj.jdbc.Driver"
    var USERNAME: String  = "root";
    var PASSWORD: String = "root";
    var URL: String = "jdbc:mysql://localhost:3306/test";
    Class.forName (DRIVER_NAME)
        .newInstance ();
    // In Gosu, you can use the using statement which will handle closing the Connection for you:
    using( var conn = DriverManager
        .getConnection(URL, USERNAME, PASSWORD) ) {
        var statement = conn.createStatement()
    }
    /*
    The using statement works with the following interfaces:

      java.io.Closeable
      java.util.concurrent.locks.Lock
      gw.lang.IReentrant
      gw.lang.IDisposable
     */
  }

}