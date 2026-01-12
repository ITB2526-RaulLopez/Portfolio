document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Aturem l'enviament real per mostrar l'animació

            // 1. Efecte de "Cregant": desactivem el botó
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Sending...";
            btn.style.opacity = "0.7";
            btn.disabled = true;

            // 2. Simulem un enviament (1.5 segons)
            setTimeout(() => {
                // Afegim una classe per fer desaparèixer el formulari suaument
                form.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                form.style.opacity = "0";
                form.style.transform = "scale(0.9)";

                // 3. Després de l'animació, mostrem el missatge de confirmació
                setTimeout(() => {
                    form.innerHTML = `
                        <div style="text-align: center; padding: 40px;">
                            <div style="font-size: 50px; color: #4CAF50; margin-bottom: 20px;">✓</div>
                            <h2 style="color: #003366;">Thank you!</h2>
                            <p style="color: #666;">Your message has been sent successfully. I will get back to you soon.</p>
                            <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Send another</button>
                        </div>
                    `;
                    form.style.opacity = "1";
                    form.style.transform = "scale(1)";
                }, 500);
            }, 1500);
        });
    }
});