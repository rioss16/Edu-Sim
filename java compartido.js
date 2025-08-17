// Función para marcar el enlace activo
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la página actual
    const currentPage = window.location.pathname.split('/').pop();
    
    // Marcar el enlace activo según la página
    const navLinks = document.querySelectorAll('.nav-btn');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Navegación con teclado (opcional)
document.addEventListener('keydown', function(e) {
    if (e.key === '1') window.location.href = 'index.html';
    if (e.key === '2') window.location.href = 'biblioteca.html';
    if (e.key === '3') window.location.href = 'contacto.html';
});