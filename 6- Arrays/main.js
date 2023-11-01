                        //ARRAY   
                        
                        
    /* En JavaScript, un array (o "arreglo" en español) es una estructura de datos que permite almacenar 
     muchos valores en una única variable. Un array puede tener cualquier tipo de dato, 
     incluyendo números, cadenas de texto (string), booleanos, objetos, y otros arrays.
            
     Para declarar un array en JavaScript, se usan los corchetes. 
     Por ejemplo, para crear un array con tres elementos, se puede escribir asi: */

           /*  let miArray = [1, "dos", true]; */






                           //DESPUES TENEMOS EL TEMA DE LOS INDICES

     /*un índice en un array es un número que se usa para acceder 
     a elementos individuales dentro del array. Los índices siempre comienzan en cero y aumentan 
     de uno en uno para cada elemento del array.

            osea, es la posicion del elemento.   por ejemplo.


                    const frutas= ["manzana", "pera", "banana", "sandia"]
                        //indice:      0         1        2         3

                        


    /* Para acceder a los elementos de un array, se usa el índice del elemento dentro de los corchetes.*/

                       /*  console.log(frutas[0])  //me tira la manzana
                        console.log(frutas[2])  //me tira la banana*/


                        //y para asignar ese valor a una variable, seria:

             //let frutaPreferida = frutas[1]; // en este caso tira "pera" */






     /* 
     
     si tenemos un array de números como este: 

                const numeros = [10, 20, 30, 40];

     Podemos acceder al primer elemento del array (10) utilizando el índice 0:

                console.log(numeros[0]); // Output: 10
    

     y si queremos acceder al tercer elemento del array (30) se usa el índice 2:

                console.log(numeros[2]); // Output: 30


    También se puede asignar un nuevo valor a un elemento específico del array usando su índice:

                numeros[1] = 25;
                console.log(numeros); // Output: [10, 25, 30, 40]
      */
    
    /* Es importante tener en cuenta que si queremos acceder a un índice que no existe, 
    nos va a tirar el valor undefined, por ejemplo: */

                //console.log(numeros[4]); // Output: undefined

            




                                        //EJEMPLO DE SUMA CON ARRAY

        /*  const  numeros = [1,2,3,4,5];
            console.log( "indice numero 0: " + numeros[0] ) // 1; 
            console.log( "indice numero 3: " + numeros[3] ) // 4; 
            let resultado  = numeros[1] + numeros[2] 
            console.log( resultado  ) // 5; */



    /*Los array pueden almacenar diferentes tipos de datos al mismo tiempo.
    podemos meter un numero, un string, un booleano y hasta una funcion si queremos- 
    pero eso la verdad es que es MUUUUY RARO.
    normalmente los array los van a encontrar con 1 solo tipo de dato.
    y si quiero muchos datos? y bueno, consumo diferentes array y despues veo como los concateno...*/



                        //BUCLE FOR para un array   



/* el bucle for se puede usar tranquilamente para poder RECORRER un array.*/


                        /* const numeros = [15, 26, 73, 432, 75];
                        for (let i = 0; i < 5; i++) {   que me deberia mostar aca? hasta que numero?
                            console.log(numeros[i]);
                        }

                        en este bucle recorro 
                        EL INDICE, y me muestra los numeros...
                        */







                    //METODOS Y PROPIEDADES DE LOS ARRAY      



                    /* Los métodos de array, son funciones integradas (nativas)que se usan 
                    para trabajar de manera mas facil. los mas conocidos son:

                    

                                            ---LENGTH---

                    length(): cuenta la cantidad de propiedades que hay en el array
                            
                                const miArray = ["marca", 3 ,"palabra"];
                                console.log( miArray.length ); //imprime 3
                    
                    este es muy importante porque nos sirve para que se recorra todo el array
                    sin tener que especificar hasta Donde, por ejemplo:
                    
                                const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

                                for (let i= 0; i < numeros.length; i++) {
                                    alert(numeros[i]);
                                } */

                    


                     /*                        ---PUSH---

                    push(): Agrega uno o más elementos al final del array.



                                const frutas = ["manzana", "banana", "naranja"];
                                frutas.push('otro elemento')
                                
                                console.log(frutas.length) // ⇒ 4
                                console.log(frutas) //["marca", 3, "palabra", “otro elemento”] */
                    




                                      /*           --POP--

                    pop(): Elimina el último elemento del array.




                                let frutas = ["manzana", "banana", "naranja"];
                                let ultimoElemento = frutas.pop();

                                console.log(frutas);  // ["manzana", "banana"]
                                console.log(ultimoElemento);  // "naranja"

                     


                                                --SHIFT--

                    shift(): Elimina el primer elemento del array.
                                
                                frutas.shift();
                                console.log(frutas); // ["banana", "naranja"]



                                                --UNSHIFT--


                    unshift(): Agrega uno o más elementos al inicio del array.
                                
                                frutas.unshift('kiwi');
                                console.log(frutas); // ["kiwi", "banana", "naranja"]



                                                --SLICE--


                    slice(): Retorna una copia de parte del array. parametros (desde,hasta)
                                
                                const copia = frutas.slice(0, 2);
                                console.log(copia); // ["kiwi", "banana"]




                                                --SPLICE--



                    splice(): Cambia el contenido del array eliminando elementos y reemplazandolos.
                                


                    concat(): Une dos o más arrays.
                                
                                const perros = ['puqui', 'negrito','manchita'];
                                const gatos = ['mishi', 'garfield', 'salem']
                                const mascotas = perros.concat(gatos);
                                console.log(mascotas); // aparecen todos los perros y gatos





                                                --JOIN--

                    join(): Une todos los elementos de un array en una cadena.
                               
    º                            const cadena = frutas.join(', ');
                                console.log(cadena); // "kiwi, mango, sandía, banana, naranja"





                                                --INDEXOF--



                    indexOf(): Retorna la posición de un elemento específico en el array.
                                si el elemento no existe, retorna -1
                                
                                 const posicion = frutas.indexOf('banana');
                                console.log(posicion); // 1
 


                                                --INCLUDES--


                    includes(): el método includes me permite saber si un elemento que recibo por parámetro 
                    existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:



                                const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

                                console.log( nombres.includes('Rita') ) // ⇒ true
                                console.log( nombres.includes('Miguel') ) // ⇒ true
                                console.log( nombres.includes('Julieta') ) // ⇒ false






                    
                    Estos son solo algunos de los métodos de array disponibles en JavaScript. 
                    El uso de estos métodos puede hacer que trabajar con arrays sea más eficiente y fácil de entender.

 */



                                   /*  --EJEMPLO FACIL DE USO CON PUSH (el que hice al final de todo)

                    let miArray = [];

                    // Pedimos al usuario que ingrese un nombre
                    let entrada = prompt("Ingresa un nombre:");
                    
                    // Mientras el usuario siga ingresando nombres, los agregamos al array
                    while (entrada !== null) {
                      // agregamos al array lo que escribe el usuario
                      miArray.push(entrada);
                      // Pedimos al usuario que ingrese otro número
                      entrada = prompt("Ingresa otro número o presiona cancelar para terminar:");
                    }
                    
                    // Mostramos el array completo en la consola
                    console.log(miArray); */





                                /* EJEMPLO SIMPLE USANDO INDEX OF Y SPLICE

            let miArray = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];

            
            let indice = miArray.indexOf('elemento3');     // Encontramos el índice del elemento que queremos eliminar
            
            if (indice !== -1) {                        // Si el elemento existe en el array, lo eliminamos con splice()
            miArray.splice(indice, 1);
            }

            console.log(miArray); // ['elemento1', 'elemento2', 'elemento4']
 */





                               /*  COMO ARMAR UN ARRAY DE OBJETOS         FILMINA 33



Un array de objetos es  una colección de objetos guardados en una única variable. (como el ejemplo del hospital) 
Cada objeto dentro del array es como un elemento individual que tiene una serie de propiedades y métodos.


                        let personas = [
                        { nombre: "Juan", edad: 25, ciudad: "Buenos Aires" },
                        { nombre: "María", edad: 30, ciudad: "Córdoba" },
                        { nombre: "Pedro", edad: 20, ciudad: "Rosario" }
                        ];


 Para acceder a una propiedad de un objeto dentro del array, 
se usa la notación de corchetes y el índice (osea la posicion) del objeto al que queres acceder. 


                        console.log(personas[1].edad); // salida: 30


tambien podemos usar bucles para iterar dentro de un array de objetos y 
acceder a las propiedades de cada objeto.

                        for (let i = 0; i < personas.length; i++) {
                        console.log(personas[i].nombre + " vive en " + personas[i].ciudad);
                        }




                                            /* FOR OF


      La sentencia for...of es una estructura de control de flujo, que se usa para recorrer 
      elementos de  un array o un objeto iterable, y que ejecuta un conjunto de instrucciones 
      en cada uno.

      En otras palabras, la sentencia for...of nos va a dejar recorrer cada elemento del array
      y hacer una tarea específica en cada uno. 
      La sintaxis básica de la sentencia for...of es la siguiente:

      for (variable of iterable) {
        // instrucciones a ejecutar en cada iteración
      }





      let personas = [
                        { nombre: "Juan", edad: 25, ciudad: "Buenos Aires" },
                        { nombre: "María", edad: 30, ciudad: "Córdoba" },
                        { nombre: "Pedro", edad: 20, ciudad: "Rosario" }
                        ];


for (const pochoclo of personas) {   //creo const pochoclo, que recorre personas.
console.log(pochoclo.nombre);   //recorro pochoclo.nombre y lo muestro
console.log(pochoclo.ciudad); //recorro pochoclo.ciudad y lo muestro
} */




//Javier Gimenez







                                  