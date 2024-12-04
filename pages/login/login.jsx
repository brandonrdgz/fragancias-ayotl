return async () => {
  let executeAfter = (await import("../../js/utils/executeAfter.js"))['executeAfter'];

  function init() {
    /*=============== SHOW HIDE PASSWORD LOGIN ===============*/
    const passwordAccess = (loginPass, loginEye) => {
      const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

      iconEye.onclick = () => {
        // Change password to text
        input.type === "password"
          ? (input.type = "text")
          : (input.type = "password");

        // Icon change
        iconEye.classList.toggle("bi-eye-fill");
        iconEye.classList.toggle("bi-eye-slash-fill");
      };
    };
    passwordAccess("password", "loginPassword");

    /*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
    const passwordRegister = (loginPass, loginEye) => {
      const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

      iconEye.onclick = () => {
        // Change password to text
        input.type === "password"
          ? (input.type = "text")
          : (input.type = "password");

        // Icon change
        iconEye.classList.toggle("bi-eye-fill");
        iconEye.classList.toggle("bi-eye-slash-fill");
      };
    };
    passwordRegister("passwordCreate", "loginPasswordCreate");


    /*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
    const loginAcessRegister = document.getElementById("loginAccessRegister"),
      buttonRegister = document.getElementById("loginButtonRegister"),
      buttonAccess = document.getElementById("loginButtonAccess");

    buttonRegister.onclick = () => {
      loginAcessRegister.classList.add("active");
    };

    buttonAccess.onclick = () => {
      loginAcessRegister.classList.remove("active");
    };
    
    
    const LOGIN_URL = "http://127.0.0.1:8080/api/login";
    const REGISTER_URL = "http://127.0.0.1:8080/api/users";
  
  
  // Registrar un nuevo usuario en la API
 /* document.querySelector(".login__register form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const firstName = document.getElementById("names").value;
    const lastName = document.getElementById("surnames").value;
    const secondLastName = document.getElementById("secondLastName").value;
    const email = document.getElementById("emailCreate").value;
    const password = document.getElementById("passwordCreate").value;
  
    if (firstName && lastName && email && password && secondLastName) {
      try {
        const response = await fetch(REGISTER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, email, password, secondLastName }),
        });
        if (response.ok) {
          alert("Cuenta creada exitosamente!");
        } else {
          alert("Hubo un error al crear la cuenta.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo conectar con el servidor.");
      }
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });*/
  

  const loginForm = document.querySelector(".login__access form");
  const registerForm = document.querySelector(".login__register form");

  // Manejo de inicio de sesión
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch(LOGIN_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json(); // Suponemos que el backend devuelve el token en data.token
          const { token, user } = data;

          // Guardar el token en localStorage
          localStorage.setItem("authToken", token);

          alert(`¡Bienvenido, ${data.firstName}!`);
        } else {
          alert("Email o contraseña incorrectos.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo conectar con el servidor.");
      }
    });
  }

  // Manejo de registro
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const firstName = document.getElementById("names").value;
    const lastName = document.getElementById("surnames").value;
    const secondLastName = document.getElementById("secondLastName").value;
    const email = document.getElementById("emailCreate").value;
    const password = document.getElementById("passwordCreate").value;

      if (firstName && lastName && email && password && secondLastName) {
        try {
          const response = await fetch(REGISTER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({firstName, lastName, email, password, secondLastName }),
          });
          if (response.ok) {
            alert("Cuenta creada exitosamente!");
          } else {
            alert("Hubo un error al crear la cuenta.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("No se pudo conectar con el servidor.");
        }
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  }

  // Verificar inicio de sesión con la API
  /*document.querySelector(".login__access form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const user = await response.json();
        alert("¡Bienvenido," + '${user.firstName}' + "!");
      } else {
        alert("Email o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    }
  });*/
  }


  executeAfter(init, 300);
  return (
    <>
      <div>
        <svg
          class="login__blob"
          viewBox="0 0 566 840"
          xmlns="http://www.w3.org/2000/svg"
        >
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

            <img
              class="login__img"
              src="./assets/imgs/perfumes/imagen1floral.jpeg"
            />
          </g>
        </svg>

        <div class="login container grid" id="loginAccessRegister">
          <div class="login__access">
            <h1 class="login__title">Inicia Sesión.</h1>

            <div class="login__area">
              <form action="" class="login__form">
                <div class="login__content grid">
                  <div class="login__box">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder=" "
                      class="login__input"
                    />
                    <label for="email" class="login__label">Email</label>

                    <i class="ri-mail-fill login__icon"></i>
                  </div>

                  <div class="login__box">
                    <input
                      type="password"
                      id="password"
                      required
                      placeholder=" "
                      class="login__input"
                    />
                    <label for="password" class="login__label">Contraseña</label>
                    <i
                      class="bi bi-eye-slash-fill login__icon login__password"
                      id="loginPassword"
                    >
                    </i>
                  </div>
                </div>

                <a href="#" class="login__forgot">¿Olvidaste tu contraseña?</a>

                <button type="submit" class="login__button">Iniciar Sesión</button>
              </form>

              <div class="login__social">
                <p class="login__social-title">O iniciar con</p>

                <div class="login__social-links">
                  <a href="#" class="login__social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
                      />
                    </svg>
                  </a>

                  <a href="#" class="login__social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <p class="login__switch">
                ¿No tienes una cuenta?
                <button id="loginButtonRegister">Crear Cuenta</button>
              </p>
            </div>
          </div>

          <div class="login__register">
            <h1 class="login__title">Crear nueva cuenta.</h1>

            <div class="login__area">
              <form action="" class="login__form">
                <div class="login__content grid">
                  <div class="login__group grid">
                    <div class="login__box">
                      <input
                        type="text"
                        id="names"
                        required
                        placeholder=" "
                        class="login__input"
                      />
                      <label for="names" class="login__label">Nombre</label>

                      <i class="ri-id-card-fill login__icon"></i>
                    </div>

                    <div class="login__box">
                      <input
                        type="text"
                        id="surnames"
                        required
                        placeholder=" "
                        class="login__input"
                      />
                      <label for="surnames" class="login__label">Apellido Paterno</label>

                      <i class="ri-id-card-fill login__icon"></i>
                    </div>

                    <div class="login__box">
                      <input
                        type="text"
                        id="secondLastName"
                        required
                        placeholder=" "
                        class="login__input"
                      />
                      <label for="secondLastName" class="login__label">Apellido Materno</label>

                      <i class="ri-id-card-fill login__icon"></i>
                    </div>
                  </div>


                  <div class="login__box">
                    <input
                      type="email"
                      id="emailCreate"
                      required
                      placeholder=" "
                      class="login__input"
                    />
                    <label for="emailCreate" class="login__label">Email</label>

                    <i class="ri-mail-fill login__icon"></i>
                  </div>

                  <div class="login__box">
                    <input
                      type="password"
                      id="passwordCreate"
                      required
                      placeholder=" "
                      class="login__input"
                    />
                    <label for="passwordCreate" class="login__label"
                    >Contraseña</label
                    >

                    <i
                      class="ri-eye-off-fill login__icon login__password"
                      id="loginPasswordCreate"
                    ></i>
                  </div>
                </div>

                <button type="submit" class="login__button">Crear cuenta</button>
              </form>

              <p class="login__switch">
                ¿Ya tienes una cuenta?
                <button id="loginButtonAccess">Iniciar Sesión</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}