import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const add = () => {
        count == stock ? alert('No hay mas stock') : setCount(count + 1);
    };

    const rest = () => {
        count == 1 ? alert('Cantidad vacia') : setCount(count - 1);
    };

    return (
        <>
         <button onClick={rest}>-</button>
         <p style={{color: '#fff'}}>{count}</p>
         <button onClick={add}>+</button>
        </>
    )
}

export default ItemCount;