import Item from "./Item";

const PopularItemList = ({popular_game}) => {
    return (
        <>
            {
                popular_game.map((game) => {
                    return (
                        <Item 
                            key={game.id} 
                            title={game.title} 
                            image={game.image}
                            price={game.price}
                        />
                    )
                })
            } 
        </>
    );
};

export default PopularItemList;