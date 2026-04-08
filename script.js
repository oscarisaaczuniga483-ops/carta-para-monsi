function playMusic(element) {
    // Revelar la foto
    element.classList.add('revealed');

    // Reproducir la música
    const audio = document.getElementById('birthday-song');
    
    // Verificamos si ya está sonando para no reiniciarla cada vez
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("La reproducción automática fue bloqueada por el navegador.");
        });
    }
}
