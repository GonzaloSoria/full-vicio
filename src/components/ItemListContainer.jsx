import { useEffect, useState } from 'react';
import { data } from '../database/database';
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

    useEffect(() => {
        const get_data = () => {
            return new Promise ((resolve) => {
                setTimeout(() => {
                    resolve(data);
                }, 2000)
            });
        };
        get_data()
        .then((resp) => {
            setProducts(resp);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className="container py-5">
                <ItemList products={products}/>
                <ItemCount 
                    stock={stock}
                    add={handleAdd} 
                    rest={handleRest} 
                    addCart={handleCart} 
                    count={count} 
                    cart={cart}
                />
            </div>
        </>
    )
}

export default ItemListcontainer;