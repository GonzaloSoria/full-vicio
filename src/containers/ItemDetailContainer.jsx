import { useState, useEffect } from "react";
import { get_data } from "../helpers/get_data";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const product_detail = product.find(product => product.id === "1");

    useEffect(() => {
      get_data(setProduct);
    }, [])
    
    return (
        <>
            <p>{product_detail.title}</p>
        </>
    )
}

export default ItemDetailContainer;