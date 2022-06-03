import { useState } from 'react';
import { data } from '../database/database';

const Item = () => {
    const [products, setProducts] = useState([]);

    const get_data = () => {
        return new Promise ((resolve, reject) => {
            resolve(data);
        });
    };

    get_data()
    .then((resp) => {
        setProducts(resp);
        throw new Error('error')
    })
    .catch((err) => console.log(err))
        

    return (
        <>
            {
                products.map((product) => {
                    return (
                        <a key={product.id} href="#" className="col-6 col-md-2 item">
                            <img src={product.image} alt="" className="img-fluid"/>
                            <h2 className="mt-2">{product.title}</h2>
                        </a>
                    )
                })
            }
        </>
    );
};

export default Item;