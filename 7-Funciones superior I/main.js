/*

En JavaScript, podemos crear abstracciones usando funciones y objetos. Por ejemplo, si queremos calcular 
la suma de dos números, podemos crear una función llamada "sumar" que tome dos argumentos y devuelva su suma. 
Esta función va a esconder los detalles de cómo se realiza la suma, lo que nos dejausarla de forma 
sencilla sin preocuparnos por lo que pasa adentro.

Nosotros ya usamos abstraccion, pero no sabiamos que lo estabamos haciendo... */



function sumar(num1, num2) { //declaro funcion sumar, paso dos parametros
    return num1 + num2;   //retorno la suma de esos parametros
}

const resultado = sumar(3, 4);    //creo variable resultado y llamo a la funcion
console.log(resultado); // Output: 7


/* esto es simplemente una suma... pero que pasaria si tengo muchas mas cosas...
por ejemplo un codigo que tenga un objeto y que a su vez tenga metodos... */


const coche =  {
marca: 'Toyota',
modelo: 'Corolla',
anio: 2022,
color: 'Azul',
arrancar: function() {
console.log('El coche está arrancando');
},
acelerar: function() {
console.log('El coche está acelerando');
},
frenar: function() {
console.log('El coche está frenando');
}
};

// Ejemplo de uso
coche.arrancar(); // Output: El coche está arrancando
coche.acelerar(); // Output: El coche está acelerando
coche.frenar(); // Output: El coche está frenando




/* En resumen, la abstracción en JavaScript nos deja crear objetos o conceptos complejos 
para que podamos usarlos de forma reducida y enfocarnos en los detalles importantes y ocultar los detalles 
irrelevantes. Esto nos deja escribir un código más limpio, y mucho mas fácil de entender y mantener. */



            //EJEMPLOS DE LOS METODOS PARA ARRAY




/*  const frutas = ["manzana", "banana", "naranja"];


            --FOREACH--



forEach(): Ejecuta una función para cada elemento del array.
se podria decir que es como un for, aplicado mas sencillamente a un array


frutas.forEach(function(fruta) {
console.log(fruta.toUpperCase());
});

      // MANZANA
      // BANANA
      // NARANJA
      

en este caso tambien se podria usar un for-of, pero hay pruebas que demostraron
que el uso de for each es mucho mas rapido a la hora de ejecutar y consumir recursos.





                      --MAP--



map(): Crea un nuevo array con el resultado de llamar a una función para cada elemento del array.
      
      const numeros = [1, 2, 3, 4, 5];
      //declaro constante "doble" y guardo el nuevo array
      const doble = numeros.map(function(numero) {   //Recorro cada elemento
        return numero * 2;   //lo multiplico por 2
      });
      console.log(doble); // [2, 4, 6, 8, 10]


map es parecido a for each pero la diferencia mas importante es que map, crea un NUEVO ARRAY
y el for each, trabajo en el array original.





                    --FIND--




El método find se utiliza para buscar un elemento en un array que cumpla con cierta condición, 
y devuelve el primer elemento que cumple dicha condición.



                              const numeros = [2, 4, 6, 8, 10];
    const encontrado = numeros.find((numero) => numero >= 5);

    console.log(encontrado); // Output: 6


    




En este ejemplo, la función comprueba si el elemento actual (numero) es mayor o igual a 5. 
Si el elemento actual cumple la condición, la función devuelve true y el método find devuelve 
el elemento actual. En este caso, el método find devuelve el valor 6, por que es el primer elemento 
que cumple con la condición.

Es importante tener en cuenta que el método find devuelve sólo el primer elemento que cumple 
con la condición, y no todos los elementos que la cumplen. 
Si necesitamos traer todos los elementos que cumplan la condición, 
se puede utilizar el método filter...






                  --FILTER--



filter(): Crea un nuevo array con todos los elementos que pasan una prueba especificada en una función.
      
const numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0; //si lo divido por dos y el resto da 0  (en la clase explique lo que era el resto)
      });
      console.log(numerosPares); // [2, 4]

*/




                  /* --REDUCE-- */


/* El método reduce se usa para reducir un array a un único valor, 
aplicando una función de reducción a cada elemento del array. 
Es decir, se utiliza para procesar cada elemento del array y combinarlos en un solo valor. */

/* const preciosPrendas = [1, 2, 3, 4, 5];
const suma = preciosPrendas.reduce((acumulador, valorActual) => acumulador + valorActual);
                
console.log(suma); // Output: 15
*/




              //SORT

/*               const numeros = [7, 2, 10, 1, 5];

// Ordenar los números de forma ascendente
numeros.sort(function(a, b) {
return a - b;
});

console.log(numeros);  */






/* -------------------------------------------------------------------------------------------------------------- */






//ATENCION! a partir de aca, se muestra todo lo visto con el profe marcelo









//Funcion De Orden Superior 1

//Las funciones de orden superior en JavaScript son aquellas que pueden recibir otras funciones como argumentos o devolver funciones como resultado

//Para entender lo que son las Funciones de orden superior vamos a ver métodos de trabajo que nos ayuden a comprenderlos.

let total = 0;

for (let i = 1; i <= 10; i++) {
  total = total + i; // o total += i
    console.log(total)
}
console.log(total)

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Que pasaría si queremos contar cualquier rango de número, como podemos usar esto?

//guardamos nuestro ciclo en una función
//le ingresamos 2 parámetros
//parámetro 1 = número mínimo
//parámetro 2 = número máximo

function sumarRango(min,max){
    let total1 = 0
   for (let i= min; i <= max; i++) {
        total1 = total1 + i; 
  }
    return total1 ; 
}

//Con esto tenemos una función reutilizable
console.log(sumarRango(1,9))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*********RETORNO DE FUNCIONES **********************/

//METODOS DE BUSQUEDA Y TRANFORMACION

//creamos una arrow function
//le damos como parámetro un número = num
//después de la arrow le preguntamos si num es mayor que 10

const mayorquediez = (num) => num > 10; //retorna automáticamente al ser arrow function

console.log(mayorquediez())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Función que retorna una función anónima

//Función Padre 
//imaginemos que queremos hacer lo mismo pero con cualquier número

function mayorQue(x) {
   return (num) => num > x; // función nueva creada
}

//Aca definimos MAYORQUEDIEZ como la función anónima que retornamos
//el valor de x se lo asignamos como parámetro para identificar si es mayor a ese número

const MayorQueDiez = mayorQue(10); 

MayorQueDiez = (num) => num > 10

console.log(MayorQueDiez())

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/************METODOS DE BUSQUEDA Y TRANFORMACION**************************/

const numeros = [20,35,12,34,75,12];

//FOREACH()
//Recorre el array y ejecuta lo que le digamos a cada elemento
//primer paréntesis () = sirve para utilizar el método forEach
//segundo paréntesis () = le damos el argumento en este caso una función anónima para que haga una acción

//foreach = Por Cada
numeros.forEach((numero) => {
   console.log(numero)
})

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Find()
//Recorre el array y retorna el primer elemento que cumpla con la condición

const perro = animales.find((animal) => { 
 return   animal === "gato"
});

console.log(perro)

//ejemplo de utilización de find al encontrar productos

let ProductoElegido = "televisor";

//retorna un elemento y no un array
// console.log(productos.find((producto) => producto.nombre === ProductoElegido ))

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Filter()
//Retorna un nuevo array con todos los elementos que cumplan la condición

const gatitos = animales.filter((animal)=>  animal === "gato"  )

//Siempre devuelve un array
console.log(perro2)

const productos = [
    {nombre:"lampara", precio:200},
    {nombre:"radio", precio:350},
    {nombre:"televisor", precio:1500},
    {nombre:"televisor 4k", precio:9000},
    {nombre:"televisor plano", precio:9000},
    {nombre:"televisor full9k", precio:9000}
]

//ejemplo utilizando filter para los objetos 
 
//sumemos método include
//include = me da true o false si un parámetro está dentro del elemento
const televisores = productos.filter((producto) =>  producto.nombre.includes("televisor")  )

console.log(televisores)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//some()  
//recorre el array y responde true o false según si el elemento cumple con la condición
const animales = ["perro","gato","cisne","tortuga","gato","pato"];

const pato = animales.some((animal) => animal === "pato");

console.log(pato);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const personas = [
   { nombre: 'Ana', edad: 30 },
   { nombre: 'Aba', edad: 30 },
   { nombre: 'Juan', edad: 25 },
   { nombre: 'María', edad: 35 }
];

function compararPorEdad(personaA, personaB) {
   // Comparamos las edades de las dos personas
   if (personaA.nombre < personaB.nombre) {
       return -1; // Devuelve un valor negativo si personaA debe ir antes que personaB
   } else if (personaA.nombre > personaB.nombre) {
       return 1; // Devuelve un valor positivo si personaB debe ir antes que personaA
   } else {
       return 0; // Devuelve 0 si las edades son iguales y el orden no importa
   }
}

console.log(personas.sort(compararPorEdad));

/////////////////////////////////////////////////////////////////////////

