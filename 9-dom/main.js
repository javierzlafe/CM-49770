/* 

                                            DOM

 el término "DOM" hace referencia al "Document Object Model" o Modelo de Objetos del Documento. 
 Es una representación estructurada y jerárquica de un documento HTML que nos deja interactuar 
 con los elementos del documento y manipular el contenido, la estructura y estilo mediante código JavaScript.

que podemos hacer con esto?

Acceder a elementos HTML: seleccionar por etiqueta, clase, ID, etc., y modificar el contenido, 
atributos, estilos, etc.

Manipular eventos: Puedes asignar funciones a eventos como clics de botón o cambios de formulario.

Modificar la estructura del documento: agregar o eliminar elementos HTML.

Cambiar estilos y animaciones: modificar por ejemplo estilos CSS desde JS.

 */



/* let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML); */





                        //FORMAS DE LLAMAR


/* getElementById: busca un elemento HTML en una página web por su 
identificador único (ID) y lo devuelve.
Ejemplo: document.getElementById('miId') buscará un elemento con el ID "miId" en el HTML 
y lo retornará si existe.


getElementsByClassName:busca y devuelve una lista de elementos HTML que tienen la misma 
clase en una página web.
Ejemplo: document.getElementsByClassName('miClase') seleccionará todos los elementos que 
tienen la clase "miClase" y los devolverá en una lista.



getElementsByTagName: busca y devuelve una lista de elementos HTML que tienen el mismo nombre 
de etiqueta en una página web.
Ejemplo: document.getElementsByTagName('p') seleccionará todos los elementos de párrafo (<p>) 
en el documento y los devolverá en una lista.







/* let paises = document.getElementsByClassName("paises");
for (const pais of paises) {
    console.log(pais.innerHTML); */



/* let titulo = document.getElementById("titulo")
console.log( titulo.innerText )


titulo.innerHTML= "<h2>saraza</h2> <p>melocoton con dulce de batata<p>"
console.log( titulo.innerText ) */



/* document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 36;
 */


/* let padre = document.getElementById("personas");

let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];

for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let lista = document.createElement("li");
    lista.innerHTML = persona
    padre.appendChild(lista);
} */



/* let producto = { id: 1,  nombre: "pochoclo", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);
 */


/* let producto   = { id: 1,  nombre: "pochoclo", precio: 125 };
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor); */


/* const productos = [{ id: 1,  nombre: "pochoclo", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
 */
/* 

let parrafo = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor")

// o por clase:
parrafo = document.querySelector(".texto") */

