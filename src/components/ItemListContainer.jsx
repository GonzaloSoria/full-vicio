import { useEffect, useState } from 'react';
import { data } from '../database/database';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListcontainer = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(1)
    const [cart, setCart] = useState(null);
    let stock = 5;

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

    const handleAdd = () => {
        count == stock ? alert('No hay mas stock') : setCount(count + 1);
        console.log(count);
    };

    const handleRest = () => {
        count == 0 ? alert('No tiene productos') : setCount(count - 1);
        console.log(count);
    };

    const handleCart = () => {
        setCart(count);
        console.log(cart);
    };

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
                />
            </div>
        </>
    )
}

export default ItemListcontainer;