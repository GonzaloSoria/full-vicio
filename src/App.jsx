import ItemCount from './components/ItemCount';
import Navbar from './components/Navbar'
import Home from './pages/Home/Home';
import ItemListcontainer from './pages/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ItemListcontainer greeting={'Sitio web en construccion'}/>
      <ItemCount stock={5}/>
    </>
  );
}

export default App;
