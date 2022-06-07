import { useState, useEffect } from "react";
import { data } from '../database/database';
import Item from './Item';

const PopularItems = () => {
    const [popular_games, setPopularGames] = useState([]);

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
            const populars = resp.filter(popular_game => popular_game.popular === true)
            setPopularGames(populars);
        })
        .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <h2 className="subtitles mb-1">Más populares</h2>
                    <img src="assets/download.png" alt="" className="img-fluid mb-4"/>
                    <div className="row">
                        {
                            popular_games.map((product) => {
                                return (
                                    <Item 
                                        key={product.id} 
                                        title={product.title} 
                                        image={product.image}
                                        price={product.price}
                                    />
                                )
                            })
                        } 
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularItems;