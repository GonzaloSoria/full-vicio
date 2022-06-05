import { useState } from "react";

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const add = () => {
        count == stock ? alert('No hay mas stock') : setCount(count + 1);
    };

    const rest = () => {
        count == 0 ? alert('No tiene productos') : setCount(count - 1);
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center counter-container py-5">
                <button onClick={rest} type="button" className="btn btn-warning rest">-</button>
                <p>{count}</p>
                <button onClick={add} type="button" className="btn btn-warning add">+</button>
            </div>
         
        </>
    )
}

export default ItemCount;