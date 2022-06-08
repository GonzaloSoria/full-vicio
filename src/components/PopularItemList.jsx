import Item from "./Item";

const PopularItemList = ({popular_games}) => {
    const popular_game = popular_games.filter(game => game.popular == true);

    return (
        <>
            {
                popular_game.map((popular_game) => {
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