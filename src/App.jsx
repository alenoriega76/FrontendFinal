/*import  { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductosListar from './components/Products/productos';
import UsuariosListar from './components/usuarios/usuarios';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Carrito from './components/Cart/carrito';
import Nadvar from './components/layouts/nadvar';
import Footer from './components/layouts/footer';
import Banner from './components/layouts/banner';
import './App.css';

function App() {
  // Inicializa el estado del carrito como un array vacío
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Nadvar />
          <Banner />
          <Routes>
            <Route path="/" element={<ProductosListar  />} />
            <Route path="/usuarios" element={<UsuariosListar />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrito" element={<Carrito cart={cart} setCart={setCart} />} />
            {/* <Route path="/nuevoProducto" element={<AdminProductos />} />  
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
*/

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import MainLayout from "./layouts/MainLayout";
// // 1) definir rutas con react router dom:
// // una para el inicio, otra para el login, otra para el carrito
// // 2) crear una store global con zustand, al clickear un producto se agrega al carrito
// // 3) consumir esta store en la página del carrito

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <MainLayout>
//                 <Home />
//               </MainLayout>
//             }
//           />
//           <Route
//             path="/carrito"
//             element={
//               <MainLayout>
//                 <Cart />
//               </MainLayout>
//             }
//           />
//           <Route
//             path="/finalizar-compra"
//             element={
//               <MainLayout>
//                 <h1>Page jeje</h1>
//                 <h2>Ingrese los datos de envio</h2>
//               </MainLayout>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="*"
//             element={
//               <>
//                 <h1>Página no encontrada</h1>
//                 <Link to={"/"}>Ir al inicio.</Link>
//               </>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nadvar from "./components/layouts/nadvar";
import Exit from './components/Exit/Exit'
import Carrito from "./components/CArt/carrito";
import Login from "./components/Login/login";
import Register from "./components/Register/Register";
import Usuarios from "./components/Usuarios/Usuarios";
import Footer from "./components/layouts/Footer";

import AuthProvider from "./components/controllers/authContexto"; // Importa tu AuthProvider
import Home from "./components/Home/Home";
//import CardProducto from "./components/Products/cardProduct";
import ProductosListar from "./components/ProductosListar/ProductosListar";

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        {" "}
        {/* Coloca AuthProvider aquí */}
        <Nadvar
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          setIsAuthenticated={setIsAuthenticated}
          setIsAdmin={setIsAdmin}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route
            path="/products"
            element={
              </*CardProducto*/ ProductosListar
                addToCart={addToCart}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route path="/carrito" element={<Carrito />} />
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Exit />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
