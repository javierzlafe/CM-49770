



/* const coche = {
    marca: "toyota",
    modelo: "corolla",
    anio: 2023,
    color: "azul",
    arrancar : function(){
        console.log("el coche esta arrancando")},
    acelera : function(){
        console.log("el coche esta acelerando")},
    frena : function(){
        console.log("el coche esta frenando")}
}



coche.arrancar()

 */




  /*                                   function mayorQue(x) {
    return (m) => m > x
}

                                let pochoclo = mayorQue(10)

console.log( pochoclo(12) )  //  true
console.log( pochoclo(8) )  //  false */





/* coches= [honda, lambo, ferrari, fiat, mercedes]

function consecionaria(coches, arrancar){
    for (const x of coches) {
        arrancar(x)
    }
} */






//EJEMPLOS POR CADA METODO



const frutas =  ["manzana", "naranja", "banana"]


//FOREACH


/* Foreach(): ejecuta una funcion por cada elemento del array
se podria decir que es como el for , pero mas sencillo*/


frutas.forEach(function(x){
    console.log(x.toUpperCase())
})




//MAP


/* map(): crea un NUEVO array con el resultado de llamar a una funcion para cada elemento del array */

/* const numeros = [1,2,3,4,5,6]

const doble = numeros.map(function(x){
    return x*2
})


console.log(numeros)

console.log(doble) */





//FIND


/* 
find(): se usa para buscar un elemento en el array que cumpla con cierta condicion
y devuelve  EL PRIMER ELEMENTO  que cumpla con la condicion */




/* const numeros = [2,4,6,8,10]

const encontrado= numeros.find( (x)=> x>=5  )

console.log(encontrado) */




//FILTER


16 /5




const numeros = [2,4,6,8,10,1,3,5,7,9]

/* 
filter(): crear un nuevo array con TODOS los elementos que pasan por una prueba*/

const numerosPares = numeros.filter( funcion(x){
    return x % 2===0;
})





