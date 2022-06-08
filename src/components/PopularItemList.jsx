import Item from "./Item";

const PopularItemList = ({popular_games}) => {
    return (
        <>
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
        </>
    );
};

export default PopularItemList;