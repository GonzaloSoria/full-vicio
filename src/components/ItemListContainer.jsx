import { useEffect, useState } from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListcontainer = () => {
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
        count == 0 ? alert('No tiene productos') : setCount(count - 1);
    };

    const handleCart = () => {
        if((count + cart) > stock) {
            alert('No hay mas stock para agregar')
        } else {
            add_cart.play()
            setCart(cart + count);
        }
    };

    const get_data = async () => {
        const data = await fetch('database/DATABASE.json');
        try {
            const data_parsed = await data.json();
            setProducts(data_parsed)
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        get_data()
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="container py-5">
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
        </>
    )
}

export default ItemListcontainer;