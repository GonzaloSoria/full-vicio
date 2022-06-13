const ItemCount = ({handleCart, stock, count, setCount}) => {

    const handleAdd = () => {
        count === stock ? alert('No hay mas stock') : setCount(count + 1);
    };

    const handleRest = () => {
        count === 1 ? alert('No tiene productos') : setCount(count - 1);
    };

    return (
        <>
            <div className="d-flex justify-content-left align-items-center counter-container py-3">
                <button onClick={handleRest} type="button" className="btn btn-warning rest">-</button>
                <p>{count}</p>
                <button onClick={handleAdd} type="button" className="btn btn-warning add">+</button>
            </div>
            <button className="añadir-carrito" onClick={handleCart}>AÑADIR AL CARRITO</button>
        </>
    );
};

export default ItemCount;