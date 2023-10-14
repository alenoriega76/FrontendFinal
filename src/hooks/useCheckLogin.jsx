
import { Link } from 'react-router-dom';
import Carrito from '../Carrito'; 
import useCart from '../store/useCart'; 

const Cart = () => {
  const { cart, clearCart } = useCart();

  console.log(cart);
  return (
    <>
      <h1>Carrito React</h1>
      <Carrito />
      <Link to="/finalizar-compra">Ir a pagar</Link>
      <button onClick={clearCart}></button>
    </>
  );
};

export default Cart;
