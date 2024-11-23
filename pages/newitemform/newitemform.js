const ul = document.querySelector(".ing");
const input = document.querySelector(".input-tag");
let tags = [];

// Función para crear las etiquetas en el contenedor de ingredientes
function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags.forEach((tag) => {
    let liTag = `<li data-tag="${tag}">${tag}<i class="tagx">X</i></li>`;
    ul.insertAdjacentHTML("afterbegin", liTag);
  });

  // Agregar eventos para eliminar las etiquetas
  const removeIcons = ul.querySelectorAll(".tagx");
  removeIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const li = event.target.parentElement;
      const tag = li.getAttribute("data-tag");
      removeTag(tag);
    });
  });

  // Validar el contenedor de etiquetas
  validateTags();
}

// Eliminar una etiqueta
function removeTag(tag) {
  tags = tags.filter((t) => t !== tag);
  createTag();
}

// Añadir una etiqueta cuando se presiona "Espacio"
function addTag(e) {
  if (e.code === "Space") {
    let tag = e.target.value.replace(/\s+/g, " ").trim();
    if (tag.length > 1 && !tags.includes(tag)) {
      tags.push(tag);
      createTag();
    }
    e.target.value = "";
  }
}

// Función para validar el contenedor de etiquetas
function validateTags() {
  if (tags.length > 0) {
    input.setCustomValidity(""); // Marca el campo como válido
    return true;
  } else {
    input.setCustomValidity("Por favor, añade al menos una etiqueta."); // Mensaje de error personalizado
    return false;
  }
}

input.addEventListener("keyup", addTag);

// Validación del formulario y conversión a JSON
(function () {
  "use strict";

  // Seleccionar todos los formularios con la clase 'needs-validation'
  const form = document.querySelector(".needs-validation");
  form.addEventListener(
    "submit",
    (event) => {
      // Validar si el formulario es válido
      // validateTags(); // Asegurar que el campo de etiquetas esté validado

      if (!form.checkValidity() && validateTags()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Si el formulario es válido, convertirlo a JSON
        event.preventDefault();
        event.stopPropagation();
        const json = formToJSON(form);
        console.log(json);
      }
      form.classList.add("was-validated");
    },
    false,
  );
})();

// Convertir formulario a JSON
function formToJSON(form) {
  const formData = new FormData(form);
  const jsonObject = {};
  formData.forEach((value, key) => {
    if (key === "imagenProducto" && value instanceof File) {
      jsonObject[key] = value.name;
    } else {
      jsonObject[key] = value;
    }
  });
  jsonObject.ingredientesProducto = tags; // Agregar etiquetas al JSON
  return JSON.stringify(jsonObject, null, 2);
}
