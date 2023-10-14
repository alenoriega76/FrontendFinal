/*


 COMENTE TODO ESTE CODIGO PARA PODER PROBAR EL MIO
import  { useState, useEffect } from "react";
import CardProducto from "../Products/productos";
import Carrito from "../CArt/carrito";
import useCart from "../store/useCart";

function ProductosListar() {
  const [productos, setProductos] = useState([]);
  const [filter, setFilter] = useState({ nombre: '', precio: '', categoria: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const { cart, setCart } = useCart(); 

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de productos');
        }
        return response.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  const addToCart = (producto) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === producto.id);

    if (existingProduct) {
      existingProduct.cantidad++;
    } else {
      producto.cantidad = 1;
      updatedCart.push(producto);
    }

    setCart(updatedCart);
  };

  const productosFiltrados = productos.filter((producto) => {
    const nameMatch = ((producto.nombre || '').toLowerCase().includes(filter.nombre.toLowerCase()) || filter.nombre === '');
    const priceMatch = ((producto.precio || '').toString().includes(filter.precio) || filter.precio === '');
    const categoryMatch = ((producto.categoria || '').toLowerCase() === filter.categoria.toLowerCase() || filter.categoria === '');
    return nameMatch && priceMatch && categoryMatch;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (sortOrder === 'asc') {
      return (a.nombre || '').localeCompare(b.nombre || '');
    } else {
      return (b.nombre || '').localeCompare(a.nombre || '');
    }
  });

  return (
    <div>
      <Carrito cart={cart} setCart={setCart} /> {/* Renderizar el carrito aquí */{/*}
      <form className='formbus'>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filter.nombre}
          onChange={(e) => setFilter({ ...filter, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Buscar por precio"
          value={filter.precio}
          onChange={(e) => setFilter({ ...filter, precio: e.target.value })}
        />
        <input
          type="text"
          placeholder="Buscar por categoría"
          value={filter.categoria}
          onChange={(e) => setFilter({ ...filter, categoria: e.target.value })}
        />
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ordenar A-Z</option>
          <option value="desc">Ordenar Z-A</option>
        </select>
      </form>
      <div className="product-container">
        {productosOrdenados.map((producto) => (
          <CardProducto key={producto.id_productos} producto={producto} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductosListar;
 HASTA ACA COMENTE
*/}import { useState, useEffect } from "react";
import './ProductoListar.css'
//import useCart from "../store/useCart";
import CardProducto from '../Products/cardProduct' // Asegúrate de importar CardProducto desde la ubicación correcta
import useCart from "../store/useCart";
function ProductosListar() {
  const [productos, setProductos] = useState([]);
  const [filter, setFilter] = useState({ nombre: '', precio_producto_min: '', precio_producto_max: '', categorias: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const { cart, setCart } = useCart();


/* const [productos, setProductos] = useState([]);
  const [filter, setFilter] = useState({ nombre: '', precio: '', categoria: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  */
  // Obtén la función addToCart desde useCart
 // const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/products", {
          method: 'GET',
          headers: {
            'Origin': 'http://localhost:5173',
          },
        });

        if (!response.ok) {
          throw new Error("No se pueden obtener los productos");
        }

        const data = await response.json();
        const productosConPreciosCorregidos = data.map((producto) => ({
          ...producto,
          precio: parseFloat(producto.precio || 0),
        }));

        setProductos(productosConPreciosCorregidos);
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    fetchData();
  }, []);
  const addToCart = (producto) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id_productos === producto.id_productos);

    if (existingProduct) {
      existingProduct.cantidad++;
    } else {
      producto.cantidad = 1;
      updatedCart.push(producto);
    }

    setCart(updatedCart);
  };

  const productosFiltrados = productos.filter((producto) => {
    const nameMatch = (producto.nombre || "")
      .toLowerCase()
      .includes(filter.nombre.toLowerCase()) || filter.nombre === "";
      const categoryMatch = filter.categoriaSeleccionada
      ? producto.id_categoria === parseInt(filter.categoriaSeleccionada) // Debes asegurarte de que coincida con el ID de la categoría en la base de datos
      : true;

    // Filtrar por precio mínimo y máximo
    const priceMin = parseFloat(filter.precio_producto_min);
    const priceMax = parseFloat(filter.precio_producto_max);
    const price = parseFloat(producto.precio || 0);

    const priceMinMatch = isNaN(priceMin) || price >= priceMin;
    const priceMaxMatch = isNaN(priceMax) || price <= priceMax;

    return nameMatch && categoryMatch && priceMinMatch && priceMaxMatch;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    return sortOrder === "asc"
      ? parseFloat(a.precio) - parseFloat(b.precio)
      : parseFloat(b.precio) - parseFloat(a.precio);
  })


  return (
    <div className="busq">
      <h2>Productos</h2>
      <form className="formbus">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filter.nombre}
          onChange={(e) =>
            setFilter({ ...filter, nombre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Precio mínimo"
          value={filter.precio_producto_min}
          onChange={(e) =>
            setFilter({ ...filter, precio_producto_min: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Precio máximo"
          value={filter.precio_producto_max}
          onChange={(e) =>
            setFilter({ ...filter, precio_producto_max: e.target.value })
          }
        />
        <select
          value={filter.categoriaSeleccionada}
          onChange={(e) => setFilter({ ...filter, categoriaSeleccionada: e.target.value })}
        >
          <option value="">Todas las categorías</option>
          <option value="1">Electrodomesticos</option> 
          <option value="2">Informatica</option>
          <option value="3">Celulares y tablets</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Precio Ascendente</option>
          <option value="desc">Precio Descendente</option>
        </select>
      </form>
      <div className="product-containerB">
        {productosOrdenados.map((producto) => (
          <CardProducto
            key={producto.id_productos}
            producto={producto}
            addToCart={() => addToCart(producto)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductosListar;