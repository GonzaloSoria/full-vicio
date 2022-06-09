const ItemCount = ({stock, handleAdd, handleRest, handleCart, count, cart}) => {
    

    return (
        <>
            <div className="container text-center">
                <p className="stock mb-0">Stock: {stock}</p>
            </div>
            <div className="container d-flex justify-content-center align-items-center counter-container py-3">
                <button onClick={handleRest} type="button" className="btn btn-warning rest">-</button>
                <p>{count}</p>
                <button onClick={handleAdd} type="button" className="btn btn-warning add">+</button>
            </div>
            <div className="container text-center">
                <button className="añadir-carrito" onClick={handleCart}>AÑADIR AL CARRITO</button>
                <p style={{color: '#fff', marginTop: '10px'}}>Tienes {cart} productos en tu carrito</p>
            </div>
        </>
    );
};

export default ItemCount;