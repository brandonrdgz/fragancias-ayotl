//Scripts para el formulario de usuarios.

function showAlert(message, type = 'danger') {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

function togglePasswordVisibility(fieldId, icon) {
    const field = document.getElementById(fieldId);
    const iconElement = icon.querySelector("i");
    if (field.type === "password") {
        field.type = "text";
        iconElement.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        field.type = "password";
        iconElement.classList.replace("bi-eye-slash", "bi-eye");
    }
}

function validateForm() {
    const nombreCompleto = document.getElementById('nombreCompleto');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    function setFieldValidity(field, isValid) {
        if (isValid) {
            field.classList.remove("invalid");
        } else {
            field.classList.add("invalid");
        }
    }

    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telefonoRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#])[A-Za-z\d@$!%*?&._#]{8,}$/;

    if (nombreCompleto.value.trim() === "") {
        setFieldValidity(nombreCompleto, false);
        showAlert('El campo "Nombre completo" es obligatorio.');
        isValid = false;
    } else {
        setFieldValidity(nombreCompleto, true);
    }

    if (!telefonoRegex.test(telefono.value.trim())) {
        setFieldValidity(telefono, false);
        showAlert('El campo "Número de teléfono" debe tener 10 dígitos.');
        isValid = false;
    } else {
        setFieldValidity(telefono, true);
    }

    if (!emailRegex.test(email.value.trim())) {
        setFieldValidity(email, false);
        showAlert('El campo "Email" debe tener un formato de correo electrónico válido.');
        isValid = false;
    } else {
        setFieldValidity(email, true);
    }

    if (!passwordRegex.test(password.value)) {
        setFieldValidity(password, false);
        showAlert('La "Contraseña" debe tener al menos 8 caracteres, incluyendo mayúscula, minúscula, número y símbolo.');
        isValid = false;
    } else {
        setFieldValidity(password, true);
    }

    if (password.value !== confirmPassword.value) {
        setFieldValidity(confirmPassword, false);
        showAlert('Las contraseñas no coinciden.');
        isValid = false;
    } else {
        setFieldValidity(confirmPassword, true);
    }

    if (!isValid) return;

    document.getElementById('alertContainer').innerHTML = '';

    const usuario = {
        nombreCompleto: nombreCompleto.value.trim(),
        telefono: telefono.value.trim(),
        email: email.value.trim(),
        password: password.value
    };

    console.log('Datos del usuario:', JSON.stringify(usuario, null, 2));
    showAlert('Registro exitoso!', 'success');
}