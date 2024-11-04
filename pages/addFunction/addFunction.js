// Array inicial de publicaciones
let publicaciones = [];

// Función para agregar una nueva publicación
function agregarPublicacion(titulo, contenido) {
    const nuevaPublicacion = {
        id: publicaciones.length > 0 ? publicaciones[publicaciones.length - 1].id + 1 : 1,
        titulo: titulo,
        contenido: contenido
    };
    publicaciones.push(nuevaPublicacion);
    console.log("Publicación agregada:", nuevaPublicacion);
}

// Función para modificar una publicación por ID
function modificarPublicacion(id, nuevoTitulo, nuevoContenido) {
    const index = publicaciones.findIndex(pub => pub.id === id);
    if (index !== -1) {
        publicaciones[index].titulo = nuevoTitulo;
        publicaciones[index].contenido = nuevoContenido;
        console.log("Publicación modificada:", publicaciones[index]);
    } else {
        console.log(`Publicación con ID ${id} no encontrada.`);
    }
}

// Función para listar todas las publicaciones
function listarPublicaciones() {
    if (publicaciones.length === 0) {
        console.log("No hay publicaciones para mostrar.");
    } else {
        console.log("Lista de publicaciones:");
        publicaciones.forEach(publicacion => {
            console.log(`ID: ${publicacion.id}, Título: ${publicacion.titulo}, Contenido: ${publicacion.contenido}`);
        });
    }

}


// Agregar publicaciones
agregarPublicacion("Primer Post", "Contenido de la primera publicación");
agregarPublicacion("Segundo Post", "Contenido de la segunda publicación");

// Listar todas las publicaciones
listarPublicaciones();

// Modificar una publicación existente
modificarPublicacion(1, "Primer Post Modificado", "Contenido modificado");

// Listar todas las publicaciones después de la modificación
listarPublicaciones();