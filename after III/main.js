
/* 
productos *
local storage 
filtras por marca
agregar si no esta
 */



//creo funcion constructora
const Producto = function(nombre,precio,stock){       
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}


//productos
let producto1 = new Producto("tomate", 1500, 20)
let producto8 = new Producto("tomate perita", 1500, 20)
let producto2 = new Producto("lechuga", 500, 35)
let producto3 = new Producto("cebolla", 300, 15)
let producto4 = new Producto("verdeo", 2500, 700)
let producto5 = new Producto("aceite", 1500, 5)
let producto6 = new Producto("acelga", 1500, 2)
let producto7 = new Producto("sal", 1500, 200)


//meto todos los productos en una lista
let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]

//si hay algo en localstorage, lo meto a la lista
if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista = lista  //sino, la lista sigue igual
}


//creo funcion que filtra
function filtrarProductos(){
    const body = document.querySelector("body")  //capturo el body
    const input = document.getElementById("filtrarP").value //traigo el valor del imput
    const palabraClave = input.trim().toUpperCase() //palabra clave para buscar
    const resultado = lista.filter(  (producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){  //si hay resultados creo la card para mostrarlos

        const container = document.createElement("div")  //este almacena la card
        container.classList.add("container")  //agrego la clase "container" para meterle css

        resultado.forEach( (producto)=>{ //recorro los productos de la lista y los muestro en la card
            const card = document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${producto.nombre}`
        card.appendChild(nombre)  //agrego las propiedades a la card

        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}`
        card.appendChild(precio)

        const stock = document.createElement("p")
        stock.textContent = `cantidad: ${producto.stock}`
        card.appendChild(stock)

        container.appendChild(card)  //card se hace hija de container
        })
        body.appendChild(container) // container se hace hijo de body   (alta fiesta se armaron)

    }else{
        alert("no hay coincidencias")
    }
}




//funcion para agregar productos
function agregarProducto(){

    const form = document.createElement("form")  //creo el formulario desde js
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" step="0.01" required>
    
    <label for="precio-input">Precio:</label>
    <input id= "precio-input" type="number" step="0.01" required>

    <label for="stock-input">Stock:</label>
    <input id= "stock-input" type="number" step="0.01" required>

    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function (e){ //prevengo el envio del formulario para poder validarlo antes
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const precioInput = parseFloat(document.getElementById("precio-input").value)
        const stockInput = parseInt(document.getElementById("stock-input").value)

        if(isNaN(precioInput) || isNaN(stockInput) || nombreInput === ""){
            alert("por favor ingresa valores validos.")
            return
        }

        const producto = new Producto (nombreInput, precioInput, stockInput)

        if (lista.some( (elemento)=> elemento.nombre === producto.nombre)){ //veo si quieren agregar algo que ya existe
            alert("el producto ya existe")
            return
        }

        lista.push(producto) //si todo ok, agrego producto nuevo a la lista

        localStorage.setItem("productos", JSON.stringify(lista))
        alert(`se agrego el producto ${producto.nombre} a la lista`)  //cuando agrego el producto, mando todo al local storage



        //hago lo mismo que la funcion de arriba, creo los div y bla bla bla, para mnostrarlos en el dom
        const container =  document.createElement("div")
        
        lista.forEach((producto)=>{
            const card = document.createElement("div")

            const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${producto.nombre}`
        card.appendChild(nombre)

        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}`
        card.appendChild(precio)

        const stock = document.createElement("p")
        stock.textContent = `cantidad: ${producto.stock}`
        card.appendChild(stock)
        container.appendChild(card)
        })

        const body = document.querySelector("body")
        body.appendChild(container) //(otra fiesta loca mas)

        form.reset()  //termino de agregar y reseteo el form

    })

    const body = document.querySelector("body")
    body.appendChild(form)

}





//aca meto la botonera de html con sus eventos

const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.classList.add("button") //agrego la clase button para meterle css
filtrarBtn.addEventListener("click", filtrarProductos)


const agregarBtn = document.getElementById("agregarProducto")
agregarBtn.addEventListener("click",agregarProducto)