import Navbar from './components/Navbar'
import Home from './pages/Home';
import ItemListcontainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ItemListcontainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
