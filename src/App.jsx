import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Products from './routes/Products';
import Details from './routes/Details';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/categoria/:category' element={<Products />} />
        <Route path='/detalle/:id' element={<Details />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
