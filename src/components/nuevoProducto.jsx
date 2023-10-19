import { useState, useEffect } from "react";
import CardProducto from "./Products/cardProduct"; // Asegúrate de importar el componente CardProducto

function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    // Obtener la lista de productos desde tu backend
    fetch('http://localhost:4000/products', {
      method: 'GET',
      headers: {
        'Origin': 'http://localhost:5371', // Reemplaza con la URL de tu frontend
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

  return (
    <div className="admin-products">
      <h2>Administrar Productos</h2>
      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id}>
            {productoSeleccionado !== producto ? (
              <>
                <CardProducto producto={producto} />
                <button onClick={() => handleEditarProducto(producto)}>Editar</button>
              </>
            ) : (
              <>
                <CardProducto producto={productoSeleccionado} isEditable={true} />
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
