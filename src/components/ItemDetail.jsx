const ItemDetail = ({title, description, price, image, stock}) => {
    return (
        <>
            <div className="col-12 col-md-6 text-center">
                <img src={image} alt={title}/> 
            </div>
            <div className="col-12 col-md-6 mt-5 game-detail-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="price">${price} ARS</p>
            </div>
        </>
    );
};

export default ItemDetail;