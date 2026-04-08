// Función para reproducir música al tocar una foto
function playMusic(element) {
    // Revelar la foto visualmente
    element.classList.add('revealed');

    // Reproducir la música
    const audio = document.getElementById('birthday-song');
    
    // Intentar reproducir (los navegadores bloquean el autoplay, por eso requiere interacción)
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Esperando interacción para reproducir audio.");
        });
    }
}

// Función para quitar el pastel y mostrar la carta
function revealLetter() {
    const cakeSection = document.getElementById('cake-section');
    const letterSection = document.getElementById('letter-section');

    // Ocultamos el pastel
    cakeSection.classList.add('hidden');

    // Mostramos la carta después de un pequeño delay para que se vea la transición
    setTimeout(() => {
        // Aseguramos que el pastel no ocupe espacio físico
        cakeSection.style.display = 'none'; 
        // Mostramos la sección de la carta
        letterSection.classList.remove('hidden');
    }, 500); // 500ms coincide con el tiempo de transición en CSS
}
