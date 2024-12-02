return async ({ }) => {
    return (
        <>
        {/* SVG Blob */}
    <svg className="login__blob" viewBox="0 0 566 840" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha">
        <path
          d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
          0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
          591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
          167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
          0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
          591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
          167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
        />
        <image
          className="login__img"
          href="../../assets/imgs/perfumes/imagen1floral.jpeg"
        />
      </g>
    </svg>

    {/* Login Container */}
    <div className="login container grid" id="loginAccessRegister">
      {/* Login Access */}
      <div className="login__access">
        <h1 className="login__title">Inicia Sesión.</h1>

        <div className="login__area">
          <form className="login__form">
            <div className="login__content grid">
              <div className="login__box">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder=" "
                  className="login__input"
                />
                <label for="email" className="login__label">Email</label>
                <i className="ri-mail-fill login__icon"></i>
              </div>

              <div className="login__box">
                <input
                  type="password"
                  id="password"
                  required
                  placeholder=" "
                  className="login__input"
                />
                <label for="password" className="login__label">Contraseña</label>
                <i
                  className="bi bi-eye-slash-fill login__icon login__password"
                  id="loginPassword"
                ></i>
              </div>
            </div>

            <a href="#" className="login__forgot">¿Olvidaste tu contraseña?</a>
            <button type="submit" className="login__button">Iniciar Sesión</button>
          </form>

          <div className="login__social">
            <p className="login__social-title">O iniciar con</p>
            <div className="login__social-links">
              <a href="#" className="login__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path
                    d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
                  />
                </svg>
              </a>
              <a href="#" className="login__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                  />
                </svg>
              </a>
            </div>
          </div>

          <p className="login__switch">
            ¿No tienes una cuenta?
            <button id="loginButtonRegister">Crear Cuenta</button>
          </p>
        </div>
      </div>

      {/* Login Register */}
      <div className="login__register">
        {/* Similar structure as above */}
      </div>
    </div>
         </>
    );
}
import React, { useState } from "react";

const LoginSystem = () => {
  const [isRegisterActive, setRegisterActive] = useState(false);
  const [formData, setFormData] = useState({
    names: "",
    surnames: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = (field) => {
    const input = document.getElementById(field);
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { names, surnames, email, password } = formData;

    if (names && surnames && email && password) {
      localStorage.setItem(email, JSON.stringify({ names, surnames, email, password }));
      alert("Cuenta creada exitosamente!");
      setFormData({ names: "", surnames: "", email: "", password: "" });
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      alert(`¡Bienvenido, ${user.names}!`);
    } else {
      alert("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
      {/* Toggle between login and register */}
      <div>
        <button onClick={() => setRegisterActive(true)}>Crear Cuenta</button>
        <button onClick={() => setRegisterActive(false)}>Iniciar Sesión</button>
      </div>

      {/* Formulario de Registro */}
      {isRegisterActive && (
        <form className="login__register" onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            name="names"
            placeholder="Nombres"
            value={formData.names}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="surnames"
            placeholder="Apellidos"
            value={formData.surnames}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div>
            <input
              type="password"
              id="passwordCreate"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("passwordCreate")}
            >
              Mostrar/Ocultar
            </button>
          </div>
          <button type="submit">Registrar</button>
        </form>
      )}

      {/* Formulario de Inicio de Sesión */}
      {!isRegisterActive && (
        <form className="login__access" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
            >
              Mostrar/Ocultar
            </button>
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      )}
    </div>
  );
};

export default LoginSystem;