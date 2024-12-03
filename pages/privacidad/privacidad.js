document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("privacyModal");
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.querySelector(".close");


    // Mostrar el modal
    openModalButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });


    // Cerrar el modal al hacer clic en la 'X'
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });


    // Cerrar el modal al hacer clic fuera de la ventana del modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});