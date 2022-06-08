import { useState, useEffect } from "react";
import { get_data } from "../helpers/get_data";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const product_detail = product.find(product_details => product_details == "1");

    useEffect(() => {
      get_data(setProduct);
    }, [])
    
    return (
        <>
            {console.log(product_detail)}
        </>
    )
}

export default ItemDetailContainer;