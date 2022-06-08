import Navbar from './components/Navbar'
import Home from './pages/Home';
import ItemListcontainer from './containers/ItemListContainer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ItemListcontainer />
    </>
  );
}

export default App;
