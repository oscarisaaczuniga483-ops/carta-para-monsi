function interactuar(elemento) {
    // Revelar la foto al tocar
    elemento.classList.add('revelada');

    // Reproducir música
    const cancion = document.getElementById('musica-cumple');
    cancion.play().catch(error => {
        console.log("El navegador bloqueó el audio, pero sonará al siguiente toque.");
    });
}

function revelarCarta() {
    const pastel = document.getElementById('contenedor-pastel');
    const carta = document.getElementById('contenedor-carta');

    // Efecto de desvanecimiento
    pastel.style.opacity = '0';
    
    setTimeout(() => {
        pastel.style.display = 'none';
        carta.classList.remove('oculto');
        // Pequeña animación de entrada para la carta
        carta.style.animation = 'fadeIn 1s forwards';
    }, 500);
}
