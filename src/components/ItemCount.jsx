const ItemCount = ({stock, add, rest, addCart, count, cart}) => {
    return (
        <>
            <div className="container pt-5">
                <p className="stock mb-0">Stock: {stock}</p>
            </div>
            <div className="container d-flex justify-content-center align-items-center counter-container py-3">
                <button onClick={rest} type="button" className="btn btn-warning rest">-</button>
                <p>{count}</p>
                <button onClick={add} type="button" className="btn btn-warning add">+</button>
            </div>
            <div className="container text-center">
                <button className="añadir-carrito" onClick={addCart}>AÑADIR AL CARRITO</button>
                <p style={{color: '#fff'}}>Tienes {cart} productos en tu carrito</p>
            </div>
        </>
    );
};

export default ItemCount;