const ul = document.querySelector("ul");
const input = document.querySelector(".input-tag");

let tags = [];

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
      //console.log(li instanceof HTMLElement);
      const tag = li.getAttribute("data-tag");
      removeTag(tag);
    });
  });
}

function removeTag(tag) {
  tags = tags.filter((t) => t !== tag);
  createTag();
}

function addTag(e) {
  if (e.code == "Space") {
    let tag = e.target.value.replace(/\s+/g, " ").trim();
    if (tag.length > 1 && !tags.includes(tag)) {
      tag.split(",").forEach((tag) => {
        tags.push(tag);
        createTag();
      });
    }
    e.target.value = "";
  }
}

input.addEventListener("keyup", addTag);

(function () {
  "use strict";

  // Seleccionar todos los formularios con la clase 'needs-validation'
  var forms = document.querySelectorAll(".needs-validation");

  // Evitar el envío del formulario si no pasa la validación
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

function formToJSON(form) {
  const formData = new FormData(form);
  const jsonObject = {};
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });
  return JSON.stringify(jsonObject, null, 2);
}

document
  .getElementById("itemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const json = formToJSON(this);

    console.log(json);
    // fetch('/tu-endpoint', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: json
    // });
  });
