
//OBJETOS LITERALES


/* let persona = {

    nombre: "javier",
    edad: 32,
    apellido: "gimenez",

}


alert(persona.nombre) */






//OBJETO CONSTRUCTOR o tambien conocido como FUNCIONES CONSTRUCTORAS

/* 
function Persona (nombre, edad){
    this.nombre = nombre,
    this.edad = edad,
    this.saludar = function(){
        console.log("hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años" )
    }

}

let persona1 = new Persona("maria",30)
let persona2 = new Persona("tomas", 22)
let persona3 = new Persona("julio", 30)
let persona4 = new Persona("ale", 40)


console.log(persona2.saludar())   //llamar al metodo sino no funciona correctamente

 */






/* const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};



//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);


//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in




for (const propiedad in persona1) {

    console.log(persona1[propiedad]);

}
 */


const IVA = 1.21


function Producto (id,nombre,importe, stock){
    this.id = id,
    this.nombre = nombre,
    this.importe = importe,
    this.stock = stock
    //aca defino un metodo
    this.importeConIva = function(){
        return this.importe * IVA
    }
}


const producto1 = new Producto(1,"teclado",10000, 5)
const producto2 = new Producto(2,"mouse",5000, 46)
const producto3 = new Producto(3,"monitor",150000, 2)


console.log(producto1.importeConIva())




/* 
una función constructora y una clase son dos formas diferentes de crear objetos y organizar el código. 
las dos hacen practicamente lo mismo, pero existen algunas diferencias en la forma de escribirlas (la sintaxis).
 */