/* ==================================== */
/* 1. MODO OSCURO (Pàgina Principal)    */
/* ==================================== */
function toggleDarkMode() {
    // Cambia la clase en el body
    document.body.classList.toggle('dark-mode');
    
    // Guardamos la elección del usuario en el navegador
    const modoActual = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('tema', modoActual);
}

// Al cargar la página, verificamos si el usuario ya tenía el modo oscuro activado
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

/* ==================================== */
/* 2. FILTRO DE PROYECTOS (Projects)    */
/* ==================================== */
function filtrarProjectes(categoria) {
    // Seleccionamos todos los artículos de la lista de proyectos
    const projectes = document.querySelectorAll('.projecte-llista');
    
    projectes.forEach(projecte => {
        if (categoria === 'tots') {
            projecte.style.display = 'block';
        } else {
            // Convertimos el texto a minúsculas para que la búsqueda sea más flexible
            const textProjecte = projecte.innerText.toLowerCase();
            if (textProjecte.includes(categoria.toLowerCase())) {
                projecte.style.display = 'block';
            } else {
                projecte.style.display = 'none';
            }
        }
    });
}

/* ==================================== */
/* 3. VALIDACIÓN FORMULARIO (Contact)   */
/* ==================================== */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Detenemos el envío automático
        
        // Obtenemos los valores
        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const missatge = document.getElementById('missatge').value.trim();

        // Verificamos que no estén vacíos
        if (nom === "" || email === "" || missatge === "") {
            alert("⚠️ Error: Tots els camps són obligatoris.");
        } else {
            // Simulamos éxito
            alert("✅ Gràcies, " + nom + ". El teu missatge ha estat rebut correctament!");
            contactForm.reset(); // Limpiamos el formulario
        }
    });
}