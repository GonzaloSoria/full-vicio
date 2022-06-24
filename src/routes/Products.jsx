import { useEffect, useState } from 'react';
import { get_all_data } from '../helpers/get_all_data';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    let background;

    if(category === undefined) {
        background = '/assets/todos-los-juegos.jpg';
    } else if (category === 'rpg') {
        background = '/assets/banner-rpg.jpg';
    } else if (category === 'strategy') {
        background = '/assets/banner-strategy.jpg';
    } else if (category === 'shooter') {
        background = '/assets/banner-shooter.jpg';
    } else if (category === 'simulator') {
        background = '/assets/banner-simulator.jpg';
    } else if (category === 'sports') {
        background = '/assets/banner-sports.jpg';
    } else if (category === 'royal') {
        background = '/assets/banner-royal.jpg';
    }
   
    useEffect(() => {
        get_all_data(setProducts, category);
    }, [category]);

    return (
        <>

            <img src={background} alt="" className="img-fluid mt-5 pt-3"/>
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row">
                        <ItemList products={products}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;