//Scripts para el formulario de usuarios.

function showAlert(message, type = 'danger') {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}

function validateForm() {
    const nombreCompleto = document.getElementById('nombreCompleto').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    if (!nombreCompleto || !telefono || !email || !password || !confirmPassword) {
        showAlert('Por favor, complete todos los campos.');
        return;
    }

    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        showAlert('El correo electrónico no es válido.');
        return;
    }

    
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        showAlert('El número de teléfono debe contener solo 10 dígitos.');
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#])[A-Za-z\d@$!%*?&._#]{8,}$/;
    if (!passwordRegex.test(password)) {
        showAlert('La contraseña debe tener al menos 8 caracteres, incluyendo 1 letra mayúscula, 1 letra minúscula, 1 número y 1 símbolo.');
        return;
    }
    
    if (password !== confirmPassword) {
        showAlert('Las contraseñas no coinciden.');
        return;
    }

    
    document.getElementById('alertContainer').innerHTML = '';

    
    const usuario = {
        nombreCompleto: nombreCompleto,
        telefono: telefono,
        email: email,
        password: password
    };

    console.log('Datos del usuario:', JSON.stringify(usuario, null, 2));
    showAlert('Registro exitoso!', 'success');
}