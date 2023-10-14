/*import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'tu-contexto-de-carrito'; // Reemplaza 'tu-contexto-de-carrito' con el nombre real de tu contexto de carrito

const CardProducto = ({ producto }) => {
  const [message, setMessage] = useState(false);
  const { cart, setCart } = useCart(); // Asegúrate de que estás importando y usando correctamente el contexto de carrito

  const handleAddToCart = () => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === producto.id);

    if (existingProduct) {
      existingProduct.cantidad++;
    } else {
      producto.cantidad = 1;
      updatedCart.push(producto);
    }

    setCart(updatedCart); // Asegúrate de activar esta línea para actualizar el carrito
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  return (
    <article className="product-card">
      <img src={producto.imagen} alt={producto.nombre} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{producto.nombre}</h3>
        <p>Numero: {producto.id}</p>
        <p className="product-price">Precio: {typeof producto.precio === 'number' ? `$${producto.precio.toFixed(2)}` : 'Precio no válido'}</p>
        <p className="product-description">Descripcion: {producto.descripcion}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Agregar al Carrito
          {message && <div className="carrito-message">Agregado al carrito</div>}
        </button>
      </div>
    </article>
  );
};

CardProducto.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    cantidad: PropTypes.number,
  }),
};

export default CardProducto;
*/




// COMENTE DESDE ACA 


/*

import PropTypes from "prop-types";
import { useState } from "react";

 function CardProducto({ producto, addToCart}) {
   const [message, setMessage] = useState(false);

   if (!producto) {
     return <div>No hay producto disponible.</div>;
   }

  
   const handleAddToCart = () => {
    if (addToCart) {
       addToCart(producto);
      setMessage(true);
       setTimeout(() => {
        setMessage(false);
       }, 3000);
    }
   };
   return (
     <article className="product-card">
      
         <img
           src={producto.imagen}
           alt={producto.nombre}
           className="product-image" 
         />
         <div className="product-details">
           <h3 className="product-title">{producto.nombre}</h3>
           <p>Numero: {producto.id}</p>
           <p className="product-price">Precio: ${producto.precio}</p>
           <p className="product-description">Descripcion: {producto.descripcion}</p>
           <button className="add-to-cart" onClick={handleAddToCart}>Agregar al Carrito
           {message && <div className="carrito-message">Agregado al carrito</div>}
           </button>
         </div>
        
     </article>
    
   );
 }

 CardProducto.propTypes = {
   producto: PropTypes.shape({
     id: PropTypes.number.isRequired,
     nombre: PropTypes.string.isRequired,
     descripcion: PropTypes.string.isRequired,
     precio: PropTypes.number.isRequired,
     imagen: PropTypes.string, // Tipo STRING para la URL de la imagen
   }),
   addToCart: PropTypes.func, // Función para agregar al carrito
 }
 export default CardProducto;


  HASTA ACAA PARA POBRAR OTRO  CODIGO

*/
// import PropTypes from 'prop-types';
// import { useState } from 'react';

// function CardProducto({ producto, addToCart }) {
//   const [message, setMessage] = useState(false);

//   const handleAddToCart = () => {
//     if (addToCart) {
//       addToCart(producto);
//       setMessage(true);
//       setTimeout(() => {
//         setMessage(false);
//       }, 3000);
//     }
//   }

//   return (
//     <article className="product-card">
//       <img
//         src={producto.imagen}
//         alt={producto.nombre}
//         className="product-image"
//       />
//       <div className="product-details">
//         <h3 className="product-title">{producto.nombre}</h3>
//         <p>Numero: {producto.id}</p>
//         <p className="product-price">Precio: ${producto.precio}</p>
//         <p className="product-description">Descripcion: {producto.descripcion}</p>
//         <button className="add-to-cart" onClick={handleAddToCart}>
//           Agregar al Carrito
//           {message && <div className="carrito-message">Agregado al carrito</div>}
//         </button>
//       </div>
//     </article>
//   );
// }

// CardProducto.propTypes = {
//   producto: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     nombre: PropTypes.string.isRequired,
//     descripcion: PropTypes.string.isRequired,
//     precio: PropTypes.number.isRequired,
//     imagen: PropTypes.string,
//   }),
//   addToCart: PropTypes.func,
// };

// export default CardProducto;
import PropTypes from 'prop-types';
import './Busqueda.css';
import ReactRating from 'react-rating';

import Swal from 'sweetalert2'; // Importa SweetAlert
import { useNavigate } from 'react-router-dom';

function CardProducto({ producto, addToCart }) {

  const Navigate = useNavigate();

  if (!producto) {
    return <div>No hay productos disponibles</div>;
  }
  const rating = parseFloat(producto.rating);
  const handleCalificacionChange = (nuevaCalificacion, productoId) => {
    // ... (tu código existente)

    // Enviar la calificación actualizada al servidor
    fetch(`http://localhost:4000/products/${productoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: nuevaCalificacion }),
    })
      .then(response => response.json())
      .then(() => {
        // Actualiza el estado de productos con la respuesta del servidor si es necesario
      })
      .catch(error => {
        console.error('Error al actualizar la calificación:', error);
      });
  };

  const handleAgregarAlCarrito = () => {
    addToCart(producto);

    // Muestra la notificación SweetAlert
    Swal.fire({
      title: 'Agregado al carrito',
      text: `Has agregado ${producto.nombre} al carrito.`,
      icon: 'success',
    }).then(() => {
      Navigate('/carrito');
    })
  };

  return (
    <div className='containerC'>
      <div className='product-cardC'>
        <img src={producto.imagen} className='product-image' />
        <div className='product-details'>
          <h3 className='product-title'>{producto.nombre}</h3>
          <p className='product-price'>Precio: ${producto.precio}</p>
          <p className='product-desc'>{producto.descripcion}</p>
          <button className='add-to-cart' onClick={handleAgregarAlCarrito}>
            Agregar al carrito
          </button>
          <ReactRating
            initialRating={rating}
            emptySymbol={<i className='far fa-star'></i>}
            fullSymbol={<i className='fas fa-star'></i>}
            onChange={nuevaCalificacion =>
              handleCalificacionChange(nuevaCalificacion, producto.id_productos)
            }
            readonly={true}
          />
        </div>
      </div>
    </div>
  );
}

CardProducto.propTypes = {
  producto: PropTypes.shape({
    id_productos: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string,
    rating: PropTypes.string,
  }),
  addToCart: PropTypes.func,
};

export default CardProducto;