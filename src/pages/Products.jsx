import { useEffect, useState } from 'react';
import { get_all_data } from '../helpers/get_all_data';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
   
    useEffect(() => {
        get_all_data(setProducts, category);
    }, [category]);

    return (
        <>
            <div className="container-fluid">
                <div className="container py-5">
                    <h2 className="subtitles mb-1">Todos los juegos</h2>
                    <img src="assets/download.png" alt="" className="img-fluid mb-4"/>
                    <div className="row">
                        <ItemList products={products}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;