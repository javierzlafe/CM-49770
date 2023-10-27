


function loguear(){


    let identificar = true
    let intentos = 1
    
    do{
        let usuario = prompt("ingresa tu usuario (solo 3 intentos)")
        if(usuario === null){ //si usser es null se salta al siguiente paso
            break
        }
    
        if(usuario== "javier gimenez"  && intentos <=3){
            alert("bienvenido usuario " + usuario)
            identificar = false
        }else{
            alert("no se reconoce el usuario " + usuario)
            intentos++
            if(intentos >3){
                alert("usted supero los 3 intentos, vuelva mas tarde")
                console.error("no se reconoce el usuario")
                break
            }
        }
        
    }while(identificar)
    
    
    



}


loguear()