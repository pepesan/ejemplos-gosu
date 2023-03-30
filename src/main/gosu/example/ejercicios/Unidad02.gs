package example.ejercicios

class Unidad02 {
  static function main(args: String[]) : void {
    var num1 = 20
    var num2 = 10
    var num3 = 30

    if (num1 > num2 and num1 > num3) {
      print("El número mayor es: " + num1)
    }
    else {
      if (num2 > num1 and num2 > num3) {
        print("El número mayor es: " + num2)
      } else {
        print("El número mayor es: " + num3)
      }
    }


    // Ejercicio 2
    var num = -5

    if (num > 0) {
      print("El número es positivo")
    } else{
      if(num < 0) {
        print("El número es negativo")
      } else {
        print("El número es cero")
      }
    }


    //Ejercicio 3: Imprimir los primeros 10 números pares
    for (i in 1..10) {
      if (i % 2 == 0) {
        print(i)
      }
    }
    //Ejercicio 4: Sumar los números del 1 al 10
    var sum = 0
    var i = 1

    while (i <= 10) {
      sum += i
      i ++
    }

    print("La suma de los números del 1 al 10 es: " + sum)
  }
}