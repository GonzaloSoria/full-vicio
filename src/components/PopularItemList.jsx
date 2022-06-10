import Item from "./Item";

const PopularItemList = ({popular_games}) => {
    return (
        <>
            {
                popular_games.map((game) => {
                    return (
                        <Item 
                            key={game.id} 
                            title={game.title} 
                            image={game.image}
                            price={game.price}
                            id={game.id}
                        />
                    )
                })
            } 
        </>
    );
};

export default PopularItemList;