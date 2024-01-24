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
        <Route path='/products' element={<Products />} />
        <Route path='/category/:category' element={<Products />} />
        <Route path='/details/:id' element={<Details />} /> 
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
