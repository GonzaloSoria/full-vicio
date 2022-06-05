import { useEffect, useState } from 'react';
import { data } from '../database/database';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListcontainer = () => {
    const [products, setProducts] = useState([]);

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
                <ItemCount stock={5}/>
            </div>
        </>
    )
}

export default ItemListcontainer;