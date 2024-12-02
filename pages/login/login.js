export function init() {
  /*=============== SHOW HIDE PASSWORD LOGIN ===============*/
  const passwordAccess = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
      iconEye = document.getElementById(loginEye);

    iconEye.addEventListener("click", () => {
      // Change password to text
      input.type === "password"
        ? (input.type = "text")
        : (input.type = "password");

      // Icon change
      iconEye.classList.toggle("bi-eye-fill");
      iconEye.classList.toggle("bi-eye-slash-fill");
    });
  };
  passwordAccess("password", "loginPassword");

  /*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
  const passwordRegister = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
      iconEye = document.getElementById(loginEye);

    iconEye.addEventListener("click", () => {
      // Change password to text
      input.type === "password"
        ? (input.type = "text")
        : (input.type = "password");

      // Icon change
      iconEye.classList.toggle("bi-eye-fill");
      iconEye.classList.toggle("bi-eye-slash-fill");
    });
  };
  passwordRegister("passwordCreate", "loginPasswordCreate");

  /*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
  const loginAcessRegister = document.getElementById("loginAccessRegister"),
    buttonRegister = document.getElementById("loginButtonRegister"),
    buttonAccess = document.getElementById("loginButtonAccess");

  buttonRegister.addEventListener("click", () => {
    loginAcessRegister.classList.add("active");
  });

  buttonAccess.addEventListener("click", () => {
    loginAcessRegister.classList.remove("active");
  });
}

// Almacenamiento de cuenta nueva en Local Storage
document
  .querySelector(".login__register form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtención de datos del formulario
    const names = document.getElementById("names").value;
    const surnames = document.getElementById("surnames").value;
    const email = document.getElementById("emailCreate").value;
    const password = document.getElementById("passwordCreate").value;

    if (names && surnames && email && password) {
      // Crear un objeto con los datos del usuario
      const user = { names, surnames, email, password };

      // Guardar el usuario en Local Storage
      localStorage.setItem(email, JSON.stringify(user));

      alert("Cuenta creada exitosamente!");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });

// Verificación de datos en el inicio de sesión
document
  .querySelector(".login__access form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtención de datos del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Buscar el usuario en Local Storage
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
      alert(`¡Bienvenido, ${user.names}!`);
    } else {
      alert("Email o contraseña incorrectos.");
    }
  });