


//OBJETO MATH


//el objeto math, es una heramienta muy util que nos deja resolver problemas matematicos predefinidos.
//math nos facilita sacar ecuaciones como, coceno, seno, tangente,raiz cuadrada, potencias, y demas



//console.log(Math)
//console.log(Math.PI)
//console.log(Math.abs(-7.8))//devuelve el valor absoluto sin considerar neg o pos
//console.log(Math.ceil(7.1)) //redondea para arriba
//console.log(Math.floor(7.9)) //redondea para abajo
//console.log(Math.round(7.5)) // redonde al mas cercano (si es .5 va para arriba)
//console.log(Math.pow(2,5)) //devuelve 2 elevado a 5 (base,exponente)
//console.log(Math.sqrt(81)) //devuelve la raiz cuadrada del parametro
//console.log(Math.random() *30 +20)// *30 significa que recorre 30 posiciones, y +20 es desde donde empieza a contar

//uso uno sobre otro para conseguir un numero entero  - anidacion de propiedades dentro de un objeto

/* console.log(Math.round(Math.random() *10)) 



console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25 */




                        //DATE

/* 
const fechaActual = new Date()

console.log(fechaActual)
 */


/* 
año: (4 digitos)
mes: (0-11)
dia del mes: (1-31)
hora: 0-23
minutos: (0-59)
segundos: (0-59)
mili-segundos: (0-999)

*/



/* const navidad = new Date(2023,11,24,22,30,0,0)

console.log(navidad)
 */



/* const fecha = new Date()


const anio = fecha.getFullYear()
const mes = fecha.getMonth()
const dia = fecha.getDate()



 */

//console.log(`la fecha actual es ${dia}/${mes}/${anio}`)

/* console.log("hoy es " + fecha.toLocaleDateString()) */


/* const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina) */








/* const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos") */







//manipular productos
//buscar => FILTER
//mostrarlo en consola
//y si no existe agregarlo






const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}


let producto1 = new Producto(" notebook lenovo", 480000, 5)
let producto2 = new Producto(" lenovo pad", 85000, 10)
let producto3 = new Producto(" notebook apple macbook", 1480000, 6)
let producto4 = new Producto(" samsung galaxy", 4500000, 20)



let lista = [producto1,producto2,producto3,producto4]


function filtrarProductos(){

    let palabraClave = prompt("ingrese el producto que desea buscar").trim().toUpperCase()
    let resultado = lista.filter((x)=> x.nombre.toUpperCase().includes(palabraClave) )
    
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: " + palabraClave)
    }

}


console.table(lista)
