





/* setTimeout(saludar,0)
console.log("esto es la mitad")
console.log("aca se termina todo")



function saludar(){
    console.log("esto es el principio")
}
 */

/* const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 5000)
})
 */



//EJEMPLO DE HORA


/* let num = parseInt(prompt("ingresa los segundos")) 
let segundos = num *1000

let time = setInterval( ()=>{
    const date = new Date()
    console.log(date.toLocaleTimeString())
}, 1000   )



setTimeout(()=>{
    clearInterval(time)
    alert("ya pasaron " + num + " segundos")
}, segundos) */




/* 
const eventoFuturo = (x) => {
    return new Promise( (resolve, reject) => {
        if (x === true) {
            resolve('Promesa esta resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}

console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' } */




//simular una funcion que lee un archivo (retardo con settimeout)

function leerArchivo(){
    return new Promise (resolve =>{   
        setTimeout(()=>{
            resolve("contenido del archivo descargado")
            ,3000}) //aca simulamos que la operacion tarda 3 segundos
    })
}



function procesoAsincronico(){
    console.log("el archivo se descargo correctamente")
    console.log(contenido)
}

procesoAsincronico()