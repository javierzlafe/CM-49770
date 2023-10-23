 //CICLOS E ITERACIONES

            /* Los ciclos e iteraciones son estructuras fundamentales en programación 
            
            un ciclo es una estructura de control que permite repetir instrucciones varias veces. 

            iterar en programación implica repetir una serie de acciones o instrucciones de manera 
            sistemática hasta que se cumpla una condición o se complete un número específico de repeticiones. */







/*Hay varios tipos de ciclos en JavaScript, pero los más comunes son:


                                //FOR

Ciclo "for": se usa para repetir un bloque de código un número específico
de veces. 
principalmente cuando se conoce de antemano el número de iteraciones 
que se requieren. Por ejemplo: */


        //ESTRUCTURA DEL FOR
/*     desde     hasta      actualizacion
for (inicio, limite o condicion, incremento)


*/


//debugger 
//esta palabra se usa para ver paso a paso que sucede en la consola (vean la clase)



/* for(let i =0; i<10; i++){
    console.log("estoy iterando con el for"+ i)   
} */ 






/*  
                    BREAK    

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; //cuando i es igual a 5, corta el bucle
    }
    console.log(i);
  }




                    CONTINUE    => 

  for (let i = 1; i <= 10; i++) {
    
    if(i == 5){
        continue;  //Si la variable i es 5, no se interpreta la repetición y la saltea
    }
    alert(i);
}




/* Tanto el while como el for son estructuras de control de flujo que existen en la 
mayoría de los lenguajes de programación. 
y nos permiten repetir una sección de código varias veces. 
Pero, existen algunas diferencias clave entre ambos.

el for se usa cuando se conoce la cantidad exacta de iteraciones 
que se necesitan

while es una estructura de control de bucle que se usa cuando se desconoce 
el número exacto de iteraciones que se necesitan para completar una tarea. 
 */




                    
                        //WHILE


//el ciclo while se puede ejecutar 0 o infinito de veces
/* 
La condición se evalúa antes de que se ejecute el bloque de código. 
Si la condición es verdadera, el bloque de código se ejecuta. 
Si la condición es falsa, el bloque de código no se ejecuta, se corta el bucle 
y el programa continua con la siguiente instrucción después del bucle while. */


 


 
/*

let iterar = true 


 /* while(iterar ===true){  //mientras la variable es verdadera se va a ejecutar (OJO CON LOS BUCLES INFINITOS, lo vimos en clase)
    console.log("imprimo el mensaje en la consola")
    iterar= confirm("desea continuar la ejecucion del bucle?")//dentro de las llaves HAY QUE CONTROLAR la ejecucion
 } 
 
                ejemplo con condicional
 
 let contador = 5;

 while (contador < 5) {
   console.log("El valor del contador en el ciclo while es: " + contador);
   contador++;
 } */
 






                //DO WHILE


/* El ciclo do-while es otra estructura de control de bucle que es similar al ciclo while, 
pero con una diferencia importante: en un ciclo do-while, el cuerpo del bucle se ejecuta 
al menos una vez antes de que se compruebe la condición. */





/* let contador2 = 6;

do {
  console.log("El valor del contador en el ciclo do-while es: " + contador2);
  contador2++;
} while (contador2 < 5); */





                    //SWITCH


/* el "switch" es una estructura de control de flujo 
que se usa para tomar decisiones basadas en el valor de una expresión. 
Es similar a la estructura "if...else if...else", 
pero puede ser más eficiente y legible en algunos casos. */






                    
/* console.log("bienvenidos a la consesionaria de coches")

let consulta = confirm ("te puedo ayudar a buscar un coche?")

if(consulta===true){
    let coche = prompt("que coche estas buscando?  ingresa la marca")
    let color = prompt("elige el color de tu " + coche)

    //estructura del switch
    switch(color) {     //dentro del switch va la KEY. 
        case "blanco":  //en el case, se pone el color predefinido del coche
            alert("tenemos " + coche + " en color " + color)  //aca si se escribe el color, se manda este mensaje
            break;  //si no se elije el color blanco, se salta a la siguiente
        case "negro":
            alert("tenemos " + coche + " en color " + color)
            break;
        case "rojo":
            alert("tenemos " + coche + " en color " + color)

               //aca agregamos otro condicional para saber si lo quiere comprar
            let comprar = confirm("queres comprarlo?")
            if(comprar===true){    //si comprar es true, envia el alert de compra. sino sale del preograma
                alert("gracias por tu compra")
            }
            break;
            default:   //si no ocurre ninguna de las anteriores, se manda por default este mensaje
                console.log("no tenemos " + coche + " en " + color)
                break;
    }
} */
