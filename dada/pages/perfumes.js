const perfume1 = {
    nombre: "Esencia ejemplo Ayotl",
    fragancia: "Cítrico y fresco",
    genero: "Unisex",
    precio: 45.99,
    tamaño: "50ml",

    descripcion() {
        
        console.log(`${this.nombre} es un perfume ${this.fragancia} para ${this.genero}, cuesta $${this.precio} y viene en tamaño ${this.tamaño}.`);
    }
};

perfume1.descripcion();