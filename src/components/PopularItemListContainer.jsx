import { useState, useEffect } from "react";
import { get_popular_data } from '../helpers/get_popular_data';
import PopularItemList from '../components/PopularItemList';

const PopularItemListContainer = () => {
    const [popular_games, setPopularGames] = useState([]);
    
    useEffect(() => {
        get_popular_data(setPopularGames);
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