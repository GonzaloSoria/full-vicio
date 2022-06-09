import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import ItemListcontainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<ItemListcontainer />}/>
        <Route path='/detalle' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
