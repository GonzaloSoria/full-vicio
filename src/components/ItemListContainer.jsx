import { useEffect, useState } from 'react';
import { data } from '../database/database';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListcontainer = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(1);
    const [cart, setCart] = useState(0);
    const [stock, setStock] = useState(5);

    const handleAdd = () => {
        count == stock ? alert('No hay mas stock') : setCount(count + 1);
    };

    const handleRest = () => {
        count == 0 ? alert('No tiene productos') : setCount(count - 1);
    };

    const handleCart = () => {
        (count + cart) > stock || cart == stock ?  alert('No hay mas stock para agregar') : setCart(cart + count);
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