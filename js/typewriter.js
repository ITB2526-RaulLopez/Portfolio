
/*FUNCIONALITAT 2: Efecte Typewriter*/

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        // 1. Guardem el text original que hi ha a l'HTML
        const textToType = typingElement.innerText;
        
        // 2. Netegem el contingut per començar de zero
        typingElement.innerHTML = ""; 
        
        let i = 0;

        // 3. Funció recursiva per escriure
        function type() {
            if (i < textToType.length) {
                typingElement.innerHTML += textToType.charAt(i);
                i++;
                // Ajusta el '100' per canviar la velocitat (més baix = més ràpid)
                setTimeout(type, 100); 
            }
        }

        // 4. Iniciem l'efecte
        type();
    }
});