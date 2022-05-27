import Navbar from './components/Navbar'
import Home from './pages/Home/Home';
import ItemListcontainer from './pages/ItemListContainer';

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
