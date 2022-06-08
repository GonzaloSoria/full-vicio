import { useState, useEffect } from "react";
import Item from './Item';

const PopularItems = () => {
    const [popular_games, setPopularGames] = useState([]);

    const get_data = async () => {
        const data = await fetch('database/DATABASE.json');
        try {
            const data_parsed = await data.json();
            const populars = data_parsed.filter(popular_game => popular_game.popular === true)
            setPopularGames(populars);
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
                <div className="container">
                    <h2 className="subtitles mb-1">Más populares</h2>
                    <img src="assets/download.png" alt="" className="img-fluid mb-4"/>
                    <div className="row">
                        {
                            popular_games.map((popular_game) => {
                                return (
                                    <Item 
                                        key={popular_game.id} 
                                        title={popular_game.title} 
                                        image={popular_game.image}
                                        price={popular_game.price}
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