window.onload = () =>{ //espera a que la pagina se cargue primero y luego el JS
    const parrafo = document.getElementById('texto')
    //parrafo.innerHTML = "Acabo de cambiar el texto"

    //Agregando elementos HTML a otro elemento HTML
    //debemos usar innerHTML y no innerText
    parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'

    
}