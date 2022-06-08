import { useState, useEffect } from "react";
import { get_data } from '../helpers/getData';
import PopularItemList from '../components/PopularItemList';

const PopularItemListContainer = () => {
    const [popular_games, setPopularGames] = useState([]);
    const popular_game = popular_games.filter(game => game.popular == true);

    useEffect(() => {
        get_data(setPopularGames)
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <h2 className="subtitles mb-1">Más populares</h2>
                    <img src="assets/download.png" alt="" className="img-fluid mb-4"/>
                    <div className="row">
                        <PopularItemList popular_game={popular_game}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularItemListContainer;