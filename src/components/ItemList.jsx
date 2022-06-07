import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <>
            <h2 className="subtitles mb-4">Todos los juegos</h2>
            <img src="assets/download.png" alt="" className="img-fluid mb-4"/>
            <div className="row">
                {
                    products.map((product) => {
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
        </>
    );
};

export default ItemList;