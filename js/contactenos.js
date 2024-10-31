

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById("statusMessage");

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (name.length < 3) {
      statusMessage.innerHTML = "<div class='alert alert-warning'>El nombre debe ser mayor a 3 caracteres.</div>";
      return false;
    }

    if (!emailRegex.test(email)) {
      statusMessage.innerHTML = "<div class='alert alert-warning'>Por favor, ingresa un correo electrónico válido.</div>";
      return false;
    }

    if (!phoneRegex.test(phone)) {
      statusMessage.innerHTML = "<div class='alert alert-warning'>Por favor, ingresa un número de teléfono válido de 10 dígitos minimo.</div>";
      return false;
    }

    if (message.length < 10) {
      statusMessage.innerHTML = "<div class='alert alert-warning'>El mensaje debe tener al menos 10 letras.</div>";
      return false;
    }

    statusMessage.innerHTML = "<div class='alert alert-success'>El formularoi a enviado correctamente.</div>";
    return true; 
  }