const ItemDetail = ({title, description, price, image, trailer, stock}) => {
    return (
        <>
            <div className="col-12 col-md-6 text-center mt-110">
                <img src={image} alt={title} className="img-fluid"/> 
            </div>
            <div className="col-12 col-md-6 mt-5 game-detail-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Stock: {stock}</p>
                <p className="price">${price} ARS</p>
            </div>
            <div className="col-12 col-md-6">
                <div className="ratio ratio-16x9">
                    <iframe src={trailer} title="YouTube video" allowFullScreen></iframe>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;