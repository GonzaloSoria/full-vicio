import { useEffect, useState } from 'react';
import { get_data } from '../helpers/get_data';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(1);
    const [cart, setCart] = useState(0);
    let stock = 5;

    const add_cart = new Audio();
    add_cart.src = 'assets/sounds/add_cart.wav';

    const handleAdd = () => {
        count == stock ? alert('No hay mas stock') : setCount(count + 1);
    };

    const handleRest = () => {
        count == 1 ? alert('No tiene productos') : setCount(count - 1);
    };

    const handleCart = () => {
        if((count + cart) > stock) {
            alert('No hay mas stock para agregar')
        } else {
            setCart(cart + count);
            if(count != 0) {
                add_cart.play()
            };
        };
    };

    useEffect(() => {
        get_data(setProducts)
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="container py-5">
                    <h2 className="subtitles mb-1">Todos los juegos</h2>
                    <img src="assets/download.png" alt="" className="img-fluid mb-4"/>
                    <div className="row">
                        <ItemList products={products}/>
                        <ItemCount 
                            stock={stock}
                            handleAdd={handleAdd} 
                            handleRest={handleRest} 
                            handleCart={handleCart} 
                            count={count} 
                            cart={cart}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;