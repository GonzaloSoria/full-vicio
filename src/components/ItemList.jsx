import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <>
            {
                products.map((product) => {
                    return (
                        <Item 
                            key={product.id} 
                            title={product.title} 
                            image={product.image}
                            price={product.price}
                            id={product.id}
                        />
                    )
                })
            }
        </>
    );
};

export default ItemList;