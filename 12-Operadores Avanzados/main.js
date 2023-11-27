
 
/* Los operadores avanzados son características 
que nos van a dejar hacer operaciones más complejas y tomar 
decisiones basadas en múltiples condiciones.


que es todo esto?  basicamente los operadores avanzados son formas mas sencillas
de escribir las condicionales que conocemos



        Operador ternario:      

no es mas que una forma abreviada de la declaración if-else  
La sintaxis es la siguiente: 

condición ? valor si verdadero : valor si falso */

const edad = 18;

                    if(edad>=18){   //forma comun
                    console.log("es mayor, puede ingresar")
                    }else{
                    console.log("es menor de edad")
                    }


const mensaje = edad >= 18 ? "si, sos mayor de edad" : "sos menor de edad";
console.log(mensaje); // output: "si, sos mayor de edad"






       //   operador and (&&)    

let carrito=[]   //forma tradicional

 if(carrito.length === 0) {
    console.log("El carrito está vacío!")
  }


  //usando el operador &&:

  carrito.length === 0 && console.log("El carrito está vacío!")



/*  
  La idea de este código es que si el carrito está vacío, 
  se imprima un mensaje en la consola, pero si no lo está, 
  no se haga nada. Usando el operador &&, se evita la necesidad de escribir una estructura 
  condicional if completa.
 */


                            //FALSY

/* el término "falsy" se usa para describir un valor que se evalúa como falso 
cuando se considera en un contexto booleano. 
Los valores falsy son los que se consideran como "falsos" o "no verdaderos".


los siguientes valores se consideran falsy:

      false:    El valor booleano false.
      0:        El número cero.
      ""        (cadena vacía): Una cadena de texto vacía.
      null:     Un valor nulo.
      undefined: Un valor no definido.
      NaN:      El valor "Not-a-Number" (no es un número).

Cuando se utiliza un valor falsy en un contexto booleano, se evalua como false. Por ejemplo:


Es importante tener en cuenta que otros valores que no estén en la lista de los valores falsy se consideran "truthy" 
y se evaluarán como true en un contexto booleano. */




            //ejemplo de operador OR (||) 

const usuario1 = {
    nombre: "John Doe",
    edad: 14
  }
  
const usuario2 = null
 


   console.log( usuario1 || "El usuario no existe" )
  /*
  Como usuario1 es un objeto y los objetos en JavaScript son considerados 
  como valores verdaderos, entonces el resultado de esta 
  expresión es el valor de usuario1.
  
  Entonces, la salida en la consola será:
  
  { nombre: 'John Doe', edad: 14 } */
 



  console.log( usuario2 || "El usuario no existe" )
  /*
  Como usuario2 tiene el valor null, que se considera como un valor falso en JavaScript, 
  entonces el resultado de esta expresión seria el segundo operando,
  
  Entonces, la salida en la consola seria:
  
  El usuario no existe */









                                //DESESTRUCTURACION



const persona = {
  name: 'Juan',
  anio: 30,
  ciudad: 'Buenos Aires'
}
/* Podemos usar la desestructuración para extraer los valores de las propiedades del objeto 
y asignarlos a variables individuales, de la siguiente manera: */


const {name, anio, ciudad} = persona

console.log(nombre); // 'Juan'
console.log(anio); // 30
console.log(ciudad); // 'Buenos Aires'


/* De esta forma, extraemos los valores de las propiedades nombre, edad y ciudad del objeto persona 
y los asignamos a las variables nombre, edad y ciudad respectivamente. 
Ahora podemos usar estas variables en nuestro código en lugar de tener que acceder a las 
propiedades del objeto directamente. */




/* que pasa si tenes un objeto dentro de otro objeto?, 
también se puede usar la desestructuración para acceder a los valores de las propiedades del objeto interno.

Por ejemplo, supongamos que tenemos el siguiente objeto */


const persona2 = {
  nombre: 'Juan',
  anios: 30,
  direccion: {
    calle: 'Calle Falsa',
    numero: 123,
    barrio: 'Buenos Aires'
  }
}

/* Si queremos acceder a los valores de las propiedades del objeto direccion dentro del objeto persona, 
puedes hacerlo de la siguiente manera: */


const { nombre, anios, direccion: { calle, numero, barrio } } = persona2;

console.log(nombre); // 'Juan'
console.log(edad); // 30
console.log(calle); // 'Calle Falsa'
console.log(numero); // 123
console.log(ciudad); // 'Buenos Aires'


/* En este ejemplo, estamos usando la desestructuración para acceder 
a los valores de las propiedades nombre, edad y direccion del objeto persona. 
y despues, estamos usando la desestructuración anidada para acceder a los valores 
de las propiedades calle, numero y ciudad del objeto direccion. */






//EJEMPLO CASO REAL DESESTRUCTURACION Y USO DE ALIAS


    const data= {
        "timestamp":163259874652315,
        "base": "USD",
        "rates":{
            "VALUE_TO_PRICE_ARG_BLUE": 970,
            "MEX":17,
            "PERU":3.8,
            "CHILE":900,
            "COL": 4000
        }
    }

    const{rates:{VALUE_TO_PRICE_ARG_BLUE: ARG}} = data

    let price = 30 + ARG
    console.log(price)