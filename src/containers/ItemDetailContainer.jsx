import { useState, useEffect } from "react";
import { get_data } from "../helpers/get_data";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const product_detail = product.find(productDetail => productDetail.id == "1");
    console.log(product_detail);

    useEffect(() => {
      get_data(setProduct)
    }, [])
    
    return (
        <>
        </>
    )
}

export default ItemDetailContainer;