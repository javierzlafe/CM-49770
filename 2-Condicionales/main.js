
/* 
IMPORTANTE!!!

este repositorio es a modo de ejercitacion, la idea es que ustedes copien y peguen el codigo para poder jugar con la logica.
conozco mis codigos, asi que obviamente si veo uno de estos codigos en una entrega, van a quedar desaprobados.
pueden usarlos de referencia, pero la idea de esto es que puedan practicar.
Javier Gimenez
 */





nombre = "javier"

nombre.toLowerCase()  //MAYUSCULA
nombre.toUpperCase()  //minuscula





//CONDICIONALES 

/* "Un condicional es una estructura que nos permite tomar decisiones en nuestro código. 

usamos condicionales para hacer que nuestro programa tome diferentes 
caminos dependiendo de ciertas condiciones. 
La estructura básica de un condicional se compone de tres partes: 
una condición, 
una acción si la condición es verdadera 
y una acción si la condición es falsa.
 */



//VALORES BOOLEANOS   


//los booleanos se pueden poner de forma directa o tomar el valor mediante las condicionales

        /* Por ejemplo, si queremos que el programa salude al usuario solo si 
        su nombre es "Juan", se puede usar un condicional. 
        La condición sería verificar si el nombre es igual a "Juan". Si es verdadero, 
        el programa muestra un saludo especial para Juan. 
        Si es falso, el programa puede mostrar un saludo general para cualquier otro nombre.

                            ejemplo

        let nombre = prompt('Ingresa tu nombre');
        if (nombre == 'carlos') {
        console.log('¡Hola carlos!');
        } else {
        console.log('¡Hola, no te conozco!');
        } */



        //EJEMPLO DE IF


/* 
let num1 = 100
let num2 = 500 

let respuesta = (num1 > num2) //esto es false, ya que 100 no es mayor a 500

if (respuesta){
    console.log("num1 es menor a num2") //no se ejecuta porque la condicion da false
} */


                        //IF ELSE  
        
//se puede usar el if solo, pero no se puede usar un else sin if

/*
        aca les dejo un ejemplo practico

let respuesta = prompt("preferis una computadora o una notebook?")

if(respuesta.toLowerCase == "computadora"){
    console.log("las computadoras son buenas para jugar😊")
} else{
    console.log("las notebook son mas faciles de transportar💂‍♀️")
} */ 

        

  








//OPERADORES LOGICOS  (AND-OR-NOT)  && || !

//BUSCAR EL GOOGLE LA TABLA DE LA VERDAD 


/*
let numA = 100
let numB = 500 


if(numA < numB && numA < 1500){  //si uno solo da falso, ya no se cumple la sentencia
    console.log("esto nunca se va a mostrar")
}


if(numA < numB || numA < 1500){  //si se cumple una o la otra, se ejecuta
    console.log("esto si se va a mostrar porque una se cumple")
}

if(numA =! numB){    //para estar siempre seguro, usar ==! (estrictamente diferente)
    console.log("esto se muestra porque son diferentes")
} */



/* let correo = prompt("ingrese su correo")

if(correo =! "" ){ // si el ingreso NO ESTA VACIO (si es diferente a vacio), muestra el msj
    console.log("bienvenido "+ correo)
}else{
    console.warn("ingresa un correo por favor")
} */




/* ejemplo de CALCULADORA con if else que me pidieron en la clase



let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");
let resultado;

if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  resultado = num1 / num2;
} else {
  console.log("Operación inválida");
}

console.log("El resultado es: " + resultado);*/








      //EJEMPLO DE ELSE IF USANDO TODO LO APRENDIDO


/* console.log("vendo algo, escucho ofertas.")

let ofertabase = 2000
let ofertaDelUsuario = prompt("ingresa tu oferta:")
if (ofertaDelUsuario < 1000){
    console.error("olvidate, tu oferta es demaciado baja")
}else if(ofertaDelUsuario < 2000 && ofertaDelUsuario > 1000){
    console.warn("estirate un poco mas")
}else if(ofertaDelUsuario > 2000){
    console.log("oferta aceptada! ✅ te enviare un mensaje para coordinar el envio")
}else{
    console.log("tu oferta no se entendio")
} */





//Javier Gimenez

