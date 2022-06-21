import { useState } from "react";

const ItemCount = ({add_to_cart, stock}) => {
    const [count, setCount] = useState(1);
    const handle_add = () => {
        count === stock ? alert('No hay mas stock') : setCount(count + 1);
    };

    const handle_rest = () => {
        count === 1 ? alert('No tiene productos') : setCount(count - 1);
    };

    const add_product = () => {
        add_to_cart(count);
    }

    return (
        <>
            <div className="d-flex justify-content-left align-items-center counter-container py-3">
                <button onClick={handle_rest} type="button" className="btn btn-warning rest">-</button>
                <p>{count}</p>
                <button onClick={handle_add} type="button" className="btn btn-warning add">+</button>
            </div>
            <button className="añadir-carrito" onClick={add_product}>AÑADIR AL CARRITO</button>
        </>
    );
};

export default ItemCount;