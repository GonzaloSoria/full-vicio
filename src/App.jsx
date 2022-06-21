import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Products from './routes/Products';
import Details from './routes/Details';
import CartContextProvider from './context/CartContext';
import Footer from './components/Footer';
import Cart from './routes/Cart';

const App = () => {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/categoria/:category' element={<Products />} />
        <Route path='/detalle/:id' element={<Details />} /> 
        <Route path='/carrito' element={<Cart />} />
      </Routes>
      <Footer />
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
