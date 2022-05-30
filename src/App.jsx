import Navbar from './components/Navbar'
import Home from './pages/Home/Index';
import ItemListcontainer from './pages/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ItemListcontainer greeting={'Sitio web en construccion'}/>
    </>
  );
}

export default App;
