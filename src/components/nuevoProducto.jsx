import  { useState, useEffect } from "react";

function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    // Obtener la lista de productos desde tu backend
    fetch('http://localhost:4000/products', {
      method: 'GET',
      headers: {
        'Origin': 'http://localhost:5371', 
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de productos');
        }
        return response.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  const handleEditarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleGuardarCambios = async (productoModificado) => {
    try {
      // Enviar la solicitud para actualizar el producto en el backend
      const response = await fetch(`http://localhost:4000/products/${productoModificado.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoModificado),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }

      // Actualizar el producto en la lista de productos (state)
      const productosActualizados = productos.map((producto) =>
        producto.id === productoModificado.id ? productoModificado : producto
      );

      setProductos(productosActualizados);
      setProductoSeleccionado(null); // Después de guardar los cambios, establecer productoSeleccionado en null
    } catch (error) {
      console.error('Error al guardar cambios:', error);
    }
  };

  const handleInputChange = (e, property) => {
    const newValue = e.target.value;
    setProductoSeleccionado((prevProducto) => ({
      ...prevProducto,
      [property]: newValue,
    }));
  };

  return (
    <div className="admin-products">
      <h2>Administrar Productos</h2>
      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id}>
            {productoSeleccionado !== producto ? (
              <>
                <div>
                  <strong>Nombre:</strong> {producto.nombre}
                  <strong>Descripcion:</strong> {producto.descripcion}
                  <strong>Precio:</strong> {producto.precio}
                  <strong>Imagen:</strong> {producto.imagen}
                </div>
             
                <button onClick={() => handleEditarProducto(producto)}>Editar</button>
              </>
            ) : (
              <>
                <form>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    value={productoSeleccionado.nombre}
                    onChange={(e) => handleInputChange(e, 'nombre')}
                  />
                  {/* Agregar campos similares para otras propiedades del producto */}
                </form>
                <button onClick={() => handleGuardarCambios(productoSeleccionado)}>Guardar Cambios</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProductos;
