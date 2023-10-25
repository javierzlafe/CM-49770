                                                  
                                  
                                  //FUNCIONES 

    /* Las funciones en JavaScript ofrecen varias ventajas:

    Reutilización de código: Una vez que se define una función, 
    puede ser utilizada varias veces.

    Modularidad: Las funciones son bloques de construcción 
    que permiten descomponer un programa en piezas más pequeñas y manejables, 
    lo que hace que el código sea más fácil de entender y mantener.
            
      Abstracción: Las funciones pueden ocultar la complejidad de ciertas operaciones. 
      Esto permite a los desarrolladores concentrarse en el uso de la función 
      en lugar de preocuparse por cómo se implementa.
     
      Pasar parámetros: Las funciones pueden aceptar uno o varios parámetros, 
      
      Retorno de valores: Las funciones pueden devolver un valor después de su ejecución, 
      lo que les permite realizar una tarea y proporcionar el resultado a otra parte del programa.


                              
                //principios de la programacion

    principio DRY= "No te repitas a ti mismo". 
    Este principio nos dice que debemos evitar la repetición innecesaria de código. 
    Si repetimos mucho el mismo código, puede haber errores y dificultades para mantenerlo en el futuro. 
    
    Por ejemplo, en lugar de escribir la misma función varias veces en diferentes partes de nuestro código, 
    podemos crear una única función y reutilizarla cada vez que sea necesario. 



    principio KISS = El principio KISS (Keep It Simple, Stupid) significa "Manténlo simple y estúpido". 
    Este principio nos dice que debemos mantener nuestro código simple y fácil de entender. 
    
    Por ejemplo, en lugar de escribir una función que hace muchas cosas diferentes, 
    podemos hacer varias funciones que hacen una sola cosa.
            
            
    
    PRINCIPIO YAGNI= El principio YAGNI (You Ain't Gonna Need It) que significa "No necesitarás esto". 
    Este principio nos dice que debemos evitar escribir código innecesario que podría ser útil en el futuro.
    

    Por ejemplo, en lugar de agregar características a nuestro código que aún no necesitamos, 
    podemos esperar hasta que realmente las necesitemos antes de agregarlas.
*/

                                        




//COMO DECLARAR UNA FUNCION
 

                /* function nombreFuncion() {
                     instrucciones que ejecutará la función
                }  */    


                function saludar (){
                    console.log("Esto es el mensaje de la funcion")
                }


                saludar() //dde esta forma llamamos a la funcion.(sino, nunca se ejecuta)
/*una funcion hace una tarea especifica, y la idea es que 
el nombre de una funcion sea relacionado con lo que hace.
si la funcion saluda, no se deberia llamar "calcular impuestos"

*/




let nombre = "javier"
let respuesta = "no se encontraron datos"
let  username = "saraza" 


                            //FUNCION CONVENCIONAL (agregando un if-else)
function login(){
    let usuario = prompt ("ingresa tu usuario:")
    //aca valido si es diferente a "", le saco los espacios al dato que ingresa, y que sea mayor a 1 letra
    if(usuario !== ""){ 
      alert("bienvenido: " + usuario)       
    }else{
        alert("error en el dato ingresado")
    }

}

login() 





            

            //EJEMPLO DE FUNCION CON PARAMETRO
            

                /* ejemplo simple */ 

                  function saludar(nombre) {    //nombre es el parametro, podria llamarse como quieran
                      console.log(`Hola, ${nombre}!`);
                  }


            

            //FUNCION CON DOS PARAMETROS

function sumar(numA,numB){
    numA= parseInt(prompt("ingrese primer numero"))    //convierto a numero lo que ingresan por prompt
    numB= parseInt(prompt("ingrese segundo numero"))  

    let resultado = numA + numB
    alert("el resultado de la suma es :" + resultado)
}

//sumar()



            //FUNCIONES CON RETURN

            //ejemplo simple con numeros

            function sumar(num1, num2) {
                let resultado = num1 + num2;
                return resultado; //en ves de mostrarlo por alert, lo retorno para poder usarlo despues como yo quiera
              }
                 


                //SCOPE 

/* El scope se refiere al alcance de las variables en nuestro código. 
Es importante entender esto para evitar errores y mejorar la organización de nuestro código.

Existen dos tipos de scope en JavaScript: el scope global y el scope local. 
El scope global se refiere a las variables que se definen fuera de cualquier función 
y están disponibles para todo el código. 
El scope local, por otro lado, se refiere a las variables que se definen dentro de una función y 
sólo están disponibles dentro de esa función. */


let nombre2 = "Juan";
console.log(nombre2); // Juan



function saludar() {
  // Scope local
  let mensaje = "Hola";
  console.log(mensaje + " " + nombre2); // Hola Juan
}

saludar();
console.log(mensaje); // Error: mensaje no está definido



   /*            EJEMPLO CON TODO LO VISTO



function comprarBebida(dinero) {
  const precioBebida = 2.5;

  if (dinero >= precioBebida) {
    const cambio = dinero - precioBebida;
    return "¡Compra exitosa! Aquí tienes tu bebida y tu cambio: $" + cambio.toFixed(2);
  } else {
    const dineroFaltante = precioBebida - dinero;
    return "Dinero insuficiente. Necesitas $" + dineroFaltante.toFixed(2) + " más.";
  }
}

console.log(comprarBebida(5))


 */





/* Las funciones anónimas son funciones que no tienen un nombre específico y 
se utilizan en situaciones en las que no es necesario asignarles un nombre.*/


// Función anónima asignada a una variable
let sumar = function(a, b) {
  return a + b;
}

console.log(sumar(2, 3)); // 5
/* En este ejemplo, se define una función anónima que toma dos parámetros a y b, 
y devuelve su suma. Esta función se asigna a la variable sumar, 
lo que nos permite llamarla utilizando ese nombre. */



/* Las funciones anónimas son muy útiles cuando necesitamos pasar una función como argumento de otra función 
o cuando queremos asignar una función a una variable sin necesidad de asignarle un nombre específico.
(voy a dar ejemplos en el after)*/
 


/* FUNCION DECLARADA VS FUNCION EXPRESADA */
function declarada(){
  console.log("esto es una funcion que se puede llamar desde cualquier lado, sin importar donde se declaro")
}

const funcionExpresada= function (){
  console.log("esta funcion esta asignada a una variable. si la llamo antes de esto, no existe para js")
}



      //FUNCIONES FLECHA O   ARROW FUNCTION


      function normal(a,b){
        return a+b
      }



      let funcionAnonima = function(a, b) {
        return a + b;
      }



      let funcionFlecha = (a, b) => {
        return a + b;
      }


      let funcionFlechaEnLinea = (a, b) => a + b;


      //javier gimenez