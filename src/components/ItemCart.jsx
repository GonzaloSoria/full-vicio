const ItemCart = ({image, title, price, quantity, amount}) => {
    return (
        <>
        <div className="col-12 py-3 item-cart-container">
            <div className="row">
                <div className="col-4 col-md-3">
                    <img src={image} alt={title} />
                </div>
                <div className="col-8 col-md-9">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <p className="d-none d-lg-block title-cart-items">Nombre</p>
                            <p>{title}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <p className="d-none d-lg-block title-cart-items">Precio</p>
                            <p><span className="d-inline-block d-lg-none">Precio:</span> ${price} ARS <span style={{fontSize: '12px'}}>x{quantity}</span></p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <p className="d-none d-lg-block title-cart-items">Monto total</p>
                            <p><span className="d-inline-block d-lg-none">Total:</span> ${amount} ARS</p>
                        </div>
                    </div>
                </div>
                <button style={{width: '200px'}}>Eliminar Juego</button>
            </div>
        </div>
        </>
    )
}

export default ItemCart;