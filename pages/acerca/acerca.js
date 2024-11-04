const hiddenElements = document.querySelectorAll(".hidden");
// Configura el observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("Observando elemento:", entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.1 }); // Puedes ajustar el threshold para sensibilidad de aparición
// Observa cada elemento oculto
hiddenElements.forEach((el) => observer.observe(el));