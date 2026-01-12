
 /*FUNCIONALITAT 1: Ampliació d'Imatges*/

document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll('.img-tutorial');

    imagenes.forEach(img => {
        img.addEventListener('click', () => {
            // Creem el contenidor del fons fosc
            const modal = document.createElement('div');
            modal.classList.add('modal-zoom');
            
            // Creem la imatge que anirà dins
            const fullImg = document.createElement('img');
            fullImg.src = img.src; 
            
            modal.appendChild(fullImg);
            document.body.appendChild(modal);
            
            // Es tanca en clicar a qualsevol lloc del fons
            modal.onclick = () => {
                modal.remove();
            };
        });
    });
});