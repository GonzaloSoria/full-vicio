import { useEffect, useState } from 'react';
import { data } from '../database/database';

const Item = () => {
    const [products, setProducts] = useState([]);

    const get_data = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        });
    };

    useEffect(() => {
        get_data()
        .then((resp) => {
            setProducts(resp);
        })
        .catch((err) => console.log(err))
    }, [])
        


    return (
        <>
            {
                //products.popular ?
                products.map((product) => {
                    return (
                        <a key={product.id} href="#" className="col-6 col-md-2 my-3 item">
                            <img src={product.image} alt="" className="img-fluid"/>
                            <h2 className="mt-2">{product.title}</h2>
                            <p>ARS ${product.price}</p>
                            <p>{product.popular}</p>
                        </a>
                    )
                })
                //:
                //<h1 style={{color: '#fff'}}>No hay nada</h1>
            }
        </>
    );
};

export default Item;