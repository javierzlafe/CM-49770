/* sessionStorage.setItem('bienvenida', objeto);
//                       clave         valor
 */

/* 
let mensaje =  localStorage.getItem('bienvenida');

console.log(mensaje) */




/* 
setItem(key,value) permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el storage
removeItem() para eliminar un dato
clear() limpia TODO

*/




//localStorage.setItem("entendi", "no entendi nada")

/* localStorage.removeItem("entendi")

localStorage.clear() */

/* 


const producto1 = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}

 */





/* 
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const x of productos) {
    guardarLocal(x.id, JSON.stringify(x));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos)); */










//vamos desde cero






const inputNombre = document.querySelector("#nombre")
const inputEdad = document.querySelector("#edad")
const inputEmail = document.querySelector("#email")
const botonEnviar = document.querySelector("#guardar")
const botonTraer = document.querySelector("#traer")


botonEnviar.addEventListener("click", guardarFormulario)



function guardarFormulario(){
    const datosDelFormulario={
        nombre:inputNombre.value,
        edad:inputEdad.value,
        email:inputEmail.value
    }
    let resultado = JSON.stringify(datosDelFormulario)          
    localStorage.setItem("datosForm", resultado)
    console.log(resultado)
    alert("ya se guardaron los datos en el storage")
}





function cargarFormulario(){

    const formulario = document.getElementById("miFormulario")
    const datosJSON = localStorage.getItem("datosForm")


    if(datosJSON){
        const datosDelFormulario = JSON.parse(datosJSON)
        formulario.nombre.value = datosDelFormulario.nombre
    }

}