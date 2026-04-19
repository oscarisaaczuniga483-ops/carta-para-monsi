function interactuar(elemento) {
   
    elemento.classList.add('revelada');

    
    const cancion = document.getElementById('musica-cumple');
    cancion.play().catch(error => {
        console.log("El navegador bloqueó el audio, pero sonará al siguiente toque.");
    });
}

function revelarCarta() {
    const pastel = document.getElementById('contenedor-pastel');
    const carta = document.getElementById('contenedor-carta');

 
    pastel.style.opacity = '0';
    
    setTimeout(() => {
        pastel.style.display = 'none';
        carta.classList.remove('oculto');
       
        carta.style.animation = 'fadeIn 1s forwards';
    }, 500);
}
