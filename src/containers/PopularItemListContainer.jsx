import { useState, useEffect } from "react";
import PopularItemList from '../components/PopularItemList';

const PopularItemListContainer = () => {
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
                        <PopularItemList popular_games={popular_games}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularItemListContainer;