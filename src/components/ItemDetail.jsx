const ItemDetail = ({title, description, price, image, stock}) => {
    return (
        <>
            <div className="col-12 col-md-6 text-center mt-neg-50 px-4">
                <img src={image} alt={title} className="img-fluid"/> 
            </div>
            <div className="col-12 col-md-6 mt-5 game-detail-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Stock: {stock}</p>
                <p className="price">${price} ARS</p>
            </div>
        </>
    );
};

export default ItemDetail;