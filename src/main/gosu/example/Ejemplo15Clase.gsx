package example

uses java.util.List

enhancement Ejemplo15Clase<T> : List<T> {
  function firstAndLast() : List<T> {
    return {this.first(), this.last()}
  }
}