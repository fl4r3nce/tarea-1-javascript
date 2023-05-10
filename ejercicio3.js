// Definimos la clase Carrito
class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }

  // Método para agregar un producto al carrito
  agregarProducto(nombre, precio, unidades) {
    // Validamos si el producto ya existe en el carrito
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].nombre === nombre) {
        console.log(`Ya existe ${nombre} con ${this.productos[i].unidades} 
unidades`);
        return;
      }
    }

    // Si el producto no existe, lo agregamos al carrito y actualizamos el 
montoTotal
    this.productos.push({ nombre, precio, unidades });
    this.montoTotal += precio * unidades;
    console.log(this)
  }
}

// Creamos una instancia del carrito
let carrito = new Carrito(10, ["Leche"]);

// Probamos el método agregarProducto
carrito.agregarProducto("Azucar", 5, 2);
