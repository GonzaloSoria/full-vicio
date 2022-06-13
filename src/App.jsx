import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Details from './pages/Details';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />}/>
        <Route path='/categoria/:category' element={<Products />}/>
        <Route path='/detalle/:id' element={<Details />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
