/*import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useCart from "../../store/useCart";
import "./Carrito.css";

const CarritoCart = () => {
  const { cart, clearCart, setCart } = useCart();
  const [total, setTotal] = useState(0);

  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct && existingProduct.cantidad > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (product) => product.id !== productToRemove.id
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((acc, product) => {
        const precio = parseFloat(product.precio);
        const cantidad = product.cantidad;
        if (!isNaN(precio)) {
          return acc + precio * cantidad;
        }
        return acc;
      }, 0);

      setTotal(total.toFixed(2));
    };

    calculateTotal();
  }, [cart]);

  return (
    <div>
      <h2 className="titulo-carrito">Carrito de Compras</h2>
      <ul className="lista-carrito">
        {cart.map((product) => (
          <li key={product.id} className="list">
            <img
              src={product.imagen}
              alt={product.nombre}
              width="100"
              height="100"
              className="img-carrito"
            />
            <div className="nombre-precio">
              <span>{product.nombre}</span>
              <span>
                {typeof product.precio === "number"
                  ? `$${product.precio.toFixed(2)}`
                  : "N/A"}
              </span>
            </div>
            <div className="cantidad-buttons">
              <button
                className="quantity-button"
                onClick={() => decreaseQuantity(product)}
              >
                -
              </button>
              <span>{product.cantidad}</span>
              <button
                className="quantity-button"
                onClick={() => increaseQuantity(product)}
              >
                +
              </button>
            </div>
            <button
              className="eliminar-carrito"
              onClick={() => removeFromCart(product)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <Link to="/pagar">
        <button>Ir a Pagar</button>
      </Link>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  );
};

export default CarritoCart;
*/

/* 


COMENTE DESDE ACAAA HASTA EL ULTIMO PARA PROBAR OTRO CODIGO 
import { Link } from 'react-router-dom';
import useCart from '../store/useCart'; // Asegurarse de que la ruta sea correcta
import { useEffect, useState } from 'react';

const Carrito = () => {
  const { cart, clearCart, setCart } = useCart();
  const [total, setTotal] = useState(0);

  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct && existingProduct.cantidad > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (product) => product.id !== productToRemove.id
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((acc, product) => {
        const precio = parseFloat(product.precio);
        const cantidad = product.cantidad;
        if (!isNaN(precio)) {
          return acc + precio * cantidad;
        }
        return acc;
      }, 0);

      setTotal(total.toFixed(2));
    };

    calculateTotal();
  }, [cart]);

  return (
    <div>
      <h2 className="titulo-carrito">Carrito de Compras</h2>
      <ul className="lista-carrito">
        {cart.map((product) => (
          <li key={product.id} className="list">
            <img
              src={product.imagen}
              alt={product.nombre}
              width="100"
              height="100"
              className="img-carrito"
            />
            <div className="nombre-precio">
              <span>{product.nombre}</span>
              <span>
                {typeof product.precio === "number"
                  ? `$${product.precio.toFixed(2)}`
                  : "N/A"}
              </span>
            </div>
            <div className="cantidad-buttons">
              <button
                className="quantity-button"
                onClick={() => decreaseQuantity(product)}
              >
                -
              </button>
              <span>{product.cantidad}</span>
              <button
                className="quantity-button"
                onClick={() => increaseQuantity(product)}
              >
                +
              </button>
            </div>
            <button
              className="eliminar-carrito"
              onClick={() => removeFromCart(product)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <Link to="/pagar">
        <button>Ir a Pagar</button>
      </Link>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  );
};

export default Carrito;



HASCTA ACA COMENTEEE

*/

import { useState, useEffect } from "react";
import useCart from "../store/useCart";
import "./Carrito.css";
import { Link } from "react-router-dom";


const Carrito = () => {
  const { cart, setCart, clearCart } = useCart();
  const [total, setTotal] = useState(0);

  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id_productos === product.id_productos
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const existingProduct = cart.find(
      (item) => item.id_productos === product.id_productos
    );

    if (existingProduct && existingProduct.cantidad > 1) {
      const updatedCart = cart.map((item) =>
        item.id_productos === product.id_productos
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si la cantidad es 1, eliminamos el producto del carrito
      const updatedCart = cart.filter(
        (item) => item.id_productos !== product.id_productos
      );
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (product) => product.id_productos !== productToRemove.id_productos
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    // Función para calcular el total de la compra
    const calculateTotal = () => {
      const total = cart.reduce((acc, product) => {
        const productPrice = parseFloat(product.precio);
        const productQuantity = product.cantidad;
        return acc + productPrice * productQuantity;
      }, 0);
      setTotal(total.toFixed(2));
    };

    calculateTotal();
  }, [cart]);

  return (
    <div className="contenedor">
      <h2 className="titulo-carrito">Carrito de Compras</h2>
      <ul className="lista-carrito">
        {cart.map((product) => (
          <li key={product.id_productos}>
            <div className="producto-info">
              <img
                src={product.imagen}
                alt={product.nombre}
                width="100"
                height="100"
                className="img-carrito"
              />
              <div className="nombre-precio">
                <span>{product.nombre}</span>
                <span>
                  {typeof product.precio === "number"
                    ? `$${product.precio.toFixed(2)}`
                    : "N/A"}
                </span>
              </div>
            </div>

            <div className="cantidad-buttons">
              <button
                className="quantity-button"
                onClick={() => decreaseQuantity(product)}
              >
                -
              </button>
              <span>{product.cantidad}</span>
              <button
                className="quantity-button"
                onClick={() => increaseQuantity(product)}
              >
                +
              </button>
            </div>
            <button
              className="eliminar-carrito"
              onClick={() => removeFromCart(product)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <Link to="/confirmacion-compra">
        <button>Ir a Pagar</button>
      </Link>

      <button onClick={clearCart}>Limpiar Carrito</button>
      <div>{/* Contenido del carrito */}</div>
    </div>
  );
};

export default Carrito;
