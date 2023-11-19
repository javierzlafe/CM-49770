

//CONTROL DE STOCK


/* 
el stock *
los productos  (id,nombre,precio)   funcion constructora => array  *
buscar producto *
mostrarlo
si no esta lo agrego
*/




const Producto = function(nombre,precio,stock){       
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
}

let producto1 = new Producto("tomate", 1500, 20)
let producto8 = new Producto("tomate perita", 1500, 20)
let producto2 = new Producto("lechuga", 500, 35)
let producto3 = new Producto("cebolla", 300, 15)
let producto4 = new Producto("verdeo", 2500, 700)
let producto5 = new Producto("aceite", 1500, 5)
let producto6 = new Producto("acelga", 1500, 2)
let producto7 = new Producto("sal", 1500, 200)



let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]


function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que buscas").toUpperCase().trim()
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))


    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro el producto " + palabraClave)
        let respuesta= confirm("lo queres agregar?")

        if(respuesta == true ){
            agregarProducto()
        }
    }
}




function agregarProducto(){

    let nombre = prompt("ingresa el nombre del producto")
    let precio = parseFloat(prompt("ingresa el precio del producto")) 
    let stock = parseInt(prompt("ingresa el stock del producto"))


    if(isNaN(precio) || isNaN(stock) || nombre===""){
        alert("por favor ingresa valores validos")
        return
    }

    let producto = new Producto(nombre,precio,stock)

    lista.push(producto)
    console.table(lista)


}




           
           
           
