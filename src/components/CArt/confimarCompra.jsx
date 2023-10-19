
import useCart from '../store/useCart'; // Asegúrate de importar el contexto del carrito
import usuarios from '../Usuarios/Usuarios.jsx'; // Asegúrate de importar el contexto de datos de usuario
import { useState } from 'react';
import  { useContext } from 'react';
import './confirmar.css';
// const ConfirmacionCompra = () => {
//   const { cart, clearCart } = useCart(); // Accede a los datos del carrito y la función para limpiar el carrito
//   const userData = useContext(usuarios); // Accede a los datos del usuario a través del contexto de datos de usuario

//   const [shippingAddress, setShippingAddress] = useState({
//     address: '',
//     city: '',
//     zipCode: '',
//   });

//   const handleShippingAddressChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress({
//       ...shippingAddress,
//       [name]: value,
//     });
//   };

//   const handlePlaceOrder = () => {
//     // Implementa aquí la lógica para persistir la orden de compra en la base de datos
//     // Puedes enviar una solicitud POST al servidor con los detalles de la orden de compra, productos, datos de envío, etc.

//     // Una vez que se ha realizado el pedido con éxito, puedes limpiar el carrito
//     clearCart();

//     // Implementa la lógica para redirigir al usuario a la página de pago o mostrar un mensaje de confirmación
//     // Puedes usar enrutamiento o modalidad de acuerdo a tu preferencia.
//   };

//   // Calcula el precio total de la orden
//   const totalPrice = cart.reduce((total, product) => {
//     return total + product.precio * product.cantidad;
//   }, 0);

//   return (
//     <div>
//       <h1>Confirmación de Orden de Compra</h1>
//       <h2>Detalles de la Orden de Compra</h2>
//       {cart.map((product) => (
//         <div key={product.id_productos}>
//           <p>Producto: {product.nombre}</p>
//           <p>Precio unitario: ${product.precio.toFixed(2)}</p>
//           <p>Cantidad: {product.cantidad}</p>
//           <p>Precio total: ${(product.precio * product.cantidad).toFixed(2)}</p>
//         </div>
//       ))}
//       <p>Precio Total de la Orden: ${totalPrice.toFixed(2)}</p>

//       <div>
//         <h2>Datos de contacto del usuario</h2>
//         <p>Nombre: {userData.nombre}</p>
//         <p>Email: {userData.email}</p>
//         {/* Otros datos de contacto */}
//       </div>

//       <div>
//         <h2>Datos de envío</h2>
//         <input
//           type="text"
//           name="address"
//           placeholder="Dirección"
//           value={shippingAddress.address}
//           onChange={handleShippingAddressChange}
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="Ciudad"
//           value={shippingAddress.city}
//           onChange={handleShippingAddressChange}
//         />
//         <input
//           type="text"
//           name="zipCode"
//           placeholder="Código Postal"
//           value={shippingAddress.zipCode}
//           onChange={handleShippingAddressChange}
//         />
//         {/* Otras opciones de envío */}
//       </div>

//       <button onClick={handlePlaceOrder}>Realizar Pedido</button>
//     </div>
//   );
// };

import Swal from 'sweetalert2';
import './confirmar.css';

const ConfirmacionCompra = () => {
  const { cart, clearCart } = useCart();
  const userData = useContext(usuarios);

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    zipCode: '',
  });

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const handlePlaceOrder = () => {
   
    // Una vez que se ha realizado el pedido con éxito, puedes limpiar el carrito
    clearCart();

    // Implementa la lógica para mostrar un mensaje de confirmación usando Swal
    Swal.fire({
      title: 'Pedido Realizado',
      text: 'Tu pedido se ha realizado con éxito',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  const usuarioNombre = userData ? userData.nombre : 'Nombre no disponible';
  const usuarioEmail = userData ? userData.email : 'Email no disponible';

  const totalPrice = cart.reduce((total, product) => {
    return total + product.precio * product.cantidad;
  }, 0);

  return (
    <div className="confirmacion-compra">
      <h1>Confirmación de Orden de Compra</h1>
      <h2>Detalles de la Orden de Compra</h2>
      {cart.map((product) => (
        <div key={product.id_productos} className="producto-info">
          <p>Producto: {product.nombre}</p>
          <p>Precio unitario: ${product.precio.toFixed(2)}</p>
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio total: ${(product.precio * product.cantidad).toFixed(2)}</p>
        </div>
      ))}
      <p className="precio-total">Precio Total de la Orden: ${totalPrice.toFixed(2)}</p>

      <div className="datos-usuario">
        <h2>Datos de contacto del usuario</h2>
        <p>Nombre: {usuarioNombre}</p>
        <p>Email: {usuarioEmail}</p>
      </div>

      <div className="datos-envio">
        <h2>Datos de envío</h2>
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={shippingAddress.address}
          onChange={handleShippingAddressChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Ciudad"
          value={shippingAddress.city}
          onChange={handleShippingAddressChange}
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Código Postal"
          value={shippingAddress.zipCode}
          onChange={handleShippingAddressChange}
        />
      </div>

      <button className="realizar-pedido" onClick={handlePlaceOrder}>
        Realizar Pedido
      </button>
    </div>
  );
};

export default ConfirmacionCompra;
