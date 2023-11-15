
                    //QUE ES UN EVENTO?




/* Los eventos en JavaScript son acciones que ocurren en un documento web(osea, nuestra pagina), 
como hacer clic en un botón, mover el mouse, pasar el mouse por algun lado, cargar una página, etc. 
Cuando se produce un evento, el navegador web envía una señal al código JavaScript 
para que se ejecute una función específica en respuesta al evento.


/* Por ejemplo, si queremos que una función se ejecute cuando un usuario hace clic en un botón especifico, 
asignamos la función a la propiedad onClick del botón. Cuando el usuario hace clic en el botón, 
la pagina manda una señal al código JavaScript y se ejecuta la funcion que armamos.

La sintaxis para asignar una función a un evento en JavaScript es la siguiente: */

                               /*  elemento.evento = function() {
                                    // Código a ejecutar cuando se produce el evento
                                }
 */

/* en este caso "elemento" es el elemento HTML al que queremos asignar el evento, 
y "evento" es el nombre del evento que queremos que se ejecute, como "onClick", "onLoad", "onMouseOver", etc.
*/



                            //METODO VIEJO  (Se usa en sistemas anteriores al 2015)

/* 
// Seleccionamos el botón y el título utilizando el método getElementById().  crear el h1 en html sino no funciona


let boton = document.getElementById("boton");
let titulo = document.getElementById("titulo");

// Asignamos la función al evento onClick del botón
boton.onclick = function() {
	// Cambiamos el contenido del título
	titulo.innerHTML = "Nuevo texto";
} */



                            //ADDEVENLISTENER()  nace en em6 2015 y es que usamos ahora



/* addEventListener() es un método que nos permite agregar una función a un evento específico en un elemento HTML. 
Cuando se produce el evento, (cuando se hace click por ejemplo) la función se ejecuta automáticamente.

La sintaxis para addEventListener() seria asi:


elemento.addEventListener(evento, funcion);

elemento: es el elemento HTML al que se le desea agregar el evento.
evento: es el nombre del evento que se desea asignar, como "click", "load", "submit", "keyup", etc.
funcion: es la función que se va a ejecutar cuando se produzca el evento.

Por ejemplo, si queremos agregar un evento de clic a un botón con ID "mi-boton", se puede usar addEventListener() 
de la siguiente manera:


let boton = document.getElementById("mi-boton");   //crear un boton en html


boton.addEventListener("click", function() {
  console.log("¡Hiciste clic en el botón!");
  alert("evento detectado, mira la consola")
});
En este ejemplo, se selecciona el botón con ID "mi-boton" usando getElementById(). y se agrega un evento de clic 
usando addEventListener(), y se le pasa una función anónima como segundo argumento que se ejecuta cuando 
se hace clic en el botón. En este caso, la función solamente imprime un mensaje en la consola.

addEventListener() tiene varias ventajas sobre otras formas de asignar eventos en JavaScript, 
como elemento.onclick, que permite agregar varias funciones a un mismo evento */





/* 
            //esta seria la 3er forma que se muestra, pero NO SE USA.

div class="card">
		<h2>Evento Click</h2>
		<p>Presiona el botón para ver la alerta:</p>
		<button onclick="alert('¡Haz hecho clic en el botón!')">Haz clic aquí</button>
	</div> */


    //si escriben js dentro de html se muere un gatito





                            //Eventos de mouse



/* 


        CLICK: Este evento se activa cuando el usuario hace clic en un elemento con el mouse.



// Seleccionar un elemento HTML por su ID
let elemento = document.getElementById("miElemento");

// Agregar un evento de clic al elemento utilizando addEventListener
elemento.addEventListener("click", function() {
  console.log("el pelado es el mejor profe!");
});





        MOUSEOVER: Este evento se activa cuando el mouse entra en un elemento.

// Seleccionar un elemento HTML por su ID
let elemento = document.getElementById("miElemento");


// Agregar un evento de mouseover al elemento utilizando addEventListener
elemento.addEventListener("mouseover", function() {
  console.log("el mouse entro al elemento");
})







            MOUSEOUT: Este evento se activa cuando el mouse sale de un elemento.

// Seleccionar un elemento HTML por su ID
let elemento = document.getElementById("miElemento");

// Agregar un evento de mouseout al elemento utilizando addEventListener
elemento.addEventListener("mouseout", function() {
  console.log("El mouse salio del elemento");
});






        MOUSEMOVE: Este evento se activa cuando el mouse se mueve dentro de un elemento.
        como el ejemplo del jueguito


// Seleccionar un elemento HTML por su ID
let elemento = document.getElementById("miElemento");

// Agregar un evento de mousemove al elemento utilizando addEventListener
elemento.addEventListener("mousemove", function(event) {
  console.log("El mouse estaen la posición x: " + event.clientX + " y en la posición y: " + event.clientY);
});






En este último ejemplo, usamos el objeto event para obtener las coordenadas del mouse en la pantalla 
y las muestra en la consola.

Estos son solo algunos de los eventos que puede tener un mouse en JavaScript. 
También existen otros eventos como mousedown y mouseup que usamos para el ejemplo del jueguito. (no lo hice para que lo armen ustedes y practiquen) */


                              
                              
                              
                                                          //EVENTOS DE TECLADO
                              
                              
                              
                              
                                                          //INPUT
                              
                              /* input: Este evento se activa cuando se cambia el valor de un elemento de entrada
                                                                                        
                              
                              let inputField = document.getElementById('miCampoDeTexto');
                              inputField.addEventListener('input', function(event) {
                                console.log('Valor del campo de texto cambiado:', event.target.value);
                              });
                              
                              
                              input: es útil cuando necesitas realizar alguna acción mientras el usuario está ingresando información 
                              en un campo de texto o área de texto. 
                              Por ejemplo, podemos usarlo para mostrar una vista previa en tiempo real de lo que el usuario está escribiendo, 
                              para validar el contenido de un campo de texto a medida que el usuario lo escribe.
                              
                              
                              
                              
                                                          //CHANGE
                              
                              
                              change: Este evento también se activa cuando se cambia el valor de un elemento de entrada, 
                              pero a diferencia del evento input, el evento change se dispara después de que el usuario termino
                              de interactuar con el texto
                              
                              
                              let inputField = document.getElementById('miCampoDeTexto');
                              inputField.addEventListener('change', function(event) {
                                console.log('Valor del campo de texto cambiado:', event.target.value);
                              });
                              
                              
                              change: Este evento es útil cuando necesitas realizar alguna acción después de que el usuario haya terminado 
                              de ingresar información en un campo de texto o área de texto. 
                              Por ejemplo, para validar el contenido de un campo de texto después de que el usuario 
                              haya terminado de escribir o para actualizar un campo de texto con el contenido ingresado 
                              antes de enviar el formulario.
                              
                              
                              
                              
                                                          //SUBMIT
                              
                              
                              submit: Este evento se activa cuando se envía un formulario, 
                              ya sea haciendo clic en un botón de enviar o presionando la tecla Enter en un campo de texto.   
                              
                            creen el formulario en el html sino no funciona
                              
                              
                              let form = document.getElementById('miFormulario');
                              
                              
                              form.addEventListener('submit', function(event) {
                                event.preventDefault(); // Detener el envío del formulario
                                console.log('Formulario enviado');
                              });
                              
                              
                              aca, usamos el método preventDefault() para detener el envío del formulario 
                              y evitar que la página se recargue. 
                              Pueden agregar su propia lógica para manejar la información del formulario antes de enviarla al servidor o a donde quieran.
                              
                      
                               */
                              
                              
                              
                              
                              
                              
                              

                              