function agregarProducto() {
    let listaFrutas = document.getElementById('listaFrutas');
    let nuevaFruta = document.createElement('li');
    let nombreFruta = prompt('Ingresa el nombre de la fruta');
  
    if (nombreFruta) {
      nuevaFruta.textContent = nombreFruta;
      listaFrutas.appendChild(nuevaFruta);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes ingresar un nombre de fruta válido.'
      });
    }
  }
  
  let botonAgregar = document.getElementById('agregarBtn');
  botonAgregar.addEventListener('click', agregarProducto);
  