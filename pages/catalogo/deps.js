



/*  const token = localStorage.getItem("authToken");
  if (!token) {
     throw new Error("Token de autenticación no disponible. Debes iniciar sesión.");
  }
  return {
     Authorization: `Bearer ${token}`,
     "Content-Type": "application/json",
  };
}

const cartProduct = document.querySelector(".add-cart");

    cartProduct.addEventListener("submit", async (e) => {
      e.preventDefault();

      const id = do#productocument.getElementById("id").value;
      
      try {
        const response = await fetch("http://localhost:8080/api/cart-products/`${id}`", {
          method: "POST",
          headers: headers = getAuthHeaders()
        });
        if(response.ok){
          alert('El producto se ha añadido al carrito')
        }
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo conectar con el servidor.");
      }
    });*/

  
  document.querySelectorAll(".add-cart").forEach((cartIcon) => {
    cartIcon.addEventListener("click", async (e) => {
      e.preventDefault();
  
      // Encuentra el contenedor principal del producto
      const productBox = e.target.closest(".product-box");
  
      if (!productBox) {
        alert("No se pudo encontrar la información del producto.");
        return;
      }
  
      // Obtén el ID desde el atributo data-id
      const id = productBox.dataset.id;
  
      try {
        // Realiza la solicitud POST
        const response = await fetch("http://localhost:8080/api/cart-products/`${id}`", {
          method: "POST",
          headers: getAuthHeaders(),
        });
  console.log(response);
        // Manejo de la respuesta
        if (response.ok) {
          alert("El producto se ha añadido al carrito");
        } else {
          const errorMessage = await response.text();
          console.error("Error al agregar al carrito:", errorMessage);
          alert("No se pudo agregar el producto al carrito.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("No se pudo conectar con el servidor.");
      }
    });
  });
